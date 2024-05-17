import React from 'react';

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-24 z-10 bg-black opacity-95 flex items-end justify-end px-36">
            <img className="h-10 mr-auto mb-3" src="/PURPL_wordmark_white.png" alt="PURPL logo"></img>

            <div className="content-fill mb-5 mr-10 space-x-20">
                <a className="text-white font-display2 underline hover:underline-offset-4 hover:text-stardust" href="team">team</a>
                <a className="text-white font-display2 underline hover:underline-offset-4 hover:text-stardust" href="torch">torch</a>
                <a className="text-white font-display2 underline hover:underline-offset-4 hover:text-stardust" href="teeny_k">teeny k</a>
                <a className="text-white font-display2 underline hover:underline-offset-4 hover:text-stardust" href="mug">the mug</a>
            </div>
        </div>
    );
};

export default Header;