
import SpecsTable from '../../components/projects/SpecsTable';
import ContentWrapper from '../../components/layout/ContentWrapper';
import PageWrapper from '../../components/layout/PageWrapper';
import Banner from '../../components/banner/Banner';
import AccessibleCarousel from '../../components/carousel/AccessibleCarousel';

import { turbojetData } from '../../json/projects';

const Turbojet = () => {
    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                                {turbojetData.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-12 md:space-y-18">
                    {/* About the Team section with intro blurb */}
                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase mt-10 md:mt-4">
                            {turbojetData.about_team.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                            <p className="col-span-1 text-white text-md md:text-lg font-display2 text-left">{turbojetData.blurb}</p>
                            <div className="col-span-1 w-[100%] mx-auto mt-2">
                                <AccessibleCarousel
                                    photos={turbojetData.about_team.photos}
                                    ariaLabel="Turbojet team photos"
                                />
                            </div>
                        </div>
                    </div>
                    {/* AIAA Conference section */}
                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase">
                            {turbojetData.aiaa.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                            <p className="col-span-1 font-display2 text-md md:text-lg text-white text-left">
                                {turbojetData.aiaa.blurb}
                            </p>
                            <div className="col-span-1 w-[100%] mx-auto mt-2">
                                <AccessibleCarousel
                                    photos={turbojetData.aiaa.photos}
                                    ariaLabel="AIAA SciTech 2026 conference photos"
                                />
                            </div>
                        </div>
                    </div>
                    <SpecsTable table={turbojetData.specs_table} title="Engine Stats" />
                    <p className="text-white text-md md:text-lg font-display2 text-left">
                        {turbojetData.desc_1}
                    </p>
                    <div className="w-[100%] md:w-[75%] mx-auto mt-8">
                        <AccessibleCarousel
                            photos={turbojetData.photo_reel.photos}
                            ariaLabel="Turbojet project gallery"
                        />
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Turbojet;
