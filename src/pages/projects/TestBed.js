
import SpecsTable from '../../components/projects/SpecsTable';
import ContentWrapper from '../../components/layout/ContentWrapper';
import PageWrapper from '../../components/layout/PageWrapper';
import Banner from '../../components/banner/Banner';
import AccessibleCarousel from '../../components/carousel/AccessibleCarousel';
import { testbedData as data } from '../../json/projects';
import { testbed_selectedMedia } from '../../json/gallery';

const TestBed = () => {
    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                                {data.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-8 md:space-y-12">
                    <div className="w-full z-0 mb-[190px] md:mb-0 lg:mb-0">
                        <div className="w-full relative min-h-min">
                            <div className="w-[90%] md:w-[70%] lg:w-[70%] relative top-0 left-0">
                                <img src={data.featured.photo.src} alt={data.featured.photo.alt} />
                            </div>
                            <div className="bg-moon/70 p-4 lg:p-6 max-w-[90%] w-[350px] md:w-[310px] lg:w-[40%] absolute top-[92%] md:top-[8%] lg:top-[6%] right-2 md:right-0 z-10">
                                <p className="text-white font-display2 text-sm md:text-lg text-left">{data.featured.blurb}</p>
                            </div>
                        </div>
                    </div>

                    {/* About the Team section */}
                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase mt-10 md:mt-4">
                            {data.about_team.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                            <p className="col-span-1 font-display2 text-md md:text-lg text-white text-left">
                                {data.about_team.blurb}
                            </p>
                            <div className="col-span-1 w-[100%] mx-auto mt-2">
                                <AccessibleCarousel
                                    photos={data.about_team.photos}
                                    ariaLabel="Testbed team photos"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Testing - June '25 section with overlay blurb */}
                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase mt-10 md:mt-4">{data.test_2025.header}</h2>
                        <div className="w-[100%] md:w-[75%] mx-auto mb-6">
                            <AccessibleCarousel
                                photos={testbed_selectedMedia}
                                ariaLabel="Testbed hotfire test photos"
                            />
                        </div>
                        <p className="text-white font-display2 text-sm md:text-lg text-left">{data.test_2025.desc}</p>
                    </div>
                    <SpecsTable table={data.specs_table} title="Engine Stats" />
                    <div className="w-[100%] md:w-[75%] mx-auto">
                        <AccessibleCarousel
                            photos={data.photo_reel.photos}
                            ariaLabel={`${data.photo_reel.title} images`}
                        />
                    </div>
                    {/* Technical Details - Expandable Sections */}
                    <div className="space-y-4">
                        <h2 className="font-display-bold uppercase text-3xl lg:text-5xl text-white text-left mb-3">Technical Details</h2>

                        <details className="group border border-stardust/30 rounded-lg">
                            <summary className="flex items-center justify-between cursor-pointer p-4 lg:p-6 text-white font-display-bold text-xl lg:text-2xl hover:bg-stardust/10 transition-colors focus:outline-2 focus:outline-stardust focus:outline-offset-2">
                                <span>{data.header_1}</span>
                                <span className="ml-4 transition-transform group-open:rotate-180" aria-hidden="true">▼</span>
                            </summary>
                            <div className="p-4 lg:p-6 pt-0">
                                <p className="font-display2 text-md md:text-lg text-white text-balance text-left">
                                    {data.desc_1}
                                </p>
                            </div>
                        </details>

                        <details className="group border border-stardust/30 rounded-lg">
                            <summary className="flex items-center justify-between cursor-pointer p-4 lg:p-6 text-white font-display-bold text-xl lg:text-2xl hover:bg-stardust/10 transition-colors focus:outline-2 focus:outline-stardust focus:outline-offset-2">
                                <span>{data.header_2}</span>
                                <span className="ml-4 transition-transform group-open:rotate-180" aria-hidden="true">▼</span>
                            </summary>
                            <div className="p-4 lg:p-6 pt-0">
                                <p className="font-display2 text-md md:text-lg text-white text-balance text-left">
                                    {data.desc_2}
                                </p>
                            </div>
                        </details>

                        <details className="group border border-stardust/30 rounded-lg">
                            <summary className="flex items-center justify-between cursor-pointer p-4 lg:p-6 text-white font-display-bold text-xl lg:text-2xl hover:bg-stardust/10 transition-colors focus:outline-2 focus:outline-stardust focus:outline-offset-2">
                                <span>{data.augmented_spark_igniter.header}</span>
                                <span className="ml-4 transition-transform group-open:rotate-180" aria-hidden="true">▼</span>
                            </summary>
                            <div className="p-4 lg:p-6 pt-0">
                                <p className="font-display2 text-md md:text-lg text-white text-balance text-left">
                                    {data.augmented_spark_igniter.desc}
                                </p>
                            </div>
                        </details>

                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default TestBed;