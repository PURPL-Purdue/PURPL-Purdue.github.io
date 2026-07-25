import { useState } from 'react';
import ContentWrapper from '../../components/layout/ContentWrapper';
import PageWrapper from '../../components/layout/PageWrapper';
import Banner from '../../components/banner/Banner';
import AccessibleCarousel from '../../components/carousel/AccessibleCarousel';
import SpecsTable from '../../components/projects/SpecsTable';
import { rdeData } from '../../json/projects';

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
            <p className="font-display2 text-stardust mt-2 text-sm">{engine.subtitle}</p>
            <p className="font-display2 text-white/70 mt-4 text-sm">{engine.selector_blurb}</p>
        </button>
    );
};

const sharedPublications = [
    {
        label: "AIAA 2026",
        title: "Hydrogen-Air RDC for Power Generation Research",
        description:
            "Design and Analysis of a Hydrogen-Air Rotating Detonation Combustor for sustainable power generation. This paper was presented at the 2026 AIAA Region III Student Conference, where the project earned 3rd Place.",
        link: "https://arc.aiaa.org/doi/10.2514/6.2026-116280",
    },
    {
        label: "AIAA 2026",
        title: "Methane-GOx RDRE with Variable Injector Layout",
        description:
            "Design and Analysis of a Methane-GOx Rotating Detonation Rocket Engine featuring a variable impinging injector layout for high-performance propulsion research.",
        link: "https://arc.aiaa.org/doi/10.2514/6.2026-116353",
    },
];

