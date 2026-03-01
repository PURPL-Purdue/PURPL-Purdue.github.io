/**
 * Stores information about PURPL's executive team, administrative board, and project leads.
 *
 * People's personal data (name, image, email, linkedin) is defined once in the `people` object,
 * keyed by firstname_lastname. The teamData categories reference these keys along with a title.
 */

const defaultProfilePic = "/images/team/pattern_1.jpg"; // full path
const imagePath = "/images/team/headshots/";

/**
 * Personal data for each team member, keyed by firstname_lastname.
 * Fields: name (display name), image (relative to imagePath, omit for default), email, linkedin.
 */
const people = {
    parth_karande: {
        name: "Parth Karande",
        image: "2024/IMG_2275.jpg",
        email: "pkarande@purdue.edu",
        linkedin: "https://linkedin.com/in/parth-karande/",
    },
    tobey_uhm: {
        name: "Tobey Uhm",
        image: "2025_fall/resized-5.jpg",
        email: "uhmt@purdue.edu",
        linkedin: "https://www.linkedin.com/in/tobeyuhm",
    },
    max_neitzke: {
        name: "Max Neitzke",
        image: "2025_fall/resized-9.jpg",
    },
    jonah_nobel: {
        name: "Jonah Nobel",
        image: "2025_fall/resized-14.jpg",
    },
    alejandro_diaz_contreras: {
        name: "Alejandro Diaz Contreras",
        image: "2025_fall/resized-13.jpg",
        email: "adiazcon@purdue.edu",
        linkedin: "https://www.linkedin.com/in/alejandrodico/",
    },
    andrew_fontanetta: {
        name: "Andrew Fontanetta",
        image: "2025_spring/DSC05738-Enhanced-NR.jpg",
        email: "afontanetta7@gmail.com",
        linkedin: "https://linkedin.com/in/andrew-fontanetta/",
    },
    marvel_zheng: {
        name: "Marvel Zheng",
        image: "2025_fall/resized-4.jpg",
    },
    madeline_taylor: {
        name: "Madeline Taylor",
        image: "2025_spring/DSC05754-Enhanced-NR.jpg",
        email: "tayl1138@purdue.edu",
        linkedin: "https://www.linkedin.com/in/madeline-taylor-2103b12b1",
    },
    dominik_sloup: {
        name: "Dominik Sloup",
        image: "2025_fall/resized-12.jpg",
        email: "dsloup@purdue.edu",
        linkedin: "https://www.linkedin.com/in/dominik-sloup-2ba20a2a7/",
    },
    james_nida: {
        name: "James Nida",
        image: "2025_fall/resized-15.jpg",
        email: "nidaj@purdue.edu",
        linkedin: "https://www.linkedin.com/in/james-nida-/",
    },
    declan_koch: {
        name: "Declan Koch",
        image: "2025_fall/resized-3.jpg",
    },
    jack_woods: {
        name: "Jack Woods",
        image: "2025_spring/DSC05653-Enhanced-NR.jpg",
        email: "woods236@purdue.edu",
        linkedin: "https://www.linkedin.com/in/jack--woods",
    },
    deepesh_balwani: {
        name: "Deepesh Balwani",
        image: "2025_fall/resized-10.jpg",
        email: "ddbalwani@gmail.com",
        linkedin: "https://www.linkedin.com/in/deepesh-balwani/",
    },
    kavina_rajan: {
        name: "Kavina Rajan",
        image: "2025_fall/resized-16.jpg",
    },
    anjali_patel: {
        name: "Anjali Patel",
        image: "2025_fall/resized-6.jpg",
    },
    keertan_palayam: {
        name: "Keertan Palayam",
    },
    jeramiah_arona: {
        name: "Jeramiah Arona",
        image: "2025_fall/resized-0.jpg",
    },
    alina_li: {
        name: "Alina Li",
        image: "2024/DSC03308.jpg",
    },
    daniel_bennett: {
        name: "Daniel Bennett",
        image: "2025_spring/DSC05734-Enhanced-NR.jpg",
    },
    cole_halupnik: {
        name: "Cole Halupnik",
        image: "2025_fall/resized-2.jpg",
    },
    sabrina_phan: {
        name: "Sabrina Phan",
        image: "2025_spring/DSC05750.jpg",
    },
    tj_mareachen: {
        name: "TJ Mareachen",
        image: "2025_spring/DSC05731-Enhanced-NR.jpg",
        email: "tmareach@purdue.edu",
        linkedin: "https://www.linkedin.com/in/timothy-mareachen/",
    },
    kyle_tang: {
        name: "Kyle Tang",
    },
    olivia_avalos: {
        name: "Olivia Avalos",
    },
    nishan_shrestha: {
        name: "Nishan Shrestha",
    },
    winston_zhu: {
        name: "Winston Zhu",
    },
    ashton_hoff: {
        name: "Ashton Hoff",
    },
    aathiysh_surgunavel: {
        name: "Aathiysh Surgunavel",
    },
};

/**
 * Resolve a people key + title into a full member object for use in teamData.
 */
function member(key, title) {
    const person = people[key];
    if (!person) {
        throw new Error(`Unknown person key: ${key}`);
    }
    return {
        name: person.name,
        title,
        image: person.image ? imagePath + person.image : defaultProfilePic,
        ...(person.email && { email: person.email }),
        ...(person.linkedin && { linkedin: person.linkedin }),
    };
}

const teamData = {
    major_exec: [
        member("parth_karande", "President"),
        member("tobey_uhm", "Treasurer"),
        member("max_neitzke", "Project Director"),
        member("jonah_nobel", "Test Stand Director"),
    ],
    project_leads: [
        member("alejandro_diaz_contreras", "Turbopump Co-Lead"),
        member("andrew_fontanetta", "Turbopump Co-Lead"),
        member("marvel_zheng", "Turbojet Lead"),
        member("max_neitzke", "Electric Propulsion Co-Lead"),
        member("madeline_taylor", "Electric Propulsion Co-Lead"),
        member("dominik_sloup", "Testbed Co-Lead"),
        member("james_nida", "Testbed Co-Lead"),
        member("declan_koch", "Biggy-K Lead"),
        member("jack_woods", "Tachyon Lead"),
        member("deepesh_balwani", "RDE Lead"),
    ],
    admin_exec: [
        member("kyle_tang", "Safety Officer"),
        member("olivia_avalos", "Industrial Relations Chair"),
        member("anjali_patel", "Social Media Chair"),
        member("nishan_shrestha", "Merchandise Chair"),
        member("winston_zhu", "Funding Acquisition Chair"),
        member("ashton_hoff", "Secretary"),
        member("daniel_bennett", "IT Chair"),
        member("alina_li", "Webmaster"),
        member("aathiysh_surgunavel", "Photographer"),
        member("jeramiah_arona", "Event Coordinator"),
    ],
};

export default teamData;
