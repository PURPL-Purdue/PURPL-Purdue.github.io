import Gallery from '../../../components/carousel/Gallery';
import { turbopumpData as d } from '../../../json/turbopump';

// Research: the RDE "AIAA Region III Recognition" + Publications layout,
// adapted: the AIAA SciTech recognition context (text + photos, RDE's
// grid-cols-2 format) explains why the two papers below exist, then both
// confirmed AIAA papers as RDE-format publication rows.
const TurbopumpPublications = () => (
    <section>
        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
            Research
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
            <p className="col-span-1 font-display2 text-md md:text-lg text-white text-left">
                {d.research.context.text}
            </p>

            <div className="col-span-1 w-[100%] mx-auto mt-2">
                <Gallery
                    photos={d.research.context.photos}
                    ariaLabel="AIAA SciTech 2026 conference photos"
                />
            </div>
        </div>

        <div className="flex flex-col gap-3 mt-6 md:mt-8">
            {d.research.publications.map((paper) => (
                <a
                    key={paper.title}
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 border border-white/40 px-4 py-3 transition-all hover:border-stardust hover:bg-moon/30"
                >
                    <h3 className="font-display-bold text-white text-sm md:text-base uppercase">
                        {paper.title}
                    </h3>
                    <p className="font-display2 text-stardust text-xs md:text-sm uppercase whitespace-nowrap shrink-0">
                        Read publication →
                    </p>
                </a>
            ))}
        </div>
    </section>
);

export default TurbopumpPublications;
