import AccessibleCarousel from '../../../components/carousel/AccessibleCarousel';
import SpecsTable from '../../../components/projects/SpecsTable';
import { testbedData } from '../../../json/projects';

const d = testbedData.platforms.maelstrom;
const hardware = testbedData.gallery;

// Sharp bordered collapsible technical section — same behaviour as the
// original Testbed page (title, arrow, monospace body, subtle purple border).
const TechSection = ({ title, body }) => (
    <details className="group border border-stardust/30">
        <summary className="flex items-center justify-between cursor-pointer p-4 lg:p-5 text-white font-display-bold text-lg lg:text-xl uppercase hover:bg-stardust/10 transition-colors focus:outline-2 focus:outline-stardust focus:outline-offset-2">
            <span>{title}</span>
            <span className="ml-4 transition-transform group-open:rotate-180" aria-hidden="true">▼</span>
        </summary>
        <div className="p-4 lg:p-5 pt-0">
            <p className="font-display2 text-white text-md md:text-lg leading-7">{body}</p>
        </div>
    </details>
);

// Maelstrom profile: a plain two-column row (carousel | purple description
// block), then the quick-fact row, engine stats, and technical accordions.
// Normal flow only — no absolute positioning, so nothing overlaps.
const Maelstrom = () => (
    <div className="flex flex-col gap-8">
        {/* Profile row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-start w-full">
            <div className="w-full">
                <AccessibleCarousel photos={hardware} ariaLabel="Maelstrom hardware photos" />
            </div>
            <div className="bg-moon/80 p-4 lg:p-6">
                <p className="font-display2 text-stardust text-sm uppercase mb-2">{d.subtitle}</p>
                <p className="font-display2 text-white text-sm md:text-lg leading-7 text-left">{d.blurb}</p>
            </div>
        </div>

        {/* Quick facts — full-width row below the profile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {d.facts.map(([label, value], index) => (
                <div
                    key={label}
                    className={
                        'border-2 border-white/40 p-4 ' +
                        (index === 0 || index === 3 ? 'bg-moon/30' : '')
                    }
                >
                    <p className="font-display-bold text-stardust text-lg md:text-xl uppercase">{label}</p>
                    <p className="font-display2 text-white text-sm mt-1">{value}</p>
                </div>
            ))}
        </div>

        <SpecsTable table={d.specs} title="Engine Stats" headingGap="space-y-6" rowPad="pb-3 pt-5" />

        <div className="flex flex-col gap-4 mt-3">
            {d.technical.map((section) => (
                <TechSection key={section.title} title={section.title} body={section.body} />
            ))}
        </div>
    </div>
);

export default Maelstrom;
