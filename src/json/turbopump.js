// Turbopump project data.
//
// SOURCE OF TRUTH: the 08/30/2026 Turbopump Info Session. Values the session
// does not support were dropped from the old page — notably the 5,000 lbf
// engine, the "regeneratively cooled" engine, and the "first undergraduate
// turbopump-fed engine in the world" claim. The current minimum-viable thrust
// chamber is a 1,500 lbf, heatsink-cooled engine used to characterize the pump.
// 1,500 lbf is the ENGINE APPLICATION the turbopump feeds, not its own thrust.

import { teamPhotos } from './gallery.js';

export const turbopumpData = {
    title: 'Turbopump',

    // Project introduction (first content section). Same verified facts as
    // before, recomposed into a hierarchy: a short primary statement, a
    // secondary explanation, and the current-year work. No new facts.
    intro: {
        lead:
            'Developing a gas-generator turbopump for a 1,500 lbf IPA / LOx liquid rocket engine.',
        body:
            'It replaces heavy high-pressure propellant tanks with pumps that raise propellant pressure on the way to the chamber.',
        currentWork:
            'This year the team is working toward testing at least one iteration of the integrated pump and turbine assembly.',
    },
    // Existing team photography, reused from the team gallery.
    introPhotos: [
        teamPhotos.turbopump.smiling_photo,
        teamPhotos.turbopump.serious_photo,
        teamPhotos.turbopump.fun_photo,
    ],

    system: {
        blurb:
            'A turbopump raises propellant pressure so an engine no longer depends on heavy high-pressure tanks. Pumps add kinetic energy to the LOx and fuel; a turbine extracts energy from hot gas to spin them; and a gas generator burns a small fraction of the propellant to feed that turbine. All of the rotating machinery shares one shaft.',
        architecture:
            'A traditional ox–kero–turbine arrangement, broadly similar in layout to FASTRAC, the F-1, and Merlin.',
        // Nodes for the interactive diagram. `role` is one plain sentence built
        // only from verified information; the two propellant pumps are shown as
        // one node for clarity.
        nodes: [
            {
                id: 'pumps',
                label: 'Pumps',
                role: 'Add kinetic energy to the LOx and fuel to raise their pressure before the engine.',
            },
            {
                id: 'shaft',
                label: 'Shaft',
                role: 'Carries turbine power to both propellant pumps as one rotating assembly.',
            },
            {
                id: 'turbine',
                label: 'Turbine',
                role: 'Extracts energy from hot gas to drive the shaft that turns the pumps.',
            },
            {
                id: 'gasGen',
                label: 'Gas Generator',
                role: 'Burns a small fraction of the propellant to produce the hot gas that spins the turbine.',
            },
            {
                id: 'engine',
                label: 'Engine',
                role: 'Receives both propellants at high pressure from the pumps and produces thrust.',
            },
        ],
    },

    assembly: {
        subtitle: 'The machine',
        // Description of the built hardware (no specs — SYSTEM PROFILE owns
        // those, and the working principle is covered in THE SYSTEM). Focused on
        // the integrated rotating assembly and this year's build.
        desc:
            'One shaft carries both propellant pumps and the drive turbine as a single rotating assembly. This year the team is manufacturing and integrating that hardware to test at least one pump–turbine iteration.',
        // Compact finishing strip beneath the composition — three parts of the
        // machine shown in the CAD above. Each value restates content already on
        // the page (assembly.desc, system.blurb / nodes, profile cycle); it is
        // not a copy of the SYSTEM PROFILE spec rows.
        strip: [
            { n: '01', label: 'Common shaft', value: 'Single rotating assembly' },
            { n: '02', label: 'Propellant pumps', value: 'Two — LOx and IPA' },
            { n: '03', label: 'Drive turbine', value: 'Gas-generator driven' },
        ],
        // Existing PURPL CAD renders of the assembly.
        photos: [
            {
                src: '/images/projects/turbopump/TURBOPUMP_-_Full_Shaft_assembly_screenshot_transparent.png',
                alt: 'Turbopump full shaft assembly CAD',
            },
            {
                src: '/images/projects/turbopump/TURBOPUMP_-_Pump_impeller_transparent.png',
                alt: 'Turbopump pump impeller CAD',
            },
        ],
    },

    subsystems: [
        {
            n: '01',
            key: 'pumps',
            title: 'Pumps',
            short: 'Pumps',
            purpose: 'Raise the pressure of both propellants on the way to the engine.',
            requirements: [
                'Deliver LOx and fuel at a 1,000 psi head rise',
                'Mitigate LOx ignition risks',
                'Minimize cavitation',
            ],
        },
        {
            n: '02',
            key: 'seal',
            title: 'Interpropellant Seal',
            short: 'Seal',
            purpose: 'Keep fuel and oxidizer completely separated across the shaft.',
            requirements: [
                'Completely prevent any mixing of the propellants',
                'Allow enough controlled leakage to cool the bearings',
                'Minimize secondary flow losses',
            ],
        },
        {
            n: '03',
            key: 'rotordynamics',
            title: 'Rotordynamics',
            short: 'Rotordynamics',
            purpose: 'Keep the rotating assembly stable from startup through full speed.',
            requirements: [
                'Integrate with every shaft-mounted component',
                'Minimize instability at the 50,000 RPM operating point and through the startup transient',
                'Remain compatible with cryogenic and mechanical loads',
            ],
        },
        {
            n: '04',
            key: 'gasgen',
            title: 'Gas Generator',
            short: 'Gas Gen',
            purpose: 'Produce the hot gas that drives the turbine.',
            requirements: [
                'Provide continuous exhaust gas to the turbine',
                'Hold seal and structural integrity at elevated temperature and pressure',
                'Maintain stable combustion',
            ],
        },
        {
            n: '05',
            key: 'turbine',
            title: 'Turbine',
            short: 'Turbine',
            purpose: 'Convert hot-gas energy into shaft power for the pumps.',
            requirements: [
                'Deliver enough power and speed to spin the LOx and fuel pumps',
                'Meet the current 180 HP power target',
                'Survive steady-state operation',
            ],
        },
        {
            n: '06',
            key: 'components',
            title: 'Components',
            short: 'Components',
            purpose: 'Build the small pneumatic hardware the system runs on.',
            requirements: [
                'Pilot solenoid valve and fittings',
                'Qualification planning and testing',
                'Process control',
            ],
            note: 'Goal: simple, reliable pneumatic solenoids and fittings.',
        },
        {
            n: '07',
            key: 'tca',
            title: 'Thrust Chamber Assembly',
            short: 'TCA',
            purpose: 'A minimum-viable engine used to characterize the pump.',
            requirements: [
                '1,500 lbf engine',
                'Heatsink cooled',
                'As simple and inexpensive as practical',
            ],
            note: 'The goal is to characterize the turbopump with a running engine.',
        },
    ],

    profile: {
        hero: { label: 'Engine application', value: '1,500 lbf' },
        rows: [
            { label: 'Propellants', value: 'IPA / LOx' },
            { label: 'Cycle', value: 'Gas generator' },
            { label: 'Shaft speed', value: '50,000 RPM' },
            { label: 'Pump head rise', value: '1,000 psi' },
            { label: 'Turbine power', value: '180 HP' },
        ],
    },

    development: {
        // Program context (intro paragraph).
        blurb:
            'Turbopump is an active development program. Following a design, manufacture, integrate, test, and iterate cycle, the team has run several design reviews, moved hardware into manufacturing, and completed multiple component test campaigns.',
        // The verified current-year objective, raised into its own block.
        objective: 'Test at least one iteration of the integrated pump–turbine assembly.',
    },

    recognition: {
        subtitle: 'AIAA SciTech 2026',
        text:
            'The team presented its turbopump work at the 2026 AIAA SciTech conference in Orlando, Florida, earning a recognition from AIAA, and the associated research paper was published.',
        // Publication row (RDE Recognition format). The associated paper could
        // not be resolved from repo materials: src/json/press.js lists two
        // turbopump papers, BOTH titled "5,000 lbf Open-Cycle Kerosene-Oxygen
        // Turbopump" (the current project is 1,500 lbf IPA / LOx), and nothing
        // ties either to this recognition. Left empty pending a confirmed
        // { title, link } — add one entry and the row renders in RDE's format.
        publications: [],
        photos: [
            { src: '/images/projects/turbopump/IMG_0322.jpg', alt: 'Turbopump team at AIAA SciTech 2026' },
            { src: '/images/projects/turbopump/IMG_2917.jpg', alt: 'Turbopump team at AIAA SciTech 2026' },
        ],
    },
};
