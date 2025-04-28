
import SpecsTable from '../../components/projects/SpecsTable';
import ContentWrapper from '../../components/layout/ContentWrapper';
import PageWrapper from '../../components/layout/PageWrapper';
import Banner from '../../components/banner/Banner';

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
                    <p className="text-white text-lg md:text-xl font-display text-left lg:mt-16">{turbojetData.blurb}</p>
                    <SpecsTable table={turbojetData.specs_table} title="Engine Stats" />
                    <p className="text-white text-lg md:text-xl font-display text-left">
                        {turbojetData.desc_1}
                    </p>

                    <div className="flex flex-row flex-wrap w-full justify-items-start">
                        {turbojetData.photo_reel.map((photo, index) => (
                            <img key={index} className="w-1/2 md:w-1/3 pr-2 pt-2" src={photo.src} alt={photo.alt} />
                        ))}
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Turbojet;