import React from 'react';
import ProjectTable from '../../components/projects/ProjectTable';
import ContentWrapper from '../../components/shared/ContentWrapper';
import PageWrapper from '../../components/shared/PageWrapper';
import Banner from '../../components/shared/banner/Banner';

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

    const image = "/images/projects/wireframes/torch_ignitor_8_17_24.png";
    const imageAlt = "Torch technical drawing";
    const physicalImage = "/images/DSC/DSC01631_color_graded.jpg";
    const physicalImageAlt = "Image of torch";

    return (

        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center  h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl italic text-white text-balance">
                                Spark Torch Ignitor
                            </h1>
                            <h2 className="font-display text-white mt-4 md:mt-12 text-md md:text-xl lg:text-2xl">
                                Tiny bipropellant rocket engine ignited by a sparkplug.
                            </h2>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[950px] flex flex-col space-y-8 md:space-y-10 md:pt-8">
                    <img src={physicalImage} alt={physicalImageAlt} className="w-[300px] md:w-[400px]"></img>
                    <div>
                        <h2 className="font-display-bold text-3xl md:text-4xl text-stardust text-left mb-8">Description</h2>
                        <p className="font-display2 text-white text-lg text-left text-balance">
                            The torch allows for the test subject to be ignited multiple times in one session without having to replace a cartridge or external ignition source as is required with pyrotechnic ignition systems.
                        </p>
                    </div>
                    <div>
                        <img src={image} alt={imageAlt} className="w-[150px] md:w-[200px]"></img>
                    </div>
                    <ProjectTable table={details} title="Overview" />
                </div>
            </ContentWrapper>
        </PageWrapper>

    );
};

export default Torch;