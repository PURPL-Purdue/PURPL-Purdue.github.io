import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    const { text, link, isNavLink } = props;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonClassName = "rounded-md border-2 px-6 md:px-12 py-2 md:py-5 border-stardust border-2 " + (isHovered? "bg-stardust " : "bg-transparent ");
        
    const buttonStyle = {
        transition: 'background-color 0.2s ease',
    };
 
    if (isNavLink) {
        return(
            <NavLink to={link} className={`font-display text-sm md:text-xl ${isHovered ? "text-white" : "text-white"}`}>
            <button className={buttonClassName}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={buttonStyle}>
                    {text}
            </button>
        </NavLink>

        );
    }
    else {
return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={buttonClassName + ` w-min text-nowrap font-display text-sm md:text-xl ${isHovered ? "text-white" : "text-white"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={buttonStyle}>
            {text}
    </a>
    );
}

};
export default Button;