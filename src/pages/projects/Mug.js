import React from 'react';
import ProjectBanner from '../../components/projects/ProjectBanner';
import ProjectTable from '../../components/projects/ProjectTable';

const Mug = () => {
    const specs = {
        "diameter": "4in",
        "width": "3in",
    };

    const details = {
        "Manufacturing method": "Machined in-house",
        "Engine cooling": "Heatsink",
        "Injector type": "Coaxial shear injector",
        "Thrust": "50lbf",
        "Propellants": "Ethanol, GOX",
        "Diameter": "4in" 
    };

    return (
        <div className="bg-dusk pb-16">
            <ProjectBanner title="The Mug" image="/images/projects/mug_technical_drawing.png" imageAlt="Stylized technical drawing of the mug" backgroundImage="/images/DSC01166.jpg" blurb={"This project was started to learn the entire project workflow of a simple rocket engine from conceptual design to hot-fire."}/>
            <div className="flex flex-row flex-wrap px-4 w-full md:px-16 lg:px-32 mt-12 md:mt-16">
                <ProjectTable table={details} title="Overview" />
            </div>
        </div>
    );
};

export default Mug;