import { useState, useRef, useLayoutEffect } from 'react';
import { turbopumpData as d } from '../../../json/turbopump';

// Separate desktop/mobile layouts, not one responsive grid, so mobile isn't a
// shrunk version of the desktop diagram.

const NODES = d.system.nodes;
const roleOf = (id) => (NODES.find((n) => n.id === id) || {}).role;

const LINKS = {
    pumps: ['in', 'pe', 'pg', 'shaft'],
    shaft: ['shaft'],
    turbine: ['shaft', 'gt'],
    gasGen: ['gt', 'pg'],
    engine: ['pe'],
};

// Matches the RDE / Testbed selector styling.
const nodeCls = (on) =>
    'font-display-bold text-xs md:text-sm uppercase tracking-wide bg-dusk border-2 px-3 py-2 md:px-4 md:py-3 ' +
    'transition-colors duration-200 motion-reduce:transition-none focus:outline-2 focus:outline-stardust focus:outline-offset-2 ' +
    (on ? 'border-stardust text-white bg-moon/50' : 'border-white/40 text-white/70 hover:border-stardust');

const Node = ({ id, active, onSelect, className = '' }) => {
    const node = NODES.find((n) => n.id === id);
    const on = active === id;
    return (
        <button
            type="button"
            onClick={() => onSelect(on ? null : id)}
            aria-pressed={on}
            className={nodeCls(on) + ' ' + className}
        >
            {node.label}
        </button>
    );
};

const bar = (lit) => (lit ? 'bg-stardust' : 'bg-stardust/35');
const strokeBar = (lit) => (lit ? 'stroke-stardust' : 'stroke-stardust/35');

// How far the mask extends past the text's actual ink on each side — this,
// not line-height or padding, is what the visible gap is: once the mask is
// sized to the real glyph bounds (via getBBox, below), the gap IS this value.
const SHAFT_LABEL_GAP = 5;
// Plenty of room for "SHAFT" at 10px + letter-spacing; only sets the SVG's
// own coordinate space, not the visible line length or gap.
const SHAFT_SVG_WIDTH = 80;

