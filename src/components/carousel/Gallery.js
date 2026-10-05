import AccessibleCarousel from './AccessibleCarousel';

// AccessibleCarousel with one photo still shows pause/play, arrows, and a
// "1 / 1" badge, which looks broken. Gallery renders a plain image instead
// when there's only one photo.
//
// `aspectRatio` is only needed when two Galleries must match frame sizes
// exactly (a CAD/hardware pair); it boxes the image like the carousel would
// instead of using its natural size.
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
