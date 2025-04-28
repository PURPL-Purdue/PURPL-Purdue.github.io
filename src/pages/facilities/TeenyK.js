

import ContentWrapper from '../../components/layout/ContentWrapper';
import PageWrapper from '../../components/layout/PageWrapper';
import Banner from '../../components/banner/Banner';
import SpecsTable from '../../components/projects/SpecsTable';

import { teenykData } from '../../json/projects';

const TeenyK = () => {
    return (
        <PageWrapper>
        <Banner>
            <div className="bg-gradient-background bg-cover bg-center h-full ">
                <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                    <div className="flex flex-col text-center">
                        <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                            {teenykData.title}
                        </h1>
                        <h2 className="font-display text-white mt-4 md:mt-12 text-md md:text-xl lg:text-2xl">
                            {teenykData.subtitle}
                        </h2>
                    </div>
                </div>
            </div>
        </Banner>
        <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-12 md:space-y-18">
                    <p className="text-white text-lg md:text-xl font-display text-left lg:mt-16">{teenykData.blurb}</p>
                    <SpecsTable table={teenykData.specs_table} title="Stats" />
                </div>
            </ContentWrapper>
    </PageWrapper>
    );
};

export default TeenyK;