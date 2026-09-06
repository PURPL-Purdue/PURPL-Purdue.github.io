import AccessibleCarousel from '../../../components/carousel/AccessibleCarousel';
import { turbopumpData as d } from '../../../json/turbopump';

// Recognition — the RDE "AIAA Region III Recognition" layout (FORMAT reference
// only): the shared heading, a two-column grid (grid-cols-1 md:grid-cols-2,
// gap-4 lg:gap-8) with the recognition paragraph left and the carousel right
// (col-span-1 w-[100%] mx-auto mt-2), then the publication row(s) beneath in the
// exact format of RDE's <Publications> component. Facts are Turbopump-specific.
// `recognition.publications` is currently empty pending a confirmed paper; when
// an entry is added, the row renders with no further changes here.
const TurbopumpRecognition = () => (
    <section>
        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
            Recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
            <p className="col-span-1 font-display2 text-md md:text-lg text-white text-left">
                {d.recognition.text}
            </p>

            <div className="col-span-1 w-[100%] mx-auto mt-2">
                <AccessibleCarousel
                    photos={d.recognition.photos}
                    ariaLabel="AIAA SciTech 2026 conference photos"
                />
            </div>
        </div>

        {d.recognition.publications && d.recognition.publications.length > 0 && (
            <div className="flex flex-col gap-3 mt-8 md:mt-12">
                {d.recognition.publications.map((paper) => (
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
        )}
    </section>
);

export default TurbopumpRecognition;
