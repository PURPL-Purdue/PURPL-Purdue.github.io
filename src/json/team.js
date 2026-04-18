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
        image: "2024/IMG_2275_3-4_cropped.jpg",
        email: "pkarande@purdue.edu",
        linkedin: "https://linkedin.com/in/parth-karande/",
    },
    tobey_uhm: {
        name: "Tobey Uhm",
        image: "2026_spring/IMG_1395.jpeg",
        email: "uhmt@purdue.edu",
        linkedin: "https://www.linkedin.com/in/tobeyuhm",
    },
    max_neitzke: {
        name: "Max Neitzke",
        image: "2026_spring/IMG_1404.jpeg",
    },
    jonah_nobel: {
        name: "Jonah Nobel",
        image: "2026_spring/IMG_1382.jpeg",
    },
    alejandro_diaz_contreras: {
        name: "Alejandro Diaz Contreras",
        image: "2026_spring/IMG_1383.jpeg",
        email: "adiazcon@purdue.edu",
        linkedin: "https://www.linkedin.com/in/alejandrodico/",
    },
    andrew_fontanetta: {
        name: "Andrew Fontanetta",
        image: "2026_spring/IMG_1388.jpeg",
        email: "afontanetta7@gmail.com",
        linkedin: "https://linkedin.com/in/andrew-fontanetta/",
    },
    marvel_zheng: {
        name: "Marvel Zheng",
        image: "2026_spring/IMG_1285.jpeg",
        linkedin: "https://www.linkedin.com/in/marvelzheng/",
    },
    madeline_taylor: {
        name: "Madeline Taylor",
        image: "2025_spring/DSC05754-Enhanced-NR_3-4_cropped.jpg",
        email: "tayl1138@purdue.edu",
        linkedin: "https://www.linkedin.com/in/madeline-taylor-2103b12b1",
    },
    dominik_sloup: {
        name: "Dominik Sloup",
        image: "2026_spring/IMG_1386.jpeg",
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
        image: "2026_spring/IMG_1302.jpeg",
        linkedin: "https://www.linkedin.com/in/declan-koch-2852212bb/",
    },
    jack_woods: {
        name: "Jack Woods",
        image: "2025_spring/DSC05653-Enhanced-NR_3-4_cropped.jpg",
        email: "woods236@purdue.edu",
        linkedin: "https://www.linkedin.com/in/jack--woods",
    },
    deepesh_balwani: {
        name: "Deepesh Balwani",
        image: "2026_spring/IMG_1311.jpeg",
        email: "ddbalwani@gmail.com",
        linkedin: "https://www.linkedin.com/in/deepesh-balwani/",
    },
    anjali_patel: {
        name: "Anjali Patel",
        image: "2026_spring/IMG_1280.jpeg",
        linkedin: "https://www.linkedin.com/in/anjali-patel0/",
    },
    keertan_palayam: {
        name: "Keertan Palayam",
    },
    jeramiah_arona: {
        name: "Jeramiah Arona",
        image: "2026_spring/IMG_1393.jpeg",
        linkedin: "https://www.linkedin.com/in/jeramiah-arona-5b1ab92a2/",
    },
    alina_li: {
        name: "Alina Li",
        image: "2024/DSC03308_3-4_cropped.jpg",
    },
    daniel_bennett: {
        name: "Daniel Bennett",
        image: "2026_spring/IMG_1399.jpeg",
        linkedin: "www.linkedin.com/in/daniel-jie-bennett",
    },
    cole_halupnik: {
        name: "Cole Halupnik",
        image: "2025_fall/resized-2.jpg",
    },
    tj_mareachen: {
        name: "TJ Mareachen",
        image: "2025_spring/DSC05731-Enhanced-NR.jpg",
        email: "tmareach@purdue.edu",
        linkedin: "https://www.linkedin.com/in/timothy-mareachen/",
    },
    kyle_tang: {
        name: "Kyle Tang",
        image: "2026_spring/IMG_1300.jpeg",
        linkedin: "www.linkedin.com/in/kyletangpurdue",
    },
    olivia_avalos: {
        name: "Olivia Avalos",
        image: "2026_spring/IMG_1414.jpeg",
        linkedin: "https://www.linkedin.com/in/oliviaavalosvillar/",
    },
    nishan_shrestha: {
        name: "Nishan Shrestha",
        image: "2026_spring/IMG_1278.jpeg",
        linkedin: "www.linkedin.com/in/nishan-shrestha-a55721311",
    },
    winston_zhu: {
        name: "Winston Zhu",
        image: "2026_spring/IMG_1286.jpeg",
        linkedin: "www.linkedin.com/in/zhuwinston",
    },
    ashton_hoff: {
        name: "Ashton Hoff",
        image: "2026_spring/IMG_1283.jpeg",
        linkedin: "https://www.linkedin.com/in/ashtonhoff/",
    },
    aathiysh_surgunavel: {
        name: "Aathiysh Surgunavel",
        image: "2026_spring/IMG_1294.jpeg",
        linkedin: "http://www.linkedin.com/in/kumaran-aathiysh-surgunavel",
    },
    vasundhra_arulazi: {
        name: "Vasundhra Arulazi",
        image: "2026_spring/IMG_1279.jpeg",
    },
    braeden_nelson_archer: {
        name: "Braeden Nelson-Archer",
        image: "2026_spring/IMG_1276.jpeg",
        linkedin: "https://www.linkedin.com/in/braeden-nelson-archer-b29519327/",
    },
    ben_beckman: {
        name: "Ben Beckman",
        image: "2026_spring/IMG_1310.jpeg",
        linkedin: "https://www.linkedin.com/in/benjamin-beckman/",
    },
    ashutosh_barman: {
        name: "Ashutosh Barman",
        image: "2026_spring/IMG_1415.jpeg",
    },
    trevor_lien: {
        name: "Trevor Lien",
        image: "2026_spring/IMG_1299.jpeg",
    },
    tucker_bremer: {
        name: "Tucker Bremer",
        image: "2026_spring/IMG_1298.jpeg",
        linkedin: "www.linkedin.com/in/tucker-bremer",
    },
    sumit_laha: {
        name: "Sumit Laha",
        image: "2026_spring/IMG_1282.jpeg",
    },
    patrick_nowak: {
        name: "Patrick Nowak",
        image: "2026_spring/IMG_1277.jpeg",
    },
    andy_corbett: {
        name: "Andy Corbett",
        image: "2026_spring/IMG_1295.jpeg",
    },
    trent_crawford: {
        name: "Trent Crawford",
        image: "2026_spring/IMG_1413.jpeg",
    }, 
    max_xu: {
        name: "Max Xu",
        image: "2026_spring/IMG_1403.jpeg",
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
        member("max_neitzke", "VP of Propulsion"),
        member("jonah_nobel", "VP of Test Infrastructure"),
    ],
    project_leads: [
        member("alejandro_diaz_contreras", "Turbopump Co-Lead"),
        member("andrew_fontanetta", "Turbopump Co-Lead"),
        member("madeline_taylor", "Electric Propulsion Co-Lead"),
        member("max_neitzke", "Electric Propulsion Co-Lead"),
        member("marvel_zheng", "Turbojet Co-Lead"),
        member("trevor_lien", "Turbojet Co-Lead"),
        member("dominik_sloup", "Testbed Co-Lead"),
        member("tucker_bremer", "Testbed Co-Lead"),
        member("deepesh_balwani", "RDE Co-Lead"),
        member("sumit_laha", "RDE Co-Lead"),
        member("braeden_nelson_archer", "TTP Lead"),
        member("ben_beckman", "Pulsejet Co-Lead"),
        member("patrick_nowak", "Pulsejet Co-Lead"),
        member("declan_koch", "Biggy-K Lead"),
        member("jack_woods", "Tachyon Lead"),
        member("kyle_tang", "Air Breathing Co-Lead"),
        member("andy_corbett", "Air Breathing Co-Lead"),
        member("max_xu", "Software/Electronics Lead"),
        member("ashutosh_barman", "Manufacturing Co-Lead"),
        member("trent_crawford", "Manufacturing Co-Lead"),
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
        member("vasundhra_arulazi", "Photographer"),
        member("jeramiah_arona", "Event Coordinator"),
    ],
};

export default teamData;
