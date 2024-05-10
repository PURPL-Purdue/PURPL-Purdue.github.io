import React from 'react';
import ImageBox from './ImageBox.js';

const Landing = () => {
    const imageUrl1 = "/images/torch_hero.png";
    const imageAlt1 = "Technical drawing of torch hero";
    const header1 = "RS1";
    const caption1 = "Initiates the combustion process in a rocket engine by delivering a controlled spark to ignite the propellant mixture.";

    const imageUrl2 = "/images/stand_technical_drawing.png";
    const imageAlt2 = "Technical drawing of stand";
    const header2 = "TK7";
    const caption2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh magna, luctus vitae euismod et, lacinia quis leo.";

    const imageUrl3 = "/images/mug_technical_drawing.png";
    const imageAlt3 = "Technical drawing of mug";
    const header3 = "JB16";
    const caption3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh magna, luctus vitae euismod et, lacinia quis leo.";
    
    return (
            <div className="relative w-fill h-[900px] object-none opacity-100 bg-mountains-background">
                <div className="absolute bottom-0 flex flex-col md:flex-row justify-center inset-x-1/2 space-x-10">
                <ImageBox imageUrl={imageUrl1} imageAlt={imageAlt1} header={header1} caption={caption1}/>
                <ImageBox imageUrl={imageUrl2} imageAlt={imageAlt2} header={header2} caption={caption2}/>
                <ImageBox imageUrl={imageUrl3} imageAlt={imageAlt3} header={header3} caption={caption3}/>    
                </div>
            </div>
    );
};

export default Landing;