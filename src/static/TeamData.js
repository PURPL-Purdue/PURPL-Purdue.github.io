import React from 'react';

const tempProfilePic = "/images/team/pattern_1.jpg";
const imagePath = "/images/team/headshots/original/";
const teamData = {
    major_exec: [
        {
            name: "Kamon Blong",
            title: "Co-President",
            image1: "DSC03351.jpg", // serious
            image2: "DSC03352.jpg", // smiling
            //email: "johndoe@example.com",
            //linkedin: "https://linkedin.com/johndoe"
        },
        {
            name: "Madeline Taylor",
            title: "Co-President",
            image1: "DSC03317.jpg",
            image2: "DSC03319.jpg",
            // email: "johndoe@example.com"
        },
        {
            name: "Parth Karande",
            title: "Treasurer",
            image1: "DSC03341.jpg",
            image2: "DSC03337.jpg",
            //email: "johndoe@example.com"
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
            // email: "johndoe@example.com"
        },
        {
            name: "Hannah Shapiro",
            title: "Social Media Chair",
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
            image1: "DSC03289.jpg",
            image2: "DSC03287.jpg",
            //email: "johndoe@example.com"
        },
        {
            name: "Sean O'Rourke",
            title: "Merchandise Chair",
            //email: "johndoe@example.com"
        },
        {

            name: "Kamon Blong",
            title: "Education Chair",
            image1: "DSC03351.jpg",
            image2: "DSC03352.jpg",
            //email: "johndoe@example.com"
        },
        {

            name: "Jeremiah Arona",
            title: "Physical Activity Coordinator",
            image1: "DSC03325.jpg",
            image2: "DSC03321.jpg",
            //email: "johndoe@example.com"
        },
        {

            name: "Jack Woods",
            title: "Safety Officer",
            //email: "johndoe@example.com"
        },
    ],
    project_leads: [
        {

            name: "Kamon Blong",
            title: "Turbopump Co-Lead",
            image1: "DSC03351.jpg",
            image2: "DSC03352.jpg",
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
            //email: "johndoe@example.com"
        },
        {

            name: "James Nida",
            title: "Testbed Co-Lead",
            image1: "DSC03289.jpg",
            image2: "DSC03287.jpg",
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
