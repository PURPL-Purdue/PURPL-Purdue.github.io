import { useState } from 'react';
import ContentWrapper from '../../components/layout/ContentWrapper';
import PageWrapper from '../../components/layout/PageWrapper';
import Banner from '../../components/banner/Banner';
import AccessibleCarousel from '../../components/carousel/AccessibleCarousel';
import SpecsTable from '../../components/projects/SpecsTable';

const hadesData = {
    key: "hades",
    title: "HADES",
    subtitle: "Hydrogen-Air Detonation Engine by Students",
    selector_blurb: "HADES is PURPL’s hydrogen-air rotating detonation combustor, designed to explore air-breathing detonation technology and future turbine integration.",
    dashboard_title: "Active HADES Page Content",
    dashboard_blurb: "This profile would show the current HADES project overview, AIAA updates, manufacturing progress, engine specs, and the updated Fall 2026 hotfire roadmap.",
    dashboard_cards: [
        ["STATUS", "Manufacturing"],
        ["NEXT", "Fall 2026 hotfire"],
        ["AIAA", "3rd at Region III"],
        ["MEDIA", "AIAA + status photos"],
    ],
    content_sections: [
        ["OVERVIEW", "Project summary and purpose"],
        ["MEDIA", "Team photos, CAD renders, and status images"],
        ["SPECS", "Engine stats and technical details"],
    ],
    featured: {
        photos: [
            { src: "/images/projects/rde/rde featured.png", alt: "HADES combustor render" },
            { src: "/images/projects/rde/rde gallery 1.png", alt: "HADES combustor render" },
            { src: "/images/projects/rde/rde gallery 2.png", alt: "HADES combustor cross section" },
        ],
        blurb: "The Hydrogen-Air Detonation Engine by Students (HADES) is a hydrogen-air rotating detonation combustor to be integrated with turbines for sustainable power generation applications.",
    },
    about: {
        title: "About HADES",
        blurb: "HADES pushes the boundaries of air-breathing detonation technology while giving students hands-on experience in advanced propulsion research. The team has made rapid progress through design review, AIAA presentation, and current manufacturing preparation.",
        photos: [
            { src: "/images/projects/rde/rde featured.png", alt: "HADES project image" },
            { src: "/images/projects/rde/rde status 1.png", alt: "HADES current status image" },
        ],
    },
    highlight: "The HADES team recently passed its Critical Design Review in March 2026 and is currently manufacturing in preparation for the hotfire campaign in Fall 2026.",
    status_photos: [
        { src: "/images/projects/rde/rde status 1.png", alt: "HADES current status image" },
    ],
    specs_table: {
        "propellants": "gaseous hydrogen, air",
        "mass flux range": "337 - 341 kg/m^2-s",
        "equivalence ratio": "0.8 - 1.2",
        "material": "316 stainless steel",
        "ignition": "H2/O2 pre-detonator",
        "cooling": "heatsink",
    },
    roadmap: [
    ["Jan 2027", "Turbine Integration", "Begin turbine integration for HADES."],
    ["Sep 2026", "Hotfire Campaign", "Planned hotfire campaign."],
    ["Apr 2026", "AIAA Region III", "HADES places 3rd at AIAA Region III 2026."],
    ["Mar 2026", "Critical Design Review", "HADES CDR completed."],
    ["Oct 2025", "Project Rename", "RDC renamed to HADES."],
    ["Apr 2025", "Conceptual Design Review", "Initial concept and direction reviewed."],
    ["Jan 2025", "Project Kickoff", "RDE project begins as LOKI."],
    ],
};

