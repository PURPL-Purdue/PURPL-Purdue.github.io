import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navLinks = [
        {
            name: "team",
            link: "team"
        },
        {
            name: "torch",
            link: "torch"
        },
        {
            name: "teeny k",
            link: "teeny_k"
        },
        {
            name: "the mug",
            link: "mug"
        }
    ];

    return (
        <div className="fixed top-0 left-0 w-full h-24 z-10 bg-black opacity-95 flex items-end justify-end px-36">
            <Link className="h-10 mr-auto mb-3" to="/"><img className="h-10 mr-auto mb-3" src="/PURPL_wordmark_white.png" alt="PURPL logo"></img></Link>

            <div className="content-fill mb-5 mr-10 space-x-20">
                {navLinks.map((navLink) => <NavLink to={navLink.link} 
                className={({ isActive, isPending }) =>
                        ("font-display2 hover:text-stardust " + 
                        (isActive
                        ? "text-stardust"
                        : isPending
                        ? "text-stardust"
                        : "text-white"))
                    }
                  >{navLink.name}</NavLink>)}
            </div>
        </div>
    );
};

export default Header;