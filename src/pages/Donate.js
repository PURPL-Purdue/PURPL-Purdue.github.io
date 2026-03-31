import PageWrapper from '../components/layout/PageWrapper';
import Banner from '../components/banner/Banner';
import ContentWrapper from '../components/layout/ContentWrapper';
import Button from '../components/button/Button';
import { donateInfo } from '../json/donate';
import { NavLink } from 'react-router-dom';

const Donate = () => {
    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance leading-normal">
                                Make a Donation
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[950px] flex flex-col w-full space-y-8 md:space-y-10">
                    <div className="flex flex-col items-center space-y-8 md:space-y-14 my-4 lg:my-8">
                        <p className="text-white font-display2 text-md md:text-xl text-center text-balance">
                            Thanks so much for your interest in making a donation. Here's how you can support us:
                        </p>
                        <p className="text-white font-display2 text-md md:text-xl text-center text-balance">
                            Want to become a sponsor instead? <NavLink to="/contact" className="hover:text-boilermaker-gold underline text-stardust">Contact us directly.</NavLink>
                        </p>

                        <div className="w-full max-w-[700px] mx-auto space-y-12">
                            {/* Online Donation */}
                            <div>
                                <h2 className="font-display-bold text-2xl lg:text-3xl text-white mb-4 text-center">
                                    Donating Online
                                </h2>
                                <div className="h-1 max-w-sm mx-auto bg-gradient-to-r from-old-gold to-stardust mb-6" />
                                <ol className="ml-6 space-y-3 text-white font-display2 text-sm md:text-lg">
                                    <li>
                                        1. Donate through the <a href={donateInfo.donationLink} target="_blank" rel="noopener noreferrer" className="hover:text-boilermaker-gold underline text-stardust">Giving to Purdue website</a>.
                                    </li>
                                    <li>
                                        2. Specify the amount you'd like to donate in the white "Amount" box.
                                    </li>
                                    <li>
                                        3. If you would like to donate to a specific team (ie. Turbopump, E-Prop, etc.), select the box next to "Additional Comments/Special Instructions". Describe where your donation should go in the comment box.
                                    </li>
                                    <li>
                                        4. Choose "Proceed to Payment" &mdash; Thank you for supporting the Purdue Undergraduate Rocket Propulsion Laboratory!
                                    </li>
                                </ol>
                            </div>

                            {/* Mail Donation */}
                            <div>
                                <h2 className="font-display-bold text-2xl lg:text-3xl text-white mb-4 text-center">
                                    Donating by Mail
                                </h2>
                                <div className="h-1 max-w-sm mx-auto bg-gradient-to-r from-old-gold to-stardust mb-6" />
                                <ol className="ml-6 space-y-3 text-white font-display2 text-sm md:text-lg">
                                    <li>
                                        1. Make checks payable to "Undergraduate Rocket Propulsion Laboratory at Purdue".
                                    </li>
                                    <li>
                                        2. Mail to "Business Office for Student Organizations", 1198 Third St, Room 365, West Lafayette, IN 47907, United States
                                    </li>
                                    <li>
                                        3. If you wish to donate to a specific team, include a note with the check &mdash; Thank you for supporting the Purdue Undergraduate Rocket Propulsion Laboratory!
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <Button
                            text="Donate Now"
                            link={donateInfo.donationLink}
                            isNavLink={false}
                            className="mx-auto mt-4"
                        />
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Donate;
