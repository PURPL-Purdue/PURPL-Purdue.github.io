import Banner from '../components/banner/Banner';
import PageWrapper from '../components/layout/PageWrapper';
import Profile from '../components/team/Profile';
import SmallerProfile from '../components/team/SmallerProfile.js';

import { contactInfo, sponsors } from '../json/shared.js';
import SponsorsMiniView from '../components/sponsors/SponsorsMiniView.js';
import ContentWrapper from '../components/layout/ContentWrapper.js';

function Sponsors() {
    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance leading-normal">
                                Our Sponsors
                            </h1>
                            <h2 className="font-display2 text-white mt-4 md:mt-12 text-md md:text-lg lg:text-xl">
                                Interested in our mission?
                                <br></br>
                                Email us at <a className="underline" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
                            </h2>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="bg-gradient-to-br from-old-gold to-stardust from-30% h-full w-full mb-16">
                    <div className="flex flex-col m-1 items-center h-fit">
                        <div className="w-full bg-dusk py-4 px-auto space-y-4 flex flex-col items-center">
                            <h2 className="font-display2 text-md md:text-xl text-white text-balance">
                                Read about our partnership with Protolabs <a className="underline" target="_blank" href={`${sponsors.featured.link}`}>here</a>.
                            </h2>
                            <div>
                                <a href={`${sponsors.featured.link}`} target="_blank" >
                                    <img className="max-w-[400px] md:max-w-[550px] lg:max-w-[700px] mx-4" src={`${sponsors.featured.image}`} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <SponsorsMiniView />
            </ContentWrapper>
        </PageWrapper>
    );
}

export default Sponsors;
