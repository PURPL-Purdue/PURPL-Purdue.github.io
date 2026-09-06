import { useState } from 'react';
import { turbopumpData as d } from '../../../json/turbopump';

// Subsystems / Assembly Index — the project-specific interaction. Pick a
// subsystem on the left; its content swaps on the right: name, a purple purpose
// panel, and a bordered requirements list. Reads as complete with no imagery.
//
// Interaction, numbering, selected state, data and technical values unchanged.

const SUBS = d.subsystems;

const SubsystemFeature = ({ s }) => (
    <div className="min-w-0">
        <h3 className="font-display-bold text-3xl md:text-5xl text-white uppercase leading-tight">
            {s.title}
        </h3>

        <div className="bg-moon/80 p-4 lg:p-6 mt-4">
            <p className="font-display2 text-stardust text-sm uppercase mb-2">Purpose</p>
            <p className="font-display2 text-white text-sm md:text-lg leading-7 text-left">{s.purpose}</p>
        </div>

        <div className="border-2 border-white/40 p-5 md:p-6 mt-4">
            <p className="font-display2 text-stardust text-sm uppercase mb-3">Requirements</p>
            <ul className="flex flex-col gap-3">
                {s.requirements.map((r) => (
                    <li
                        key={r}
                        className="flex gap-3 font-display2 text-white/80 text-sm md:text-md leading-7"
                    >
                        <span aria-hidden="true" className="text-stardust">&mdash;</span>
                        <span>{r}</span>
                    </li>
                ))}
            </ul>
            {s.note && (
                <p className="font-display2 text-white/60 text-sm md:text-md leading-7 mt-4">{s.note}</p>
            )}
        </div>
    </div>
);

// Desktop index row — a technical table of contents (number over title, purple
// rule + faint fill when selected), not a card grid.
const IndexItem = ({ sub, selected, onSelect }) => (
    <button
        type="button"
        onClick={onSelect}
        aria-pressed={selected}
        className={
            'group w-full text-left border-l-2 pl-4 md:pl-5 py-4 ' +
            'transition-colors duration-200 motion-reduce:transition-none ' +
            'focus:outline-2 focus:outline-stardust focus:outline-offset-2 ' +
            (selected ? 'border-stardust bg-moon/40' : 'border-white/25 hover:border-white/40')
        }
    >
        <span
            className={
                'block font-display2 text-xs tracking-[0.25em] ' +
                (selected ? 'text-stardust' : 'text-white/35 group-hover:text-white/60')
            }
        >
            {sub.n}
        </span>
        <span
            className={
                'block font-display-bold text-sm md:text-base uppercase leading-tight mt-1 ' +
                (selected ? 'text-white' : 'text-white/45 group-hover:text-white/80')
            }
        >
            {sub.title}
        </span>
    </button>
);

const TurbopumpSubsystems = () => {
    const [i, setI] = useState(0);
    const s = SUBS[i];

    return (
        <section>
            <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
                Subsystems
            </h2>

            {/* mobile — compact horizontally scrollable index */}
            <div className="md:hidden mt-6 flex gap-2 overflow-x-auto pb-2" aria-label="Assembly index">
                {SUBS.map((sub, idx) => (
                    <button
                        key={sub.key}
                        type="button"
                        onClick={() => setI(idx)}
                        aria-pressed={i === idx}
                        className={
                            'shrink-0 whitespace-nowrap border-2 px-3.5 py-2.5 ' +
                            'font-display-bold text-xs uppercase tracking-wide ' +
                            'transition-colors duration-200 motion-reduce:transition-none ' +
                            'focus:outline-2 focus:outline-stardust focus:outline-offset-2 ' +
                            (i === idx
                                ? 'border-stardust bg-moon/50 text-white'
                                : 'border-white/40 text-white/50')
                        }
                    >
                        <span className={(i === idx ? 'text-stardust' : 'text-white/40') + ' mr-2'}>
                            {sub.n}
                        </span>
                        {sub.short}
                    </button>
                ))}
            </div>

            <div className="mt-6 md:mt-8 md:grid md:grid-cols-[220px_1fr] md:gap-10 lg:gap-12">
                <nav
                    aria-label="Assembly index"
                    className="hidden md:flex md:flex-col self-start md:sticky md:top-8 lg:top-32"
                >
                    {SUBS.map((sub, idx) => (
                        <IndexItem
                            key={sub.key}
                            sub={sub}
                            selected={i === idx}
                            onSelect={() => setI(idx)}
                        />
                    ))}
                </nav>

                <SubsystemFeature key={s.key} s={s} />
            </div>
        </section>
    );
};

export default TurbopumpSubsystems;
