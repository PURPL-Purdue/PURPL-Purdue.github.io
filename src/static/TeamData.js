import React from 'react';

const tempProfilePic = "/images/team/pattern_1.jpg";
const imagePath = "/images/team/headshots/resized-500x500/";
const teamData = {
    major_exec: [
        {
            name: "Kamon Blong",
            title: "Co-President",
            image1: "DSC03351.jpg", // serious
            image2: "DSC03352.jpg", // smiling
            //email: "johndoe@example.com",
            linkedin: "https://www.linkedin.com/in/kamon-blong",
        },
        {
            name: "Madeline Taylor",
            title: "Co-President",
            image1: "DSC03317.jpg",
            image2: "DSC03319.jpg",
            // email: "johndoe@example.com"
            linkedin: "https://www.linkedin.com/in/madeline-taylor-2103b12b1",
        },
        {
            name: "Parth Karande",
            title: "Treasurer",
            image1: "DSC03341.jpg",
            image2: "DSC03337.jpg",
            //email: "johndoe@example.com"
            linkedin: "https://linkedin.com/in/parth-karande/",
        },
        {
            name: "Alejandro Diaz Contreras",
            title: "Project Director",
            image1: "DSC03294.jpg",
            image2: "DSC03293.jpg",
            // email: "johndoe@example.com"
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
            name: "Jack Bolster",
            title: "Marketing Chair",
            linkedin: "https://www.linkedin.com/in/jack-bolster-9a9a38155/",
            // email: "johndoe@example.com"
        },
        {
            name: "Hannah Shapiro",
            title: "Social Media Chair",
            linkedin: "www.linkedin.com/in/hannahshapiro03",
            // email: "johndoe@example.com"
        },
        {
            name: "Carter Moody",
            title: "Secretary",
            // email: "johndoe@example.com"
        },
        {
            name: "Indrajeet Nair",
            title: "Funding Acquisition Chair",
            image1: "DSC03331.jpg",
            image2: "DSC03329.jpg",
            // email: "johndoe@example.com"
        },
        {
            name: "Josue Rodas",
            title: "Event Coordinator",
            linkedin: "https://linkedin.com/in/josue-rodas-7b004524a/",
            // email: "johndoe@example.com"
        },
        {
            name: "Alina Li",
            title: "Webmaster",
            image1: "DSC03309.jpg",
            image2: "DSC03308.jpg",
            // email: "johndoe@example.com"
        },
        {
            name: "James Nida",
            title: "IT Chair",
            image2: "DSC03287.jpg",
            image1: "DSC03289.jpg",
            linkedin: "https://www.linkedin.com/in/james-nida-/",
            //email: "johndoe@example.com"
        },
        {
            name: "Sean O'Rourke",
            title: "Merchandise Chair",
            linkedin: "https://www.linkedin.com/in/sean-orourke-158888325/",
            //email: "johndoe@example.com"
        },
        {

            name: "Kamon Blong",
            title: "Education Chair",
            image1: "DSC03351.jpg",
            image2: "DSC03352.jpg",
            linkedin: "https://www.linkedin.com/in/kamon-blong/",
            //email: "johndoe@example.com"
        },
        {

            name: "Jeremiah Arona",
            title: "Physical Activity Coordinator",
            image1: "DSC03325.jpg",
            image2: "DSC03321.jpg",
            linkedin: "www.linkedin.com/in/jeramiah-arona-5b1ab92a2",
            //email: "johndoe@example.com"
        },
        {

            name: "Jack Woods",
            title: "Safety Officer",
            linkedin: "https://www.linkedin.com/in/jack--woods",
            //email: "johndoe@example.com"
        },
    ],
    project_leads: [
        {

            name: "Kamon Blong",
            title: "Turbopump Co-Lead",
            image1: "DSC03351.jpg",
            image2: "DSC03352.jpg",
            linkedin: "https://www.linkedin.com/in/kamon-blong/",
            //email: "johndoe@example.com"
        }, {

            name: "Forrest Lim",
            title: "Turbopump Co-Lead",
            //email: "johndoe@example.com"
        },
        {

            name: "Josh Hyatt",
            title: "Turbojet Lead",
            image1: "DSC03305.jpg",
            image2: "DSC03304.jpg",
            //email: "johndoe@example.com"
        },
        {

            name: "Indrajeet Nair",
            title: "Electric Propulsion Lead",
            image1: "DSC03331.jpg",
            image2: "DSC03329.jpg",
            //email: "johndoe@example.com"
        },
        {

            name: "Dominik Sloup",
            title: "Testbed Co-Lead",
            image1: "DSC03285.jpg",
            image2: "DSC03283.jpg",
            linkedin: "https://www.linkedin.com/in/dominik-sloup-2ba20a2a7/",
            //email: "johndoe@example.com"
        },
        {

            name: "James Nida",
            title: "Testbed Co-Lead",
            image1: "DSC03289.jpg",
            image2: "DSC03287.jpg",
            linkedin: "https://www.linkedin.com/in/james-nida-/",
            //email: "johndoe@example.com"
        },
        {

            name: "Vincent Fazio",
            title: "Teeny-K Lead",
            image1: "DSC03335.jpg",
            image2: "DSC03334.jpg",
            //email: "johndoe@example.com"
        },
        {

            name: "Alejandro Diaz Contreras",
            title: "HMB Lead",
            image1: "DSC03294.jpg",
            image2: "DSC03293.jpg",
            //email: "johndoe@example.com"
        },
    ]
};

Object.keys(teamData).forEach(category => {
    teamData[category] = teamData[category].map(member => {
        if (member.image1) {
            member.image1 = imagePath + member.image1;
        }
        if (member.image2) {
            member.image2 = imagePath + member.image2;
        }
        return member;
    });
});

export default teamData;
