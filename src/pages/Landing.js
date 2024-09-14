import React from 'react';
import ImageBox from '../components/ImageBox.js';
import DisplayHeader from '../components/shared/DisplayHeader.js';
import DividerLine from '../components/shared/DividerLine.js';
import DisplayGrid from '../components/DisplayGrid.js';
import Calendar from '../components/Calendar.js';
import Button from '../components/shared/button/Button.js';
import ContentWrapper from '../components/shared/ContentWrapper.js';
import PageWrapper from '../components/shared/PageWrapper.js';
import Sponsors from '../components/Sponsors.js';

const Landing = () => {
    const images = [
        {
            imageUrl: "/images/torch_hero.png",
            imageAlt: "Technical drawing of torch hero",
            header: "RS1",
            subheader: "TORCH IGNITOR",
            caption: "Initiates the combustion process in a rocket engine by delivering a controlled spark to ignite the propellant mixture.",
            imageRelWidth: "w-[80%]",
            link: "torch",
        },
        {
            imageUrl: "/images/stand_technical_drawing.jpg",
            imageAlt: "Technical drawing of stand",
            header: "TK7",
            subheader: "TEST STAND",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh magna, luctus vitae euismod et, lacinia quis leo.",
            imageRelWidth: "w-[100%]",
            link: "teeny_k",
        },
        {
            imageUrl: "/images/mug_technical_drawing.png",
            imageAlt: "Technical drawing of mug",
            header: "JB16",
            subheader: "ROCKET ENGINE",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh magna, luctus vitae euismod et, lacinia quis leo.",
            imageRelWidth: "w-[80%]",
            link: "mug",
        }
    ];

    return (
        <PageWrapper>
            <div className="relative h-[380px] md:min-h-[700px] lg:min-h-[800px] bg-cover object-none bg-gradient-background">
                <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                <div className="h-[450px] md:min-h-[700px] lg:min-h-[800px] ">
                    <div className="absolute left-8 bottom-12 pr-12 md:left-12 lg:left-36 md:bottom-24">
                        <div className="flex flex-col text-left pt-auto">
                            <img className="h-[100px] md:h-[200px] lg:h-[270px]" src="/images/logo/PURPL_wordmark_white.png"></img>
                            <h2 className="font-display-bold text-white mt-4 md:mt-12 text-md md:text-3xl">
                                Rocket science propelled by students.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <ContentWrapper>
                <div className="w-full h-full">
                    <div className="h-full flex flex-row">
                        <div className="bg-gradient-to-br from-old-gold to-stardust from-30% h-full w-full">
                            <div className="flex flex-col m-1 items-center h-fit">
                                <div className="w-full bg-dusk py-4 px-auto space-y-1">
                                    <h2 className="font-display text-white text-lg md:text-2xl text-balance">Thanks to everyone who attended our callout!</h2>
                                    <h2 className="font-display text-white text-lg md:text-2xl text-balance">Join our <a className="underline hover:text-stardust" href="https://discord.gg/cC6FYAu93W">Discord</a> to stay up-to-date on club activities.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-8 py-8 lg:py-12 lg:grid lg:grid-cols-2 lg:items-center w-full lg:justify-items-end">
                        <div className={`flex flex-col  justify-start text-left lg:pr-24 my-auto space-y-4 lg:space-y-8`}>
                            <h1 className="font-display-bold text-3xl lg:text-5xl text-stardust leading-normal pb-3">Purdue's Dedicated Propulsion Club</h1>
                            <h2 className="font-display2 text-white text-md md:text-xl text-balance">
                                We design, build, and test engines. Check out the projects tab to see what we're cooking up.<br></br><br></br><br></br>
                            </h2>
                        </div>
                        <img src="/images/DSC/DSC01674_color_graded.jpg" alt="Student works on project" />
                    </div>
                </div>
                <DividerLine />
                <div className="py-8 lg:py-12">
                    <h1 className="font-display-bold text-3xl lg:text-5xl text-stardust mb-4 lg:mb-12 text-balance leading-normal">Quick Stats</h1>
                    <DisplayGrid />
                </div>
                <DividerLine />
                <div className="w-full h-full py-8 lg:py-12 ">
                    <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-2 lg:items-center w-full lg:justify-items-end">
                        <img className="w-min" src="/images/DSC/DSC01120-2_color_graded.jpg" alt="Students stand in front of whiteboard" />
                        <div className={`flex flex-col justify-start text-left lg:pl-24  my-auto`}>
                            <h1 className="font-display-bold text-3xl lg:text-5xl text-stardust mb-4 lg:mb-12 text-balance">Empowering Engineers</h1>
                            <h2 className="font-display2 text-white text-md md:text-xl mb-6 lg:mb-8 text-balance">
                                We enable students interested in propulsion to gain hands-on experience in a collaborative environment.
                            </h2>
                            <Button text="Join the Discord" link="https://discord.gg/cC6FYAu93W" isNavLink={false} />
                        </div>
                    </div>
                </div>
                <DividerLine />
                <div className="py-8 lg:py-12">
                    <p className="font-display-bold text-3xl lg:text-5xl text-stardust mb-4 lg:mb-12 text-balance leading-normal">Featured Events</p>
                    <Calendar />
                    <iframe src="https://calendar.google.com/calendar/embed?src=purpl.purdue%40gmail.com&ctz=America%2FIndiana%2FIndianapolis" className="border-0 w-full h-[400px] md:h-[500px] max-w-[900px] lg:h-[600px] mx-auto mt-4 lg:mt-8" >
                    </iframe>
                    <p className="text-white font-display mt-6 text-lg">Can't see the calendar? <a className="hover:text-stardust underline" href="https://calendar.google.com/calendar/embed?src=purpl.purdue%40gmail.com&ctz=America%2FIndiana%2FIndianapolis">Try this link.</a></p>

                </div>
                <DividerLine />
                <div className="py-8 lg:py-12">
                    <h1 className="font-display-bold text-3xl lg:text-5xl text-stardust text-balance leading-normal mb-4 lg:mb-12">Sponsors</h1>
                    <div className="w-full bg-dusk overflow-x-auto h-min mb-4 ">
                        <Sponsors />
                    </div>
                    <h2 className="font-display text-white text-lg md:text-2xl">
                        Want to sponsor us? Email us at <a className="underline" href="mailto:purpl.purdue@gmail.com">purpl.purdue@gmail.com</a>.<br></br>
                        We would love your support!</h2>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Landing;