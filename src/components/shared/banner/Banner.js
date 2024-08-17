import React from 'react';

const Banner = ({children}) => {

    return (
        <div className="relative h-[300px] md:h-[400px] bg-cover object-none bg-transparent">
            <div className=" bg-gradient-to-b from-orion/100 to-dusk/100 h-full">
                {children}
            </div>
        </div>
        
    );
};

export default Banner;