// Columns 3 and 5 are each sized to their widest occupant (TURBINE, GAS
// GENERATOR), so the shorter boxes (PUMPS, ENGINE) sit centered with padding
// a `w-full` bar never reaches. Every connector's endpoints are measured
// against the actual rendered boxes instead, so they always land flush —
// recomputed on resize (each box is observed individually, since the
// container's own width can stay fixed while a box's width shifts, e.g.
// when the display font finishes loading) and once webfonts settle.
const useSystemConnectors = () => {
    const containerRef = useRef(null);
    const inBarRef = useRef(null);
    const pumpsRef = useRef(null);
    const engineRef = useRef(null);
    const turbineRef = useRef(null);
    const gasGenRef = useRef(null);
    // Invisible spacer, not the real Shaft button — see the render for why.
    const shaftSpacerRef = useRef(null);
    const shaftTextRef = useRef(null);
    const [dims, setDims] = useState(null);
    const [shaftMask, setShaftMask] = useState(null);

    useLayoutEffect(() => {
        const refs = [containerRef, inBarRef, pumpsRef, engineRef, turbineRef, gasGenRef, shaftSpacerRef];
        if (refs.some((r) => !r.current)) return;

        const measure = () => {
            const base = containerRef.current.getBoundingClientRect();
            const inBar = inBarRef.current.getBoundingClientRect();
            const pumps = pumpsRef.current.getBoundingClientRect();
            const engine = engineRef.current.getBoundingClientRect();
            const turbine = turbineRef.current.getBoundingClientRect();
            const gasGen = gasGenRef.current.getBoundingClientRect();
            if (![base, pumps, engine, turbine, gasGen].every((r) => r.width)) return;

            // Pumps/Engine and Turbine/Gas Generator bars start at the SOURCE
            // box's own right edge, not at the grid column boundary: column 3 is
            // sized to fit TURBINE (the widest item in it), so a bar anchored to
            // the column's edge sits past Pumps' right edge by however much
            // narrower PUMPS is, and even for Turbine it's offset by the grid's
            // own column-gap. Measuring from the box itself makes the gap zero
            // regardless of column width or gap-x.
            const peTop = pumps.top + pumps.height / 2 - base.top;
            const peLeft = pumps.right - base.left;
            const peWidth = engine.left - pumps.right;
            const gtTop = turbine.top + turbine.height / 2 - base.top;
            const gtLeft = turbine.right - base.left;
            const gtWidth = gasGen.left - turbine.right;

            const x1 = (pumps.right + engine.left) / 2 - base.left;
            const y1 = peTop;
            const x2 = gasGen.left + gasGen.width / 2 - base.left;
            const y2 = gasGen.top - base.top;

            // Pumps and Turbine are each independently centered in the same grid
            // column, so their centers already coincide to well under a pixel;
            // averaging both (rather than trusting one) keeps the calculation
            // explicitly tied to both boxes.
            const shaftX = (pumps.left + pumps.width / 2 + turbine.left + turbine.width / 2) / 2 - base.left;

            setDims({
                inWidth: pumps.left - inBar.left,
                pe: { top: peTop, left: peLeft, width: peWidth },
                gt: { top: gtTop, left: gtLeft, width: gtWidth },
                branch: { x1, y1, x2, y2, turnY: y1 + (y2 - y1) / 2 },
                // Just the outer box: bottom of Pumps to top of Turbine. The SVG
                // line spans it in one continuous path; the label's mask (sized
                // from its own rendered glyph bounds, see shaftMask below) is what
                // actually produces the visible gap around it.
                shaft: { x: shaftX, top: pumps.bottom - base.top, height: turbine.top - pumps.bottom },
            });
        };

        measure();
        const observer = new ResizeObserver(measure);
        refs.forEach((r) => observer.observe(r.current));
        document.fonts && document.fonts.ready.then(measure).catch(() => {});
        return () => observer.disconnect();
    }, []);

    // getBBox() gives the SVG text's true rendered glyph bounds — the actual
    // ink, not a line-height box that merely approximates it — so the mask
    // (and therefore the visible gap around the label) is exact, not a
    // CSS-metrics guess. Runs after `dims` sets the line's height (the SVG,
    // and so the <text> node, don't exist before then) and once webfonts
    // settle, since glyph metrics can shift when the real font replaces the
    // fallback.
    useLayoutEffect(() => {
        if (!dims || !shaftTextRef.current) return;
        const measureMask = () => {
            if (!shaftTextRef.current) return;
            const bbox = shaftTextRef.current.getBBox();
            if (!bbox.width) return;
            setShaftMask({
                x: bbox.x - 2,
                y: bbox.y - SHAFT_LABEL_GAP,
                width: bbox.width + 4,
                height: bbox.height + SHAFT_LABEL_GAP * 2,
            });
        };
        measureMask();
        document.fonts && document.fonts.ready.then(measureMask).catch(() => {});
    }, [dims]);

    return {
        containerRef,
        inBarRef,
        pumpsRef,
        engineRef,
        turbineRef,
        gasGenRef,
        shaftSpacerRef,
        shaftTextRef,
        dims,
        shaftMask,
    };
};

