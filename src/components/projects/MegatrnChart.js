// Native MEGATRN development-structure chart — matches the project lead's
// reference diagram:
//
//   MEGATRN
//     ├─ Injector      → Pintle, Others                 (2 children)
//     ├─ Architecture  → Ablative, Calorimeter, Others  (3 children)
//     └─ Igniter       → Acoustic, Torch                (2 children)
//
// Each branch's teams sit in ONE horizontal row centred under the branch;
// siblings are never joined to one another — every card connects only to its
// parent.
//
// DESKTOP (lg+): a STAGGERED tree, matching the geometry of Tucker's reference.
//   Row 1  MEGATRN
//   Row 2  INJECTOR      ARCHITECTURE      IGNITER
//   Row 3  Pintle Others      (spine)      Acoustic Torch
//   Row 4                 Ablative  Calorimeter  Others
// Injector's and Igniter's two teams sit directly below them; Architecture's
// three teams drop to a LOWER row reached by a long spine down the empty centre,
// then spread wide across the lower centre — so no row is ever seven cards wide
// and every card stays large and readable.
//
// Connector geometry lines up at any width without percentage guesses:
//   * Each horizontal bus is drawn as one piece PER column, anchored to that
//     column's centre (left-1/2 / right-1/2) and run into the grid gutter by
//     exactly the gutter width (-left-6/-right-6 == gap-x-6 on the header row,
//     -left-3/-right-3 == gap-x-3 between team cards). Neighbouring pieces
//     overlap inside the gutter, so each bus is one unbroken line.
//   * Every vertical stub is the first in-flow child under the element whose
//     top edge is the line it meets, so the joins are exact, not offset.
//   * The Architecture spine is an inset-y-0 rule in the empty centre column,
//     so it always spans exactly from the header row to the lower row.
//
// MOBILE (<md): a vertical hierarchy. MEGATRN, a short branch indicator, then
// three visually identical subsystem groups (Injector / Architecture / Igniter)
// separated by generous whitespace so they read as siblings, never a sequence.
// Each group is self-contained: a centred subsystem card, then its own left
// branch rail that drops from the card, runs down the left of the indented
// child cards with a short tick into each, and ends exactly at the last child.
//
// `status` drives emphasis: new -> strongest purple highlight; active ->
// current team, purple; future -> subdued dashed grey.
//
// Component-team cards are buttons: clicking one opens a small detail panel
// beneath the whole chart (never over it, never changing the geometry).

import { useState, useRef, useEffect } from 'react';

const STATUS_STYLES = {
    new: {
        card: 'border-2 border-stardust bg-stardust/15 shadow-[0_0_18px_-2px_rgba(145,0,255,0.55)]',
        name: 'text-white',
        role: 'text-stardust',
    },
    active: {
        card: 'border-2 border-stardust/70 bg-moon/40 hover:border-stardust',
        name: 'text-white',
        role: 'text-stardust',
    },
    future: {
        card: 'border border-dashed border-white/25 bg-transparent hover:border-white/50',
        name: 'text-white/60',
        role: 'text-white/40',
    },
};

// ---- shared leaf / branch cards -------------------------------------------------

// Shared classes for a clickable component-team card (used desktop + mobile).
const teamCardClass = (statusCard, isSelected) =>
    'relative block w-full grow transition-all duration-200 ' +
    'focus:outline-2 focus:outline-stardust focus:outline-offset-2 ' +
    'hover:ring-1 hover:ring-stardust/50 ' +
    statusCard +
    (isSelected ? ' ring-2 ring-stardust ring-offset-2 ring-offset-dusk' : '');

