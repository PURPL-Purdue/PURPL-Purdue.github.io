
import React from 'react';
import ProjectTable from '../../components/projects/ProjectTable';
import ContentWrapper from '../../components/shared/ContentWrapper';
import PageWrapper from '../../components/shared/PageWrapper';
import Banner from '../../components/shared/banner/Banner';

const TeenyK = () => {
    const title = "Teeny-K";
    const subtitle = "Rocket engine stand made to fire torch ignitors and small rocket engines.";

    const details = {
        "Thrust rating": "100lbf",
        "Propellants": "GOX, hydrocarbons",
        "Manufacturing method": "Machined/bolted from aluminum extrusions",
        "Dimensions (L x W x H)": "24in x 14in x 12in"
    };    

    const blurb="This test stand was designed to accommodate small engine/torch igniter projects up to 100lbf. It is low-cost and simple, and accommodates for PURPL's early project needs. The torch allows for the test subject to be ignited multiple times in one session without having to replace a cartridge or external ignition source as is required with pyrotechnic ignition systems.";
    const image="/images/projects/stand_technical_drawing.png" ;
    const imageAlt="Teeny-k technical drawing";

    return (
        
        <PageWrapper>
            <Banner>
            <div className="bg-gradient-background bg-cover bg-center  h-full ">
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
                            {blurb}
                        </p>
                    </div>
                    <div>
                        <h2 className="font-display-bold text-3xl md:text-4xl  text-stardust text-left mb-8">Wireframe</h2>
                        <img src={image} alt={imageAlt} className="w-[150px] md:w-[200px]"></img>
                    </div>
                    
                    <ProjectTable table={details} title="Overview" />
                </div>
            </ContentWrapper>
        </PageWrapper>
        
    );
};

export default TeenyK;