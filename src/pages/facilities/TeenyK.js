import React from 'react';
import ProjectBanner from '../../components/projects/ProjectBanner';
import ProjectTable from '../../components/projects/ProjectTable';

const TeenyK = () => {
    
    const details = {
        // "Description: This test stand was designed to accommodate small engine/torch igniter projects up to 100lbf. It is low cost and simple, and accommodates for PURPL’s early project needs.
        "Thrust rating": "100lbf",
        "Propellants": "GOX, hydrocarbons",
        "Manufacturing method": "Machined/bolted from aluminum extrusions",
        "Dimensions (L x W x H)": "24in x 14in x 12in"
    };

    return (
        <div className="bg-dusk pb-16">
            <ProjectBanner 
                title={"Teeny-K"} 
                image="/images/projects/stand_technical_drawing.jpg" 
                imageAlt="Stylized technical drawing of the test stand teeny-k" 
                backgroundImage="/images/DSC01166.jpg" 
                blurb={"This test stand was designed to accommodate small engine and torch igniter projects up to 100lbf."}/>

            <div className="px-4 w-full md:px-16 lg:px-32 mt-12 md:mt-16">
                <h2 className="font-display-bold text-3xl md:text-4xl lg:text-5xl text-stardust text-left">Description</h2>
                <p className="text-white font-display2 text-left text-md md:text-lg mt-6 text-balance">
                    This test stand was designed to accommodate small engine/torch igniter projects up to 100lbf. It is low-cost and simple, and accommodates for PURPL's early project needs.
                </p>
            </div>
            <div className="flex flex-row flex-wrap mt-12 md:mt-16 px-4 w-full md:px-16 lg:px-32 ">
                <ProjectTable table={details} title="Overview" />
            </div>
        </div>
    );
};

export default TeenyK;