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
// MOBILE / TABLET (<lg): a nested left-rail tree — MEGATRN at the top, each branch
// elbows off a shared rail, each team elbows off its branch's rail. Parent/
// child stays obvious and no sibling is stacked "under" another as if it were
// a child.
//
// `status` drives emphasis: new -> strongest purple highlight; active ->
// current team, purple; future -> subdued dashed grey.

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

const TeamCard = ({ team }) => {
    const s = STATUS_STYLES[team.status] || STATUS_STYLES.future;
    return (
        <div className={'relative w-full grow p-2.5 transition-all duration-200 ' + s.card}>
            {team.status === 'new' && (
                <span className="absolute -top-2 right-3 bg-stardust text-white font-display-bold text-[10px] leading-none uppercase px-1.5 py-0.5">
                    New
                </span>
            )}
            <p className={'font-display-bold text-xs lg:text-sm uppercase leading-tight ' + s.name}>
                {team.name}
            </p>
            <p className={'font-display2 text-[11px] mt-1 leading-tight ' + s.role}>{team.role}</p>
        </div>
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
const TeamRow = ({ teams, cols, lead }) => (
    <div className="w-full flex flex-col items-center">
        <VStub className={lead} />
        <div className={'w-full grid gap-x-3 ' + cols}>
            {teams.map((team, i) => (
                <div key={team.name} className="relative flex flex-col items-center">
                    <div className={teamBus(edgeOf(i, teams.length))} aria-hidden="true" />
                    <VStub className="h-6" />
                    <TeamCard team={team} />
                </div>
            ))}
        </div>
    </div>
);

const DesktopTree = ({ chart }) => {
    const [injector, architecture, igniter] = chart.branches;
    const gridCols = 'grid grid-cols-[3fr_2fr_3fr] gap-x-6';
    return (
        <div className="hidden lg:block w-full">
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
                <TeamRow teams={injector.teams} cols="grid-cols-2" lead="h-12" />
                <div className="relative" aria-hidden="true">
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-stardust/50" />
                </div>
                <TeamRow teams={igniter.teams} cols="grid-cols-2" lead="h-12" />
            </div>

            {/* Row 4 — Architecture teams, spread across the lower centre */}
            <div className="mx-auto w-[88%]">
                <TeamRow teams={architecture.teams} cols="grid-cols-3" lead="h-16" />
            </div>
        </div>
    );
};

// ---- mobile nested left-rail tree ------------------------------------------------

// One rail node. `left-2` span = the piece of the PARENT's rail running past
// this card; `top-6` span = the elbow into this card. `isLast` stops the rail
// at the elbow so it doesn't overrun. When the node has children, a short stub
// at `left-8` joins this card's underside to the children's (indented) rail so
// every level stays connected.
const RailNode = ({ card, isLast, children }) => (
    <li className="relative pl-6 pb-4 last:pb-0">
        <span
            className={'absolute left-2 top-0 w-0.5 bg-stardust/50 ' + (isLast ? 'h-6' : 'h-full')}
            aria-hidden="true"
        />
        <span className="absolute left-2 top-6 w-4 h-0.5 bg-stardust/50" aria-hidden="true" />
        {card}
        {children && (
            <>
                <div className="relative h-4" aria-hidden="true">
                    <span className="absolute left-8 top-0 w-0.5 h-4 bg-stardust/50" />
                </div>
                <ul>{children}</ul>
            </>
        )}
    </li>
);

const MobileTree = ({ chart }) => (
    <div className="lg:hidden w-full">
        <RootCard label={chart.root} className="w-full" />
        <ul>
            {chart.branches.map((branch, bi) => (
                <RailNode
                    key={branch.name}
                    isLast={bi === chart.branches.length - 1}
                    card={<BranchCard name={branch.name} />}
                >
                    {branch.teams.map((team, ti) => (
                        <RailNode
                            key={team.name + ti}
                            isLast={ti === branch.teams.length - 1}
                            card={<TeamCard team={team} />}
                        />
                    ))}
                </RailNode>
            ))}
        </ul>
    </div>
);

// ---- entry -------------------------------------------------------------------

const MegatrnChart = ({ chart }) => (
    <div className="w-full">
        <DesktopTree chart={chart} />
        <MobileTree chart={chart} />
    </div>
);

export default MegatrnChart;
