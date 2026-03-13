import { 
        teamPhotos, 
        testbed_202508_selectedMedia, 
        manufacturing_202603_selectedMedia, 
        testbed_202603_media, 
        eprop_202505_selectedMedia,
        testbed_202428_selectedMedia,
        rde_2025_media } from './gallery.js';

export const landingData = {
    quick_stats: [
        { number: "7", text: "propulsion projects" },
        { number: "3", text: "test stand projects" },
        { number: "350+", text: "active members" },
        { number: "9+", text: "majors" },
        { number: "2024", text: "founded" },
    ],
    calendar: {
        embed_link: "https://calendar.google.com/calendar/embed?src=purpl24%40purdue.edu&ctz=America%2FIndiana%2FIndianapolis",
    },
    carouselPhotos1: [
        teamPhotos.entire_club.fun_photo,
        testbed_202508_selectedMedia[1],
        eprop_202505_selectedMedia[1],
        testbed_202428_selectedMedia[0],
        testbed_202508_selectedMedia[0],
        testbed_202428_selectedMedia[10],
    ],
    carouselPhotos2: [
        rde_2025_media[2],
        testbed_202603_media[4],
        testbed_202508_selectedMedia[10],
        manufacturing_202603_selectedMedia[0],
        testbed_202508_selectedMedia[12],
        testbed_202603_media[15],
    ],

};