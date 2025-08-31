/**
 * Stores information about PURPL's executive team, administrative board, and project leads. 
 */

const defaultProfilePic = "/images/team/pattern_1.jpg"; // full path
const imagePath = "/images/team/headshots/";
const teamData = {
    major_exec: [
        {
            name: "Madeline Taylor",
            title: "Co-President",
            image: "resized-500x500/DSC05754-Enhanced-NR.jpg",
            email: "tayl1138@purdue.edu",
            linkedin: "https://www.linkedin.com/in/madeline-taylor-2103b12b1"
        },
        {
            name: "Parth Karande",
            title: "Co-President",
            image: "2024/resized-500x500/IMG_2275.jpg",
            email: "pkarande@purdue.edu",
            linkedin: "https://linkedin.com/in/parth-karande/"
        },
        {
            name: "Tobey Uhm",
            title: "Treasurer",
            linkedin: "https://www.linkedin.com/in/tobeyuhm",
            email: "uhmt@purdue.edu",
        },
        {
            name: "Max Neitzke",
            title: "Project Director",
            image: "resized-500x500/DSC05747-Enhanced-NR.jpg",
        },
        {
            name: "Jonah Nobel",
            title: "Test Stand Director",
            image: "2024/resized-500x500/DSC03297.jpg"
        }
    ],
    project_leads: [
        {
            name: "Alejandro Diaz Contreras",
            title: "Turbopump Co-Lead",
            image: "2024/resized-500x500/DSC03293.jpg",
            linkedin: "https://www.linkedin.com/in/alejandrodico/",
            email: "adiazcon@purdue.edu",
        },
        {
            name: "Andrew Fontanetta",
            title: "Turbopump Co-Lead",
            image: "resized-500x500/DSC05738-Enhanced-NR.jpg",
            linkedin: "https://linkedin.com/in/andrew-fontanetta/",
            email: "afontanetta7@gmail.com",
        },
        {
            name: "Marvel Zheng",
            title: "Turbojet Lead",
            image: "resized-500x500/MarvelZ.jpg",
        },
        {
            name: "Max Neitzke",
            title: "Electric Propulsion Lead",
            image: "resized-500x500/DSC05747-Enhanced-NR.jpg",
        },
        {
            name: "Dominik Sloup",
            title: "Testbed Co-Lead",
            image: "2024/resized-500x500/DSC03283.jpg",
            linkedin: "https://www.linkedin.com/in/dominik-sloup-2ba20a2a7/",
            email: "dsloup@purdue.edu",
        },
        {
            name: "James Nida",
            title: "Testbed Co-Lead",
            image: "2024/resized-500x500/DSC03287.jpg",
            linkedin: "https://www.linkedin.com/in/james-nida-/",
            email: "nidaj@purdue.edu",
        },
        {
            name: "Declan Koch",
            title: "Biggy-K Lead",
        },
        {
            name: "Jack Woods",
            title: "Tachyon Lead",
            image: "resized-500x500/DSC05653-Enhanced-NR.jpg",
            linkedin: "https://www.linkedin.com/in/jack--woods",
            email: "woods236@purdue.edu",
        },
        {
            name: "Deepesh Balwani",
            title: "RDE Lead",
            image: "resized-500x500/DSC05730-Enhanced-NR.jpg",
            linkedin: "https://www.linkedin.com/in/deepesh-balwani/",
            email: "ddbalwani@gmail.com",
        }
    ],
    admin_exec: [
        {
            title: "Marketing Chair"
        },
        {
            name: "Anjali Patel",
            title: "Social Media Chair",
        },
        {
            name: "Andrew Fontanetta",
            title: "Secretary",
            image: "resized-500x500/DSC05738-Enhanced-NR.jpg",
            linkedin: "https://linkedin.com/in/andrew-fontanetta/",
            email: "afontanetta7@gmail.com",
        },
        {
            name: "Keertan Palayam",
            title: "Funding Acquisition Chair",
        },
        {
            name: "Jeramiah Arona",
            title: "Event Coordinator",
            image: "2024/resized-500x500/DSC03321.jpg",

        },
        {
            name: "Alina Li",
            title: "Webmaster",
            image: "2024/resized-500x500/DSC03308.jpg",
        },
        {
            name: "Daniel Bennett",
            title: "IT Chair",
            image: "resized-500x500/DSC05734-Enhanced-NR.jpg",
        },
        {
            name: "Cole Halupnik",
            title: "Merchandise Chair",
            image: "resized-500x500/ColeH.png",
        },
        {
            name: "Jack Woods",
            title: "Safety Officer",
            image: "resized-500x500/DSC05653-Enhanced-NR.jpg",
            linkedin: "https://www.linkedin.com/in/jack--woods",
            email: "woods236@purdue.edu",
        },
        {
            name: "Sabrina Phan",
            title: "Photographer",
            image: "resized-500x500/DSC05750.jpg",
        },
        {
            name: "TJ Mareachen",
            title: "Industrial Relations",
            image: "resized-500x500/DSC05731-Enhanced-NR.jpg",
            linkedin: "https://www.linkedin.com/in/timothy-mareachen/",
            email: "tmareach@purdue.edu",
        }
    ]
};

Object.keys(teamData).forEach(category => {
    teamData[category] = teamData[category].map(member => {
        if (member.image) {
            member.image = imagePath + member.image;
        }
        else {
            member.image = defaultProfilePic;
        }
        return member;
    });
});

export default teamData;
