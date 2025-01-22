import React from 'react';
import SpecsTable from '../../components/projects/SpecsTable';
import ContentWrapper from '../../components/shared/ContentWrapper';
import PageWrapper from '../../components/shared/PageWrapper';
import Banner from '../../components/shared/banner/Banner';
import Button from '../../components/shared/button/Button';

const ElectricPropulsion = () => {
    const title = "Electric Propulsion";
    const subtitle = "Hall thruster commonly used on in-space propulsion systems for satellites.";

    const details = {
        "Manufacturing method": "Machined in-house",
        "Engine cooling": "Heatsink",
        "Injector type": "Coaxial shear injector",
        "Thrust": "50lbf",
        "Propellants": "Ethanol, GOX",
        "Diameter": "4in"
    };

    const image = "/images/projects/wireframes/electric_propulsion_8_17_24.png";
    const imageAlt = "Electric propulsion project technical drawing";

    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
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
                    <div className="flex flex-col mx-auto space-x-2 lg:space-x-4">
                        <img src={image} alt={imageAlt} className="mx-auto w-[300px] md:w-[400px]"></img>
                        <div className="flex flex-col h-full pt-12 lg:pt-16 items-center space-y-6 md:space-y-12">
                            <p className="text-stardust text-lg md:text-4xl font-display">More info on the way.</p>
                            <Button text="Return Home" link="/" isNavLink={true} />
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default ElectricPropulsion;