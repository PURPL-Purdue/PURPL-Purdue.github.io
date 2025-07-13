import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    const { text, link, isNavLink, className } = props;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const navLinkButtonClassName = "rounded-md border-2 px-6 md:px-12 py-2 md:py-5 border-stardust border-2 " + (isHovered ? "bg-stardust " : "bg-transparent ");
    const buttonClassName = `rounded-md border-2 px-6 md:px-12 py-2 md:py-5 border-stardust ${isHovered ? "bg-stardust " : "bg-transparent"} w-min`;

    const buttonStyle = {
        transition: 'background-color 0.2s ease',
    };

    if (isNavLink) {
        return (
            <NavLink to={link} className={`${className} font-display text-sm md:text-xl ${isHovered ? "text-white" : "text-white"}`}>
                <button className={navLinkButtonClassName}
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
            <div className={`${className} ${buttonClassName}`}>
                <a href={link} target="_blank" rel="noopener noreferrer"
                    className={`w-min text-nowrap font-display2 text-sm md:text-lg px-6 md:px-12 py-2 md:py-5 ${isHovered ? "text-white" : "text-white"}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={buttonStyle}>
                    {text}
                </a>
            </div>
        );
    }

};
export default Button;