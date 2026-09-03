import { teamPhotos, eprop_202505_selectedMedia, testbed_202508_selectedMedia, tachyon_media, air_breathing_design_media } from './gallery.js';

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

// Testbed content. Facts verified against the Fall 2026 Testbed Info Session.
// Deliberately kept lean: photo + concise text, no architecture diagrams,
// status matrices, or component trees. Imagery is the April 2025 shoot in
// /images/projects/testbed/20250428/.
export const testbedData = {
    title: "Testbed",

    about:
        "Testbed develops experimental liquid rocket engine technology at the undergraduate level, building plug-and-play engines that let new ideas reach the test stand quickly. It began with Maelstrom, a 500 lbf RP-1 / LOx engine, and now runs as a modular research-and-development platform through Maelstrom and the MEGATRN system.",

    platforms: {
        maelstrom: {
            key: "maelstrom",
            title: "Maelstrom",
            subtitle: "Test engine",
            blurb:
                "Maelstrom is Testbed's workhorse engine. Interchangeable chambers and injectors let the team test new hardware without building a new engine each time.",
            facts: [
                ["Thrust", "500 lbf"],
                ["Propellants", "RP-1 / LOx"],
                ["Chambers", "Regen + heat-sink"],
                ["Current", "Regen testing"],
            ],

            // Engine Stats table — carried over from the original Testbed page,
            // reconciled with the Fall 2026 source (RP-1 named, injector list
            // broadened; cycle kept — the deck doesn't address it).
            specs: {
                "Thrust": "500 lbf",
                "Propellants": "kerosene (RP-1) / liquid oxygen",
                "Cycle": "pressure-fed",
                "Cooling": "heatsink, regenerative",
                "Injector type": "coaxial swirl, impinging jet",
            },

            // Expandable technical sections, restored from the original page.
            technical: [
                {
                    title: "Swirl Injectors",
                    body:
                        "The injector in a rocket engine is responsible for mixing the fuel and oxidizer efficiently to enable combustion in the chamber. One of the most efficient designs in the propulsion field is the coaxial swirl injector. In this design, each propellant is spun in separate chambers, producing streams that take the shape of cones. By placing one chamber inside the other, the injector forms two cones with different angles that collide shortly after leaving the injector face, leading to the mixing of the two propellants.",
                },
                {
                    title: "Cooling",
                    body:
                        "Maelstrom runs with two interchangeable chamber types. A heat-sink chamber has no active cooling and instead relies on the thermal diffusivity of its walls to keep the engine from melting during a burn, which makes it simple to build and well suited to verifying injector performance. A regeneratively cooled chamber takes advantage of the high fuel flow rate, routing propellant through tiny channels that run the length of the chamber walls to carry heat away and enable longer runs.",
                },
                {
                    title: "Torch Igniter",
                    body:
                        "Being a bi-liquid engine, Maelstrom requires a reliable and reusable ignition source. To address both of these requirements, the team developed a GH2/GOx augmented spark igniter. Among other components, the igniter features orifice fittings which ensure precise control over the injection areas and allows testing of the article at a wide range of Oxidizer/Fuel Ratio setpoints. It has since been tested with both the heat-sink and regenerative Maelstrom chambers.",
                },
            ],
        },

        megatrn: {
            key: "megatrn",
            title: "MEGATRN",
            subtitle: "Modular test system",
            blurb:
                "MEGATRN is a modular test platform built for rapid component swapping, so the team can develop and test experimental hardware in parallel without a dedicated engine for every idea.",
            focus: [
                ["Pintle", "Variable-area injector targeting deep throttling"],
                ["CALI", "Water-cooled calorimeter engine for long-duration burns"],
                ["Acoustic Igniter", "Lights MEGATRN using high-speed gas"],
            ],
        },
    },

    // Restored from the original Testbed page — text and photos preserved as-is
    // (compatible with the Fall 2026 source: R&D focus, plug-and-play, modular).
    team: {
        blurb:
            "Testbed holds a special place among the PURPL teams, driving advanced chemical propulsion through rapid prototyping and iterative engine testing. Its modular, plug-and-play approach allows the team to continuously build on past lessons and push performance forward.",
        photos: [
            teamPhotos.testbed.serious_photo,
            teamPhotos.testbed.fun_photo,
        ],
    },

    // Restored from the original Testbed page — original narrative and the full
    // June 2025 test-campaign carousel. Numbers are the original site's.
    testing2025: {
        blurb:
            "In June 2025, after months of hard work, the team successfully tested their first piece of hardware. Kicking off a three-week testing campaign, over 25 hot fire tests of the Maelstrom engine torch ignitor were completed. The system was pushed across a wide range of conditions, varying chamber pressure from 100 to 300 psi and O/F ratios from 1.5 to 5, proving its robustness.",
        photos: testbed_202508_selectedMedia,
    },

    // The Maelstrom profile's main visual — one carousel of every April 2025
    // hardware photo (13). Team photos and June 2025 testing photos live only
    // in their own carousels, so no image repeats anywhere on the page.
    gallery: [
        { src: "/images/projects/testbed/20250428/DSC9960.JPG", alt: "Maelstrom engine with laser-engraved nameplate in front of the fluid panel" },
        { src: "/images/projects/testbed/20250428/DSC9987.JPG", alt: "Maelstrom engine assembly on the test bench" },
        { src: "/images/projects/testbed/20250428/DSC0025.JPG", alt: "Maelstrom injector face, straight-on" },
        { src: "/images/projects/testbed/20250428/DSC0031.JPG", alt: "Maelstrom injector face, three-quarter view" },
        { src: "/images/projects/testbed/20250428/DSC0034.JPG", alt: "Maelstrom injector face, close crop" },
        { src: "/images/projects/testbed/20250428/DSC9965.JPG", alt: "Maelstrom aft end, looking into the nozzle contour" },
        { src: "/images/projects/testbed/20250428/DSC9975.JPG", alt: "\"MAELSTROM\" laser engraving on the chamber barrel" },
        { src: "/images/projects/testbed/20250428/DSC9977.JPG", alt: "Maelstrom nozzle exit and aft flange, close view" },
        { src: "/images/projects/testbed/20250428/DSC9978.JPG", alt: "Torch igniter fittings on the Maelstrom injector bulkhead" },
        { src: "/images/projects/testbed/20250428/DSC9981.JPG", alt: "Maelstrom injector bulkhead with igniter manifold installed" },
        { src: "/images/projects/testbed/20250428/DSC9983.JPG", alt: "3D-printed igniter manifold with embossed PURPL logo mounted on Maelstrom" },
        { src: "/images/projects/testbed/20250428/DSC9986.JPG", alt: "Igniter manifold block and fittings, alternate angle" },
        { src: "/images/projects/testbed/20250428/DSC9988.JPG", alt: "Testbed fluid panel and pressure instrumentation" },
    ],
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

// Shared "About the Team" copy for the RDE page. Describes the overall team
// and both engine programs at a high level (not a deep dive on either engine).
// TODO: confirm RDE team-approved phrasing for the DEIMOS sentence below.
const teamBlurb =
    "RDE pushes the boundaries of detonation technology while providing students with industry-applicable experience in cutting-edge propulsion research. The team is comprised of 25+ undergraduate students who have made rapid progress in the design and development of the combustor. Alongside HADES, the team develops DEIMOS, a methane-gaseous oxygen rotating detonation rocket engine that expands PURPL’s research into liquid rocket propulsion.";

// Shared AIAA Region III recognition. Appears once on the RDE page, above the
// project profiles, since it covers both HADES and DEIMOS.
const sharedAIAA = {
    blurb:
        "PURPL represented Purdue University at the 2026 AIAA Region III Student Conference with presentations on both HADES and DEIMOS. The HADES research paper, Design of a Hydrogen-Air Rotating Detonation Combustor for Sustainable Power Generation, received 3rd Place in the conference competition, recognizing the team’s undergraduate research in rotating detonation technology.",
    photos: sharedAIAAPhotos,
};

// Shared RDE research publications. Rendered as simple title + link cards.
const publications = [
    {
        title: "Hydrogen-Air RDC for Power Generation Research",
        link: "https://arc.aiaa.org/doi/10.2514/6.2026-116280",
    },
    {
        title: "Methane-GOx RDRE with Variable Injector Layout",
        link: "https://arc.aiaa.org/doi/10.2514/6.2026-116353",
    },
];

const hadesData = {
    key: "hades",
    title: "HADES",
    subtitle: "Hydrogen-Air Detonation Engine by Students",

    // Selector card: identifies the project only.
    selector_subtitle: "Hydrogen-Air Rotating Detonation Engine",
    selector_purpose: "Power generation research",

    dashboard_title: "Current HADES Status",

    // Current work only. What HADES *is* lives in `featured.blurb`.
    dashboard_blurb:
        "The HADES team recently passed its Critical Design Review in March 2026 and is currently manufacturing in preparation for the hotfire campaign in Fall 2026. Turbine integration will follow the hotfire campaign.",

    dashboard_cards: [
        ["STATUS", "Manufacturing"],
        ["NEXT", "Fall 2026 hotfire"],
        ["THEN", "Turbine integration"],
        ["MEDIA", "Status & project photos"],
    ],

    dashboard_photos: [
        {
            src: "/images/projects/rde/hades/presentation-1.png",
            alt: "HADES presentation photo",
        },
        {
            src: "/images/projects/rde/hades/presentation-2.png",
            alt: "HADES poster discussion",
        },
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

    // Selector card: identifies the project only.
    selector_subtitle: "Methane-GOx Rotating Detonation Rocket Engine",
    selector_purpose: "Rocket propulsion research",

    dashboard_title: "Current DEIMOS Status",

    // Current work only. What DEIMOS *is* lives in `featured.blurb`.
    dashboard_blurb:
        "Hardware manufacturing is underway, with full engine assembly targeted ahead of Fall 2026 hotfire testing. Research results will be presented at AIAA SciTech 2027.",

    dashboard_cards: [
        ["STATUS", "Manufacturing"],
        ["NEXT", "Hotfire testing"],
        ["ENGINE", "Methane / GOx"],
        ["MEDIA", "CAD render & poster"],
    ],

    dashboard_photos: [
        {
            src: "/images/projects/rde/deimos/presentation-1.png",
            alt: "DEIMOS presentation photo",
        },
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
    teamBlurb,
    sharedAboutPhotos,
    sharedAIAA,
    publications,
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