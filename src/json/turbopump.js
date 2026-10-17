// Turbopump (MARLIN) project data.
//
// `system`, `subsystems`, and `profile` trace to the 08/30/2026 Turbopump Info
// Session. MARLIN V1/V2 data, roadmap milestones, testing media, and
// publications come from the later redesign brief. Unverified values were
// left out rather than guessed.
//
// V1 is a 5,000 lbf conceptual engine, Kerosene/LOx. V2 is 1,400 lbf,
// IPA/LOx — never 1,500 lbf, which was an earlier, incorrect figure.

export const turbopumpData = {
    title: 'Turbopump',

    // Intro stays high-level; no subsystem detail here.
    intro: {
        lead:
            'Developing MARLIN, a gas-generator turbopump program for a 1,500 lbf IPA / LOx liquid rocket engine.',
        body:
            'It replaces heavy high-pressure propellant tanks with pumps that raise propellant pressure on the way to the chamber.',
        currentWork:
            'This year the team is working toward testing at least one iteration of the integrated pump and turbine assembly.',
    },
    // Full team replacement set, in the order the team specified.
    introPhotos: [
        {
            src: '/images/projects/turbopump/marlin-team-fall-2025-formal.png',
            alt: 'MARLIN team, Fall 2025',
            caption: { title: 'Fall 2025 Team' },
        },
        {
            src: '/images/projects/turbopump/marlin-team-fall-2025-fun.png',
            alt: 'MARLIN team, Fall 2025',
            caption: { title: 'Fall 2025 Team' },
        },
        {
            src: '/images/projects/turbopump/marlin-team-aiaa-student-conference.png',
            alt: 'MARLIN team at the AIAA Student Conference',
            caption: { title: 'AIAA Region III Student Conference' },
        },
        {
            src: '/images/projects/turbopump/marlin-team-v1-pdr.png',
            alt: 'MARLIN team at the V1 Preliminary Design Review',
            caption: { title: 'MARLIN V1 Preliminary Design Review' },
        },
        {
            src: '/images/projects/turbopump/marlin-team-spring-2025.png',
            alt: 'MARLIN team, Spring 2025',
            caption: { title: 'Spring 2025 Team' },
        },
    ],

    // `photo` is a single static image (not a carousel), or null when nothing
    // is confirmed for that generation.
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
            selectorPurpose: "PURPL's first open cycle development effort.",
            desc:
                "MARLIN V2 is a second-generation turbopump and PURPL's first open-cycle development effort, incorporating thrust chamber assembly (TCA) development around a 1,400 lbf heatsink main combustion chamber.",
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

    // Photos are only set where confirmed by the team; nothing here is guessed.
    subsystems: [
        {
            n: '01',
            key: 'pumps',
            title: 'Pumps',
            short: 'Pumps',
            purpose: 'Raise the pressure of both propellants on the way to the engine.',
            requirements: [
                'Deliver LOx and fuel at a required pressure rise',
                'Mitigate LOx ignition risks',
                'Minimize cavitation',
            ],
            // The original impeller render was dropped: the team flagged it as
            // out of date (also removed from the repo as a confirmed duplicate).
            photos: [
                {
                    src: '/images/projects/turbopump/marlin-cad-pump-housing.png',
                    alt: 'Turbopump pump housing CAD',
                },
                {
                    src: '/images/projects/turbopump/marlin-cad-pump-impeller-alt.png',
                    alt: 'Turbopump pump impeller CAD',
                },
            ],
        },
        {
            n: '02',
            key: 'seal',
            title: 'Seals',
            short: 'Seal',
            purpose: 'Keep fuel and oxidizer completely separated across the shaft.',
            requirements: [
                'Completely prevent any mixing of the propellants',
                'Allow enough controlled leakage to cool the bearings',
                'Minimize secondary flow losses',
            ],
            // Interpropellant seal cross-section pulled pending engineering
            // review (labeled internal flow paths). Falls back to the same
            // text-only layout Components and TCA already use below.
        },
        {
            n: '03',
            key: 'rotordynamics',
            title: 'Rotordynamics',
            short: 'Rotordynamics',
            purpose: 'Keep the rotating assembly stable from startup through full speed.',
            requirements: [
                'Integrate with every shaft-mounted component',
                'Minimize instability at required operating point during steady state and startup transient',
                'Remain compatible with cryogenic and mechanical loads',
            ],
            photo: {
                src: '/images/projects/turbopump/marlin-cad-rotordynamics.png',
                alt: 'Turbopump rotordynamics mode shape analysis, LOx pump, Mode 2F',
            },
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
            photo: {
                src: '/images/projects/turbopump/marlin-cad-valve-manifold.png',
                alt: 'Turbopump gas generator CAD',
            },
        },
        {
            n: '05',
            key: 'turbine',
            title: 'Turbine',
            short: 'Turbine',
            purpose: 'Convert hot-gas energy into shaft power for the pumps.',
            requirements: [
                'Deliver enough power and speed to spin the LOx and fuel pumps',
                'Survive steady-state operation',
            ],
            photo: {
                src: '/images/projects/turbopump/marlin-cad-turbine.png',
                alt: 'Turbopump turbine wheel CAD',
            },
        },
        {
            n: '06',
            key: 'components',
            title: 'Components',
            short: 'Components',
            purpose: 'Design, build, test the miscellaneous hardware the system requires.',
            requirements: [
                'ECU (Engine Control Unit)',
                'Throttle valve actuators',
                'Small component test stand',
            ],
        },
        {
            n: '07',
            key: 'tca',
            title: 'Thrust Chamber Assembly',
            short: 'TCA',
            purpose: 'A minimum-viable engine used to characterize the pump.',
            requirements: [
                '1,400 lbf engine',
                'Heatsink cooled',
                'As simple and inexpensive as practical',
            ],
            note: 'The goal is to characterize the turbopump with a running engine.',
        },
    ],

    // Rendered as a permanent section under MARLIN V1, not as one of the
    // Subsystems selector states: the whole machine, in CAD and as
    // manufactured hardware, plus the compact numbers.
    assembly: {
        title: 'Full Assembly',
        desc:
            'One shaft carries both propellant pumps and the drive turbine as a single rotating assembly. This year the team is manufacturing and integrating that hardware to test at least one pump-turbine iteration.',
        strip: [
            { n: '01', label: 'Common shaft', value: 'Single rotating assembly' },
            { n: '02', label: 'Propellant pumps', value: 'Two: LOx and IPA' },
            { n: '03', label: 'Drive turbine', value: 'Gas-generator driven' },
        ],
        // The two internal cross-section renders (assembly-section-2025-12-21,
        // assembly-section-2026-02-01) are pulled pending engineering review;
        // these two exterior-only views stay.
        cadPhotos: [
            {
                src: '/images/projects/turbopump/marlin-cad-full-shaft-assembly.png',
                alt: 'Turbopump full shaft assembly CAD',
            },
            {
                src: '/images/projects/turbopump/marlin-cad-assembly-overview-2025-12-21.png',
                alt: 'MARLIN turbopump assembly CAD overview',
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

    // Shown inside Full Assembly, under MARLIN V1. Confirmed as V1's numbers
    // (5,000 lbf conceptual engine, Kerosene/LOx) by the team directly, not
    // the 1,500 lbf / IPA-LOx figures this was previously (incorrectly) shown with.
    profile: {
        hero: { label: 'Engine application', value: '5,000 lbf' },
        rows: [
            { label: 'Propellants', value: 'Kerosene / LOx' },
            { label: 'Cycle', value: 'Gas generator' },
            { label: 'Shaft speed', value: '50,000 RPM' },
            { label: 'Pump head rise', value: '1,000 psi' },
            { label: 'Turbine power', value: '180 HP' },
        ],
        note: '5,000 lbf is the conceptual engine the turbopump is built to feed, not the turbopump’s own thrust.',
    },

    // [date, title, description] tuples, oldest first. Descriptions that
    // reference other sections (marlinProgram, subsystems, testing, assembly)
    // are drawing on facts already verified there, not adding new claims.
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
            'Apr 2025',
            'AIAA Region III Student Conference',
            'The team presents a paper at the AIAA Student Conference Region III.',
        ],
        [
            'May 2025',
            'V1 Gas Generator Test Campaign',
            'The V1 gas generator test campaign. Documented in Testing below.',
        ],
        [
            'Jun 2025',
            'Power Assembly CDR',
            'Critical Design Review for the power assembly.',
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
            'Jan 2026',
            'AIAA SciTech 2026',
            'The team presents a second paper at the 2026 AIAA SciTech conference.',
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
            'MARLIN V1 hardware is fully manufactured: the complete shaft, pumps, and turbine assembly. See Marlin Program → V1 → Full Assembly.',
        ],
        [
            'Jul 2026',
            'ECU Software ConDR',
            'Concept Design Review for the ECU (Engine Control Unit) software.',
        ],
        [
            'Sep 2026',
            'MARLIN V2 DCR',
            "Design review for MARLIN V2, the second-generation turbopump and PURPL's first open-cycle development effort, designed around a 1,400 lbf heatsink combustion chamber.",
        ],
        [
            'Sep 2026',
            'ECU Hardware ConDR',
            'Concept Design Review for the ECU (Engine Control Unit) hardware.',
        ],
        [
            'Oct 2026',
            'TCA Critical Design Review',
            'Critical Design Review for the Thrust Chamber Assembly, the minimum-viable engine used to characterize the turbopump.',
        ],
        [
            'Oct 2026',
            'Gas Generator Preliminary Design Review',
            'Preliminary Design Review for the gas generator, the subsystem that burns propellant to produce the hot gas driving the turbine.',
        ],
    ],

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
                    { src: '/images/projects/turbopump/marlin-test-firing-dusk.png', alt: 'MARLIN V1 gas generator test firing at dusk' },
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

    research: {
        // Verified directly against the AIAA listings linked below: the first
        // paper published through the AIAA Regional Student Conferences
        // (Region III), the second through the 2026 AIAA SciTech Forum in
        // Orlando. None of the three photos name their specific event, so
        // captions stay generic rather than guess which trip each is from.
        context: {
            text:
                'The team presented its turbopump work at the AIAA Student Conference Region III and the 2026 AIAA SciTech conference in Orlando, Florida. Both papers were published.',
            photos: [
                { src: '/images/projects/turbopump/IMG_0322.jpg', alt: 'Turbopump team at an AIAA conference' },
                { src: '/images/projects/turbopump/IMG_2917.jpg', alt: 'Turbopump team presenting at an AIAA conference' },
                { src: '/images/projects/turbopump/marlin-research-aiaa-team.png', alt: 'Turbopump team in formal attire at an AIAA conference' },
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
