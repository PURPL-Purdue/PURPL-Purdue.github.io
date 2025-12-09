import {teamPhotos} from './gallery.js';

export const biggiekData = {
    title: "Biggie-K",
    subtitle: "Rocket engine stand made to fire torch ignitors and small rocket engines.",
    specs_table: {
        "Thrust rating": "100lbf",
        "Propellants": "GOX, hydrocarbons",
        "Manufacturing method": "machined/bolted from aluminum extrusions",
        "Dimensions (L x W x H)": "24in x 14in x 12in"
    },
    blurb:
        "This test stand was designed to accommodate small engine/torch igniter projects up to 100lbf. " +
        "It is low-cost and simple, and accommodates for PURPL's early project needs. The torch allows for" +
        " the test subject to be ignited multiple times in one session without having to replace a cartridge " +
        "or external ignition source as is required with pyrotechnic ignition systems.",
    wireframe: "/images/projects/wireframes/test_stand_8_17_24.png",
    wireframe_alt: "Biggie-k technical drawing"
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
            {
                src: teamPhotos.turbopump.smiling_photo,
                alt: "Turbopump team",
            },
            {
                src: teamPhotos.turbopump.fun_photo,
                alt: "Turbopump team",
            },
        ]
    }
};

export const epropData = {
    title: "Electric Propulsion",
    subtitle: "Hall thruster commonly used on in-space propulsion systems for satellites.",
    wireframe: "/images/projects/wireframes/electric_propulsion_8_17_24.png",
    wireframe_alt: "Electric propulsion project technical drawing",
    featured: {
        photo: {
            src: "/images/projects/eprop/eprop_07.png",
            alt: "Electric propulsion physical object",
        },
        blurb: "The Electric Propulsion team combines the minimum-viable project approach with rapid prototyping to bring" +
            " you Purdue's first ever undergraduate-lead Hall Effect Thruster. Our team intends to fully design, manufacture," +
            " and operate our thruster in steady state operation and publish our findings."
    },
    photo_reel: {
        title: "Testing and hotfire - May '25",
        blurb: "May 2025 marked the first full-scale, wholistic test of PURPL's Hall Thruster, marking the end of the initial " +
            "design process and the beginning of the tuning and researching process. The hotfire attempt saw successful plasma " +
            "generation and measurable emission current from the hotwire neutralizer filament, getting us closer to steady state " +
            "operation.",
        photos: [
            {
                src: "/images/projects/eprop/IMG_1567_1.jpg",
                alt: "Electric propulsion hot-fire",
            },
            {
                src: "/images/projects/eprop/IMG_1477_1.jpg",
                alt: "Electric propulsion hot-fire",
            },
            {
                src: "/images/projects/eprop/IMG_2904.jpeg",
                alt: "Electric propulsion hot-fire",
            },
            {
                src: "/images/projects/eprop/eprop_02.jpg",
                alt: "Electric propulsion hot-fire",
            },
            {
                src: "/images/projects/eprop/eprop_03.jpg",
                alt: "Electric propulsion hot-fire",
            },
            {
                src: "/images/projects/eprop/eprop_04.jpg",
                alt: "Electric propulsion hot-fire",
            },
            {
                src: "/images/projects/eprop/eprop_05.jpg",
                alt: "Electric propulsion hot-fire",
            },
            {
                src: "/images/projects/eprop/eprop_06.jpg",
                alt: "Electric propulsion hot-fire",
            },
        ]
    },
}

export const turbojetData = {
    title: "Turbojet",
    subtitle: "Designing a 50 lbf turbojet engine to develop skills relevant to turbo-machinery and air breathing propulsion.",
    wireframe: "/images/projects/turbojet/turbojet_wireframe_8_17_24.png",
    wireframe_alt: "Turbojet technical drawing",
    blurb:
        "The turbojet team is currently developing Purdue’s only undergraduate air breathing propulsion project. " +
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
        "design process was streamlined and the team presented a preliminary design review before the end of the semester!",
    photo_reel: [
        {
            src: "/images/projects/turbojet/turbojet_1.png",
            alt: "Turbojet CAD model",
        },
        {
            src: "/images/projects/turbojet/turbojet_2.png",
            alt: "Turbojet CAD model",
        },
        {
            src: "/images/projects/turbojet/turbojet_3.png",
            alt: "Turbojet CAD model",
        },
        {
            src: "/images/projects/turbojet/turbojet_4.png",
            alt: "Turbojet CAD model",
        },
    ]
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
            "approaches to propulsion. To facilitate this testing, the testbed team was born. Maelstrom, our current " +
            "testbed engine, is being designed to introduce PURPL to swirl injectors.",

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
        header: "Testing - June '25",
        desc: "After months of hard work, the team successfully tested their first piece of hardware." +
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
        photos: [
            {
                src: "/images/projects/testbed/20250428/DSC0025.JPG",
                alt: "Testbed",
            },
            {
                src: "/images/projects/testbed/20250428/DSC0031.JPG",
                alt: "Testbed",
            },
            {
                src: "/images/projects/testbed/20250428/DSC0034.JPG",
                alt: "Testbed",
            },
            {
                src: "/images/projects/testbed/20250428/DSC9960.JPG",
                alt: "Testbed",
            },
            {
                src: "/images/projects/testbed/20250428/DSC9965.JPG",
                alt: "Testbed",
            },
            {
                src: "/images/projects/testbed/20250428/DSC9975.JPG",
                alt: "Testbed",
            },
            {
                src: "/images/projects/testbed/20250428/DSC9977.JPG",
                alt: "Testbed",
            },
            {
                src: "/images/projects/testbed/20250428/DSC9978.JPG",
                alt: "Testbed",
            },
            {
                src: "/images/projects/testbed/20250428/DSC9981.JPG",
                alt: "Testbed",
            },
            {
                src: "/images/projects/testbed/20250428/DSC9983.JPG",
                alt: "Testbed",
            },
            {
                src: "/images/projects/testbed/20250428/DSC9986.JPG",
                alt: "Testbed",
            },
            {
                src: "/images/projects/testbed/20250428/DSC9987.JPG",
                alt: "Testbed",
            },
            {
                src: "/images/projects/testbed/20250428/DSC9988.JPG",
                alt: "Testbed",
            },
        ]
    },
}

