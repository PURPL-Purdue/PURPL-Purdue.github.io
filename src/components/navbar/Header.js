import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { navLinks } from '../../json/routing';

const Header = () => {

    const [activeDropdown, setActiveDropdown] = useState(null);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [mobileActiveDropdowns, setMobileActiveDropdowns] = useState(Array(navLinks.length).fill(false));

    // Refs for focus management
    const hamburgerRef = useRef(null);
    const closeButtonRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const toggleMobileActiveDropdown = (id) => {
        const updatedDropdowns = [...mobileActiveDropdowns];
        updatedDropdowns[id] = !updatedDropdowns[id];
        setMobileActiveDropdowns(updatedDropdowns);
    };

    // Toggle dropdown for keyboard/click access
    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    // Close dropdown (callback for Dropdown component)
    const closeDropdown = useCallback(() => {
        setActiveDropdown(null);
    }, []);

    // Keyboard handler for dropdown triggers
    const handleDropdownKeyDown = (e, navLink) => {
        switch (e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                if (navLink.children.length > 0) {
                    toggleDropdown(navLink.name);
                }
                break;
            case 'Escape':
                setActiveDropdown(null);
                break;
            case 'ArrowDown':
                e.preventDefault();
                if (navLink.children.length > 0) {
                    setActiveDropdown(navLink.name);
                }
                break;
            default:
                break;
        }
    };

    // Close mobile menu and return focus
    const closeMobileMenu = useCallback(() => {
        setMobileMenuOpen(false);
        hamburgerRef.current?.focus();
    }, []);

    // Focus trap for mobile menu
    useEffect(() => {
        if (mobileMenuOpen) {
            // Focus the close button when menu opens
            closeButtonRef.current?.focus();

            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    closeMobileMenu();
                    return;
                }

                if (e.key === 'Tab' && mobileMenuRef.current) {
                    const focusableElements = mobileMenuRef.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [mobileMenuOpen, closeMobileMenu]);

    return (
        <div className="">
            {/* Mobile navbar icon */}
            <div id="hamburger-menu" className="lg:invisible bg-dusk flex flex-row">
                <NavLink to="" className="mr-auto ml-8 mt-5"><img src="/images/logo/PURPL_white_logo.png" alt="White PURPL logo" className="h-8 ">
                </img></NavLink>
                <button
                    ref={hamburgerRef}
                    className="flex items-center text-white hover:text-stardust p-6"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Open menu"
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <FaBars className="h-6 w-6 text-white hover:text-stardust" aria-hidden="true" />
                </button>
            </div>
            {/* Mobile navbar */}
            <div className={`relative z-50 lg:hidden ${mobileMenuOpen ? "visible" : "hidden"}`}>
                <div className="fixed inset-0 bg-dusk opacity-25" onClick={closeMobileMenu}></div>
                <nav
                    id="mobile-menu"
                    ref={mobileMenuRef}
                    className="fixed top-0 left-0 bottom-0 flex flex-col w-2/3 max-w-sm py-6 px-6 bg-dusk border-r border-white overflow-y-auto"
                    aria-label="Mobile navigation"
                >
                    <div className="flex items-center mb-8 justify-end">
                        <button
                            ref={closeButtonRef}
                            id="navbar-close"
                            onClick={closeMobileMenu}
                            aria-label="Close menu"
                        >
                            <FaXmark className="h-6 w-6 text-white hover:text-stardust" aria-hidden="true" />
                        </button>
                    </div>
                    <div>
                        <ul>{navLinks.map((navLink) => {
                            return (<li key={navLink.name} className="mb-1 text-left">
                                {
                                    /* Render the caret to the left of the header item if it has children */
                                    (navLink.children.length > 0) ?
                                        <button
                                            className="font-display block p-3 text-sm text-white hover:text-stardust rounded w-full text-left"
                                            onClick={() => toggleMobileActiveDropdown(navLink.name)}
                                            aria-expanded={mobileActiveDropdowns[navLink.name] || false}
                                            aria-controls={`mobile-submenu-${navLink.name}`}
                                        >
                                            {navLink.name}
                                            <span className="text-white" aria-hidden="true">
                                                {mobileActiveDropdowns[navLink.name] ? " v" : " >"}
                                            </span>
                                        </button> :
                                        <NavLink to={navLink.link} className="font-display block p-3 text-sm text-white hover:text-stardust" >{navLink.name}</NavLink>

                                }
                                {/* Render the dropdown if the header item has children and the header item is active */}
                                <ul
                                    id={`mobile-submenu-${navLink.name}`}
                                    className={`lg:hidden ${mobileActiveDropdowns[navLink.name] ? "visible" : "hidden"}`}
                                >
                                    {
                                        (navLink.children).map((navChild) => {
                                            return (<li key={navChild.name}>
                                                <NavLink
                                                    to={navChild.link}
                                                    className="font-display block p-2 ml-4 text-sm text-white hover:text-stardust"
                                                >{navChild.name}</NavLink>
                                            </li>)
                                        })}
                                </ul>

                            </li>
                            )
                        })
                        }</ul>
                    </div>
                </nav>
            </div>
            <div id="standard-navbar" className={"invisible lg:visible fixed top-0 w-full h-28 z-50  px-16 bg-dusk "}>
                <nav className="mx-auto inset-x-0 w-full flex items-end justify-end fixed top-0 h-28 px-8 max-w-[1300px]" aria-label="Main navigation">
                    <div className="fixed top-28 left-0 w-full h-2 bg-gradient-to-b from-black to-transparent">
                    </div>
                    <NavLink className="h-12 mr-auto mb-6" to=""><img className="h-12 mr-auto mb-3" src="/images/logo/PURPL_white_logo.png" alt="PURPL logo"></img></NavLink>

                    <div className="content-fill mb-6 space-x-4">
                        {navLinks.map((navLink) => {
                            return (
                                <div className="inline-block relative"
                                    key={navLink.name}
                                    onMouseEnter={() => setActiveDropdown(navLink.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {(navLink.link === "#") ?
                                        // This is a header item that does not link anywhere (eg. "projects")
                                        <button
                                            className={"font-display text-xl hover:text-stardust hover:border-b-2 hover:border-stardust w-32 inline-block bg-transparent border-0 cursor-pointer "
                                                + (activeDropdown === navLink.name ? "text-stardust border-b-2 border-stardust" : "text-white")
                                            }
                                            onClick={() => toggleDropdown(navLink.name)}
                                            onKeyDown={(e) => handleDropdownKeyDown(e, navLink)}
                                            aria-expanded={activeDropdown === navLink.name}
                                            aria-haspopup="true"
                                            aria-controls={`dropdown-${navLink.name}`}
                                            id={`dropdown-trigger-${navLink.name}`}
                                        >
                                            {navLink.name}
                                        </button>
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
                                    {(navLink.children.length > 0 && (
                                        <Dropdown
                                            menuItems={navLink.children}
                                            isActiveProp={activeDropdown === navLink.name}
                                            id={`dropdown-${navLink.name}`}
                                            labelledBy={`dropdown-trigger-${navLink.name}`}
                                            onClose={closeDropdown}
                                        />
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;