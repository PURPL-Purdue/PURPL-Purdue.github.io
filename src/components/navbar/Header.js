import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';


function classNames(...classes) {
        return classes.join(' ')
    }

const Header = () => {
        const navLinks = [
                {
                        name: "home",
                        link: "",
                        children: [],
                },
                {
                        name: "projects",
                        link: "#", // don't link anywhere
                        children: [
                                {
                                        name: "the mug",
                                        link: "mug",
                                },
                                {
                                        name: "torch",
                                        link: "torch",
                                },
                        ]
                },
                {
                        name: "facilities",
                        link: "#",
                        children: [
                                {
                                        name: "teeny k",
                                        link: "teeny_k",
                                },
                                {
                                        name: "the crate",
                                        link: "crate",
                                }
                        ],
                },
                {
                        name: "team",
                        link: "team",
                        children: [],
                },
                {
                        name: "donate",
                        link: "donate",
                        children: [],
                },
                {
                        name: "contact",
                        link: "contact",
                        children: [],
                },
        ];


        // Use scroll position to set transparency of the navbar
        const [scrollPosition, setScrollPosition] = React.useState(0);

        useEffect(() => {
                const handleScroll = () => {
                        setScrollPosition(window.scrollY);
                };

                window.addEventListener("scroll", handleScroll);

                return () => {
                        window.removeEventListener("scroll", handleScroll);
                };
        }, []);

        const [activeDropdown, setActiveDropdown] = useState(null);

        return (
                <div className={"fixed top-0 left-0 w-full h-28 z-10 flex items-end justify-end px-36 " + 
                        (scrollPosition > 150 ? "bg-dusk shadow-md shadow-black " : "bg-transparent ")}
                >
                        <Link className="h-10 mr-auto mb-6" to="/"><img className="h-10 mr-auto mb-3" src="/PURPL_wordmark_white.png" alt="PURPL logo"></img></Link>

                        <div className="content-fill mb-6 mr-10 space-x-6">
                                {navLinks.map((navLink) => {
                                        return (
                                                <div className="inline-block"
                                                        onHover={() => setActiveDropdown(navLink.name)}
                                                        onMouseEnter={() => setActiveDropdown(navLink.name)}
                                                        onMouseLeave={() => setActiveDropdown(null)}
                                                >
                                                        {(navLink.link === "#") ?
                                                                <div className={"font-display2 text-lg hover:text-stardust hover:border-b-2 hover:border-stardust w-32 inline-block "
                                                                        + (activeDropdown === navLink.name ? "text-stardust border-b-2 border-stardust" : "text-white")
                                                                }>{navLink.name}</div>
                                                                :
                                                                <NavLink to={navLink.link}
                                                                        className={({ isActive, isPending }) =>
                                                                                ("font-display2 text-lg hover:text-stardust w-32 inline-block " +
                                                                                        ((isActive || (activeDropdown === navLink.name))
                                                                                                ? "text-stardust border-b-2 border-stardust"
                                                                                                : isPending
                                                                                                        ? "text-stardust"
                                                                                                        : "text-white"))
                                                                        }
                                                                >{navLink.name}</NavLink>

                                                        }
                                                        {(navLink.children.length > 0 && <Dropdown menuItems={navLink.children} isActiveProp={activeDropdown === navLink.name} />)}
                                                </div>
                                        );
                                })}
                        </div>
                </div>
        );
};

export default Header;