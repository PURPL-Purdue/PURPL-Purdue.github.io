import { Fragment } from 'react';

// Compact subsystem navigation. Desktop: a two-row "snake" flow (row 1 left to
// right, row 2 right to left) with thin connecting lines, so all 8 items show
// without a sidebar eating 25-30% of the page width. Mobile: a horizontally
// scrollable chip row; no attempt to preserve the snake shape.

const NavButton = ({ item, selected, onSelect }) => (
    <button
        type="button"
        onClick={onSelect}
        aria-pressed={selected}
        className={
            'relative z-10 flex-1 min-w-0 text-left border-2 px-3 py-2.5 transition-colors duration-200 ' +
            'motion-reduce:transition-none focus:outline-2 focus:outline-stardust focus:outline-offset-2 ' +
            (selected ? 'border-stardust bg-moon/40' : 'border-white/25 hover:border-stardust')
        }
    >
        <span className={'block font-display2 text-[10px] tracking-[0.2em] ' + (selected ? 'text-stardust' : 'text-white/40')}>
            {item.n}
        </span>
        <span className={'block font-display-bold text-xs uppercase leading-tight mt-0.5 truncate ' + (selected ? 'text-white' : 'text-white/55')}>
            {item.short}
        </span>
    </button>
);

const HLine = () => <div className="h-px w-4 md:w-6 shrink-0 self-center bg-white/20" aria-hidden="true" />;

// `items` is already in left-to-right visual order.
const Row = ({ items, selected, onSelect }) => (
    <div className="flex items-stretch">
        {items.map((item, idx) => (
            <Fragment key={item.key}>
                {idx > 0 && <HLine />}
                <NavButton item={item} selected={selected === item.key} onSelect={() => onSelect(item.key)} />
            </Fragment>
        ))}
    </div>
);

const SubsystemNavigation = ({ items, selected, onSelect }) => {
    const row1 = items.slice(0, 4);
    const row2 = [...items.slice(4, 8)].reverse();

    return (
        <>
            {/* mobile: horizontally scrollable, no snake */}
            <div className="md:hidden flex gap-2 overflow-x-auto pb-2" aria-label="Subsystem index">
                {items.map((item) => (
                    <button
                        key={item.key}
                        type="button"
                        onClick={() => onSelect(item.key)}
                        aria-pressed={selected === item.key}
                        className={
                            'shrink-0 whitespace-nowrap border-2 px-3.5 py-2.5 font-display-bold text-xs uppercase tracking-wide ' +
                            'transition-colors duration-200 motion-reduce:transition-none focus:outline-2 focus:outline-stardust focus:outline-offset-2 ' +
                            (selected === item.key ? 'border-stardust bg-moon/50 text-white' : 'border-white/40 text-white/50')
                        }
                    >
                        <span className={(selected === item.key ? 'text-stardust' : 'text-white/40') + ' mr-2'}>{item.n}</span>
                        {item.short}
                    </button>
                ))}
            </div>

            {/* desktop: two-row snake */}
            <div className="hidden md:flex md:flex-col" aria-label="Subsystem index">
                <Row items={row1} selected={selected} onSelect={onSelect} />
                <div className="flex justify-end mr-[12.5%]" aria-hidden="true">
                    <div className="w-px h-4 bg-white/20" />
                </div>
                <Row items={row2} selected={selected} onSelect={onSelect} />
            </div>
        </>
    );
};

export default SubsystemNavigation;
