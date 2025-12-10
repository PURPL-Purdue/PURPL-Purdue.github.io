/**
 * Stores information about PURPL's executive team, administrative board, and project leads. 
 */

const defaultProfilePic = "/images/team/pattern_1.jpg"; // full path
const imagePath = "/images/team/headshots/";
const teamData = {
    major_exec: [
        {
            name: "Parth Karande",
            title: "President",
            image: "2024/IMG_2275.jpg",
            email: "pkarande@purdue.edu",
            linkedin: "https://linkedin.com/in/parth-karande/"
        },
        {
            name: "Tobey Uhm",
            title: "Treasurer",
            image: "2025_fall/resized-5.jpg",
            linkedin: "https://www.linkedin.com/in/tobeyuhm",
            email: "uhmt@purdue.edu",
        },
        {
            name: "Max Neitzke",
            title: "Project Director",
            image: "2025_fall/resized-9.jpg",
        },
        {
            name: "Jonah Nobel",
            title: "Test Stand Director",
            image: "2025_fall/resized-14.jpg",
        }
    ],
    project_leads: [
        {
            name: "Alejandro Diaz Contreras",
            title: "Turbopump Co-Lead",
            image: "2025_fall/resized-13.jpg",
            linkedin: "https://www.linkedin.com/in/alejandrodico/",
            email: "adiazcon@purdue.edu",
        },
        {
            name: "Andrew Fontanetta",
            title: "Turbopump Co-Lead",
            image: "2025_spring/DSC05738-Enhanced-NR.jpg",
            linkedin: "https://linkedin.com/in/andrew-fontanetta/",
            email: "afontanetta7@gmail.com",
        },
        {
            name: "Marvel Zheng",
            title: "Turbojet Lead",
            image: "2025_fall/resized-4.jpg",
        },
        {
            name: "Max Neitzke",
            title: "Electric Propulsion Co-Lead",
            image: "2025_fall/resized-9.jpg",
        },
        {
            name: "Madeline Taylor",
            title: "Electric Propulsion Co-Lead",
            image: "2025_spring/DSC05754-Enhanced-NR.jpg",
            email: "tayl1138@purdue.edu",
            linkedin: "https://www.linkedin.com/in/madeline-taylor-2103b12b1",
        },
        {
            name: "Dominik Sloup",
            title: "Testbed Co-Lead",
            image: "2025_fall/resized-12.jpg",
            linkedin: "https://www.linkedin.com/in/dominik-sloup-2ba20a2a7/",
            email: "dsloup@purdue.edu",
        },
        {
            name: "James Nida",
            title: "Testbed Co-Lead",
            image: "2025_fall/resized-15.jpg",
            linkedin: "https://www.linkedin.com/in/james-nida-/",
            email: "nidaj@purdue.edu",
        },
        {
            name: "Declan Koch",
            title: "Biggy-K Lead",
            image: "2025_fall/resized-3.jpg",
        },
        {
            name: "Jack Woods",
            title: "Tachyon Lead",
            image: "2025_spring/DSC05653-Enhanced-NR.jpg",
            linkedin: "https://www.linkedin.com/in/jack--woods",
            email: "woods236@purdue.edu",
        },
        {
            name: "Deepesh Balwani",
            title: "RDE Lead",
            image: "2025_fall/resized-10.jpg",
            linkedin: "https://www.linkedin.com/in/deepesh-balwani/",
            email: "ddbalwani@gmail.com",
        }
    ],
    admin_exec: [
        {
            name: "Kavina Rajan",
            title: "Marketing Chair",
            image: "2025_fall/resized-16.jpg",
        },
        {
            name: "Anjali Patel",
            title: "Social Media Chair",
            image: "2025_fall/resized-6.jpg",
        },
        {
            name: "Andrew Fontanetta",
            title: "Secretary",
            image: "2025_spring/DSC05738-Enhanced-NR.jpg",
            linkedin: "https://linkedin.com/in/andrew-fontanetta/",
            email: "afontanetta7@gmail.com",
        },
        {
            name: "Keertan Palayam",
            title: "Funding Acquisition Chair",
            image: "2025_fall/resized-8.jpg",
        },
        {
            name: "Jeramiah Arona",
            title: "Event Coordinator",
            image: "2025_fall/resized-0.jpg",

        },
        {
            name: "Alina Li",
            title: "Webmaster",
            image: "2024/DSC03308.jpg",
        },
        {
            name: "Daniel Bennett",
            title: "IT Chair",
            image: "2025_spring/DSC05734-Enhanced-NR.jpg",
        },
        {
            name: "Cole Halupnik",
            title: "Merchandise Chair",
            image: "2025_fall/resized-2.jpg",
        },
        {
            name: "Jack Woods",
            title: "Safety Officer",
            image: "2025_spring/DSC05653-Enhanced-NR.jpg",
            linkedin: "https://www.linkedin.com/in/jack--woods",
            email: "woods236@purdue.edu",
        },
        {
            name: "Sabrina Phan",
            title: "Photographer",
            image: "2025_spring/DSC05750.jpg",
        },
        {
            name: "TJ Mareachen",
            title: "Industrial Relations",
            image: "2025_spring/DSC05731-Enhanced-NR.jpg",
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