const deimosData = {
    key: "deimos",
    title: "DEIMOS",
    subtitle: "Second Engine Program",
    selector_blurb: "DEIMOS is PURPL’s second engine program, separate from HADES. This section is designed to hold its own technical summary, images, specifications, and progress updates once finalized.",
    dashboard_title: "Future DEIMOS Page Content",
    dashboard_blurb: "This profile keeps the same structure as HADES, but prepares space for DEIMOS-specific CAD renders, technical excerpts, specs, manufacturing photos, and milestones once the team sends finalized material.",
    dashboard_cards: [
        ["STATUS", "Early development"],
        ["NEXT", "CAD render upload"],
        ["CONTENT", "Excerpts pending"],
        ["MEDIA", "Photos coming soon"],
    ],
    content_sections: [
        ["OVERVIEW", "Separate DEIMOS project introduction"],
        ["MEDIA", "CAD render, manufacturing photos, and future carousel"],
        ["SPECS", "Engine details once finalized"],
    ],
    featured: {
        photos: [
            { src: "/images/projects/rde/rde status 1.png", alt: "DEIMOS placeholder render" },
            { src: "/images/projects/rde/rde featured.png", alt: "DEIMOS placeholder image" },
        ],
        blurb: "DEIMOS is PURPL’s second engine program, separate from HADES. This page structure gives DEIMOS a dedicated identity while keeping it connected to the RDE Programs section.",
    },
    about: {
        title: "About DEIMOS",
        blurb: "DEIMOS would use the same project structure as HADES while keeping its own identity. Once the team sends CAD renders, excerpts, and specifications, this page can be filled in without needing another redesign.",
        photos: [
            { src: "/images/projects/rde/rde status 1.png", alt: "DEIMOS placeholder status" },
            { src: "/images/projects/rde/rde featured.png", alt: "DEIMOS placeholder render" },
        ],
    },
    highlight: "DEIMOS is currently in early development, with rendered CAD images, technical excerpts, specifications, and manufacturing updates to be added as they become available.",
    status_photos: [
        { src: "/images/projects/rde/rde status 1.png", alt: "DEIMOS status placeholder" },
    ],
    specs_table: {
        "project type": "second engine program",
        "relationship": "separate from HADES",
        "current stage": "CAD render pending",
        "technical excerpts": "coming soon",
        "specifications": "to be finalized",
        "media": "coming soon",
    },
    roadmap: [
        ["Spring 2026", "Program Formation", "DEIMOS is introduced as a separate engine program."],
        ["Summer 2026", "CAD Render", "Initial rendered CAD image added to the website."],
        ["Fall 2026", "Technical Excerpts", "Project description and technical excerpts added."],
        ["Winter 2026", "Specs Finalized", "Engine specifications prepared for the page."],
        ["2027", "Manufacturing Plan", "Manufacturing photos and updates added."],
        ["2027", "Testing Timeline", "Testing milestones added once finalized."],
    ],
};

const engines = {
    hades: hadesData,
    deimos: deimosData,
};

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
            <h2 className="font-display-bold text-3xl text-white uppercase">
                {engine.title}
            </h2>

            <p className="font-display2 text-stardust mt-2 text-sm">
                {engine.subtitle}
            </p>

            <p className="font-display2 text-white/70 mt-4 text-sm">
                {engine.selector_blurb}
            </p>
        </button>
    );
};

