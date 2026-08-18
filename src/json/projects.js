import { teamPhotos, eprop_202505_selectedMedia, testbed_202428_selectedMedia, tachyon_media, air_breathing_design_media } from './gallery.js';

export const biggiekData = {
    title: "Biggie-K",
    subtitle: "Portable rocket engine test stand capable of testing a wide variety of engines.",
    specs_table: {
        "Thrust rating": "500lbf",
        "Propellants": "H2, CH4, Liquid Hydrocarbons, GOX, LOX",
        "Manufacturing method": "machined/bolted from aluminum extrusions",
        "Dimensions (L x W x H)": "24in x 14in x 12in"
    },
    photo_reel1: {
        title: "About the team",
        blurb: "Currently PURPL’s primary test stand, Biggie-K was built in 2025 to test small engines and torch igniters. After the spring test campaign, it was decided that Biggie-K would be upgraded to accommodate a wider range of engines. The team overhauled the fluid system, allowing for a wider range of propellants including liquid oxygen, much higher mass flows and higher chamber pressures. The thrust structure was redesigned to accommodate engines up to 500lbf of thrust, and the team developed a industry-grade data acquisition system capable of 250 kilo-samples per second which replaced our older system. All of this was done while ensuring Biggie-K remains mobile.",
        photos: [
            teamPhotos.biggiek.smiling_photo,
            teamPhotos.biggiek.fun_photo,
        ]
    },
};

export const tachyonData = {
    title: "Tachyon",
    subtitle: "PURPL’s dedicated large engine test stand.",
    specs_table: {
        "Engine capabilities": ">5,000lbf",
        "Propellants": "cryogenic propellants capable",
        "Thrust structures": "2 independent thrust structures"
    },
    photo_reel1: {
        title: "About Tachyon",
        blurb: "Tachyon is PURPL’s dedicated large engine test stand, capable of supporting PURPL’s 5,000 lbf turbopump engine and future propulsion projects. Tachyon builds upon the lessons learned from Biggie-K and is one of the most advanced test cells in collegiate rocketry.",
        photos: tachyon_media
    },
};

export const turbopumpData = {
    title: "Turbopump",
    subtitle: "LOX-Kerosene turbopump to feed a ~5000 lbf regeneratively cooled engine.",
    wireframe: "/images/projects/turbopump/turbopump_wireframe_8_17_24.png",
    wireframe_alt: "Turbopump technical drawing",
    blurb:
        "PURPL’s turbopump project is our first pump fed engine. This project will be the first undergraduate designed, " +
        "built, and tested turbopump-fed engine in the world.",
    specs_table: {
        "thrust": "5,000-lbf",
        "propellants": "kerosene and liquid oxygen",
        "cycle": "gas generator, open cycle",
        "shaft speed": "50,000 RPM",
        "cooling": "regenerative",
    },
    desc_1:
        "When rockets get larger and larger, using pressurized tanks to move propellants into the combustion " +
        "chamber becomes less practical as the tank walls have to be extremely thick to contain the high pressures. " +
        "However, this happens at the same size as pumps start to become much more viable.",
    image_1: "/images/projects/turbopump/TURBOPUMP_-_Pump_impeller_transparent.png",
    image_1_alt: "Turbopump pump impeller",
    desc_2:
        "In order to spin the pumps, we can use a separate, smaller rocket engine that burns a small fraction of our " +
        "propellants and spins a turbine. A shaft then transfers this power to the pump impellers that raise the " +
        "pressure of the propellants before entering the combustion chamber.",
    image_2: "/images/projects/turbopump/TURBOPUMP_-_Full_Shaft_assembly_screenshot_transparent.png",
    image_2_alt: "Turbopump shaft assembly",
    photo_reel: {
        photos: [
            teamPhotos.turbopump.smiling_photo,
            teamPhotos.turbopump.fun_photo,
        ]
    },
    aiaa: {
        blurb: "Recently, the turbopump team presented their work at the 2026 AIAA SciTech conference " +
            "in Orlando, FL. The team's presentation earned a recognition from AIAA, publication of their research paper " +
            "and widespread exposure to world-renowned commercial and governmental aerospace & defense " +
            "entities and academia.",
        photos: [
            {
                src: "/images/projects/turbopump/IMG_0322.jpg",
                alt: "Turbopump team at AIAA SciTech 2026",
            },
            {
                src: "/images/projects/turbopump/IMG_2917.jpg",
                alt: "Turbopump team at AIAA SciTech 2026",
            },
        ]
    }
};

