import { useState } from 'react';
import ContentWrapper from '../../../components/layout/ContentWrapper';
import PageWrapper from '../../../components/layout/PageWrapper';
import Banner from '../../../components/banner/Banner';
import AccessibleCarousel from '../../../components/carousel/AccessibleCarousel';
import HADES from './HADES';
import DEIMOS from './DEIMOS';
import Publications from './Publications';
import { rdeData } from '../../../json/projects';

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

// RDE page organizer. Everything above "Project Profiles" is shared RDE
// content; everything below is specific to the selected engine.
const RDE = () => {
    const [activeEngine, setActiveEngine] = useState("hades");

    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-14 md:bottom-16">
                        <div className="text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white">RDE</h1>
                        </div>
                    </div>
                </div>
            </Banner>

            <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-8 md:space-y-12">
                    {/* Shared: About the Team */}
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                            <h2 className="col-span-1 font-display2 text-md md:text-lg text-white text-left">
                                {rdeData.teamBlurb}
                            </h2>

                            <div className="col-span-1 w-[100%] mx-auto mt-2">
                                <AccessibleCarousel
                                    photos={rdeData.sharedAboutPhotos}
                                    ariaLabel="About the team images"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Shared: AIAA Region III Recognition */}
                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
                            AIAA Region III Recognition
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                            <h2 className="col-span-1 font-display2 text-md md:text-lg text-white text-left">
                                {rdeData.sharedAIAA.blurb}
                            </h2>

                            <div className="col-span-1 w-[100%] mx-auto mt-2">
                                <AccessibleCarousel
                                    photos={rdeData.sharedAIAA.photos}
                                    ariaLabel="AIAA Region III recognition images"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Shared: Publications */}
                    <Publications />

                    {/* Project Profiles selector */}
                    <div className="border-l-2 border-stardust pl-4">
                        <p className="font-display2 text-white/70 text-sm uppercase">Select project profile</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <EngineSelector engine={rdeData.hadesData} activeEngine={activeEngine} setActiveEngine={setActiveEngine} />
                        <EngineSelector engine={rdeData.deimosData} activeEngine={activeEngine} setActiveEngine={setActiveEngine} />
                    </div>

                    {/* Selected engine content */}
                    {activeEngine === "hades" ? <HADES /> : <DEIMOS />}
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default RDE;