const PublicationsSection = () => {
    return (
        <div>
            <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
                Research Publications
            </h2>

            <div className="border-2 border-white/40 p-5 md:p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-1 bg-stardust"></div>

                <p className="font-display2 text-white/80 text-sm md:text-md leading-7 mb-5">
                    PURPL’s rotating detonation engine research has resulted in two peer-reviewed
                    AIAA conference publications. These papers highlight the team's work on both
                    the HADES hydrogen-air combustor and the DEIMOS methane-GOx rotating
                    detonation rocket engine, showcasing undergraduate research in advanced
                    propulsion systems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sharedPublications.map((paper) => (
                        <a
                            key={paper.title}
                            href={paper.link}
                            target="_blank"
                            rel="noreferrer"
                            className="border-2 border-white/40 p-4 transition-all hover:border-stardust hover:bg-moon/30"
                        >
                            <p className="font-display2 text-stardust text-sm uppercase mb-2">
                                {paper.label}
                            </p>

                            <h3 className="font-display-bold text-white text-xl uppercase mb-3">
                                {paper.title}
                            </h3>

                            <p className="font-display2 text-white/70 text-sm leading-6 mb-4">
                                {paper.description}
                            </p>

                            <p className="font-display2 text-stardust text-sm uppercase">
                                Read publication →
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const RoadmapPreview = ({ roadmap }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = roadmap[selectedIndex];

    return (
        <div className="w-full flex flex-col items-center">
            <p className="font-display2 text-sm md:text-md text-gray-300 text-center mb-8 max-w-2xl px-4">
                Click a milestone to preview the details for each stage of the RDE project.
            </p>

            <div className="w-full border-2 border-white/40 p-5 md:p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-[40%] relative pl-10">
                        <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-white/20"></div>

                        <div className="flex flex-col gap-3">
                            {roadmap.map(([date, title], index) => (
                                <button
                                    key={`${date}-${title}`}
                                    onClick={() => setSelectedIndex(index)}
                                    className={
                                        "relative text-left border-2 p-3 transition-all " +
                                        (selectedIndex === index
                                            ? "border-stardust bg-moon/40"
                                            : "border-white/25 hover:border-stardust")
                                    }
                                >
                                    <div
                                        className={
                                            "absolute left-[-29px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 z-10 transition-all " +
                                            (selectedIndex === index
                                                ? "bg-purple border-purple shadow-[0_0_14px_#a855f7]"
                                                : "bg-emerald-400 border-dusk")
                                        }
                                    ></div>

                                    <p className="font-display2 text-stardust text-xs">{date}</p>
                                    <p className="font-display-bold text-white text-md uppercase mt-1">{title}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-[60%] border-l-2 border-purple pl-6 min-h-[240px] flex flex-col justify-center">
                        <p className="font-display2 text-stardust text-sm mb-3">{selected[0]}</p>
                        <h3 className="font-display-bold text-3xl md:text-5xl text-white uppercase mb-4">{selected[1]}</h3>
                        <p className="font-display2 text-white/75 text-md md:text-lg leading-8 max-w-xl">{selected[2]}</p>
                        <p className="font-display2 text-white/30 text-xs mt-6">
                            Milestone {roadmap.length - selectedIndex} / {roadmap.length}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RDE = () => {
    const [activeEngine, setActiveEngine] = useState("hades");
    const data = rdeData.engines[activeEngine];

    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-14 md:bottom-16">
                        <div className="text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white">RDE</h1>
                            <p className="font-display2 text-white/80 text-sm md:text-lg mt-4 max-w-[760px] mx-auto">
                                PURPL’s rotating detonation engine work can be organized as one shared project page with separate profiles for HADES and DEIMOS.
                            </p>
                        </div>
                    </div>
                </div>
            </Banner>

            <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-8 md:space-y-12">
                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
                            About the Team
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                            <h2 className="col-span-1 font-display2 text-md md:text-lg text-white text-left">
                                RDE pushes the boundaries of air-breathing detonation technology
                                while providing students with industry-applicable experience in
                                cutting-edge propulsion research. The team is comprised of 25+
                                undergraduate students who have made rapid progress in the design
                                and development of the combustor.
                            </h2>

                            <div className="col-span-1 w-[100%] mx-auto mt-2">
                                <AccessibleCarousel
                                    photos={rdeData.sharedAboutPhotos}
                                    ariaLabel="About the team images"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="border-l-2 border-stardust pl-4">
                        <p className="font-display2 text-white/70 text-sm">Select project profile</p>
                        <h2 className="font-display-bold text-4xl lg:text-5xl text-white uppercase">{data.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <EngineSelector engine={rdeData.hadesData} activeEngine={activeEngine} setActiveEngine={setActiveEngine} />
                        <EngineSelector engine={rdeData.deimosData} activeEngine={activeEngine} setActiveEngine={setActiveEngine} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-4 w-full">
                        <div className="border-2 border-white/40 p-5 md:p-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-1 bg-stardust"></div>
                            <p className="font-display2 text-stardust text-sm uppercase mb-2">Selected profile</p>
                            <h2 className="font-display-bold text-3xl md:text-4xl text-white uppercase mb-4">{data.dashboard_title}</h2>
                            <p className="font-display2 text-white/80 text-sm md:text-md leading-7">{data.dashboard_blurb}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {data.dashboard_cards.map(([label, value], index) => (
                                <div
                                    key={label}
                                    className={
                                        "border-2 border-white/40 p-4 " +
                                        (index === 0 || index === 3 ? "bg-moon/30" : "")
                                    }
                                >
                                    <p className="font-display-bold text-stardust text-2xl">{label}</p>
                                    <p className="font-display2 text-white text-sm mt-2">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col mx-auto space-x-2 lg:space-x-4">
                        <div className="w-full z-0 mb-[200px] md:mb-[140px] md:mb-0 lg:mb-0">
                            <div className="w-full relative min-h-min">
                                <div className="w-[70%] md:w-[60%] lg:w-[50%] relative top-0 left-0">
                                    <div className="col-span-1 w-[100%] mx-auto mt-2">
                                        <AccessibleCarousel photos={data.featured.photos} ariaLabel={`${data.title} featured images`} />
                                    </div>
                                </div>

                                <div className="bg-moon/80 p-4 lg:p-6 max-w-[90%] w-[350px] md:w-[350px] lg:w-[52%] absolute top-[95%] md:top-[8%] lg:top-[10%] right-2 md:right-0 z-10">
                                    <p className="font-display2 text-stardust text-sm uppercase mb-2">{data.subtitle}</p>
                                    <p className="text-white font-display2 text-sm md:text-lg text-left">{data.featured.blurb}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
                            {data.about.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                            <h2 className="col-span-1 font-display2 text-md md:text-lg text-white text-left">{data.about.blurb}</h2>
                            <div className="col-span-1 w-[100%] mx-auto mt-2">
                                <AccessibleCarousel photos={data.about.photos} ariaLabel={`${data.about.title} images`} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
                            AIAA Region III Recognition
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                            <h2 className="col-span-1 font-display2 text-md md:text-lg text-white text-left">
                                PURPL represented Purdue University at the 2026 AIAA Region III Student Conference
                                with presentations on both HADES and DEIMOS. The HADES research paper, Design of a
                                Hydrogen-Air Rotating Detonation Combustor for Sustainable Power Generation, received
                                3rd Place in the conference competition, recognizing the team’s undergraduate research
                                in rotating detonation technology.
                            </h2>

                            <div className="col-span-1 w-[100%] mx-auto mt-2">
                                <AccessibleCarousel
                                    photos={rdeData.sharedAIAAPhotos}
                                    ariaLabel="AIAA Region III recognition images"
                                />
                            </div>
                        </div>
                    </div>

                    <SpecsTable table={data.specs_table} title={`${data.title} Engine Stats`} />
                    <PublicationsSection />
                    <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left uppercase mb-3">
                        Roadmap
                    </h2>

                    <RoadmapPreview roadmap={rdeData.sharedRoadmap} />
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default RDE;