export const epropData = {
    title: "Electric Propulsion",
    subtitle: "Hall thruster commonly used on in-space propulsion systems for satellites.",
    featured: {
        photo: {
            src: "/images/projects/eprop/2025-05-SelectedMedia/eprop_07.png",
            alt: "Electric propulsion physical object",
        },
        blurb: "The Electric Propulsion team combines the minimum-viable project approach with rapid prototyping to bring" +
            " you Purdue's first ever undergraduate-lead Hall Effect Thruster. The team intends to fully design, manufacture," +
            " and operate our thruster in steady state operation and publish our findings."
    },
    photo_reel1: {
        blurb: "The team was formed in 2024 and is composed of undergraduate students at Purdue. " +
            "The team recently won third place in the undergraduate research category at IMECE 2025, impressing the judges " +
            "with a junior-and-below roster. This was a huge win for Eprop!",
        photos: [
            teamPhotos.eprop.smiling_photo,
            teamPhotos.eprop.fun_photo,
            teamPhotos.eprop.serious_photo,
        ]
    },
    photo_reel2: {
        blurb: "May 2025 marked the first full-scale, wholistic test of our hall thruster, marking the end of the initial " +
            "design process and the beginning of the tuning and researching process. The hotfire attempt saw successful plasma " +
            "generation and measurable emission current from the hotwire neutralizer filament, getting us closer to steady state " +
            "operation.",
        photos: eprop_202505_selectedMedia,
    },
}

export const turbojetData = {
    title: "Turbojet",
    subtitle: "Designing a 50 lbf turbojet engine to develop skills relevant to turbo-machinery and air breathing propulsion.",
    wireframe: "/images/projects/turbojet/turbojet_wireframe_8_17_24.png",
    wireframe_alt: "Turbojet technical drawing",
    blurb:
        "The Turbojet team is currently developing Purdue's only undergraduate air breathing propulsion project. " +
        "At 50-lbf of thrust, this engine is sized to eventually be usable as a medium sized UAV power plant. This " +
        "engine will also serve as a testbed for a study on sustainable aviation fuels.",
    specs_table: {
        "fuel": "propane, hydrogen, methane",
        "thrust": "50-lbf",
        "shaft speed": "80,000 RPM",
        "diameter": "6in",
    },
    desc_1:
        "Turbomachinery design is a very involved process, as the complex shapes found in compressors and " +
        "turbines make it very difficult to create computer models. However, thanks to our sponsor CFTurbo, the " +
        "design process was streamlined and the team completed a design review this past semester!",
    about_team: {
        photos: [
            teamPhotos.turbojet.serious_photo,
            teamPhotos.turbojet.fun_photo,
        ]
    },
    photo_reel: {
        title: "Project Gallery",
        photos: [
            {
                src: "/images/projects/turbojet/AnsysAnalysis.png",
                alt: "Compressible Highspeed Flow Modeled through our stator with Ansys Fluent",
            },
            {
                src: "/images/projects/turbojet/CrossSection.png",
                alt: "Full Engine Cross Section",
            },
            {
                src: "/images/projects/turbojet/Machining_Inprogress.jpg",
                alt: "In progress turbine manufacturing",
            },
            {
                src: "/images/projects/turbojet/Turbojet_ISO_render.jpg",
                alt: "Rendered External View of engine",
            },
        ]
    },
    aiaa: {
        title: "2026 AIAA SciTech Conference",
        blurb: "Recently, the turbojet team presented their work at the 2026 AIAA SciTech conference " +
            "in Orlando, FL. The team's presentation earned a recognition from AIAA, publication of their research paper " +
            "and widespread exposure to world-renowned commercial and governmental aerospace & defense " +
            "entities and academia.",
        photos: [
            {
                src: "/images/projects/turbojet/IMG_0322.jpg",
                alt: "Turbojet team at AIAA SciTech 2026",
            },
            {
                src: "/images/projects/turbojet/IMG_2980.jpg",
                alt: "Turbojet team at AIAA SciTech 2026",
            },
        ]
    }
};

