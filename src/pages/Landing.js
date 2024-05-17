import React from 'react';
import ImageBox from '../components/ImageBox.js';
import DisplayHeader from '../components/DisplayHeader.js';
import DividerLine from '../components/DividerLine.js';
import DisplayGrid from '../components/DisplayGrid.js';
import Calendar from '../components/Calendar.js';

const Landing = () => {
    const images = [
        {
            imageUrl: "/images/torch_hero.png",
            imageAlt: "Technical drawing of torch hero",
            header: "RS1",
            subheader: "TORCH IGNITOR",
            caption: "Initiates the combustion process in a rocket engine by delivering a controlled spark to ignite the propellant mixture.",
            imageRelWidth: "w-[80%]"
        },
        {
            imageUrl: "/images/stand_technical_drawing.jpg",
            imageAlt: "Technical drawing of stand",
            header: "TK7",
            subheader: "TEST STAND",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh magna, luctus vitae euismod et, lacinia quis leo.",
            imageRelWidth: "w-[100%]"
        },
        {
            imageUrl: "/images/mug_technical_drawing.png",
            imageAlt: "Technical drawing of mug",
            header: "JB16",
            subheader: "ROCKET ENGINE",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh magna, luctus vitae euismod et, lacinia quis leo.",
            imageRelWidth: "w-[80%]"
        }
    ];

    return (
        <div>
        <div className="relative w-fill h-[900px] object-none opacity-100 bg-mountains-background">
            <div className="absolute bottom-0 flex flex-col md:flex-row justify-center inset-x-1/2 space-x-10">
                {images.map((image) => (
                    <ImageBox
                        imageUrl={image.imageUrl}
                        imageAlt={image.imageAlt}
                        header={image.header}
                        subheader={image.subheader}
                        caption={image.caption}
                        imageRelWidth={image.imageRelWidth}
                    />
                ))}
            </div>
        </div>
        <div className="flex flex-col w-full bg-dusk">
            <div className="w-[1200px] mx-auto">
                <div className="w-full h-full  py-16 mt-10">
                    <DisplayHeader text="We Blow Things Up" buttonText="Learn More" buttonLink="/404" imageSrc="/images/DSC01164.png" imageAlt="" isFlipped={false}/>
                </div>
                <DividerLine/>
                <div className="py-16">
                    <DisplayGrid/>
                </div>
                <DividerLine/>
                <div className="w-full h-full py-16">
                    <DisplayHeader text="Empowering Engineers" buttonText="Our Team" buttonLink="/team" imageSrc="/images/DSC01151.jpg" imageAlt="" isFlipped={true}/>
                </div>
                <DividerLine/>
                <div className="py-16">
                    <p className="font-display-bold text-6xl text-stardust mb-16 text-balance leading-normal">Upcoming Events</p>
                    <Calendar/>
                </div>
                <DividerLine/>
                <div className="py-16">
                    <p className="font-display-bold text-6xl text-stardust mb-16 text-balance leading-normal">Work With Us</p>
                    <div className="flex flex-col w-[600px] mx-auto border-stardust border-2 rounded-sm py-8 space-y-4 text-left px-8">
                        <div>
                            <p className="font-display2-bold text-lg text-white">Email</p>
                            <a className="font-display2 text-xl text-stardust underline" href="mailto:purpl@outlook.com">purpl@outlook.com</a>
                        </div>
                        <div>
                            <p className="font-display2-bold text-lg text-white">LinkedIn</p>
                            <a className="font-display2 text-xl text-stardust underline" href="https://www.linkedin.com/company/purpl-purdue/">@purpl-purdue</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        </div>     
    );
};

export default Landing;