const TurbopumpSystemFlow = () => {
    const [active, setActive] = useState(null);
    const lit = (key) => (active ? LINKS[active].includes(key) : false);
    const {
        containerRef,
        inBarRef,
        pumpsRef,
        engineRef,
        turbineRef,
        gasGenRef,
        shaftSpacerRef,
        shaftTextRef,
        dims,
        shaftMask,
    } = useSystemConnectors();
    const branchCls = bar(lit('pg'));

    return (
        <section>
            <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
                The System
            </h2>

            <p className="font-display2 text-md md:text-lg text-white text-left">
                {d.system.blurb}
            </p>

            <div className="mt-6 md:mt-8 border-2 border-white/40 p-5 md:p-6">
                <div
                    ref={containerRef}
                    className="hidden md:grid items-center gap-x-4 gap-y-4 relative"
                    style={{ gridTemplateColumns: 'auto 2rem auto minmax(2rem,1fr) auto' }}
                >
                    <div className="col-start-1 row-start-1 flex flex-col gap-2">
                        <span className="font-display2 text-[11px] uppercase tracking-widest text-white/60 border border-white/20 px-2 py-1 text-center">
                            LOx
                        </span>
                        <span className="font-display2 text-[11px] uppercase tracking-widest text-white/60 border border-white/20 px-2 py-1 text-center">
                            Fuel
                        </span>
                    </div>
                    <div
                        ref={inBarRef}
                        className={'col-start-2 row-start-1 h-px ' + bar(lit('in'))}
                        style={{ width: dims ? dims.inWidth : '100%' }}
                        aria-hidden="true"
                    />
                    <div ref={pumpsRef} className="col-start-3 row-start-1 justify-self-center">
                        <Node id="pumps" active={active} onSelect={setActive} />
                    </div>
                    {/* Positioned from Pumps' own right edge (see useSystemConnectors),
                        not the col4 grid boundary — col3 is sized to fit TURBINE, so
                        the boundary sits to the right of Pumps' actual edge. */}
                    {dims && (
                        <div
                            className={'absolute h-px ' + bar(lit('pe'))}
                            style={{ left: dims.pe.left, top: dims.pe.top, width: dims.pe.width }}
                            aria-hidden="true"
                        />
                    )}
                    <div ref={engineRef} className="col-start-5 row-start-1 justify-self-center">
                        <Node id="engine" active={active} onSelect={setActive} />
                    </div>

                    {/* Invisible spacer: reserves row 2's height (so the overall
                        Pumps-row-to-Turbine-row spacing is unchanged) without the
                        real Shaft control being bound to the grid's row-2 slot,
                        which sits off-center relative to Pumps' and Turbine's own
                        edges (see useSystemConnectors). */}
                    <div
                        ref={shaftSpacerRef}
                        aria-hidden="true"
                        className="col-start-3 row-start-2 justify-self-center invisible py-1"
                    >
                        <span className="font-display2 text-[10px] uppercase tracking-[0.2em]">Shaft</span>
                    </div>

                    {/* Pumps -> Turbine: a single SVG line from Pumps' bottom edge to
                        Turbine's top edge — one continuous path, not separate
                        fragments. A rect masks only the portion of the line behind
                        the label's actual glyphs, sized from getBBox() (the text's
                        real rendered ink), so the gap is exact rather than an
                        approximation of line-height or padding. */}
                    {dims && (
                        <button
                            type="button"
                            onClick={() => setActive(active === 'shaft' ? null : 'shaft')}
                            aria-pressed={active === 'shaft'}
                            aria-label="Shaft"
                            className="absolute bg-transparent border-0 p-0 focus:outline-2 focus:outline-stardust focus:outline-offset-2"
                            style={{
                                left: dims.shaft.x,
                                top: dims.shaft.top,
                                width: SHAFT_SVG_WIDTH,
                                height: dims.shaft.height,
                                transform: 'translateX(-50%)',
                            }}
                        >
                            <svg width={SHAFT_SVG_WIDTH} height={dims.shaft.height} style={{ overflow: 'visible' }}>
                                <line
                                    x1={SHAFT_SVG_WIDTH / 2}
                                    y1={0}
                                    x2={SHAFT_SVG_WIDTH / 2}
                                    y2={dims.shaft.height}
                                    strokeWidth={1}
                                    shapeRendering="crispEdges"
                                    className={strokeBar(lit('shaft'))}
                                />
                                {shaftMask && (
                                    <rect
                                        x={shaftMask.x}
                                        y={shaftMask.y}
                                        width={shaftMask.width}
                                        height={shaftMask.height}
                                        className="fill-dusk"
                                    />
                                )}
                                <text
                                    ref={shaftTextRef}
                                    x={SHAFT_SVG_WIDTH / 2}
                                    y={dims.shaft.height / 2}
                                    textAnchor="middle"
                                    dominantBaseline="central"
                                    className={
                                        'font-display2 text-[10px] uppercase tracking-[0.2em] ' +
                                        (lit('shaft') ? 'fill-stardust' : 'fill-white/45')
                                    }
                                >
                                    Shaft
                                </text>
                            </svg>
                        </button>
                    )}

                    <div ref={turbineRef} className="col-start-3 row-start-3 justify-self-center">
                        <Node id="turbine" active={active} onSelect={setActive} />
                    </div>
                    {/* Positioned from Turbine's own right edge, same reasoning as
                        the Pumps -> Engine bar above. */}
                    {dims && (
                        <div
                            className={'absolute h-px ' + bar(lit('gt'))}
                            style={{ left: dims.gt.left, top: dims.gt.top, width: dims.gt.width }}
                            aria-hidden="true"
                        />
                    )}
                    <div ref={gasGenRef} className="col-start-5 row-start-3 justify-self-center">
                        <Node id="gasGen" active={active} onSelect={setActive} />
                    </div>

                    {/* Pumps -> Gas Generator: a small fraction of the pumped propellant
                        feeds the gas generator that drives the turbine. Branches off the
                        Pumps-Engine line's midpoint; corners are measured, not guessed,
                        since col4 and col5 are very different widths. */}
                    {dims && (
                        <>
                            <div
                                className={'absolute w-px ' + branchCls}
                                style={{
                                    left: dims.branch.x1,
                                    top: dims.branch.y1,
                                    height: dims.branch.turnY - dims.branch.y1,
                                }}
                                aria-hidden="true"
                            />
                            <div
                                className={'absolute h-px ' + branchCls}
                                style={{
                                    top: dims.branch.turnY,
                                    left: Math.min(dims.branch.x1, dims.branch.x2),
                                    width: Math.abs(dims.branch.x2 - dims.branch.x1),
                                }}
                                aria-hidden="true"
                            />
                            <div
                                className={'absolute w-px ' + branchCls}
                                style={{
                                    left: dims.branch.x2,
                                    top: dims.branch.turnY,
                                    height: dims.branch.y2 - dims.branch.turnY,
                                }}
                                aria-hidden="true"
                            />
                        </>
                    )}
                </div>

                <div className="md:hidden flex flex-col items-center">
                    <div className="flex gap-2">
                        <span className="font-display2 text-[10px] uppercase tracking-widest text-white/60 border border-white/20 px-2 py-1">
                            LOx
                        </span>
                        <span className="font-display2 text-[10px] uppercase tracking-widest text-white/60 border border-white/20 px-2 py-1">
                            Fuel
                        </span>
                    </div>
                    <span className={'my-2 w-px h-5 ' + bar(lit('in'))} aria-hidden="true" />
                    <Node id="pumps" active={active} onSelect={setActive} className="w-44 text-center" />
                    <span className={'my-2 w-px h-5 ' + bar(lit('pe'))} aria-hidden="true" />
                    <Node id="engine" active={active} onSelect={setActive} className="w-44 text-center" />

                    <div className="w-full border-t border-white/15 mt-8 pt-6 flex flex-col items-center">
                        <p className="font-display2 text-white/40 text-[10px] uppercase tracking-[0.2em] mb-3">
                            Drive train
                        </p>
                        <Node id="gasGen" active={active} onSelect={setActive} className="w-44 text-center" />
                        <span className={'my-2 w-px h-5 ' + bar(lit('gt'))} aria-hidden="true" />
                        <Node id="turbine" active={active} onSelect={setActive} className="w-44 text-center" />
                        <span className={'my-2 w-px h-5 ' + bar(lit('shaft'))} aria-hidden="true" />
                        <button
                            type="button"
                            onClick={() => setActive(active === 'shaft' ? null : 'shaft')}
                            aria-pressed={active === 'shaft'}
                            className={nodeCls(active === 'shaft') + ' w-44 text-center'}
                        >
                            Shaft → Pumps
                        </button>
                    </div>
                </div>

                <div className="mt-8 border-l-2 border-stardust pl-4 min-h-[3.25rem] flex items-center">
                    <p className="font-display2 text-sm md:text-base leading-6 text-white/85">
                        {active ? (
                            roleOf(active)
                        ) : (
                            <span className="text-white/45">Select a component to see its role.</span>
                        )}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TurbopumpSystemFlow;
