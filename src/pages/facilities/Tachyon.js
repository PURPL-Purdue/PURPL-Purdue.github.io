
import ContentWrapper from '../../components/layout/ContentWrapper';
import PageWrapper from '../../components/layout/PageWrapper';
import Banner from '../../components/banner/Banner';
import Button from '../../components/button/Button';

import { tachyonData } from '../../json/facilities';

const Tachyon = () => {
    return (

        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                                {tachyonData.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[950px] flex flex-col space-y-8 md:space-y-10">
                    <div className="flex flex-col mx-auto space-x-2 lg:space-x-4">
                        <div className="flex flex-col h-full pt-12 lg:pt-16 items-center space-y-6 md:space-y-12">
                            <p className="text-stardust text-lg md:text-4xl font-display">More info on the way.</p>
                            <Button text="Return Home" link="/" isNavLink={true} />
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Tachyon;