
import DividerLine from '../components/layout/DividerLine.js';
import DisplayGrid from '../components/landing/DisplayGrid.js';
import Button from '../components/button/Button.js';
import ContentWrapper from '../components/layout/ContentWrapper.js';
import PageWrapper from '../components/layout/PageWrapper.js';
import Sponsors from '../components/Sponsors.js';
import { landingData } from '../json/landing.js';
import { contactInfo } from '../json/shared.js';
import Carousel from 'react-bootstrap/Carousel';

const Landing = () => {
    return (
        <PageWrapper>
            <div className="relative h-[380px] md:min-h-[700px] lg:min-h-[650px] bg-cover object-none bg-gradient-background">
                <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                <div className="absolute left-8 bottom-12 pr-12 md:left-12 lg:left-36 md:bottom-56">
                    <div className="flex flex-col text-left pt-auto">
                        <img className="h-[100px] md:h-[200px] lg:h-[170px] mr-auto" src="/images/logo/PURPL_wordmark_white.png" alt="White PURPL wordmark"></img>
                        <h2 className="font-display2-bold text-white mt-4 md:mt-6 text-md md:text-3xl">
                            {landingData.tagline}
                        </h2>
                    </div>
                </div>
                <div className="contained-bootstrap absolute h-fit -bottom-20 left-36 ">
                    {/* Need to include data-bs-theme=light attribute to apply Bootstrap CSS classes */}
                    <div className="">
                        <Carousel className="h-fit-content w-[450px] mx-auto bg-white text-left" data-bs-theme="dark"
                            controls={true}
                            slide={true}
                            indicators={false}
                            touch={true}>
                            {landingData.project_carousel.map((item, index) =>
                            (<Carousel.Item className="py-4" key={index}>
                                <img
                                    className="h-[150px] mx-auto"
                                    src={item.src}
                                    alt={item.alt}
                                />
                                <div className="ml-12">
                                    <h3 className="text-lg md:text-xl font-display-bold text-dusk uppercase mt-2">{item.title}</h3>
                                    <p className="text-sm md:text-md font-display2 text-dusk">{item.blurb}</p>
                                </div>
                            </Carousel.Item>)
                            )}
                        </Carousel>
                    </div>
                </div>

            </div>
            <ContentWrapper>
                <div className="w-full h-full">
                    <div className="flex flex-col space-y-8 py-8 lg:py-12 lg:grid lg:grid-cols-2 lg:items-center w-full lg:justify-items-end">
                        <div className={`flex flex-col justify-start text-left lg:pr-24 my-auto space-y-4 lg:space-y-8`}>
                            <h1 className="font-display-bold text-3xl lg:text-5xl text-white leading-normal pb-3">Purdue's Dedicated Propulsion Club</h1>
                            <h2 className="font-display2 text-lg md:text-2xl text-white text-balance">
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
                        <h2 className="font-display2 text-lg md:text-2xl text-white mb-6 lg:mb-8 text-balance">
                            We enable students interested in propulsion to gain hands-on experience in a collaborative environment.
                        </h2>
                        <Button text="Join the Discord" link="https://discord.gg/cC6FYAu93W" isNavLink={false} />
                    </div>
                </div>
                <DividerLine />
                <div className="py-8 lg:py-12">
                    <p className="font-display-bold text-3xl lg:text-5xl text-white mb-4 lg:mb-12 text-balance leading-normal">Upcoming Events</p>
                    <iframe src={landingData.calendar.embed_link} className="border-0 w-full h-[400px] md:h-[500px] max-w-[900px] lg:h-[600px] mx-auto mt-4 lg:mt-8"
                        title="PURPL Google Calendar">
                    </iframe>
                    <p className="text-white font-display mt-6 text-lg md:text-xl">Can't see the calendar? <a className="hover:text-stardust underline" href={landingData.calendar.embed_link}>Try this link.</a></p>

                </div>
                <DividerLine />
                <div className="py-8 lg:py-12">
                    <h1 className="font-display-bold text-3xl lg:text-5xl text-white text-balance leading-normal mb-4 lg:mb-12">Sponsors</h1>
                    <div className="w-full bg-dusk overflow-x-auto h-min mb-4 ">
                        <Sponsors />
                    </div>
                    <h2 className="font-display text-lg md:text-2xl text-white">
                        Want to sponsor us? Email us at <a className="underline" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.<br></br>
                        We would love your support!
                    </h2>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Landing;