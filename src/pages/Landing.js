
import { useState } from 'react';
import { FaTimes, FaPlay } from 'react-icons/fa';
import DividerLine from '../components/layout/DividerLine.js';
import DisplayGrid from '../components/landing/DisplayGrid.js';
import Button from '../components/button/Button.js';
import ContentWrapper from '../components/layout/ContentWrapper.js';
import PageWrapper from '../components/layout/PageWrapper.js';
import AccessibleCarousel from '../components/carousel/AccessibleCarousel.js';
import { landingData } from '../json/landing.js';

const Landing = () => {
    const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

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
                    <div className="flex flex-col space-y-8 pb-8 lg:pb-12 lg:grid lg:grid-cols-2 w-full lg:justify-items-end">
                        <div className={`flex flex-col justify-start text-left lg:pr-24 lg:mt-4 space-y-4 lg:space-y-8`}>
                            <h1 className="font-display-bold text-3xl lg:text-5xl text-white leading-normal pb-3">Purdue's Dedicated Propulsion Club</h1>
                            <h2 className="font-display2 text-md md:text-xl text-white text-balance">
                                We design, build, and test engines. Check out the projects tab to see what we're cooking up.
                            </h2>
                        </div>
                        <div className="w-full md:w-[75%] lg:w-full">
                            <AccessibleCarousel
                                photos={landingData.carouselPhotos1}
                                ariaLabel="PURPL club and hotfire test photos"
                            />
                        </div>
                    </div>
                </div>
                <DividerLine />
                <div className="py-8 lg:py-12">
                    <h1 className="font-display-bold text-3xl lg:text-5xl text-white mb-4 lg:mb-12 text-balance leading-normal">Quick Stats</h1>
                    <DisplayGrid />
                </div>
                <DividerLine />
                <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-2 lg:items-center w-full py-8 lg:py-12 lg:justify-items-end">
                    <div className="w-full md:w-[75%] lg:w-full">
                        <AccessibleCarousel
                            photos={landingData.carouselPhotos2}
                            ariaLabel="PURPL club and hotfire test photos"
                        />
                    </div>
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
            </ContentWrapper>

            {/* Floating Video Popup */}
            {isVideoPopupOpen ? (
                <div
                    className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-[320px] md:max-w-[400px] bg-dusk shadow-2xl border border-white overflow-hidden"
                    role="dialog"
                    aria-label="Featured video"
                >
                    <div className="flex items-center justify-between p-2 bg-dusk border-b-2 border-gradient-to-r from-stardust to-old-gold">
                        <span className="text-white font-display-bold text-sm md:text-base px-2">Watch our latest!</span>
                        <button
                            onClick={() => setIsVideoPopupOpen(false)}
                            className="p-2 text-white hover:text-stardust transition-colors rounded focus:outline-2 focus:outline-white focus:outline-offset-2"
                            aria-label="Close video popup"
                        >
                            <FaTimes aria-hidden="true" />
                        </button>
                    </div>
                    <div className="aspect-video">
                        <iframe
                            className="w-full h-full border-0"
                            src="https://www.youtube.com/embed/-OZBZcnQC2E?si=eU20ZBd7vMnvsXiZ"
                            title="PURPL featured video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share; fullscreen"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsVideoPopupOpen(true)}
                    className="fixed bottom-4 right-4 z-50 border-image-dynamic from-stardust to-old-gold flex items-center gap-2 px-4 py-3 bg-dusk text-white font-display-bold border-4"
                    aria-label="Open featured video"
                >
                    <FaPlay aria-hidden="true" className="text-sm" />
                    <span className="hidden md:inline">Watch Video</span>
                </button>
            )}
        </PageWrapper>
    );
};

export default Landing;