import { useState } from 'react';
import PageWrapper from "../../components/layout/PageWrapper";
import Banner from "../../components/banner/Banner";
import ContentWrapper from "../../components/layout/ContentWrapper";
import AccessibleCarousel from "../../components/carousel/AccessibleCarousel";
import BuzzAldrin from "./pulsejet/BuzzAldrin";
import Angus from "./pulsejet/Angus";
import { pulsejetData } from "../../json/projects";

// Mirrors RDE's EngineSelector exactly (src/pages/projects/rde/RDE.js):
// kept local rather than shared since RDE established that precedent.
const EngineSelector = ({ engine, activeEngine, setActiveEngine }) => {
    const active = activeEngine === engine.key;

    return (
        <button
            onClick={() => setActiveEngine(engine.key)}
            className={
                "w-full border-2 p-5 text-left transition-all " +
                (active
                    ? "border-stardust bg-moon/50"
                    : "border-white/40 bg-transparent hover:border-stardust")
            }
        >
            <h2 className="font-display-bold text-3xl text-white uppercase">{engine.title}</h2>
            <p className="font-display2 text-stardust mt-2 text-sm">{engine.selector_subtitle}</p>
            <p className="font-display2 text-white/70 mt-4 text-sm">{engine.selector_purpose}</p>
        </button>
    );
};

const Pulsejet = () => {
    const [activeEngine, setActiveEngine] = useState("buzzAldrin");

    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-row text-center justify-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                                {pulsejetData.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-8 md:space-y-12">
                    {/* Shared: About the Team */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                        <p className="col-span-1 text-white text-md md:text-lg font-display2 text-left">{pulsejetData.about_team.blurb}</p>
                        <div className="col-span-1 w-[100%] mx-auto mt-2">
                            <AccessibleCarousel
                                photos={pulsejetData.about_team.photos}
                                ariaLabel="Pulsejet team photos"
                            />
                        </div>
                    </div>

                    {/* Engine selector */}
                    <div className="border-l-2 border-stardust pl-4">
                        <p className="font-display2 text-white/70 text-sm uppercase">Select engine</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <EngineSelector engine={pulsejetData.buzzAldrinData} activeEngine={activeEngine} setActiveEngine={setActiveEngine} />
                        <EngineSelector engine={pulsejetData.angusData} activeEngine={activeEngine} setActiveEngine={setActiveEngine} />
                    </div>

                    {/* Selected engine content */}
                    {activeEngine === "buzzAldrin" ? <BuzzAldrin /> : <Angus />}
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Pulsejet;
