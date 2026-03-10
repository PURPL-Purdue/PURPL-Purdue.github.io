import PageWrapper from "../../components/layout/PageWrapper";
import Banner from "../../components/banner/Banner";
import { ttpData } from "../../json/projects";
import ContentWrapper from "../../components/layout/ContentWrapper";
import AccessibleCarousel from '../../components/carousel/AccessibleCarousel';
import DividerLine from '../../components/layout/DividerLine.js';

const TTP = () => {
    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                                {ttpData.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-8 md:space-y-12">
                    <div className="space-y-8 md:space-y-12">
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase mt-10 md:mt-4">{ttpData.section_1.title}</h2>
                        <div className="space-y-4">
                            <div className="w-[100px] ">
                                <DividerLine />
                            </div>
                            <p className="font-display2 text-md md:text-lg text-white text-balance text-left">
                                {ttpData.section_1.desc}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-[100px] ">
                                <DividerLine />
                            </div>
                            <p className="font-display2 text-md md:text-lg text-white text-balance text-left">
                                {ttpData.section_1.desc2}
                            </p>
                        </div>
                    </div>
                    {/* About the Team section with intro blurb */}
                    <div className="space-y-3">
                        <div className="col-span-1 w-full md:w-[60%] mx-auto mt-2">
                            <AccessibleCarousel
                                photos={ttpData.about_team.photos}
                                ariaLabel="Turbojet team photos"
                            />
                        </div>
                        <p className="font-display2 text-sm md:text-md text-white italic text-center">The Fall 2025 team!</p>
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default TTP;