import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Header = () => {
    const navLinks = [
        {
            name: "home",
            link: "",
            id: 0,
            children: [],
        },
        {
            name: "projects",
            link: "#", // don't link anywhere
            id: 1,
            children: [
                {
                    name: "turbopump",
                    link: "turbopump",
                    id: 0,
                },
                {
                    name: "electric propulsion",
                    link: "electric-propulsion",
                    id: 1,
                },
                {
                    name: "turbojet",
                    link: "turbojet",
                    id: 2,
                },
                {
                    name: "testbed",
                    link: "testbed",
                    id: 5,
                },
            ],
        },
        {
            name: "facilities",
            link: "#",
            id: 2,
            children: [
                {
                    name: "teeny k",
                    link: "teeny-k",
                    id: 0,
                },
                {
                    name: "tachyon",
                    link: "tachyon",
                    id: 1,
                },
            ],
        },
        {
            name: "team",
            link: "team",
            id: 3,
            children: [],
        },
        {
            name: "contact",
            link: "contact",
            id: 4,
            children: [],
        },
    ];

    const [activeDropdown, setActiveDropdown] = useState(null);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [mobileActiveDropdowns, setMobileActiveDropdowns] = useState(Array(navLinks.length).fill(false));

    const toggleMobileActiveDropdown = (id) => {
        console.log(mobileActiveDropdowns);
        console.log(mobileActiveDropdowns[id]);
        const updatedDropdowns = [...mobileActiveDropdowns];
        updatedDropdowns[id] = !updatedDropdowns[id];
        setMobileActiveDropdowns(updatedDropdowns);
    };

    return (
        <div className="">
            {/* Mobile navbar icon */}
            <div id="hamburger-menu" className="lg:invisible bg-dusk flex flex-row">
                <NavLink to="" className="mr-auto ml-8 mt-5"><img src="/images/logo/PURPL_white_logo.png" className="h-8 ">
                </img></NavLink>
                <button className="flex items-center text-white hover:text-stardust p-6" onClick={(e) => {
                    setMobileMenuOpen(true);
                }}>
                    <FaBars className="h-6 w-6 text-white hover:text-stardust" />
                </button>
            </div>
            {/* Mobile navbar */}
            <div className={`relative z-50 lg:hidden ${mobileMenuOpen ? "visible" : "hidden"}`}>
                <div className="fixed inset-0 bg-dusk opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-2/3 max-w-sm py-6 px-6 bg-dusk border-r border-white overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="#">
                            <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                            </svg>
                        </a>
                        <button id="navbar-close" onClick={(e) => {
                            setMobileMenuOpen(false);
                        }}>
                            <FaXmark className="h-6 w-6 text-white hover:text-stardust" />
                        </button>
                    </div>
                    <div>
                        <ul>{navLinks.map((navLink) => {
                            return (<li key={navLink.name} className="mb-1 text-left">
                                {
                                    /* Render the caret to the left of the header item if it has children */
                                    (navLink.children.length > 0) ?
                                        <p className="font-display block p-3 text-sm text-white hover:text-stardust rounded hover:cursor-pointer" onClick={(e) => { toggleMobileActiveDropdown(navLink.id) }}>{navLink.name} <span className="text-white">{(mobileActiveDropdowns[navLink.id] ? " v" : " >")}</span></p> :
                                        <NavLink to={navLink.link} className="font-display block p-3 text-sm text-white hover:text-stardust" >{navLink.name}</NavLink>

                                }
                                {/* Render the dropdown if the header item has children and the header item is active */}
                                <ul className={`lg:hidden ${mobileActiveDropdowns[navLink.id] ? "visible" : "hidden"}`}>
                                    {
                                        (navLink.children).map((navChild) => {
                                            return (<NavLink
                                                key={navChild.name}
                                                to={navChild.link}
                                                className="font-display block p-2 ml-4 text-sm text-white hover:text-stardust"
                                            >{navChild.name}</NavLink>)
                                        })}
                                </ul>

                            </li>
                            )
                        })
                        }</ul>
                    </div>
                </nav>
            </div>
            <div id="standard-navbar" className={"invisible lg:visible fixed top-0 w-full h-28 z-10  px-16 bg-dusk "}>
                <div className="mx-auto inset-x-0 w-full flex items-end justify-end fixed top-0 h-28 px-8 max-w-[1300px]">
                    <div className="fixed top-28 left-0 w-full h-2 bg-gradient-to-b from-black to-transparent">
                    </div>
                    <NavLink className="h-12 mr-auto mb-6" to=""><img className="h-12 mr-auto mb-3" src="/images/logo/PURPL_white_logo.png" alt="PURPL logo"></img></NavLink>

                    <div className="content-fill mb-6 space-x-4">
                        {navLinks.map((navLink) => {
                            return (
                                <div className="inline-block"
                                    key={navLink.name}
                                    onMouseEnter={() => setActiveDropdown(navLink.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {(navLink.link === "#") ?
                                        // This is a header item that does not link anywhere (eg. "projects")
                                        <div className={"font-display text-xl hover:text-stardust hover:border-b-2 hover:border-stardust w-32 inline-block "
                                            + (activeDropdown === navLink.name ? "text-stardust border-b-2 border-stardust" : "text-white")
                                        }>{navLink.name}</div>
                                        :
                                        // This is a header item that links directly to a page (eg. "home")
                                        <NavLink
                                            to={navLink.link}
                                            className={({ isActive, isPending }) =>
                                            ("font-display text-xl hover:text-stardust w-32 inline-block " +
                                                ((isActive || (activeDropdown === navLink.name))
                                                    ? "text-stardust border-b-2 border-stardust"
                                                    : isPending
                                                        ? "text-stardust"
                                                        : "text-white"))
                                            }
                                        >{navLink.name}</NavLink>

                                    }
                                    {/* Render the dropdown if the header item has children and the header item is active */}
                                    {(navLink.children.length > 0 && <Dropdown menuItems={navLink.children} isActiveProp={activeDropdown === navLink.name} />)}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;