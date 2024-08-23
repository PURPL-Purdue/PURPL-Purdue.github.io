import React from 'react';
import ImageBox from '../components/ImageBox.js';
import DisplayHeader from '../components/shared/DisplayHeader.js';
import DividerLine from '../components/shared/DividerLine.js';
import DisplayGrid from '../components/DisplayGrid.js';
import Calendar from '../components/Calendar.js';
import Button from '../components/shared/button/Button.js';
import ContentWrapper from '../components/shared/ContentWrapper.js';
import PageWrapper from '../components/shared/PageWrapper.js';
import {H1,H4} from '../components/shared/styles/H.js';

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
        <div className="relative h-[450px] md:min-h-[700px] lg:min-h-[800px] bg-cover object-none bg-gradient-background">
        <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
            <div className="h-[450px] md:min-h-[700px] lg:min-h-[800px] ">
            {/*<div className="bg-orion/40 h-screen">
                <div className="bg-dusk/50 h-screen">*/}
                    <div className="absolute left-8 bottom-12 pr-12 md:left-12 lg:left-36 md:bottom-24">
                        <div className="flex flex-col text-left pt-auto">
                            <img className="h-[120px] md:h-[200px] lg:h-[270px]" src="/images/logo/PURPL_wordmark_white.png"></img>
                            <h2 className="font-display-bold text-white mt-4 md:mt-12 text-md md:text-3xl">
                                Rocket science propelled by students.
                            </h2>
                        </div>
                    </div>
            </div>
        </div>
        <ContentWrapper>  
            <div className="w-full h-full">
                <div className="h-full flex flex-row pb-8 lg:pb-16">
                    <div className="bg-gradient-to-br from-old-gold to-stardust from-30% h-full w-full">
                        <div className="flex flex-col m-1 items-center h-fit">
                            <div className="w-full bg-dusk py-6 px-auto">
                                <h2 className="font-display-bold text-white text-xl md:text-3xl">Want to get involved?</h2>
                                <h2 className="font-display text-white text-lg md:text-2xl mt-6 lg:mt-8 text-balance">Attend our callout on August 26th in PHYS 114 at 6pm!</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-2 lg:items-center w-full lg:justify-items-end">  
                
                    <div className={`flex flex-col  justify-start text-left lg:pr-24 my-auto space-y-4 lg:space-y-8`}>
                        <h1 className="font-display-bold text-4xl lg:text-6xl text-stardust text-balance leading-normal pb-3">We Make Hardware</h1>
                        <h2 className="font-display2 text-white text-md md:text-xl text-balance">
                            We build rocket engines. Check out the projects tab to see what we're cooking up.<br></br><br></br><br></br>
                        </h2>
                    </div>
                    <img src="/images/DSC/DSC01123.jpg" alt="Student points at a sketch on whiteboard"/>
                </div>
            </div>
            <DividerLine/>
            <div className="py-8 lg:py-16">
                <h1 className="font-display-bold text-4xl lg:text-6xl text-stardust mb-4 lg:mb-12 text-balance leading-normal">Quick Stats</h1>
                <DisplayGrid/>
            </div>
            <DividerLine/>
            <div className="w-full h-full py-8 lg:py-16 ">
                <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-2 lg:items-center w-full lg:justify-items-end">  
                    <img className="w-min" src="/images/DSC/DSC01151.jpg" alt="Two students in discussion look at a laptop screen"/>
                    <div className={`flex flex-col justify-start text-left lg:pl-24  my-auto`}>
                        <h1 className="font-display-bold text-4xl lg:text-6xl text-stardust mb-4 lg:mb-12 text-balance">Empowering Engineers</h1>
                        <h2 className="font-display2 text-white text-md md:text-xl mb-6 lg:mb-8 text-balance">
                            We enable students interested in propulsion to gain hands-on experience in a collaborative environment.
                        </h2>
                        <Button text="Meet the Team" link="/team" isNavLink={true}/>
                    </div>
                </div>
            </div>
            <DividerLine/>
            <div className="py-8 lg:py-16">
                <p className="font-display-bold text-4xl lg:text-6xl text-stardust mb-4 lg:mb-12 text-balance leading-normal">Featured Events</p>
                <Calendar/>
            </div>
            <DividerLine/>
            <div className="py-8 lg:py-16">
                <h1 className="font-display-bold text-4xl lg:text-6xl text-stardust text-balance leading-normal mb-4 lg:mb-12">Sponsors</h1>
                <div className="w-full bg-dusk overflow-x-auto h-min mb-4 ">
                    <div className="flex flex-row overflow-x-auto lg:mb-8 space-x-4 px-2 lg:space-x-8 lg:px-8 items-center bg-jet-grey w-min h-min mx-auto justify-center ">
                        <a className="w-[80px] md:w-[120px] lg:w-[120px] py-2" href="https://www.purdueesc.org/">
                            <img className="mx-auto" src="/images/sponsors/PESC_logo-color-transparent.png"></img>
                        </a>
                        <a className="w-[80px] md:w-[110px] lg:w-[120px] py-2 " href="https://engineering.purdue.edu/Engr/Academics/Undergraduate/PEPC">
                            <img className="mx-auto" src="/images/sponsors/pepc_logo_transparent.png"></img>
                        </a>
                        <a className="w-[100px] md:w-[140px] lg:w-[150px] py-2" href="https://web.ics.purdue.edu/~shreve/">
                            <img className="mx-3" src="/images/sponsors/shreve_hall_club_mascot.jpg"></img>
                        </a>
                        <a className="w-[120px] md:w-[150px] lg:w-[150px] py-2" href="https://www.purdue.edu/bidc/">
                            <img className="mr-4 my-auto" src="/images/sponsors/BIDC_V-Full-RGB.png"></img>
                        </a>
                    </div>
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