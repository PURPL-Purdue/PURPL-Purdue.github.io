import React from 'react';

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-40 bg-black opacity-50 flex items-end justify-end">
            <div className="content-fill mb-5 mr-5 space-x-10">
                <a className="text-white" href="tab_1">tab 1</a>
                <a className="text-white" href="tab_2">tab 2</a>
                <a className="text-white" href="tab_3">tab 3</a>
            </div>
        </div>
    );
};

export default Header;