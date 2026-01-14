import PageWrapper from "../../components/layout/PageWrapper";
import Banner from "../../components/banner/Banner";
import { airbreathingData } from "../../json/projects";
import ContentWrapper from "../../components/layout/ContentWrapper";

const AirBreathing = () => {
    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-row text-center justify-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                                {airbreathingData.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-8 md:space-y-12">
                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left uppercase mt-10 md:mt-4 mb-3">{airbreathingData.section_1.title}</h2>
                        <div className="flex flex-col space-y-4 md:grid md:grid-cols-3 md:items-center">
                            <h2 className="col-span-3 font-display2 text-md md:text-lg text-white text-balance text-left">
                                {airbreathingData.section_1.desc}
                            </h2>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default AirBreathing;