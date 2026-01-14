import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaPause, FaPlay } from 'react-icons/fa6';

/**
 * AccessibleCarousel - A WCAG-compliant wrapper around react-bootstrap Carousel
 *
 * Features:
 * - Pause/Play button for user control (WCAG 2.2.2)
 * - Pauses on hover and focus (WCAG 2.2.2)
 * - Respects prefers-reduced-motion (WCAG 2.3.3)
 * - Longer interval (5000ms default) for readability
 * - ARIA live region for slide announcements
 * - Keyboard accessible controls
 */
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
    const carouselRef = useRef(null);
    const liveRegionRef = useRef(null);

    // Check for reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // If user prefers reduced motion, pause by default
    useEffect(() => {
        if (prefersReducedMotion) {
            setIsPaused(true);
        }
    }, [prefersReducedMotion]);

    // Announce slide changes to screen readers
    useEffect(() => {
        if (liveRegionRef.current) {
            liveRegionRef.current.textContent = `Slide ${activeIndex + 1} of ${photos.length}`;
        }
    }, [activeIndex, photos.length]);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    const handleKeyDown = (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            togglePause();
        }
    };

    // Calculate effective interval - null means no auto-rotation
    const effectiveInterval = isPaused || prefersReducedMotion ? null : interval;

    return (
        <div
            className={`accessible-carousel relative ${className} contained-bootstrap`}
            role="region"
            aria-roledescription="carousel"
            aria-label={ariaLabel}
        >
            {/* Screen reader live region for slide announcements */}
            <div
                ref={liveRegionRef}
                className="sr-only"
                aria-live="polite"
                aria-atomic="true"
            />

            {/* Pause/Play button */}
            <button
                onClick={togglePause}
                onKeyDown={handleKeyDown}
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

            {/* Slide indicator for sighted users */}
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
                onSelect={handleSelect}
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
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default AccessibleCarousel;
