import AccessibleCarousel from '../../../components/carousel/AccessibleCarousel';
import SpecsTable from '../../../components/projects/SpecsTable';
import { rdeData } from '../../../json/projects';

// DEIMOS-specific content for the RDE page, shown when DEIMOS is the selected
// profile. Answers: what is DEIMOS (intro) and what is the team doing now
// (status). DEIMOS has no roadmap-equivalent content, so it ends after specs.
const DEIMOS = () => {
    const data = rdeData.deimosData;

    return (
        <>
            {/* Main intro / media — the one place that explains what DEIMOS is */}
            <div className="flex flex-col mx-auto space-x-2 lg:space-x-4">
                <div className="w-full z-0 mb-[200px] md:mb-[140px] md:mb-0 lg:mb-0">
                    <div className="w-full relative min-h-min">
                        <div className="w-[70%] md:w-[60%] lg:w-[50%] relative top-0 left-0">
                            <div className="col-span-1 w-[100%] mx-auto mt-2">
                                <AccessibleCarousel
                                    photos={data.featured.photos}
                                    ariaLabel={`${data.title} featured images`}
                                />
                            </div>
                        </div>

                        <div className="bg-moon/80 p-4 lg:p-6 max-w-[90%] w-[350px] md:w-[350px] lg:w-[52%] absolute top-[95%] md:top-[8%] lg:top-[10%] right-2 md:right-0 z-10">
                            <p className="font-display2 text-stardust text-sm uppercase mb-2">{data.subtitle}</p>
                            <p className="text-white font-display2 text-sm md:text-lg text-left">{data.featured.blurb}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Current status — current work only */}
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-4 w-full">
                <div className="border-2 border-white/40 p-5 md:p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1 bg-stardust"></div>
                    <p className="font-display2 text-stardust text-sm uppercase mb-2">Selected profile</p>
                    <h2 className="font-display-bold text-3xl md:text-4xl text-white uppercase mb-4">{data.dashboard_title}</h2>
                    <p className="font-display2 text-white/80 text-sm md:text-md leading-7">{data.dashboard_blurb}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {data.dashboard_cards.map(([label, value], index) => (
                        <div
                            key={label}
                            className={
                                "border-2 border-white/40 p-4 " +
                                (index === 0 || index === 3 ? "bg-moon/30" : "")
                            }
                        >
                            <p className="font-display-bold text-stardust text-2xl">{label}</p>
                            <p className="font-display2 text-white text-sm mt-2">{value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Status / project media */}
            <div className="w-[100%] md:w-[75%] mx-auto">
                <AccessibleCarousel
                    photos={data.dashboard_photos}
                    ariaLabel={`${data.title} status and project photos`}
                />
            </div>

            <SpecsTable table={data.specs_table} title={`${data.title} Engine Stats`} />
        </>
    );
};

export default DEIMOS;
