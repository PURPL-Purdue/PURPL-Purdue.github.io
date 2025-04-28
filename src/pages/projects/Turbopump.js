
import SpecsTable from '../../components/projects/SpecsTable';
import ContentWrapper from '../../components/layout/ContentWrapper';
import PageWrapper from '../../components/layout/PageWrapper';
import Banner from '../../components/banner/Banner';

import { turbopumpData } from '../../static/projects';

const Turbopump = () => {

    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                                {turbopumpData.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-12 md:space-y-18">
                    <p className="text-white text-lg md:text-xl font-display text-left lg:mt-16">{turbopumpData.blurb}</p>
                    <SpecsTable table={turbopumpData.specs_table} title="Engine Stats" />
                    <div className="flex flex-col space-y-8 lg:flex-row lg:items-center w-full">
                        <img className="max-w-[200px]" src={turbopumpData.image_1} alt={turbopumpData.image_1_alt} />
                        <div className="flex flex-col w-auto justify-start text-left lg:pl-12 my-auto">
                            <h2 className="font-display text-lg md:text-xl text-white text-balance">
                                {turbopumpData.desc_1}
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-8 lg:flex-row lg:items-center w-full">
                        <img className="max-w-[200px]" src={turbopumpData.image_2} alt={turbopumpData.image_2_alt} />
                        <div className="flex flex-col w-auto justify-start text-left lg:pl-12 my-auto">
                            <h2 className="font-display text-lg md:text-xl text-white text-balance">
                                {turbopumpData.desc_2}
                            </h2>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Turbopump;