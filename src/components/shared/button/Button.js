import React, { useState } from 'react';

const Button = (props) => {
    const { text, link } = props;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonClassName = "w-64 rounded-md border-2 px-9 py-5 border-stardust border-2 " + (isHovered? "bg-stardust " : "bg-transparent ");
        
    const buttonStyle = {
        transition: 'background-color 0.2s ease',
    };

    return (
        <button
            className={buttonClassName}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={buttonStyle}
        >
            <a href={link} className={`font-display2 text-xl ${isHovered ? "text-white" : "text-white"}`}>
                {text}
            </a>
        </button>
    );
};

export default Button;