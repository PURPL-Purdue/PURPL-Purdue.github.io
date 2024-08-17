import React from 'react';

const H1 = ({children}) => {
    return (
        <h1 className="font-display-bold text-4xl lg:text-6xl text-stardust text-balance leading-normal">
            {children}
        </h1>
    );
};

const H4 = ({children}) => {
    return (
        <h4 className="font-display2 text-white text-md md:text-xl mb-6 lg:mb-8 text-balance">
            {children}
        </h4>
    );
};

export {
    H1, 
    H4
};