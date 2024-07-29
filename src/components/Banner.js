import React from 'react';

const Banner = ({title, blurb}) => {

    return (
        <div className="relative h-[375px] md:h-[450px] bg-cover object-none bg-orion">
            <div className=" bg-gradient-to-b from-orion/100 to-dusk/100 h-full">
                <div className="absolute left-0 right-0 mx-auto px-4 bottom-12">
                    <div className="flex flex-col text-center">
                        <h1 className="font-display-bold text-4xl md:text-5xl lg:text-6xl text-stardust">
                            {title}
                        </h1>
                        <h2 className="font-display2 text-white mt-4 md:mt-12 text-md md:text-xl">
                        {blurb.split(/\n/g).map((value, index) => (
                            <React.Fragment key={index}>
                                {value}
                                <br />
                            </React.Fragment>
                        ))}
                        </h2>                                   
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;