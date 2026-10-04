// Turbopump (MARLIN) project data.
//
// SOURCE OF TRUTH: the 08/30/2026 Turbopump Info Session for `system`,
// `subsystems`, and `profile`. MARLIN V1 / V2 generation data, roadmap
// milestones, testing-campaign media, and publications come from the project
// leadership brief supplied for the redesign. Values neither source supports
// were left out rather than guessed. See the implementation report for one
// open reconciliation question (the V1/V2 numbers below don't cleanly match
// `profile`'s numbers, and it's unclear which generation `profile` describes).

import { teamPhotos } from './gallery.js';

export const turbopumpData = {
    title: 'Turbopump',

    // Project introduction: what Turbopump/MARLIN is, why PURPL is building a
    // turbopump, and the current-year focus only, no subsystem-level detail.
    intro: {
        lead:
            'Developing MARLIN, a gas-generator turbopump program for a 1,500 lbf IPA / LOx liquid rocket engine.',
        body:
            'It replaces heavy high-pressure propellant tanks with pumps that raise propellant pressure on the way to the chamber.',
        currentWork:
            'This year the team is working toward testing at least one iteration of the integrated pump and turbine assembly.',
    },
    introPhotos: [
        teamPhotos.turbopump.smiling_photo,
        teamPhotos.turbopump.serious_photo,
        teamPhotos.turbopump.fun_photo,
    ],

    // MARLIN generation selector: the primary home for generation-specific
    // specs/media. `photo` is a single image (rendered statically, not in a
    // carousel) or null when nothing is confirmed for that generation.
    marlinProgram: {
        v1: {
            key: 'v1',
            title: 'Marlin V1',
            selectorSubtitle: 'Kerosene / LOx',
            selectorPurpose: 'First complete MARLIN turbomachinery system.',
            desc:
                'MARLIN V1 is the first complete MARLIN turbomachinery system: a 5,000 lbf-class open-cycle kerosene-oxygen turbopump development program.',
            stats: [
                ['Propellants', 'Kerosene / LOx'],
                ['Design speed', '50,000 RPM'],
                ['Pressure rise', '~1,000 psi'],
                ['Generation', 'V1'],
            ],
            photo: {
                src: '/images/projects/turbopump/marlin-v1-hardware-assembly.jpg',
                alt: 'MARLIN V1 turbopump hardware assembly',
            },
        },
        v2: {
            key: 'v2',
            title: 'Marlin V2',
            selectorSubtitle: 'IPA / LOx',
            selectorPurpose: "PURPL's first TCA development effort.",
            desc:
                "MARLIN V2 is the second-generation turbopump and PURPL's first thrust chamber assembly (TCA) development effort, designed around a 1,400 lbf heatsink main combustion chamber.",
            stats: [
                ['Propellants', 'IPA / LOx'],
                ['Design speed', '40,000 RPM'],
                ['Combustion chamber', '1,400 lbf heatsink'],
                ['Generation', 'V2'],
            ],
            // No confirmed V2-specific image exists yet.
            photo: null,
        },
    },

    // ---- Engineering / System (the interactive flow diagram) --------------
    system: {
        blurb:
            'A turbopump raises propellant pressure so an engine no longer depends on heavy high-pressure tanks. Pumps add kinetic energy to the LOx and fuel; a turbine extracts energy from hot gas to spin them; and a gas generator burns a small fraction of the propellant to feed that turbine. All of the rotating machinery shares one shaft.',
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

    // ---- Hardware + Subsystems ----------------------------------------------
    // One compact explorer: the 7 subsystems plus "Full Assembly" as an 8th
    // entry (whole-machine CAD + manufactured hardware + the numbers), so the
    // old Subsystems / Full Assembly / System Profile sections become one
    // section instead of three. `photo` on a subsystem is only set where a
    // specific, already-labeled image exists (the pump impeller CAD render);
    // every other subsystem is left without one rather than guessing.
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
            photo: {
                src: '/images/projects/turbopump/TURBOPUMP_-_Pump_impeller_transparent.png',
                alt: 'Turbopump pump impeller CAD',
            },
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

    // The 8th explorer entry: the whole machine, in CAD and as manufactured
    // hardware, plus the compact numbers.
    assembly: {
        n: '08',
        key: 'assembly',
        title: 'Full Assembly',
        short: 'Assembly',
        desc:
            'One shaft carries both propellant pumps and the drive turbine as a single rotating assembly. This year the team is manufacturing and integrating that hardware to test at least one pump-turbine iteration.',
        strip: [
            { n: '01', label: 'Common shaft', value: 'Single rotating assembly' },
            { n: '02', label: 'Propellant pumps', value: 'Two: LOx and IPA' },
            { n: '03', label: 'Drive turbine', value: 'Gas-generator driven' },
        ],
        cadPhotos: [
            {
                src: '/images/projects/turbopump/TURBOPUMP_-_Full_Shaft_assembly_screenshot_transparent.png',
                alt: 'Turbopump full shaft assembly CAD',
            },
            {
                src: '/images/projects/turbopump/marlin-cad-assembly-overview-2025-12-21.png',
                alt: 'MARLIN turbopump assembly CAD overview',
            },
            {
                src: '/images/projects/turbopump/marlin-cad-assembly-section-2025-12-21.png',
                alt: 'MARLIN turbopump assembly CAD section view',
            },
            {
                src: '/images/projects/turbopump/marlin-cad-assembly-section-2026-02-01.png',
                alt: 'MARLIN turbopump assembly CAD section view',
            },
        ],
        // marlin-v1-hardware-assembly.jpg is deliberately not repeated here:
        // it's already the Marlin Program V1 photo above.
        hardwarePhotos: [
            {
                src: '/images/projects/turbopump/marlin-v1-hardware-components.jpg',
                alt: 'MARLIN V1 turbopump hardware components',
            },
            {
                src: '/images/projects/turbopump/marlin-v1-hardware-rotor-detail.jpg',
                alt: 'MARLIN V1 turbopump rotor detail',
            },
            {
                src: '/images/projects/turbopump/marlin-v1-hardware-housing-detail.jpg',
                alt: 'MARLIN V1 turbopump housing detail',
            },
            {
                src: '/images/projects/turbopump/marlin-v1-hardware-full-layout.jpg',
                alt: 'MARLIN V1 turbopump hardware, full parts layout',
            },
            {
                src: '/images/projects/turbopump/marlin-v1-hardware-rotor-handheld-01.jpg',
                alt: 'MARLIN V1 turbopump rotor, handheld',
            },
            {
                src: '/images/projects/turbopump/marlin-v1-hardware-rotor-handheld-02.jpg',
                alt: 'MARLIN V1 turbopump rotor, handheld',
            },
        ],
    },

    // Compact numbers panel shown with Full Assembly (not a standalone
    // section). Generation attribution is unconfirmed, so these are presented
    // as the system's numbers, not tagged to V1 or V2.
    profile: {
        hero: { label: 'Engine application', value: '1,500 lbf' },
        rows: [
            { label: 'Propellants', value: 'IPA / LOx' },
            { label: 'Cycle', value: 'Gas generator' },
            { label: 'Shaft speed', value: '50,000 RPM' },
            { label: 'Pump head rise', value: '1,000 psi' },
            { label: 'Turbine power', value: '180 HP' },
        ],
        note: '1,500 lbf is the engine the turbopump is built to feed, not the turbopump’s own thrust.',
    },

    // ---- Roadmap --------------------------------------------------------------
    // [date, title, description] tuples, oldest first (left to right / top to
    // bottom on the snaking timeline). Descriptions are enriched with
    // cross-references to other verified Turbopump data (marlinProgram,
    // subsystems, testing, assembly) wherever that connection genuinely
    // exists; where it doesn't, the description stays concise rather than
    // inventing engineering history.
    roadmap: [
        [
            'Aug 2024',
            'MARLIN V1 Design Begins',
            "The MARLIN V1 turbopump program begins. It's the first complete MARLIN turbomachinery system, targeting kerosene / LOx propellants at 50,000 RPM.",
        ],
        [
            'Nov 2024',
            'MARLIN V1 PDR',
            'Preliminary Design Review for MARLIN V1.',
        ],
        [
            'Apr 2025',
            'V1 Gas Generator TRR',
            'Test Readiness Review for the V1 gas generator, the subsystem that burns propellant to produce the hot gas driving the turbine.',
        ],
        [
            'May 2025',
            'V1 Gas Generator Test Campaign',
            'The V1 gas generator test campaign. Documented in Testing below.',
        ],
        [
            'Jun 2025',
            'Power Assembly CDR',
            'Critical Design Review for the turbine power assembly: the turbine and its rotating hardware that converts hot-gas energy into shaft power for the pumps.',
        ],
        [
            'Nov 2025',
            'Pumps CDR',
            'Critical Design Review for the propellant pumps, which raise both propellants to the pressure the engine requires.',
        ],
        [
            'Dec 2025',
            'Rotordynamics CDR',
            'Critical Design Review for rotordynamics, which keeps the rotating assembly stable from startup through the 50,000 RPM operating point.',
        ],
        [
            'Feb 2026',
            'TCA PDR',
            'Preliminary Design Review for the Thrust Chamber Assembly, the minimum-viable engine used to characterize the turbopump.',
        ],
        [
            'Feb 2026',
            'Torch PDR',
            'Preliminary Design Review for the torch igniter.',
        ],
        [
            'Mar 2026',
            'V1.5 Gas Generator TRR',
            'Test Readiness Review for the V1.5 gas generator, the next iteration of the hot-gas generator that drives the turbine.',
        ],
        [
            'Apr 2026',
            'V1.5 Gas Generator Test Campaign',
            'The V1.5 gas generator test campaign, ahead of MARLIN V1 hardware being fully manufactured the following month. Documented in Testing below.',
        ],
        [
            'May 2026',
            'MARLIN V1 Fully Manufactured',
            'MARLIN V1 hardware is fully manufactured: the complete shaft, pumps, and turbine assembly. See Subsystems → Full Assembly.',
        ],
        [
            'Jul 2026',
            'ECU Software ConDR',
            'Concept Design Review for the ECU software.',
        ],
        [
            'Sep 2026',
            'MARLIN V2 DCR',
            "Design review for MARLIN V2, the second-generation turbopump and PURPL's first thrust chamber assembly development effort, designed around a 1,400 lbf heatsink combustion chamber.",
        ],
        [
            'Sep 2026',
            'ECU Hardware ConDR',
            'Concept Design Review for the ECU hardware.',
        ],
    ],

    // ---- Testing --------------------------------------------------------------
    testing: {
        campaigns: [
            {
                key: 'v1',
                label: 'V1 Gas Generator',
                period: 'Spring 2025',
                blurb:
                    'The V1 gas generator test campaign, May 2025. The team tested the hot-gas generator that drives the turbine before integrating it with the rest of the turbopump.',
                photos: [
                    { src: '/images/projects/turbopump/marlin-v1-gas-generator-test-2025-01.png', alt: 'MARLIN V1 gas generator test, Spring 2025' },
                ],
            },
            {
                key: 'v15',
                label: 'V1.5 Gas Generator',
                period: 'Spring 2026',
                blurb:
                    'The V1.5 gas generator test campaign, April 2026. This was the next iteration of gas generator testing, completed the month before MARLIN V1 hardware was fully manufactured.',
                photos: [
                    { src: '/images/projects/turbopump/marlin-v15-gas-generator-test-2026-01.jpg', alt: 'MARLIN V1.5 gas generator test, Spring 2026' },
                    { src: '/images/projects/turbopump/marlin-v15-gas-generator-test-2026-02.jpg', alt: 'MARLIN V1.5 gas generator test, Spring 2026' },
                    { src: '/images/projects/turbopump/marlin-v15-gas-generator-test-2026-03.jpg', alt: 'MARLIN V1.5 gas generator test, Spring 2026' },
                    { src: '/images/projects/turbopump/marlin-v15-gas-generator-test-2026-04.jpg', alt: 'MARLIN V1.5 gas generator test, Spring 2026' },
                ],
            },
        ],
    },

    // ---- Research ---------------------------------------------------------
    research: {
        context: {
            text:
                'The team presented its turbopump work at the 2026 AIAA SciTech conference in Orlando, Florida, earning a recognition from AIAA, and the associated research paper was published.',
            photos: [
                { src: '/images/projects/turbopump/IMG_0322.jpg', alt: 'Turbopump team at AIAA SciTech 2026' },
                { src: '/images/projects/turbopump/IMG_2917.jpg', alt: 'Turbopump team at AIAA SciTech 2026' },
            ],
        },
        publications: [
            {
                title: 'Development of a 5,000 lbf Open-Cycle Kerosene-Oxygen Turbopump',
                link: 'https://arc.aiaa.org/doi/10.2514/6.2025-100089',
            },
            {
                title: 'Design and Testing of "Marlin", a 5,000 lbf Open-Cycle Kerosene-Oxygen Turbopump Rocket Engine',
                link: 'https://arc.aiaa.org/doi/10.2514/6.2026-0983',
            },
        ],
    },
};
