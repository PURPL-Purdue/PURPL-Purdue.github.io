import { teamPhotos, testbed_selectedMedia } from './gallery.js';

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
    // Carousel photos combining entire club photos with testbed_selectedMedia
    carouselPhotos1: [
        { src: teamPhotos.entire_club.smiling_photo, alt: "PURPL club members" },
        { src: teamPhotos.entire_club.smiling2_photo, alt: "PURPL club members" },
        testbed_selectedMedia[0],
        testbed_selectedMedia[4],
        testbed_selectedMedia[8],
    ],
    carouselPhotos2: [
        testbed_selectedMedia[12],
        testbed_selectedMedia[13],
        { src: teamPhotos.entire_club.fun_photo, alt: "PURPL club members" },
        testbed_selectedMedia[6],
        testbed_selectedMedia[10],
    ],
};