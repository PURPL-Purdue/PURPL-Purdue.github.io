export const teenykData = {
    title: "Teeny-K",
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
    wireframe_alt: "Teeny-k technical drawing"
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
};

export const epropData = {    
    title: "Electric Propulsion",
    subtitle: "Hall thruster commonly used on in-space propulsion systems for satellites.",
    wireframe: "/images/projects/wireframes/electric_propulsion_8_17_24.png",
    wireframe_alt: "Electric propulsion project technical drawing",
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
    blurb: 
        "As a propulsion laboratory, our mission is to push the limits of collegiate rocketry by testing new " +
        "approaches to propulsion. To facilitate this testing, the testbed team was born. Maelstrom, our current " +
        "testbed engine, is being designed to introduce PURPL to swirl injectors.",
    specs_table: {
        "Thrust": "500 lbf",
        "Propellants": "kerosene and liquid oxygen",
        "Cycle": "pressure-fed",
        "Cooling": "heatsink, regenerative",
        "Injector type": "coaxial swirl",
    },
    header_1: "Swirl Injectors",
    desc_1: 
        "The injector in a rocket engine is responsible for mixing the fuel and oxidizer efficiently to enable " + 
        "combustion in the chamber. One of the most efficient designs in the propulsion field is the coaxial " +
        "swirl injector. In this design, each propellant is spun in separate chambers, producing streams that" +
        " take the shape of cones. By placing one chamber inside the other, the injector forms two cones with " +
        "different angles that collide shortly after leaving the injector face, leading to the mixing of the two propellants.",
    images_1: [
        {
            src: "/images/projects/testbed/testbed_2.png",
            alt: "Cross section of swirl injector",
        }
    ],
    caption_1: "Cross-section of coaxial swirler",
    header_2: "Cooling",
    desc_2: 
        "Maelstrom will initially be run as a heatsink chamber to verify injector performance. A heatsink chamber does " +
        "not have active cooling and instead relies on the thermal diffusivity of the material that makes up the walls " +
        "in order to keep the engine from melting. Once the injector has been tuned, a regeneratively cooled chamber " +
        "will replace the development heatsink chamber. This active cooling method takes advantage of the high flow rates " +
        "of fuel and uses it to remove heat from the chamber walls through tiny channels that run along the length of the engine.",
    images_2: [
        {
            src: "/images/projects/testbed/testbed_5.png",
            alt: "Testbed heatsink chamber",
        },
        {
            src: "/images/projects/testbed/testbed_4.png",
            alt: "Testbed regenerative chamber",
        },
    ],
    caption_2: "Heatsink chamber (top) and regenerative chamber (bottom)",
    photo_reel: [
        {
            src: "/images/projects/testbed/testbed_1.png",
            alt: "View of testbed CAD model",
        },
        {
            src: "/images/projects/testbed/testbed_2.png",
            alt: "View of testbed CAD model",
        },
        {
            src: "/images/projects/testbed/testbed_3.png",
            alt: "View of testbed CAD model",
        },
    ],
}

export const rdeData = {
    title: "RDE",
    subtitle: "",
}