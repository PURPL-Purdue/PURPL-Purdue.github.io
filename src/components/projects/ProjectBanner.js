import React from 'react';

const ProjectBanner = ({title, image, imageAlt, blurb, backgroundImage}) => {

    const bg_class = "bg-[url(" + backgroundImage + ")]";

    return (
        <div className={`relative h-[500px] md:h-[650px] bg-cover object-none `} >
            <div className="bg-[url('../public/images/DSC01166.jpg')]  
            z-10
               bg-cover
            bg-no-repeat
            bg-center
            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-b
            before:from-dusk
            before:to-dusk
            before:opacity-55
            before:z-[0]
         h-full ">
                <div className="absolute left-0 right-0 mx-auto px-4 bottom-12 md:bottom-36">
                    <div className="grid grid-cols-2 content-end items-end">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-4xl md:text-5xl lg:text-6xl text-stardust">
                                {title.split(/\n/g).map((value, index) => (
                                    <React.Fragment key={index}>
                                        {value}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </h1>
                            <img src={image} alt={imageAlt} className="max-h-32 mx-auto mt-8" />
                                                            
                        </div>
                        <h2 className="font-display2 text-white text-lg md:text-xl lg:text-2xl md:pr-32 lg:pr-48 text-center md:text-left text-balance my-auto">
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

export default ProjectBanner;