import { useState } from 'react';
import SubsystemNavigation from './SubsystemNavigation';
import TurbopumpFullAssembly from './TurbopumpFullAssembly';
import { turbopumpData as d } from '../../../json/turbopump';

// All 8 explorer entries: the 7 subsystems, then Full Assembly.
const ITEMS = [...d.subsystems, d.assembly];

// `centered` text-aligns the purpose paragraph, the "Requirements" label, and
// the note; the requirements list itself stays left-aligned (readable bullets)
// inside its own centered block, matching how a centered page section
// normally handles a left-reading list.
const SubsystemText = ({ s, centered }) => (
    <div>
        <p className={'font-display2 text-white text-md md:text-lg leading-7 ' + (centered ? 'text-center' : '')}>
            {s.purpose}
        </p>

        <div className="mt-6">
            <p className={'font-display2 text-stardust text-sm uppercase mb-3 ' + (centered ? 'text-center' : '')}>
                Requirements
            </p>
            <ul className="flex flex-col gap-2 text-left">
                {s.requirements.map((r) => (
                    <li key={r} className="flex gap-3 font-display2 text-white/80 text-sm md:text-md leading-7">
                        <span aria-hidden="true" className="text-stardust">-</span>
                        <span>{r}</span>
                    </li>
                ))}
            </ul>
            {s.note && (
                <p className={'font-display2 text-white/60 text-sm md:text-md leading-7 mt-4 ' + (centered ? 'text-center' : '')}>
                    {s.note}
                </p>
            )}
        </div>
    </div>
);

// A subsystem's purpose + requirements at full content width. Where a photo is
// confirmed (only Pumps, today), it sits beside the text in a balanced
// two-column composition. Where there's no photo (every other subsystem),
// the whole block (title, purpose, requirements) is centered as one
// composition instead of leaving a left-aligned block beside an empty column.
const SubsystemFeature = ({ s }) =>
    s.photo ? (
        <div className="min-w-0">
            <h3 className="font-display-bold text-3xl md:text-5xl text-white uppercase leading-tight">
                {s.title}
            </h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 lg:gap-10 items-center">
                <SubsystemText s={s} />
                <div className="flex items-center justify-center h-[240px] md:h-[300px] bg-dusk">
                    <img
                        src={s.photo.src}
                        alt={s.photo.alt}
                        loading="lazy"
                        decoding="async"
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    ) : (
        <div className="max-w-md mx-auto text-center">
            <h3 className="font-display-bold text-3xl md:text-5xl text-white uppercase leading-tight">
                {s.title}
            </h3>
            <div className="mt-4">
                <SubsystemText s={s} centered />
            </div>
        </div>
    );

// Subsystems: a compact top navigation (SubsystemNavigation) instead of a
// sidebar, then the selected content at full content width. Full Assembly
// gets its own purpose-built template; every other entry shares the simple
// purpose/requirements layout above.
const TurbopumpSubsystems = () => {
    const [selected, setSelected] = useState(ITEMS[0].key);
    const item = ITEMS.find((it) => it.key === selected);

    return (
        <section>
            <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-5 uppercase md:mt-4">
                Subsystems
            </h2>

            <SubsystemNavigation items={ITEMS} selected={selected} onSelect={setSelected} />

            <div className="mt-8 md:mt-10">
                {item.key === 'assembly' ? (
                    <TurbopumpFullAssembly key={item.key} />
                ) : (
                    <SubsystemFeature key={item.key} s={item} />
                )}
            </div>
        </section>
    );
};

export default TurbopumpSubsystems;
