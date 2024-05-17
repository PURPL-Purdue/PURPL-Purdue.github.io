import React from 'react';

const Footer = () => {
    return (
        <div className="w-full h-[8rem] bg-black flex items-end justify-start p-4 px-16">
            <div className="mb-5">
                <p className="text-stardust font-display text-left">Purdue<span className="text-white"> _ </span>Undergraduate<span className="text-white"> _ </span>Rocket<span className="text-white"> _ </span>Propulsion<span className="text-white"> _ </span>Laboratory</p>
                <p className="text-stardust font-display text-left pl-0 ml-0 indent-0">Copyright &copy; 2024. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;