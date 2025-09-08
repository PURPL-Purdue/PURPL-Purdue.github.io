
import DividerLine from '../components/layout/DividerLine.js';
import DisplayGrid from '../components/landing/DisplayGrid.js';
import Button from '../components/button/Button.js';
import ContentWrapper from '../components/layout/ContentWrapper.js';
import PageWrapper from '../components/layout/PageWrapper.js';
import SponsorsMiniView from '../components/sponsors/SponsorsMiniView.js';
import { landingData } from '../json/landing.js';
import { contactInfo } from '../json/shared.js';

const Landing = () => {
    return (
        <PageWrapper>
            <div className="relative h-[380px] md:min-h-[700px] lg:min-h-[720px] bg-cover object-none bg-plume-background">
                <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                <div className="h-[450px] md:min-h-[700px] lg:min-h-[720px] ">
                    <div className="absolute left-8 bottom-12 pr-12 md:left-12 lg:left-36 md:bottom-24">
                        <div className="flex flex-col text-left pt-auto">
                            <img className="h-[100px] md:h-[200px] lg:h-[270px]" src="/images/logo/PURPL_wordmark_white.png" alt="White PURPL wordmark"></img>
                            <h2 className="font-display2-bold text-white mt-4 md:mt-12 text-md md:text-3xl">
                                Rocket science propelled by students.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <ContentWrapper>
                <div className="w-full h-full">
                    <div className="h-full flex flex-col space-y-6">
                        <div className="bg-gradient-to-br from-old-gold to-stardust from-30% h-full w-full">
                            <div className="flex flex-col m-1 items-center h-fit">
                                <div className="w-full bg-dusk py-4 px-auto space-y-1">
                                    <h2 className="font-display2 text-md md:text-xl text-white text-balance">Want to see some fire? Check out our latest video:</h2>
                                </div>
                            </div>
                        </div>
                        <iframe className="mx-auto lg:w-[560px] lg:h-[315px]" src="https://www.youtube.com/embed/-OZBZcnQC2E?si=eU20ZBd7vMnvsXiZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>
                    <div className="flex flex-col space-y-8 py-8 lg:py-12 lg:grid lg:grid-cols-2 lg:items-center w-full lg:justify-items-end">
                        <div className={`flex flex-col justify-start text-left lg:pr-24 my-auto space-y-4 lg:space-y-8`}>
                            <h1 className="font-display-bold text-3xl lg:text-5xl text-white leading-normal pb-3">Purdue's Dedicated Propulsion Club</h1>
                            <h2 className="font-display2 text-md md:text-xl text-white text-balance">
                                We design, build, and test engines. Check out the projects tab to see what we're cooking up.
                            </h2>
                        </div>
                        <img src="/images/DSC/DSC01674_color_graded.jpg" alt="Student works on project" />
                    </div>
                </div>
                <DividerLine />
                <div className="py-8 lg:py-12">
                    <h1 className="font-display-bold text-3xl lg:text-5xl text-white mb-4 lg:mb-12 text-balance leading-normal">Quick Stats</h1>
                    <DisplayGrid />
                </div>
                <DividerLine />
                <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-2 lg:items-center w-full py-8 lg:py-12 lg:justify-items-end">
                    <img className="w-min" src="/images/DSC/DSC01120-2_color_graded.jpg" alt="Students stand in front of whiteboard" />
                    <div className={`flex flex-col justify-start text-left lg:pl-24 my-auto`}>
                        <h1 className="font-display-bold text-3xl lg:text-5xl text-white mb-4 lg:mb-12 text-balance">Empowering Engineers</h1>
                        <h2 className="font-display2 text-md md:text-xl text-white mb-6 lg:mb-8 text-balance">
                            We enable students interested in propulsion to gain hands-on experience in a collaborative environment.
                        </h2>
                        <Button
                            text="Join the Discord"
                            link="https://discord.gg/cC6FYAu93W"
                            isNavLink={false}
                            className="w-min"
                        />
                    </div>
                </div>
                <DividerLine />
                <div className="py-8 lg:py-12">
                    <p className="font-display-bold text-3xl lg:text-5xl text-white mb-4 lg:mb-12 text-balance leading-normal">Upcoming Events</p>
                    <iframe src={landingData.calendar.embed_link} className="border-0 w-full h-[400px] md:h-[500px] max-w-[900px] lg:h-[600px] mx-auto mt-4 lg:mt-8"
                        title="PURPL Google Calendar">
                    </iframe>
                    <p className="text-white font-display2 mt-6 text-md md:text-xl">Can't see the calendar? <a className="hover:text-stardust underline" href={landingData.calendar.embed_link}>Try this link.</a></p>

                </div>
                <DividerLine />
                <div className="py-8 lg:py-12">
                    <h1 className="font-display-bold text-3xl lg:text-5xl text-white text-balance leading-normal mb-4 lg:mb-12">Sponsors</h1>
                    <div className="w-full bg-dusk overflow-x-auto h-min mb-4 ">
                        <SponsorsMiniView />
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
};

export default Landing;