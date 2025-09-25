import Banner from '../components/banner/Banner';
import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/button/Button.js';

import { contactInfo, sponsors } from '../json/shared.js';
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
                                Sponsors
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="bg-gradient-to-br from-old-gold to-stardust from-30% h-full w-full lg:w-[600px] mx-auto mb-16">
                    <div className="flex flex-col m-1 items-center h-fit">
                        <div className="w-full bg-dusk py-4 px-auto space-y-4 flex flex-col items-center">
                            <h2 className="font-display2 text-md md:text-xl text-white text-balance">
                                Read about our partnership with<br></br> Protolabs <a className="underline" target="_blank" rel="noopener noreferrer" href={`${sponsors.featured.link}`}>here</a>.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-8">
                    <div className="w-full max-w-[800px] bg-dusk h-min flex flex-col space-y-5">
                        <div>
                            <h2 className="font-display-bold text-3xl lg:text-4xl text-white text-center mb-3">
                                Platinum Tier
                            </h2>
                            <div className="h-1 max-w-lg mx-auto bg-gradient-to-r from-old-gold to-stardust mb-6" />
                            <div className="flex justify-center items-center space-x-8 mb-8">
                                <a className="h-24" href={sponsors.protolabs.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.protolabs.image} alt={sponsors.protolabs.img_alt} className="h-24 object-contain" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-display-bold text-3xl lg:text-4xl text-white text-center mb-3">
                                Gold Tier
                            </h2>
                            <div className="h-1 max-w-lg mx-auto w-full bg-gradient-to-r from-old-gold to-stardust mb-6" />
                            <div className="flex justify-center items-center space-x-8 mb-8">
                                <a className="h-24" href={sponsors.pepc.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.pepc.image} alt={sponsors.pepc.img_alt} className="h-24 object-contain" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-display-bold text-3xl lg:text-4xl text-white text-center mb-3">
                                Silver Tier
                            </h2>
                            <div className="h-1 max-w-lg mx-auto w-full bg-gradient-to-r from-old-gold to-stardust mb-6" />
                            <div className="flex justify-center items-center space-x-8 mb-8 flex-wrap space-y-8">
                                <a className="h-16" href={sponsors.polymaker.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.polymaker.image} alt={sponsors.polymaker.img_alt} className="h-16 object-contain" />
                                </a>
                                <a className="h-16" href={sponsors.ansys.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.ansys.image} alt={sponsors.ansys.img_alt} className="h-16 object-contain" />
                                </a>
                                <a className="h-16" href={sponsors.pesc.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.pesc.image} alt={sponsors.pesc.img_alt} className="h-16 object-contain" />
                                </a>
                                <a className="h-8" href={sponsors.bidc.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.bidc.image} alt={sponsors.bidc.img_alt} className="h-8 object-contain" />
                                </a>
                                <a className="h-8" href={sponsors.cfturbo.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.cfturbo.image} alt={sponsors.cfturbo.img_alt} className="h-8 object-contain" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <h2 className="font-display2 text-md md:text-xl text-white">
                        Want to sponsor us? Email us at <a className="underline" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.<br></br>
                        We would love your support!
                    </h2>
                    <Button
                        text="View our corporate newsletter"
                        link="/PURPL-Corporate-Newsletter-25-26.pdf"
                        isNavLink={false}
                        className="mx-auto mt-6"
                    />
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
}

export default Sponsors;
