import AccessibleCarousel from './AccessibleCarousel';

// A single-photo AccessibleCarousel still renders pause/play controls, arrows,
// an indicator dot, and a "1 / 1" badge: broken-looking UI for one image.
// Gallery renders a plain static image at its natural aspect ratio (no forced
// box, so portrait CAD screenshots aren't stretched into a landscape frame)
// when there's only one photo, and the full carousel for two or more.
//
// `aspectRatio` (e.g. "4 / 3") is optional and only needed when this Gallery
// must match another Gallery's frame size exactly (a CAD/hardware pair, a
// campaign switcher), it boxes a single image the same way the carousel
// would, contained and centered, instead of letting it size itself.
const Gallery = ({ photos, ariaLabel, className = '', aspectRatio }) => {
    if (!photos || photos.length === 0) return null;

    if (photos.length === 1) {
        const photo = photos[0];
        if (aspectRatio) {
            return (
                <div
                    className={`flex items-center justify-center overflow-hidden bg-dusk ${className}`}
                    style={{ aspectRatio }}
                >
                    <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        decoding="async"
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                </div>
            );
        }
        return (
            <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className={`w-full h-auto ${className}`}
            />
        );
    }

    return (
        <AccessibleCarousel photos={photos} ariaLabel={ariaLabel} className={className} aspectRatio={aspectRatio} />
    );
};

export default Gallery;
