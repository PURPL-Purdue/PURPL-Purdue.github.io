import Banner from '../components/banner/Banner';
import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/button/Button.js';

import { contactInfo } from '../json/contact.js';
import { sponsors } from '../json/sponsors.js';
import ContentWrapper from '../components/layout/ContentWrapper.js';

const TIERS = [
    { key: "platinum", label: "Platinum Tier" },
    { key: "gold", label: "Gold Tier" },
    { key: "silver", label: "Silver Tier" },
];

function SponsorTier({ label, sponsorList }) {
    return (
        <div>
            <h2 className="font-display-bold text-3xl lg:text-4xl text-white text-center mb-3">
                {label}
            </h2>
            <div className="h-1 max-w-lg mx-auto w-full bg-gradient-to-r from-old-gold to-stardust mb-6" />
            <div className="flex justify-center items-center md:space-x-8 mb-8 flex-wrap space-y-8">
                {sponsorList.map((sponsor) =>
                    sponsor.image ? (
                        <a
                            key={sponsor.link}
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                            style={{ height: `${sponsor.display_height}px` }}
                        >
                            <img
                                src={sponsor.image}
                                alt={sponsor.img_alt}
                                className="object-contain"
                                style={{ height: `${sponsor.display_height}px` }}
                            />
                        </a>
                    ) : (
                        <a
                            key={sponsor.link}
                            className="h-8 text-white font-display2-bold pt-2"
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {sponsor.name}
                        </a>
                    )
                )}
            </div>
        </div>
    );
}

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
                <div className="flex flex-col space-y-8">
                    <div className="w-full max-w-[800px] bg-dusk h-min flex flex-col space-y-5">
                        {TIERS.map(({ key, label }) => {
                            const tierSponsors = Object.values(sponsors).filter(s => s.tier === key);
                            return (
                                <SponsorTier key={key} label={label} sponsorList={tierSponsors} />
                            );
                        })}
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