const RoadmapPreview = ({ roadmap }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = roadmap[selectedIndex];

    return (
        <div className="w-full flex flex-col items-center">
            <p className="font-display2 text-sm md:text-md text-gray-300 text-center mb-8 max-w-2xl px-4">
                Click a milestone to preview the details for each stage of the selected engine.
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

                                    <p className="font-display2 text-stardust text-xs">
                                        {date}
                                    </p>

                                    <p className="font-display-bold text-white text-md uppercase mt-1">
                                        {title}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-[60%] border-l-2 border-purple pl-6 min-h-[240px] flex flex-col justify-center">
                        <p className="font-display2 text-stardust text-sm mb-3">
                            {selected[0]}
                        </p>

                        <h3 className="font-display-bold text-3xl md:text-5xl text-white uppercase mb-4">
                            {selected[1]}
                        </h3>

                        <p className="font-display2 text-white/75 text-md md:text-lg leading-8 max-w-xl">
                            {selected[2]}
                        </p>

                        <p className="font-display2 text-white/30 text-xs mt-6">
                            Milestone {roadmap.length - selectedIndex} / {roadmap.length}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

const RDEMockup = () => {
    const [activeEngine, setActiveEngine] = useState("hades");
    const data = engines[activeEngine];

    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />

                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-14 md:bottom-16">
                        <div className="text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white">
                                RDE
                            </h1>

                            <p className="font-display2 text-white/80 text-sm md:text-lg mt-4 max-w-[760px] mx-auto">
                                PURPL’s rotating detonation engine work can be organized as one shared project page with separate profiles for HADES and DEIMOS.
                            </p>
                        </div>
                    </div>
                </div>
            </Banner>

            <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-8 md:space-y-12">

                    <div className="border-l-2 border-stardust pl-4">
                        <p className="font-display2 text-white/70 text-sm">
                            Select project profile
                        </p>
                        <h2 className="font-display-bold text-4xl lg:text-5xl text-white uppercase">
                            {data.title}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <EngineSelector
                            engine={hadesData}
                            activeEngine={activeEngine}
                            setActiveEngine={setActiveEngine}
                        />

                        <EngineSelector
                            engine={deimosData}
                            activeEngine={activeEngine}
                            setActiveEngine={setActiveEngine}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-4 w-full">
                        <div className="border-2 border-white/40 p-5 md:p-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-1 bg-stardust"></div>

                            <p className="font-display2 text-stardust text-sm uppercase mb-2">
                                Selected profile
                            </p>

                            <h2 className="font-display-bold text-3xl md:text-4xl text-white uppercase mb-4">
                                {data.dashboard_title}
                            </h2>

                            <p className="font-display2 text-white/80 text-sm md:text-md leading-7">
                                {data.dashboard_blurb}
                            </p>
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
                                    <p className="font-display-bold text-stardust text-2xl">
                                        {label}
                                    </p>

                                    <p className="font-display2 text-white text-sm mt-2">
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col mx-auto space-x-2 lg:space-x-4">
                        <div className="w-full z-0 mb-[200px] md:mb-[140px] md:mb-0 lg:mb-0">
                            <div className="w-full relative min-h-min">
                                <div className="w-[70%] md:w-[60%] lg:w-[50%] relative top-0 left-0">
                                    <div className="col-span-1 w-[100%] mx-auto mt-2">
                                        <AccessibleCarousel
                                            photos={data.featured.photos}
                                            ariaLabel={`${data.title} featured images`}
                                        />
                                    </div>
                                </div>

                                <div className="bg-moon/80 p-4 lg:p-6 max-w-[90%] w-[350px] md:w-[350px] lg:w-[52%] absolute top-[95%] md:top-[8%] lg:top-[10%] right-2 md:right-0 z-10">
                                    <p className="font-display2 text-stardust text-sm uppercase mb-2">
                                        {data.subtitle}
                                    </p>
                                    <p className="text-white font-display2 text-sm md:text-lg text-left">
                                        {data.featured.blurb}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
                            {data.about.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                            <h2 className="col-span-1 font-display2 text-md md:text-lg text-white text-left">
                                {data.about.blurb}
                            </h2>

                            <div className="col-span-1 w-[100%] mx-auto mt-2">
                                <AccessibleCarousel
                                    photos={data.about.photos}
                                    ariaLabel={`${data.about.title} images`}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {data.content_sections.map(([label, value]) => (
                            <div key={label} className="border-2 border-white/40 p-4">
                                <p className="font-display-bold text-stardust text-2xl">
                                    {label}
                                </p>

                                <p className="font-display2 text-white text-sm mt-2">
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-br from-old-gold to-stardust from-30% h-full w-full">
                        <div className="flex flex-col m-1 items-center h-fit">
                            <div className="w-full bg-dusk py-3 px-auto space-y-1">
                                <h2 className="font-display2 italic text-md md:text-lg text-white text-balance">
                                    {data.highlight}
                                </h2>
                            </div>
                        </div>
                    </div>

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
                                    photos={data.about.photos}
                                    ariaLabel="About the team images"
                                />
                            </div>
                        </div>
                    </div>

                    <SpecsTable table={data.specs_table} title={`${data.title} Engine Stats`} />

                    <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left uppercase mb-3">
                        Roadmap
                    </h2>

                    <RoadmapPreview roadmap={data.roadmap} />
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default RDEMockup;