const TeamCard = ({ team, subsystem, selected, onSelect }) => {
    const s = STATUS_STYLES[team.status] || STATUS_STYLES.future;
    const isSelected = !!selected && selected.subsystem === subsystem && selected.name === team.name;
    return (
        <button
            type="button"
            onClick={() => onSelect(team, subsystem)}
            aria-expanded={isSelected}
            aria-controls="megatrn-component-detail"
            className={teamCardClass(s.card, isSelected) + ' p-2.5'}
        >
            {team.status === 'new' && (
                <span className="absolute -top-2 right-3 bg-stardust text-white font-display-bold text-[10px] leading-none uppercase px-1.5 py-0.5">
                    New
                </span>
            )}
            <span className={'block font-display-bold text-xs lg:text-sm uppercase leading-tight ' + s.name}>
                {team.name}
            </span>
            <span className={'block font-display2 text-[11px] mt-1 leading-tight ' + s.role}>{team.role}</span>
        </button>
    );
};

const BranchCard = ({ name }) => (
    <div className="w-full grow flex items-center justify-center border-2 border-white/40 bg-moon/50 px-3 py-3 text-center transition-all duration-200 hover:border-stardust">
        <p className="font-display-bold text-base lg:text-lg uppercase text-white leading-tight whitespace-nowrap">
            {name}
        </p>
    </div>
);

const RootCard = ({ label, className = '' }) => (
    <div
        className={
            'border-2 border-stardust bg-moon/60 shadow-[0_0_24px_-4px_rgba(145,0,255,0.5)] p-4 text-center ' +
            className
        }
    >
        <p className="font-display-bold text-2xl md:text-3xl uppercase text-white tracking-wide">{label}</p>
    </div>
);

// ---- desktop tree ------------------------------------------------------------

const VStub = ({ className = '' }) => (
    <div className={'w-0.5 bg-stardust/50 mx-auto ' + className} aria-hidden="true" />
);

// horizontal bus piece for a header column, sized to overlap a gap-x-6 gutter
const branchBus = (edge) =>
    'absolute top-0 h-0.5 bg-stardust/50 ' +
    (edge === 'first'
        ? 'left-1/2 -right-6'
        : edge === 'last'
        ? '-left-6 right-1/2'
        : '-left-6 -right-6');

// horizontal bus piece for a team column, sized to overlap a gap-x-3 gutter
const teamBus = (edge) =>
    edge === 'only'
        ? 'hidden'
        : 'absolute top-0 h-0.5 bg-stardust/50 ' +
          (edge === 'first'
              ? 'left-1/2 -right-3'
              : edge === 'last'
              ? '-left-3 right-1/2'
              : '-left-3 -right-3');

const edgeOf = (i, n) => (n === 1 ? 'only' : i === 0 ? 'first' : i === n - 1 ? 'last' : 'middle');

// A subsystem header card sitting under the top bus.
const BranchHead = ({ name, edge }) => (
    <div className="relative flex flex-col items-center">
        <div className={branchBus(edge)} aria-hidden="true" />
        <VStub className="h-7" />
        <BranchCard name={name} />
    </div>
);

// A row of team cards fed by a bus. `lead` is the stub above the bus (the drop
// from the header, or the tail of the Architecture spine).
const TeamRow = ({ teams, cols, lead, subsystem, selected, onSelect }) => (
    <div className="w-full flex flex-col items-center">
        <VStub className={lead} />
        <div className={'w-full grid gap-x-3 ' + cols}>
            {teams.map((team, i) => (
                <div key={team.name} className="relative flex flex-col items-center">
                    <div className={teamBus(edgeOf(i, teams.length))} aria-hidden="true" />
                    <VStub className="h-6" />
                    <TeamCard
                        team={team}
                        subsystem={subsystem}
                        selected={selected}
                        onSelect={onSelect}
                    />
                </div>
            ))}
        </div>
    </div>
);

