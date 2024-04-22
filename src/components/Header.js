import React from 'react';

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-[5rem] bg-black opacity-50 flex items-end justify-end">
            <div className="content-fill mb-5 mr-10 space-x-10">
                <a className="text-white underline hover:underline-offset-4" href="tab_1">tab 1</a>
                <a className="text-white underline hover:underline-offset-4" href="tab_2">tab 2</a>
                <a className="text-white underline hover:underline-offset-4" href="tab_3">tab 3</a>
            </div>
        </div>
    );
};

export default Header;