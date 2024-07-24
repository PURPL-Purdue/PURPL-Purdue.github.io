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
        <div className="relative min-h-[700px] lg:min-h-[900px] bg-cover object-none bg-DSC01166-background">
            <div className=" bg-gradient-to-r from-dusk/90 to-orion/30 min-h-[700px] lg:min-h-[900px] ">
            {/*<div className="bg-orion/40 h-screen">
                <div className="bg-dusk/50 h-screen">*/}
                    <div className="absolute left-8 bottom-12 pr-12 md:left-12 lg:left-36 md:bottom-24">
                        <div className="flex flex-col text-left pt-auto">
                            <h1 className="font-display-bold text-4xl md:text-5xl lg:text-6xl text-stardust">
                                <span className="text-5xl md:text-6xl lg:text-7xl text-stardust mr-2">P</span>urdue<br></br>
                                <span className="text-5xl md:text-6xl lg:text-7xl  text-stardust mr-2">U</span>ndergraduate<br></br>
                                <span className="text-5xl md:text-6xl lg:text-7xl  text-stardust mr-2">R</span>ocket<br></br>
                                <span className="text-5xl md:text-6xl lg:text-7xl  text-stardust mr-2">P</span>ropulsion<br></br>
                                <span className="text-5xl md:text-6xl lg:text-7xl  text-stardust mr-2">L</span>ab
                            </h1>
                            <h2 className="font-display2 text-white mt-4 md:mt-12 text-md md:text-xl">
                                We are a group of rocket nerds at Purdue University.<br></br>
                                Scroll down to learn more about us.
                            </h2>
                        </div>
                    </div>
            </div>
        </div>
        <div className="flex flex-col w-full bg-dusk">
            <div className="mx-8 md:mx-12 lg:mx-36 lg:min-width-[1200px] pt-8 lg:pt-16">
                <DividerLine/>
                <div className="w-full h-full py-8 lg:py-16">
                    <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-2 lg:items-center w-full lg:justify-items-end">  
                        <div className={`flex flex-col  justify-start text-left lg:pr-24 my-auto`}>
                            <h1 className="font-display-bold text-4xl lg:text-6xl text-stardust mb-4 lg:mb-12 text-balance leading-normal">We Make Hardware</h1>
                            <h2 className="font-display2 text-white text-md md:text-xl mb-6 lg:mb-8 text-balance">
                                We build rocket engines. Check out the projects tab to see what we're cooking up.
                            </h2>
                            <Button text="Meet the Team" link="/team" isNavLink={true}/>
                        </div>
                        <img src="/images/DSC01123.jpg" alt="Student points at a sketch on whiteboard"/>
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
                        <img className="w-min" src="/images/DSC01151.jpg" alt="Two students in discussion look at a laptop screen"/>
                        <div className={`flex flex-col justify-start text-left lg:pl-24  my-auto`}>
                            <h1 className="font-display-bold text-4xl lg:text-6xl text-stardust mb-4 lg:mb-12 text-balance leading-loose">Empowering Engineers</h1>
                            <h2 className="font-display2 text-white text-md md:text-xl mb-6 lg:mb-8 text-balance">
                                We empower students interested in propulsion by providing the opportunity to gain hands-on experience in a collaborative environment.
                            </h2>
                            <Button text="Join Our Discord" link="https://discord.gg/cC6FYAu93W" isNavLink={false}/>
                        </div>
                    </div>
                </div>
                <DividerLine/>
                <div className="py-8 lg:py-16">
                    <p className="font-display-bold text-4xl lg:text-6xl text-stardust mb-4 lg:mb-12 text-balance leading-normal">Upcoming Events</p>
                    <Calendar/>
                </div>
                <DividerLine/>
                <div className="py-8 lg:py-16">
                    <h1 className="font-display-bold text-4xl lg:text-6xl text-stardust text-balance leading-normal mb-4 lg:mb-12">Sponsors</h1>
                    <div className="w-full bg-dusk overflow-x-auto h-min mb-4 ">
                        <div className="flex flex-row overflow-x-auto lg:mb-8 space-x-2 lg:space-x-8 items-center bg-white w-min mx-auto justify-center ">
                            <a className="w-[100px] md:w-[200px] lg:w-[200px] py-2" href="https://www.purdueesc.org/">
                                <img className="mx-auto" src="/images/sponsors/PESC_logo-color.png"></img>
                            </a>
                            <a className="w-[80px] md:w-[110px] lg:w-[120px] py-2 " href="https://engineering.purdue.edu/Engr/Academics/Undergraduate/PEPC">
                                <img className="mx-auto" src="/images/sponsors/pepc_logo.jpg"></img>
                            </a>
                            <a className="w-[100px] md:w-[140px] lg:w-[150px] py-2" href="https://web.ics.purdue.edu/~shreve/">
                                <img className="mx-4" src="/images/sponsors/shreve_hall_club_mascot.jpg"></img>
                            </a>
                            <a className="w-[100px] md:w-[200px] lg:w-[200px] py-2" href="https://www.purdue.edu/bidc/">
                                <img className="w-[150px] mx-auto" src="/images/sponsors/bechtel-imag.jpg"></img>
                            </a>
                        </div>
                    </div>
                    <h2 className="font-display2 text-white text-md md:text-xl">
                    Want to sponsor us? Email us at <a className="underline" href="mailto:purpl.purdue@gmail.com">purpl.purdue@gmail.com</a>.<br></br>
                    We would love your support!</h2>
                </div>
            </div>
        </div>   
        </div>     
    );
};

export default Landing;