const DesktopTree = ({ chart, selected, onSelect }) => {
    const [injector, architecture, igniter] = chart.branches;
    const gridCols = 'grid grid-cols-[3fr_2fr_3fr] gap-x-6';
    return (
        <div className="hidden md:block w-full">
            {/* Row 1 — root */}
            <RootCard label={chart.root} className="mx-auto w-full max-w-[240px]" />
            <VStub className="h-14" />

            {/* Row 2 — subsystem headers, tied by the top bus */}
            <div className={gridCols}>
                <BranchHead name={injector.name} edge="first" />
                <BranchHead name={architecture.name} edge="middle" />
                <BranchHead name={igniter.name} edge="last" />
            </div>

            {/* Row 3 — Injector & Igniter teams; the Architecture spine runs
                straight down the empty centre column */}
            <div className={gridCols}>
                <TeamRow
                    teams={injector.teams}
                    cols="grid-cols-2"
                    lead="h-12"
                    subsystem={injector.name}
                    selected={selected}
                    onSelect={onSelect}
                />
                <div className="relative" aria-hidden="true">
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-stardust/50" />
                </div>
                <TeamRow
                    teams={igniter.teams}
                    cols="grid-cols-2"
                    lead="h-12"
                    subsystem={igniter.name}
                    selected={selected}
                    onSelect={onSelect}
                />
            </div>

            {/* Row 4 — Architecture teams, spread across the lower centre */}
            <div className="mx-auto w-[88%]">
                <TeamRow
                    teams={architecture.teams}
                    cols="grid-cols-3"
                    lead="h-16"
                    subsystem={architecture.name}
                    selected={selected}
                    onSelect={onSelect}
                />
            </div>
        </div>
    );
};

// ---- mobile vertical tree (<md) -----------------------------------------------

const MobileChildCard = ({ team, subsystem, selected, onSelect }) => {
    const s = STATUS_STYLES[team.status] || STATUS_STYLES.future;
    const isSelected = !!selected && selected.subsystem === subsystem && selected.name === team.name;
    return (
        <button
            type="button"
            onClick={() => onSelect(team, subsystem)}
            aria-expanded={isSelected}
            aria-controls="megatrn-component-detail"
            className={teamCardClass(s.card, isSelected) + ' p-3'}
        >
            {team.status === 'new' && (
                <span className="absolute -top-2 right-2 bg-stardust text-white font-display-bold text-[10px] leading-none uppercase px-1.5 py-0.5">
                    New
                </span>
            )}
            <span className={'block font-display-bold text-sm uppercase leading-tight ' + s.name}>{team.name}</span>
            <span className={'block font-display2 text-xs mt-1 leading-snug ' + s.role}>{team.role}</span>
        </button>
    );
};

// One subsystem group: centred header card + its own left branch rail. The rail
// is built from one span per child so it always drops from the card, ticks into
// every child, and terminates exactly at the last child's centre — never
// overshooting and never reaching into another group.
const MobileSubsystem = ({ branch, className = '', selected, onSelect }) => (
    <div className={'w-full flex flex-col items-center ' + className}>
        <div className="w-[85%] border-2 border-white/40 bg-moon/50 px-4 py-3 text-center">
            <p className="font-display-bold text-lg uppercase text-white leading-tight">{branch.name}</p>
        </div>
        <div className="w-[85%] relative pl-7">
            {/* the drop from the subsystem card down onto the rail (~20px); the
                rail sits in the pl-7 gutter, left of the indented child cards */}
            <div className="relative h-5" aria-hidden="true">
                <span className="absolute -left-5 top-0 -bottom-2 w-0.5 bg-stardust/50" />
            </div>
            {branch.teams.map((team, i) => {
                const last = i === branch.teams.length - 1;
                return (
                    <div key={team.name} className={'relative ' + (last ? '' : 'mb-4')}>
                        {/* rail: to the next child (non-last, -bottom-4 reaches across
                            the mb-4 gap) or to this child's centre (last, ends here) */}
                        <span
                            className={
                                'absolute -left-5 top-0 w-0.5 bg-stardust/50 ' +
                                (last ? 'h-1/2' : '-bottom-4')
                            }
                            aria-hidden="true"
                        />
                        {/* tick from the rail into the card's left edge */}
                        <span
                            className="absolute -left-5 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-stardust/50"
                            aria-hidden="true"
                        />
                        <MobileChildCard
                            team={team}
                            subsystem={branch.name}
                            selected={selected}
                            onSelect={onSelect}
                        />
                    </div>
                );
            })}
        </div>
    </div>
);

