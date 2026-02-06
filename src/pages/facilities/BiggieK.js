

import ContentWrapper from '../../components/layout/ContentWrapper';
import PageWrapper from '../../components/layout/PageWrapper';
import Banner from '../../components/banner/Banner';
import SpecsTable from '../../components/projects/SpecsTable';
import AccessibleCarousel from '../../components/carousel/AccessibleCarousel';

import { biggiekData as data } from '../../json/projects';

const BiggieK = () => {
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
                            <h2 className="font-display2 text-white mt-4 md:mt-12 text-md md:text-lg lg:text-xl">
                                {data.subtitle}
                            </h2>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-12 md:space-y-18">
                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase mt-10 md:mt-4">
                            {data.photo_reel1.title}
                        </h2>
                        
                         <h2 className="col-span-1 font-display2 text-md md:text-lg text-white text-left mt-2">
                                {data.photo_reel1.blurb}
                            </h2>
                        <div className="md:w-[50%] mt-6 mx-auto">
                            <AccessibleCarousel
                                photos={data.photo_reel1.photos}
                                ariaLabel={`${data.photo_reel1.title} images`}
                            />
                           
                        </div>
                    </div>                    
                    <SpecsTable table={data.specs_table} title="Stats" />
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default BiggieK;