export const testbedData = {
    title: "Testbed",
    subtitle: "250lbf bipropellant engine designed to be a reliable platform to test different subsystems.",
    featured: {
        photo: {
            src: "/images/projects/testbed/20250428/DSC0025.JPG",
            alt: "Testbed",
        },
        blurb:
            "As a propulsion laboratory, our mission is to push the limits of collegiate rocketry by testing new " +
            "approaches to propulsion. To facilitate this testing, the testbed team was born. Maelstrom, our " +
            "testbed engine, is being designed to introduce PURPL to swirl injectors.",

    },
    about_team: {
        blurb:
            "Testbed holds a special place among the PURPL teams, driving advanced chemical propulsion through " +
            "rapid prototyping and iterative engine testing. Its modular, plug-and-play approach allows the team " +
            "to continuously build on past lessons and push performance forward.",
        photos: [
            teamPhotos.testbed.serious_photo,
            teamPhotos.testbed.fun_photo,
        ]
    },
    specs_table: {
        "Thrust": "500 lbf",
        "Propellants": "kerosene and liquid oxygen",
        "Cycle": "pressure-fed",
        "Cooling": "heatsink, regenerative",
        "Injector type": "coaxial swirl",
    },
    augmented_spark_igniter: {
        header: "Augmented Spark Igniter",
        desc: "Being a bi-liquid engine, Maelstrom requires a reliable and reusable ignition source." +
            " To address both of these requirements, the team developed a GH2/GOx augmented spark igniter. " +
            "Among other components, the igniter features orifice fittings which ensure precise control over" +
            " the injection areas and allows testing of the article at a wide range of Oxidizer/Fuel Ratio setpoints.",
    },
    test_2025: {
        desc: "In June 2025, after months of hard work, the team successfully tested their first piece of hardware." +
            " Kicking off a three-week testing campaign, over 25 hot fire tests of the Maelstrom engine" +
            " torch ignitor were completed. The system was pushed across a wide range of conditions, varying" +
            " chamber pressure from 100 to 300 psi and O/F ratios from 1.5 to 5, proving its robustness.",
        image: "/images/projects/testbed/1750551261201.jpg",
        image_alt: "Torch ignitor",
    },
    header_1: "Swirl Injectors",
    desc_1:
        "The injector in a rocket engine is responsible for mixing the fuel and oxidizer efficiently to enable " +
        "combustion in the chamber. One of the most efficient designs in the propulsion field is the coaxial " +
        "swirl injector. In this design, each propellant is spun in separate chambers, producing streams that" +
        " take the shape of cones. By placing one chamber inside the other, the injector forms two cones with " +
        "different angles that collide shortly after leaving the injector face, leading to the mixing of the two propellants.",
    header_2: "Cooling",
    desc_2:
        "Maelstrom will initially be run as a heatsink chamber to verify injector performance. A heatsink chamber does " +
        "not have active cooling and instead relies on the thermal diffusivity of the material that makes up the walls " +
        "in order to keep the engine from melting. Once the injector has been tuned, a regeneratively cooled chamber " +
        "will replace the development heatsink chamber. This active cooling method takes advantage of the high flow rates " +
        "of fuel and uses it to remove heat from the chamber walls through tiny channels that run along the length of the engine.",
    photo_reel: {
        title: "More Photos",
        photos: testbed_202428_selectedMedia,
    },
}


const sharedAboutPhotos = [
    {
        src: "/images/team/group_photos/2025_fall/IMG_8459_cropped.jpg",
        alt: "PURPL fall 2025 team photo",
    },
    {
        src: "/images/projects/rde/2025-media/DazzleShotImages_011.jpg",
        alt: "RDE team project meeting",
    },
    {
        src: "/images/team/group_photos/2025_fall/IMG_8462_cropped.jpg",
        alt: "PURPL fall 2025 team group photo",
    },
    {
        src: "/images/projects/rde/2025-media/IMG_7460.jpg",
        alt: "RDE student presenting hardware",
    },
    {
        src: "/images/projects/rde/2025-media/DazzleShotImages_006.jpg",
        alt: "RDE team working during a project meeting",
    },
];

