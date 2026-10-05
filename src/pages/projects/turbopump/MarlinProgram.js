import { useState } from 'react';
import Gallery from '../../../components/carousel/Gallery';
import { turbopumpData as d } from '../../../json/turbopump';

// Modeled on RDE's EngineSelector.
const GenerationSelector = ({ gen, active, onSelect }) => (
    <button
        onClick={() => onSelect(gen.key)}
        className={
            'w-full border-2 p-5 text-left transition-all ' +
            (active ? 'border-stardust bg-moon/50' : 'border-white/40 bg-transparent hover:border-stardust')
        }
    >
        <h3 className="font-display-bold text-3xl text-white uppercase">{gen.title}</h3>
        <p className="font-display2 text-stardust mt-2 text-sm">{gen.selectorSubtitle}</p>
        <p className="font-display2 text-white/70 mt-4 text-sm">{gen.selectorPurpose}</p>
    </button>
);

// Gallery avoids a single-photo carousel. Stat row matches Maelstrom's 4-up cards.
const GenerationProfile = ({ gen }) => (
    <div className="flex flex-col gap-6">
        <div className={'grid grid-cols-1 gap-6 lg:gap-10 items-center ' + (gen.photo ? 'md:grid-cols-[3fr_2fr]' : '')}>
            {gen.photo && (
                <div className="w-full">
                    <Gallery photos={[gen.photo]} ariaLabel={`${gen.title} hardware`} />
                </div>
            )}
            <p className="font-display2 text-white text-sm md:text-lg leading-7 text-left">{gen.desc}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {gen.stats.map(([label, value], index) => (
                <div
                    key={label}
                    className={'border-2 border-white/40 p-4 ' + (index === 0 || index === 3 ? 'bg-moon/30' : '')}
                >
                    <p className="font-display-bold text-stardust text-lg md:text-xl uppercase">{label}</p>
                    <p className="font-display2 text-white text-sm mt-1">{value}</p>
                </div>
            ))}
        </div>
    </div>
);

// These stats aren't repeated anywhere else on the page.
const MarlinProgram = () => {
    const [active, setActive] = useState('v1');
    const gen = d.marlinProgram[active];

    return (
        <section className="flex flex-col gap-5">
            <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
                Marlin Program
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GenerationSelector gen={d.marlinProgram.v1} active={active === 'v1'} onSelect={setActive} />
                <GenerationSelector gen={d.marlinProgram.v2} active={active === 'v2'} onSelect={setActive} />
            </div>

            <GenerationProfile gen={gen} />
        </section>
    );
};

export default MarlinProgram;
