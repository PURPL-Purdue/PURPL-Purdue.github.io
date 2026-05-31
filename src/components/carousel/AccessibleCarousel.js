import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaPause, FaPlay } from 'react-icons/fa6';

const AccessibleCarousel = ({
    photos,
    ariaLabel = "Image carousel",
    interval = 5000,
    className = "",
    ...props
}) => {
    const [isPaused, setIsPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [aspectRatio, setAspectRatio] = useState(null);

    const carouselRef = useRef(null);
    const liveRegionRef = useRef(null);

    useEffect(() => {
        if (!photos || photos.length === 0) return;

        const firstImage = new Image();
        firstImage.src = photos[0].src;

        firstImage.onload = () => {
            setAspectRatio(`${firstImage.naturalWidth} / ${firstImage.naturalHeight}`);
        };
    }, [photos]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (prefersReducedMotion) {
            setIsPaused(true);
        }
    }, [prefersReducedMotion]);

    useEffect(() => {
        if (liveRegionRef.current) {
            liveRegionRef.current.textContent =
                `Slide ${activeIndex + 1} of ${photos.length}`;
        }
    }, [activeIndex, photos.length]);

    const effectiveInterval =
        isPaused || prefersReducedMotion ? null : interval;

    return (
        <div
            className={`accessible-carousel relative ${className} contained-bootstrap`}
            role="region"
            aria-roledescription="carousel"
            aria-label={ariaLabel}
        >
            <div
                ref={liveRegionRef}
                className="sr-only"
                aria-live="polite"
                aria-atomic="true"
            />

            <button
                onClick={() => setIsPaused(!isPaused)}
                className="absolute top-2 right-2 z-20 bg-gray-200/70 hover:bg-gray-300/80 text-dusk p-2 rounded-full transition-colors focus:outline-2 focus:outline-stardust focus:outline-offset-2"
                aria-label={isPaused ? "Play carousel" : "Pause carousel"}
                aria-pressed={isPaused}
            >
                {isPaused ? (
                    <FaPlay className="h-4 w-4" aria-hidden="true" />
                ) : (
                    <FaPause className="h-4 w-4" aria-hidden="true" />
                )}
            </button>

            <div
                className="absolute top-2 left-2 z-20 bg-gray-200/70 text-dusk text-xs px-2 py-1 rounded font-display2"
                aria-hidden="true"
            >
                {activeIndex + 1} / {photos.length}
            </div>

            <Carousel
                ref={carouselRef}
                className="text-white"
                data-bs-theme="light"
                controls={true}
                slide={!prefersReducedMotion}
                indicators={true}
                touch={true}
                pause="hover"
                activeIndex={activeIndex}
                onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
                interval={effectiveInterval}
                {...props}
            >
                {photos.map((photo, index) => (
                    <Carousel.Item
                        key={index}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${index + 1} of ${photos.length}`}
                    >
                        <div
                            style={{
                                width: "100%",
                                aspectRatio: aspectRatio || "16 / 9",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    width: "auto",
                                    height: "auto",
                                    objectFit: "contain",
                                    display: "block",
                                }}
                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default AccessibleCarousel;