const MobileTree = ({ chart, selected, onSelect }) => (
    <div className="md:hidden w-full flex flex-col items-center">
        <div className="w-[90%] border-2 border-stardust bg-moon/60 shadow-[0_0_24px_-4px_rgba(145,0,255,0.5)] px-4 py-4 text-center">
            <p className="font-display-bold text-2xl uppercase text-white tracking-wide">{chart.root}</p>
        </div>
        {/* short branch indicator — says "children below" without a full spine */}
        <div className="w-0.5 h-4 bg-stardust/50" aria-hidden="true" />
        <div className="w-12 h-0.5 bg-stardust/50" aria-hidden="true" />
        {chart.branches.map((branch, i) => (
            <MobileSubsystem
                key={branch.name}
                branch={branch}
                className={i === 0 ? 'mt-3' : 'mt-10'}
                selected={selected}
                onSelect={onSelect}
            />
        ))}
    </div>
);

// ---- clickable component-team detail ----------------------------------------

const STATUS_TAG = {
    new: 'bg-stardust text-white',
    active: 'bg-stardust/20 text-stardust border border-stardust/50',
    future: 'bg-white/10 text-white/60 border border-white/20',
};
const STATUS_LABEL = { new: 'New', active: 'Active', future: 'Planned' };

// Small panel shown beneath the chart when a team card is clicked. Purpose text
// is only what the project already states; otherwise a neutral placeholder so
// nothing is invented.
const ComponentDetail = ({ selected, onClose }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (selected && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [selected]);

    if (!selected) return null;
    const tagCls = STATUS_TAG[selected.status] || STATUS_TAG.future;
    const tagLabel = STATUS_LABEL[selected.status] || STATUS_LABEL.future;

    return (
        <div
            id="megatrn-component-detail"
            ref={ref}
            role="region"
            aria-label={`${selected.name} details`}
            aria-live="polite"
            className="mt-6 border border-stardust/40 bg-moon/40 p-4 md:p-5 text-left"
        >
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="font-display-bold text-lg md:text-xl uppercase text-white leading-tight">
                        {selected.name}
                    </p>
                    <p className="font-display2 text-stardust text-xs uppercase mt-1">
                        {selected.subsystem} subsystem
                    </p>
                </div>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close component details"
                    className="shrink-0 border border-white/30 text-white/70 hover:text-white hover:border-white px-2 py-1 text-xs font-display2 uppercase transition-colors focus:outline-2 focus:outline-stardust focus:outline-offset-2"
                >
                    Close
                </button>
            </div>

            <dl className="mt-4 font-display2 text-sm space-y-3">
                <div>
                    <dt className="text-white/50 uppercase text-xs">Phase</dt>
                    <dd className="text-white mt-1 flex flex-wrap items-center gap-2">
                        <span>{selected.role}</span>
                        <span className={'text-[10px] font-display-bold uppercase px-1.5 py-0.5 ' + tagCls}>
                            {tagLabel}
                        </span>
                    </dd>
                </div>
                <div>
                    <dt className="text-white/50 uppercase text-xs">Purpose</dt>
                    <dd className="text-white/90 leading-6 mt-1">
                        {selected.purpose ||
                            'A detailed purpose description for this team has not been published yet.'}
                    </dd>
                </div>
            </dl>
        </div>
    );
};

// ---- entry -------------------------------------------------------------------

const MegatrnChart = ({ chart }) => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (team, subsystem) =>
        setSelected((cur) =>
            cur && cur.name === team.name && cur.subsystem === subsystem
                ? null
                : { ...team, subsystem }
        );

    return (
        <div className="w-full">
            <DesktopTree chart={chart} selected={selected} onSelect={handleSelect} />
            <MobileTree chart={chart} selected={selected} onSelect={handleSelect} />
            <ComponentDetail selected={selected} onClose={() => setSelected(null)} />
        </div>
    );
};

export default MegatrnChart;
