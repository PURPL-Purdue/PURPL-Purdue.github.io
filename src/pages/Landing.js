import React from 'react';
import ImageBox from '../components/ImageBox.js';
import DisplayHeader from '../components/shared/DisplayHeader.js';
import DividerLine from '../components/shared/DividerLine.js';
import DisplayGrid from '../components/DisplayGrid.js';
import Calendar from '../components/Calendar.js';
import Button from '../components/shared/button/Button.js';

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
        <div>
        <div className="relative h-screen md:min-h-[900px] bg-cover object-none bg-DSC01166-background">
            <div className=" bg-gradient-to-r from-dusk/90 to-orion/30 h-screen md:min-h-[900px] ">
            {/*<div className="bg-orion/40 h-screen">
                <div className="bg-dusk/50 h-screen">*/}
                    <div className="absolute left-12 bottom-12 pr-12 md:left-36 md:bottom-24">
                        <div className="flex flex-col text-left pt-auto">
                            <h1 className="font-display-bold text-4xl md:text-6xl text-stardust">
                                <span className="text-5xl md:text-7xl text-stardust mr-2">P</span>urdue<br></br>
                                <span className="text-5xl md:text-7xl  text-stardust mr-2">U</span>ndergraduate<br></br>
                                <span className="text-5xl md:text-7xl  text-stardust mr-2">R</span>ocket<br></br>
                                <span className="text-5xl md:text-7xl  text-stardust mr-2">P</span>ropulsion<br></br>
                                <span className="text-5xl md:text-7xl  text-stardust mr-2">L</span>aboratory
                            </h1>
                            <h2 className="font-display2 text-white mt-4 md:mt-12 text-md md:text-xl">
                                We are the premier group of rocket nerds at Purdue University.<br></br>
                                Scroll down to learn more about our work.
                            </h2>
                        </div>
                    </div>
            </div>
        </div>
        <div className="flex flex-col w-full bg-dusk">
            <div className="ml-8 mr-8 md:mx-36 md:min-width-[1200px]">
                <div className="w-full h-full py-8 md:py-16 mt-8 md:mt-10">
                    <div className="flex flex-col space-y-8 md:grid md:grid-cols-2 md:items-center w-full md:justify-items-end">  
                        <div className={`flex flex-col  justify-start text-left md:pr-36 my-auto`}>
                            <h1 className="font-display-bold text-4xl md:text-6xl text-stardust mb-4 md:mb-12 md:text-balance leading-normal">We Blow Things Up</h1>
                            <h2 className="font-display2 text-white text-md md:text-xl mb-6 md:mb-8">
                                We build rockets.
                            </h2>
                            <Button text="Meet the Team" link="/team" isNavLink={true}/>
                        </div>
                        <img className="" src="/images/DSC01123.jpg" alt="Student points at a sketch on whiteboard"/>
                    </div>
                </div>
                <DividerLine/>
                <div className="py-16">
                    <DisplayGrid/>
                </div>
                <DividerLine/>
                <div className="w-full h-full py-8 md:py-16 mt-8 md:mt-10">
                    <div className="flex flex-col space-y-8 md:grid md:grid-cols-2 md:items-center w-full md:justify-items-end">  
                        <img className="" src="/images/DSC01151.jpg" alt="Two students in discussion look at a laptop screen"/>
                        <div className={`flex flex-col justify-start text-left md:pl-36 my-auto`}>
                            <h1 className="font-display-bold text-4xl md:text-6xl text-stardust mb-4 md:mb-12 md:text-balance leading-normal">Empowering Engineers</h1>
                            <h2 className="font-display2 text-white text-md md:text-xl mb-6 md:mb-8">
                                Our mission is to empower students interested in rocketry by providing the opportunity to gain hands-on experience in a collaborative environment.
                            </h2>
                            <Button text="Join Our Discord!" link="https://discord.gg/cC6FYAu93W" />
                        </div>
                    </div>
                </div>
                <DividerLine/>
                <div className="py-16">
                    <p className="font-display-bold text-6xl text-stardust mb-16 text-balance leading-normal">Upcoming Events</p>
                    <Calendar/>
                </div>
                <DividerLine/>
                <div className="py-16">
                    <h1 className="font-display-bold text-4xl md:text-6xl text-stardust text-balance leading-normal mb-2">Sponsors</h1>
                    <h2 className="font-display2 text-white text-md md:text-xl mb-16"></h2>
                    <div className="flex flex-col mb-8 md:space-x-8 md:flex-row md:items-center md:justify-center bg-dusk ">
                        <a className="w-[200px]" href="https://www.purdueesc.org/">
                            <img className="w-[200px] mx-auto" src="/images/sponsors/PESC_logo-color.png"></img>
                        </a>
                        <a className="w-[200px]" href="https://engineering.purdue.edu/Engr/Academics/Undergraduate/PEPC">
                            <img className="w-[120px] mx-auto" src="/images/sponsors/pepc_logo.jpg"></img>
                        </a>
                        <a className="w-[200px]" href="https://web.ics.purdue.edu/~shreve/">
                            <img className="w-[150px] mx-auto" src="/images/sponsors/shreve_hall_club_mascot.jpg"></img>
                        </a>
                        <a className="w-[200px]" href="https://www.purdue.edu/bidc/">
                            <img className="w-[150px] mx-auto" src="/images/sponsors/bechtel-imag.jpg"></img>
                        </a>
                    </div>
                    <h2 className="font-display2 text-white text-md md:text-xl">
                    Want to sponsor us? Email us at <a className="underline" href="mailto:purpl@outlook.com">purpl@outlook.com</a>.<br></br>
                    We would love your support!</h2>
                </div>
            </div>
        </div>   
        </div>     
    );
};

export default Landing;