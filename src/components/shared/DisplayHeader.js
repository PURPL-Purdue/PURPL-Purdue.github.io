import React from 'react';
import NavLinkButton from './button/NavLinkButton.js';

function DisplayHeader(props) {
    const { text, buttonText, buttonLink, imageSrc, imageAlt, isFlipped } = props;
    return (
        <div className="grid grid-cols-2 w-full justify-items-end">
            
            {isFlipped ? <img className="" src={imageSrc} alt={imageAlt}/> : <div className="hidden" />}
            <div className={`flex flex-col justify-start text-left ${isFlipped ? "pl-24" : "pr-36"} my-auto`}>
                <p className="font-display-bold text-6xl text-stardust mb-16 text-balance leading-normal">{text}</p>
                <NavLinkButton text={buttonText} link={buttonLink} />
            </div>
            {!isFlipped ? <img className="" src={imageSrc} alt={imageAlt}/> : <div className="hidden" />}
            
        </div>
    );
}

export default DisplayHeader;