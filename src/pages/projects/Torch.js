import React from 'react';
import ProjectBanner from '../../components/projects/ProjectBanner';
import ProjectTable from '../../components/projects/ProjectTable';
import DividerLine from '../../components/shared/DividerLine';

const Torch = () => {
    const specs = {
        "diameter": "4in",
        "width": "3in",
    };

    const details = {
        //"Description": "This torch was designed to serve as a repeatable source of ignition for early PURPL projects such as The Mug. The torch allows for the test subject to be ignited multiple times in one session without having to replace a cartridge or external ignition source as is required with pyrotechnic ignition systems.",
        "Manufacturing method": "3D-printed metal (outsourced)",
        "Injector type": "Impinging injector",
        "Propellants": "Ethanol, GOX",
        "Length": "2.2in",
    };

    return (
        <div className="bg-dusk pb-16">
            <ProjectBanner 
                title={"Spark Torch\nIgnitor"} 
                image="/images/projects/torch_hero.png" 
                imageAlt="Stylized technical drawing of the torch ignitor" 
                backgroundImage="/images/DSC01166.jpg" 
                blurb={"This torch was designed to serve as a repeatable source of ignition for early PURPL projects such as The Mug."}/>

            <div className="px-4 w-full md:px-16 lg:px-32 mt-12 md:mt-16">
                <h2 className="font-display-bold text-3xl md:text-4xl lg:text-5xl text-stardust text-left">Description</h2>
                <p className="text-white font-display2 text-left text-md md:text-lg mt-6 text-balance">The torch allows for the test subject to be ignited multiple times in one session without having to replace a cartridge or external ignition source as is required with pyrotechnic ignition systems.</p>
            </div>
            <div className="flex flex-row flex-wrap mt-12 md:mt-16 px-4 w-full md:px-16 lg:px-32 ">
                <ProjectTable table={details} title="Overview" />
            </div>
        </div>
    );
};

export default Torch;