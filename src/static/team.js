/**
 * Stores information about PURPL's executive team, administrative board, and project leads. 
 */

const defaultProfilePic = "/images/team/pattern_1.jpg"; // full path
const imagePath = "/images/team/headshots/resized-500x500/";
const teamData = {
    major_exec: [
        {
            name: "Kamon Blong",
            title: "Co-President",
            image1: "DSC03351.jpg", // serious
            image2: "DSC03352.jpg", // smiling
            email: "kblong@purdue.edu",
            linkedin: "https://www.linkedin.com/in/kamon-blong"
        },
        {
            name: "Madeline Taylor",
            title: "Co-President",
            image1: "DSC03317.jpg",
            image2: "DSC03319.jpg",
            email: "tayl1138@purdue.edu",
            linkedin: "https://www.linkedin.com/in/madeline-taylor-2103b12b1"
        },
        {
            name: "Parth Karande",
            title: "Treasurer",
            image1: "DSC03341.jpg",
            image2: "DSC03337.jpg",
            email: "pkarande@purdue.edu",
            linkedin: "https://linkedin.com/in/parth-karande/"
        },
        {
            name: "Alejandro Diaz Contreras",
            title: "Project Director",
            image1: "DSC03294.jpg",
            image2: "DSC03293.jpg",
            linkedin: "https://www.linkedin.com/in/alejandrodico/",
            email: "adiazcon@purdue.edu",
        },
        {
            name: "Jonah Nobel",
            title: "Test Stand Director",
            image1: "DSC03301.jpg",
            image2: "DSC03297.jpg",
            //email: "johndoe@example.com"
        }
    ],
    admin_exec: [
        {
            name: "Keertan Palayam",
            title: "Marketing Chair",
        },
        {
            name: "Hannah Shapiro",
            title: "Social Media Chair",
            linkedin: "www.linkedin.com/in/hannahshapiro03",
            email: "hannahshapiro03@gmail.com",
        },
        {
            name: "Andrew Fontanetta",
            title: "Secretary",
            linkedin: "https://linkedin.com/in/andrew-fontanetta/",
            email: "afontanetta7@gmail.com",

        },
        {
            name: "Tobey Uhm",
            title: "Funding Acquisition Chair",
            linkedin: "https://www.linkedin.com/in/tobeyuhm",
            email: "uhmt@purdue.edu",
        },
        {
            name: "Jeramiah Arona",
            title: "Event Coordinator",
            image1: "DSC03325.jpg",
            image2: "DSC03321.jpg",
            linkedin: "https://www.linkedin.com/in/jeramiah-arona-5b1ab92a2",
            email: "jarona@purdue.edu"
        },
        {
            name: "Alina Li",
            title: "Webmaster",
            image1: "DSC03309.jpg",
            image2: "DSC03308.jpg",
        },
        {
            name: "Daniel Bennett",
            title: "IT Chair",
        },
        {
            name: "Krish Mehta",
            title: "Merchandise Chair",
        },
        {

            name: "Shishir Tumma",
            title: "Education Chair",
        },
        {

            name: "Jack Woods",
            title: "Safety Officer",
            linkedin: "https://www.linkedin.com/in/jack--woods",
            email: "woods236@purdue.edu",
        },
        {

            name: "Sabrina Phan",
            title: "Photographer",
        },
        {

            name: "Elijah Ponds",
            title: "Photographer",
        },
        {

            name: "TJ Mareachen",
            title: "Industrial Relations",
            linkedin: "https://www.linkedin.com/in/timothy-mareachen/",
            email: "tmareach@purdue.edu",
        },
    ],
    project_leads: [
        {
            name: "Kamon Blong",
            title: "Turbopump Co-Lead",
            image1: "DSC03351.jpg",
            image2: "DSC03352.jpg",
            linkedin: "https://www.linkedin.com/in/kamon-blong/",
            email: "kblong@purdue.edu"
        }, {

            name: "Forrest Lim",
            title: "Turbopump Co-Lead",
        },
        {

            name: "Josh Hyatt",
            title: "Turbojet Lead",
            image1: "DSC03305.jpg",
            image2: "DSC03304.jpg",
        },
        {

            name: "Indrajeet Nair",
            title: "Electric Propulsion Lead",
            image1: "DSC03331.jpg",
            image2: "DSC03329.jpg",
        },
        {

            name: "Dominik Sloup",
            title: "Testbed Co-Lead",
            image1: "DSC03285.jpg",
            image2: "DSC03283.jpg",
            linkedin: "https://www.linkedin.com/in/dominik-sloup-2ba20a2a7/",
            email: "dsloup@purdue.edu",
        },
        {

            name: "James Nida",
            title: "Testbed Co-Lead",
            image1: "DSC03289.jpg",
            image2: "DSC03287.jpg",
            linkedin: "https://www.linkedin.com/in/james-nida-/",
            email: "nidaj@purdue.edu",
        },
        {
            name: "Vincent Fazio",
            title: "Teeny-K Lead",
            image1: "DSC03335.jpg",
            image2: "DSC03334.jpg",
        },
        {

            name: "Alejandro Diaz Contreras",
            title: "HMB Lead",
            image1: "DSC03294.jpg",
            image2: "DSC03293.jpg",
            linkedin: "https://www.linkedin.com/in/alejandrodico/",
            email: "adiazcon@purdue.edu",
        },
    ]
};

Object.keys(teamData).forEach(category => {
    teamData[category] = teamData[category].map(member => {
        if (member.image1) {
            member.image1 = imagePath + member.image1;
        }
        else {
            member.image1 = defaultProfilePic;
        }

        if (member.image2) {
            member.image2 = imagePath + member.image2;
        }
        else {
            member.image2 = defaultProfilePic;
        }
        return member;
    });
});

export default teamData;
