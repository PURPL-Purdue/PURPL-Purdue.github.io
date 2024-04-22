import React from 'react';

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-[5rem] bg-dusk opacity-80 flex items-end justify-end">
            <div className="content-fill mb-5 mr-10 space-x-10">
                <a className="text-stardust font-display2 underline hover:underline-offset-4" href="tab_1">About Us</a>
                <a className="text-stardust font-display2 underline hover:underline-offset-4" href="tab_2">Projects</a>
                <a className="text-stardust font-display2 underline hover:underline-offset-4" href="tab_3">Contact Us</a>
            </div>
        </div>
    );
};

export default Header;