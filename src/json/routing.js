// Contains routing information for the website. It is used to generate the navigation bar.

// Tree structure for navbar
export const navLinks = [
    {
        name: "home",
        link: "",
        children: [],
    },
    {
        name: "projects",
        link: "#", // don't link anywhere
        children: [
            {
                name: "turbopump",
                link: "turbopump",
            },
            {
                name: "electric propulsion",
                link: "electric-propulsion",
            },
            {
                name: "turbojet",
                link: "turbojet",
            },
            {
                name: "testbed",
                link: "testbed",
            },
            {
                name: "rde",
                link: "rde",
            },
            {
                name: "torch training program",
                link: "ttp",
            },
        ],
    },
    {
        name: "facilities",
        link: "#",
        children: [
            {
                name: "teeny k",
                link: "teeny-k",
            },
            {
                name: "tachyon",
                link: "tachyon",
            },
        ],
    },
    {
        name: "team",
        link: "team",
        children: [],
    },
    {
        name: "contact",
        link: "contact",
        children: [],
    },
];