import React from 'react';
import ProjectTable from '../../components/projects/ProjectTable';
import ContentWrapper from '../../components/shared/ContentWrapper';
import PageWrapper from '../../components/shared/PageWrapper';
import Banner from '../../components/shared/banner/Banner';

const Mug = () => {
    const specs = {
        "diameter": "4in",
        "width": "3in",
    };

    const title = "The Mug";
    const subtitle = "";

    const details = {
        "Manufacturing method": "Machined in-house",
        "Engine cooling": "Heatsink",
        "Injector type": "Coaxial shear injector",
        "Thrust": "50lbf",
        "Propellants": "Ethanol, GOX",
        "Diameter": "4in" 
    };

    const image="/images/projects/mug_technical_drawing.png";
    const imageAlt="Mug technical drawing";

    return (
        <PageWrapper>
            <Banner>
            <div className="bg-gradient-background bg-cover bg-center h-full ">
            <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
            <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                    <div className="flex flex-col text-center">
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl italic text-white text-balance">
                        {title}
                    </h1>
                    <h2 className="font-display text-white mt-4 md:mt-12 text-md md:text-xl lg:text-2xl">
                    {subtitle}
                    </h2>
                    </div>                
                </div>
            </div>
        </Banner>
            <ContentWrapper>
                <div className="lg:w-[950px] flex flex-col space-y-8 md:space-y-10">
                    <div>
                        <h2 className="font-display-bold text-3xl md:text-4xl text-stardust text-left mb-8">Description</h2>
                        <p className="font-display2 text-white text-lg text-left text-balance">
                        This project was started to learn the entire project workflow of a simple rocket engine from conceptual design to hot-fire.                    
                        </p>
                    </div>
                    <div>
                        <img src={image} alt={imageAlt} className="w-[200px] md:w-[300px]"></img>
                    </div>
                    
                    <ProjectTable table={details} title="Overview" />
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Mug;