const sharedAIAAPhotos = [
    {
        src: "/images/projects/rde/2026-aiaa/IMG_0321.jpg",
        alt: "PURPL presenting RDE research at AIAA Region III",
    },
    {
        src: "/images/projects/rde/2026-aiaa/IMG_0521.jpg",
        alt: "PURPL RDE presentation at AIAA Region III",
    },
    {
        src: "/images/projects/rde/2026-aiaa/IMG_0485.jpg",
        alt: "PURPL poster discussion at AIAA Region III",
    },
    {
        src: "/images/projects/rde/2026-aiaa/8DFCB7A6-FEF2-422E-AE39-C8209BDE6634.jpg",
        alt: "PURPL team at AIAA Region III",
    },
    {
        src: "/images/projects/rde/2026-aiaa/IMG_7202.jpg",
        alt: "PURPL RDE project display at AIAA Region III",
    },
];

const sharedRoadmap = [
    [
        "Jan 2027",
        "Turbine Integration",
        "Begin turbine integration for HADES.",
    ],
    [
        "Sep 2026",
        "Hotfire Campaign",
        "Planned hotfire campaign.",
    ],
    [
        "Apr 2026",
        "AIAA Region III",
        "HADES places 3rd at AIAA Region III 2026.",
    ],
    [
        "Mar 2026",
        "Critical Design Review",
        "HADES CDR completed.",
    ],
    [
        "Oct 2025",
        "Renamed to HADES",
        "RDC project renamed to HADES.",
    ],
    [
        "Apr 2025",
        "Conceptual Design Review Complete",
        "Initial concept and direction reviewed.",
    ],
    [
        "Jan 2025",
        "Project Founded",
        "RDE project begins as LOKI.",
    ],
];

const hadesData = {
    key: "hades",
    title: "HADES",
    subtitle: "Hydrogen-Air Detonation Engine by Students",

    selector_blurb:
        "HADES (Hydrogen-Air Detonation Engine by Students) is PURPL’s hydrogen-air rotating detonation combustor, developed to advance air-breathing detonation technology for sustainable power generation applications.",

    dashboard_title: "Current HADES Status",

    dashboard_blurb:
        "HADES is currently in the manufacturing phase following a successful Critical Design Review and a third-place finish at the 2026 AIAA Region III Student Conference. The team is preparing for Fall 2026 hotfire testing and future turbine integration.",

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
            {
                src: "/images/projects/rde/shared/featured-render.png",
                alt: "HADES combustor render",
            },
            {
                src: "/images/projects/rde/shared/engine-render-1.png",
                alt: "HADES combustor render",
            },
            {
                src: "/images/projects/rde/shared/engine-cross-section.png",
                alt: "HADES combustor cross section",
            },
        ],

        blurb:
            "The Hydrogen-Air Detonation Engine by Students (HADES) is a hydrogen-air rotating detonation combustor designed for future integration with gas turbines for sustainable power generation applications.",
    },

    about: {
        title: "About HADES",

        blurb:
            "HADES gives undergraduate students hands-on experience in the design, analysis, manufacturing, and experimental validation of hydrogen-air rotating detonation combustors for sustainable power generation. The team has made rapid progress through design review, AIAA presentation, and current manufacturing preparation.",

        photos: [
            {
                src: "/images/projects/rde/hades/presentation-1.png",
                alt: "HADES presentation photo",
            },
            {
                src: "/images/projects/rde/hades/presentation-2.png",
                alt: "HADES poster discussion",
            },
        ],
    },

    highlight:
        "The HADES team recently passed its Critical Design Review in March 2026 and is currently manufacturing in preparation for the hotfire campaign in Fall 2026.",

    specs_table: {
        propellants: "gaseous hydrogen, air",
        "mass flux range": "337 - 341 kg/m^2-s",
        "equivalence ratio": "0.8 - 1.2",
        material: "316 stainless steel",
        ignition: "H2/O2 pre-detonator",
        cooling: "heatsink",
    },
};

