import React from 'react';

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-24 z-10 bg-dusk opacity-95 flex items-end justify-end px-36">
            <img className="h-10 mr-auto mb-3" src="/PURPL_wordmark_white.png" alt="PURPL logo"></img>

            <div className="content-fill mb-5 mr-10 space-x-20">
                <a className="text-white font-display2 underline hover:underline-offset-4 hover:text-stardust" href="tab_1">team</a>
                <a className="text-white font-display2 underline hover:underline-offset-4 hover:text-stardust" href="tab_2">torch</a>
                <a className="text-white font-display2 underline hover:underline-offset-4 hover:text-stardust" href="tab_3">teeny k</a>
                <a className="text-white font-display2 underline hover:underline-offset-4 hover:text-stardust" href="tab_4">the mug</a>
            </div>
        </div>
    );
};

export default Header;