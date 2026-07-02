import { useMemo } from 'react';
import { landingData } from '../../json/landing.js';
import {
    testbed_202428_selectedMedia,
    testbed_202508_selectedMedia,
    manufacturing_202603_selectedMedia,
    testbed_202603_media,
    rde_2025_media,
    rde_2026_aiaa,
    lhm_event_202603_media,
    eprop_202505_selectedMedia,
} from '../../json/gallery.js';

const allImages = [
    ...testbed_202428_selectedMedia,
    ...testbed_202508_selectedMedia,
    ...manufacturing_202603_selectedMedia,
    ...testbed_202603_media,
    ...rde_2025_media,
    ...rde_2026_aiaa,
    ...lhm_event_202603_media,
    ...eprop_202505_selectedMedia,
];

const GALLERY_COUNT = 8;

const LandingQuoteGallery = () => {
    const images = useMemo(() => {
        // Group images by parent folder
        const groups = {};
        for (const img of allImages) {
            const folder = img.src.substring(0, img.src.lastIndexOf('/'));
            if (!groups[folder]) groups[folder] = [];
            groups[folder].push(img);
        }

        // Shuffle within each group, then shuffle the groups themselves
        const shuffledGroups = Object.values(groups)
            .map(group => [...group].sort(() => Math.random() - 0.5))
            .sort(() => Math.random() - 0.5);

        // Round-robin across groups so each folder contributes before any repeats
        const result = [];
        for (let round = 0; result.length < GALLERY_COUNT; round++) {
            let anyAdded = false;
            for (const group of shuffledGroups) {
                if (result.length >= GALLERY_COUNT) break;
                if (round < group.length) {
                    result.push(group[round]);
                    anyAdded = true;
                }
            }
            if (!anyAdded) break;
        }

        // Shuffle final order so folder grouping isn't visible in the grid
        return result.sort(() => Math.random() - 0.5);
    }, []);

    return (
        <div className="py-8 lg:py-12">
            <blockquote className="mb-8 lg:mb-12 border-l-4 border-stardust pl-6 max-w-3xl">
                <p className="font-display2 text-lg md:text-xl lg:text-2xl text-white italic leading-relaxed mb-3">
                    "{landingData.quote.text}"
                </p>
                <footer className="font-display2 text-stardust text-sm md:text-base">
                    — {landingData.quote.attribution}
                </footer>
            </blockquote>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                {images.map((img, i) => (
                    <div key={i} className="aspect-square overflow-hidden">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandingQuoteGallery;
