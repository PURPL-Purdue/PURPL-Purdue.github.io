import PageWrapper from "../../components/layout/PageWrapper";
import Banner from "../../components/banner/Banner";
import ComingSoon from "../ComingSoon";
import { ttpData } from "../../json/projects";

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
            <ComingSoon />
        </PageWrapper>
    );
};

export default TTP;