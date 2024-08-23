import React from 'react';

const ImageBanner = ({children}) => {

    return (
        <div className={`relative h-[500px] md:h-[650px] bg-cover object-none `} >
            <div className="bg-gradient-background  
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
                    {children}
                </div>
            </div>
        </div>
        
    );
};

export default ImageBanner;