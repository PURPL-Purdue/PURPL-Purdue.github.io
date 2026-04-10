import PageWrapper from "../../components/layout/PageWrapper";
import Banner from "../../components/banner/Banner";
import { pulsejetData } from "../../json/projects";
import ContentWrapper from "../../components/layout/ContentWrapper";
import AccessibleCarousel from "../../components/carousel/AccessibleCarousel";

const Pulsejet = () => {
    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-row text-center justify-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                                {pulsejetData.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-8 md:space-y-12">

                    {/* About the Team section with intro blurb */}
                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase mt-10 md:mt-4">
                            {pulsejetData.about_team.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                            <p className="col-span-1 text-white text-md md:text-lg font-display2 text-left">{pulsejetData.about_team.blurb}</p>
                            <div className="col-span-1 w-[100%] mx-auto mt-2">
                                <AccessibleCarousel
                                    photos={pulsejetData.about_team.photos}
                                    ariaLabel="pulsejet team photos"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Pulsejet;