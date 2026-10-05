import Gallery from '../../../components/carousel/Gallery';
import SpecsTable from '../../../components/projects/SpecsTable';
import { turbopumpData as d } from '../../../json/turbopump';

const a = d.assembly;
const profileTable = d.profile.rows.reduce(
    (acc, r) => ({ ...acc, [r.label]: r.value }),
    { [d.profile.hero.label]: d.profile.hero.value },
);

// Separate from SubsystemFeature because this layout (CAD, hardware, specs)
// doesn't fit the generic subsystem template.
const TurbopumpFullAssembly = () => (
    <div className="min-w-0">
        <h3 className="font-display-bold text-3xl md:text-5xl text-white uppercase leading-tight">
            {a.title}
        </h3>
        <p className="font-display2 text-white text-md md:text-lg leading-7 mt-4 max-w-[640px]">
            {a.desc}
        </p>

        <div className="border-t border-white/15 mt-8 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <p className="font-display2 text-stardust text-sm uppercase mb-3">CAD / Design</p>
                <Gallery photos={a.cadPhotos} ariaLabel="Turbopump assembly CAD" aspectRatio="4 / 3" />
            </div>
            <div>
                <p className="font-display2 text-stardust text-sm uppercase mb-3">Manufactured Hardware</p>
                <Gallery photos={a.hardwarePhotos} ariaLabel="MARLIN V1 manufactured hardware" aspectRatio="4 / 3" />
            </div>
        </div>

        <div className="border-t border-white/15 mt-8 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {a.strip.map((item) => (
                <div key={item.n}>
                    <p className="font-display2 text-stardust text-xs mb-1">{item.n}</p>
                    <p className="font-display-bold text-white text-sm md:text-base uppercase leading-tight">
                        {item.label}
                    </p>
                    <p className="font-display2 text-white/60 text-xs md:text-sm mt-1">{item.value}</p>
                </div>
            ))}
        </div>

        <div className="border-t border-white/15 mt-8 pt-8">
            <SpecsTable table={profileTable} title="System Profile" />
            <p className="font-display2 text-white/40 text-xs md:text-sm leading-6 mt-4">{d.profile.note}</p>
        </div>
    </div>
);

export default TurbopumpFullAssembly;