const deimosData = {
    key: "deimos",
    title: "DEIMOS",
    subtitle: "Methane-GOx Rotating Detonation Rocket Engine",

    selector_blurb:
        "DEIMOS is PURPL’s methane-gaseous oxygen rotating detonation rocket engine, expanding the team’s research into liquid rocket propulsion and high-performance rotating detonation engines.",

    dashboard_title: "Current DEIMOS Status",

    dashboard_blurb:
        "DEIMOS is PURPL’s second rotating detonation engine program. The project focuses on methane-gaseous oxygen propulsion and is currently progressing through hardware manufacturing ahead of hotfire testing.",

    dashboard_cards: [
        ["STATUS", "Manufacturing"],
        ["NEXT", "Hotfire testing"],
        ["ENGINE", "Methane / GOx"],
        ["AIAA", "SciTech 2027"],
    ],

    content_sections: [
        ["OVERVIEW", "Methane-GOx RDRE project summary"],
        ["MEDIA", "CAD render, poster, and future manufacturing photos"],
        ["SPECS", "Engine stats and technical details"],
    ],

    featured: {
        photos: [
            {
                src: "/images/projects/rde/shared/status-photo-1.png",
                alt: "DEIMOS rotating detonation rocket engine poster",
            },
        ],

        blurb:
            "DEIMOS is a methane-gaseous oxygen rotating detonation rocket engine designed to investigate compact, high-performance rocket propulsion using rotating detonation combustion.",
    },

    about: {
        title: "About DEIMOS",

        blurb:
            "DEIMOS is PURPL’s methane-gaseous oxygen rotating detonation rocket engine, developed to investigate high-performance rocket propulsion through rotating detonation combustion. The project builds on PURPL’s experience with HADES while expanding into liquid rocket engine research.",

        photos: [
            {
                src: "/images/projects/rde/deimos/presentation-1.png",
                alt: "DEIMOS presentation photo",
            },
        ],
    },

    highlight:
        "Hardware manufacturing is underway, with full engine assembly targeted ahead of Fall 2026 hotfire testing. Research results will be presented at AIAA SciTech 2027.",

    specs_table: {
        thrust: "1350 N",
        "nominal eq. ratio": "1.3",
        propellants: "CH4 / O2",
        "mass flow rate": "0.59 kg/s",
        ignition: "pre-detonator",
        material: "C110 / SS316",
        cooling: "heat sink",
    },
};

const engines = {
    hades: hadesData,
    deimos: deimosData,
};

export const rdeData = {
    sharedAboutPhotos,
    sharedAIAAPhotos,
    sharedRoadmap,
    hadesData,
    deimosData,
    engines,
};

export const ttpData = {
    title: "Torch Training Program",
    section_1: {
        title: "Program Description",
        desc:
            "The Torch Training Program (TTP) is a year-long orientation course where new members can learn the basics of liquid propulsion design through the design, buildup, and hot-fire of a torch igniter. Participants work in teams of 3–4 alongside a designated peer mentor to compete in an internal competition graded on various factors such as cost efficiency, ignition reliability, and theoretical accuracy. Content is taught through weekly lectures, covering topics ranging from ignition basics to fluid mechanics. Material also includes engineering tools such as utilizing Python scripting, CEA analysis, and CAD software.",
        desc2:
            "The program focuses on individual product ownership, encouraging participants to consider design trade-offs and manage their projects from conception to testing. By the end of the year, members will have gained hands-on experience in propulsion engineering, teamwork, and technical problem-solving, while building a strong foundation for future contributions to larger liquid engine development projects within the organization.",
    },
    about_team: {
        photos: [
            teamPhotos.ttp.smiling_photo,
            teamPhotos.ttp.fun_photo,
        ],
    },
};

export const pulsejetData = {
    title: "Pulsejet",
    about_team: {
        blurb:"The pulsejet project champions PURPL's ideals of rapid design, manufacture and hotfire! " +
            "The team works on static testing of both valved and valveless engines. " +
            "Pulsejet is PURPL's first collaboration with an external club. The team works with Purdue National Defense Society on a jet-powered RC plane.",
        photos: [
            teamPhotos.pulsejet.smiling_photo,
            teamPhotos.pulsejet.fun_photo,
        ]
    },
}

export const airbreathingData = {
    title: "Air Breathing",
    section_1: {
        desc: "PURPL's third test stand, Air Breathing, will be a 150lbf rated stand that runs on normal and compressed air, supporting pressure-fed testing of Turbojet and Pulsejet. The stand will combine the thrust structure and fluid panel into one. Compared to Biggie-k and Tachyon, the stand will be more portable, modular and flexible for low thrust engines.",
        desc_2: "The team completed a preliminary design review in December 2025, but progress has been paused to focus efforts on other projects.",
        design_photos: air_breathing_design_media,
        },
}