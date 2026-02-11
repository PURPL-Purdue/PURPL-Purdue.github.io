import Banner from '../components/banner/Banner';
import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/button/Button.js';

import { contactInfo } from '../json/contact.js';
import { sponsors } from '../json/sponsors.js';
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
                            <div className="flex justify-center items-center md:space-x-8 mb-8 flex-wrap space-y-8">
                                <a className="h-24" href={sponsors.protolabs.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.protolabs.image} alt={sponsors.protolabs.img_alt} className="h-24 object-contain" />
                                </a>
                                <a className="h-12" href={sponsors.marotta.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.marotta.image} alt={sponsors.marotta.img_alt} className="h-12 object-contain" />
                                </a>
                                <a className="h-28 mr-8" href={sponsors.national_instruments.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.national_instruments.image} alt={sponsors.national_instruments.img_alt} className="h-20 md:h-28 object-contain" />
                                </a>
                                <a className="h-24" href={sponsors.notion.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.notion.image} alt={sponsors.notion.img_alt} className="h-16 md:h-24 object-contain" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-display-bold text-3xl lg:text-4xl text-white text-center mb-3">
                                Gold Tier
                            </h2>
                            <div className="h-1 max-w-lg mx-auto w-full bg-gradient-to-r from-old-gold to-stardust mb-6" />
                            <div className="flex justify-center items-center md:space-x-8 mb-8 flex-wrap space-y-8">
                                <a className="h-16" href={sponsors.honeywell.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.honeywell.image} alt={sponsors.honeywell.img_alt} className="h-8 mt-1 object-contain" />
                                </a>
                                <a className="h-16 text-white font-display2-bold pt-1 md:text-lg text-sm" href={sponsors.pepc.link} target="_blank" rel="noopener noreferrer">
                                    {sponsors.pepc.name}
                                </a>
                                  <a className="h-16" href={sponsors.l3harris.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.l3harris.image} alt={sponsors.l3harris.img_alt} className="h-12 md:h-16 mt-1 object-contain" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-display-bold text-3xl lg:text-4xl text-white text-center mb-3">
                                Silver Tier
                            </h2>
                            <div className="h-1 max-w-lg mx-auto w-full bg-gradient-to-r from-old-gold to-stardust mb-6" />
                            <div className="flex justify-center items-center md:space-x-8 mb-8 flex-wrap space-y-8">
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
                                <a className="h-8" href={sponsors.three_d_connexion.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.three_d_connexion.image} alt={sponsors.three_d_connexion.img_alt} className="h-8 mt-1 object-contain" />
                                </a>
                                <a className="h-8" href={sponsors.purdue_mechanical_eng.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.purdue_mechanical_eng.image} alt={sponsors.purdue_mechanical_eng.img_alt} className="h-8 mt-1 object-contain" />
                                </a>
                                <a className="h-8 text-white font-display2-bold pt-2" href={sponsors.snyder.link} target="_blank" rel="noopener noreferrer">
                                    {sponsors.snyder.name}
                                </a>
                                <a className="h-12" href={sponsors.aea.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.aea.image} alt={sponsors.aea.img_alt} className="h-12 mt-1 object-contain" />
                                </a>
                                <a className="h-12" href={sponsors.proportion_air.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.proportion_air.image} alt={sponsors.proportion_air.img_alt} className="h-12 mt-1 object-contain" />
                                </a>
                                <a className="h-12" href={sponsors.seco_seals.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.seco_seals.image} alt={sponsors.seco_seals.img_alt} className="h-12 mt-1 object-contain" />
                                </a>
                                <a className="h-12" href={sponsors.msm.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.msm.image} alt={sponsors.msm.img_alt} className="h-12 mt-1 object-contain" />
                                </a>
                                <a className="h-12" href={sponsors.interstate_am.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.interstate_am.image} alt={sponsors.interstate_am.img_alt} className="h-12 mt-1 object-contain" />
                                </a>
                                <a className="h-12" href={sponsors.precision_piping.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsors.precision_piping.image} alt={sponsors.precision_piping.img_alt} className="h-12 mt-1 object-contain" />
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
