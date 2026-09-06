import { useState } from 'react';
import { turbopumpData as d } from '../../../json/turbopump';

// 03 — How the system works. An intentionally simplified gas-generator flow:
// pumps raise propellant pressure, a shaft ties the rotating machinery
// together, a turbine drives that shaft, and a gas generator feeds the turbine.
// Click / tap a component to highlight its links and read its role.
//
// Desktop uses a wide two-row grid; mobile uses a purpose-built vertical stack
// (not a shrunk desktop SVG). Both share one selection + one detail line.

const NODES = d.system.nodes;
const roleOf = (id) => (NODES.find((n) => n.id === id) || {}).role;

// which connector keys light up for a given active node
const LINKS = {
    pumps: ['in', 'pe', 'shaft'],
    shaft: ['shaft'],
    turbine: ['shaft', 'gt'],
    gasGen: ['gt'],
    engine: ['pe'],
};

// Node styling mirrors the RDE / Testbed selector: purple border + moon fill
// when active, muted white border otherwise.
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

// thin connector bar; `lit` brightens it when an adjacent node is active
const bar = (lit) => (lit ? 'bg-stardust' : 'bg-stardust/35');

const TurbopumpSystemFlow = () => {
    const [active, setActive] = useState(null);
    const lit = (key) => (active ? LINKS[active].includes(key) : false);

    return (
        <section>
            <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
                The System
            </h2>

            <p className="font-display2 text-md md:text-lg text-white text-left">
                {d.system.blurb} {d.system.architecture}
            </p>

            <div className="mt-6 md:mt-8 border-2 border-white/40 p-5 md:p-6">
                {/* ---------- desktop diagram ---------- */}
                <div
                    className="hidden md:grid items-center gap-x-4 gap-y-4"
                    style={{ gridTemplateColumns: 'auto 2rem auto minmax(2rem,1fr) auto' }}
                >
                    {/* row 1 : inlets -> pumps -> engine */}
                    <div className="col-start-1 row-start-1 flex flex-col gap-2">
                        <span className="font-display2 text-[11px] uppercase tracking-widest text-white/60 border border-white/20 px-2 py-1 text-center">
                            LOx
                        </span>
                        <span className="font-display2 text-[11px] uppercase tracking-widest text-white/60 border border-white/20 px-2 py-1 text-center">
                            Fuel
                        </span>
                    </div>
                    <div className={'col-start-2 row-start-1 h-px w-full ' + bar(lit('in'))} aria-hidden="true" />
                    <Node id="pumps" active={active} onSelect={setActive} className="col-start-3 row-start-1 justify-self-center" />
                    <div className={'col-start-4 row-start-1 h-px w-full ' + bar(lit('pe'))} aria-hidden="true" />
                    <Node id="engine" active={active} onSelect={setActive} className="col-start-5 row-start-1 justify-self-center" />

                    {/* row 2 : shaft link (own row, no overlap with the nodes) */}
                    <button
                        type="button"
                        onClick={() => setActive(active === 'shaft' ? null : 'shaft')}
                        aria-pressed={active === 'shaft'}
                        className="col-start-3 row-start-2 justify-self-center flex flex-col items-center gap-1 py-1 focus:outline-2 focus:outline-stardust focus:outline-offset-2"
                    >
                        <span className={'w-px h-3 ' + bar(lit('shaft'))} aria-hidden="true" />
                        <span
                            className={
                                'font-display2 text-[10px] uppercase tracking-[0.2em] ' +
                                (lit('shaft') ? 'text-stardust' : 'text-white/45')
                            }
                        >
                            Shaft
                        </span>
                        <span className={'w-px h-3 ' + bar(lit('shaft'))} aria-hidden="true" />
                    </button>

                    {/* row 3 : gas generator -> turbine */}
                    <Node id="turbine" active={active} onSelect={setActive} className="col-start-3 row-start-3 justify-self-center" />
                    <div className={'col-start-4 row-start-3 h-px w-full ' + bar(lit('gt'))} aria-hidden="true" />
                    <Node id="gasGen" active={active} onSelect={setActive} className="col-start-5 row-start-3 justify-self-center" />
                </div>

                {/* ---------- mobile diagram ---------- */}
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

                {/* ---------- shared detail line ---------- */}
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