export const rdeData = {
    title: "RDE",
    subtitle: "",
    featured: {
        photo: {
            src: "/images/projects/rde/RDE Cross Section.png",
            alt: "RDE combustor",
        },
        blurb: "The Rotating Detonation Engine team is creating a hydrogen-air rotating detonation combustor" +
            " (RDC) to be integrated with turbines for energy generation applications. " +
            "We are in the design phase and intend to begin development and testing soon.",
    },
    section_1: {
        title: "About the Project",
        desc: "RDE pushes the boundaries of air-breathing detonation technology while providing students " +
            "with direct and industry-applicable experience in cutting-edge propulsion research. Our team is comprised of four " +
            "undergraduate students who are all heavily involved in the project. Our team has made steady progress with the help" +
            " of experienced mentors like Professor Li Qiao. By the end of our project, we hope to advance current understandings of RDC technology, " +
            "pressure gain combustion, and sustainable power generation.",
    },
    timeline: {
        title: "Our Timeline",
        data: [
            {
                title: 'Jan 2025',
                description:
                    'RDE project begins'
            },
            {
                title: 'Apr 2025',
                description:
                    "Preliminary design review",
            },
            {
                title: 'Oct 2025',
                description:
                    "Critical design review"
            },
            {
                title: 'Jan 2026',
                description:
                    "Hotfire campaign for RDC"
            },
            {
                title: 'Feb 2026',
                description:
                    "Start turbine integration"
            },
        ]
    },
    photo_reel: {
        title: "Our Design",
        photos: [
            {
                src: "/images/projects/rde/RDE Test Stand Isometric.png",
                alt: "RDE combustor",
            },
            {
                src: "/images/projects/rde/RDE w Pre Det.png",
                alt: "RDE combustor 2",
            },
        ]
    }
}

export const ttpData = {
    title: "Torch Training Program",
    section_1: {
        title: "Program Description",
        desc: "The Torch Training Program (TTP) is a year-long orientation course where new members can learn the basics of liquid propulsion design through the design, buildup, and hot-fire of a torch igniter. Participants work in teams of 3–4 alongside a designated peer mentor to compete in an internal competition graded on various factors such as cost efficiency, ignition reliability, and theoretical accuracy. Content is taught through weekly lectures, covering topics ranging from ignition basics to fluid mechanics. Material also includes engineering tools such as utilizing Python scripting, CEA analysis, and CAD software."
    },
    section_2: {
        title: "Program Goals",
        desc: "The program focuses on individual product ownership, encouraging participants to consider design trade-offs and manage their projects from conception to testing. By the end of the year, members will have gained hands-on experience in propulsion engineering, teamwork, and technical problem-solving, while building a strong foundation for future contributions to larger liquid engine development projects within the organization."
    }
}

export const pulsejetData = {
    title: "Pulsejet",
    section_1: {
        title: "Project Description",
        desc: "The pulsejet project champions PURPL's ideals of rapid design, manufacture, and hotfire! The team aims to finish static testing of both valved and valveless engines within its inceptive semester. Pulsejet marks PURPL's first collaboration with an external club, working with Purdue NDS to create a jet-powered RC plane!"
    },
    featured: {
        photo: {
            src: "/images/projects/pulsejet/wireframe.png",
            alt: "Pulsejet wireframe",
        }
    }
}

export const airbreathingData = {
    title: "Air Breathing",
    section_1: {
        title: "Project Description",
        desc: "The Air Breathing Stand is a 150lbf rated stand for all of our projects that run on normal air/compressed air. It is designed to be modular and is flexible for low thrust engines. We combine the trust structure and fluid panel all into one structure. The plan is for this project to be more portable compared to Biggie-K and Tachyon."
    },
}