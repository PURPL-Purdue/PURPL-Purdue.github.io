import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaPause, FaPlay } from 'react-icons/fa6';

// Module-level cache, not component state: these are static site images, so
// once a src's natural aspect ratio is known it's known for the rest of the
// page session. Without this, every remount (e.g. switching between HADES
// and DEIMOS, which are different component types and so fully unmount /
// remount their carousels) re-detects from scratch, which means the frame
// briefly renders at the generic 16:9 fallback before snapping to the real
// ratio — a visible resize on every single switch. Exported so callers can
// pre-warm it (see RDE.js) and so a switch is flash-free even the first time.
export const aspectRatioCache = new Map();
export const warmAspectRatio = (src) => {
    if (!src || aspectRatioCache.has(src)) return;
    const probe = new Image();
    probe.src = src;
    probe.onload = () => {
        aspectRatioCache.set(src, `${probe.naturalWidth} / ${probe.naturalHeight}`);
    };
};

const AccessibleCarousel = ({
    photos,
    ariaLabel = "Image carousel",
    interval = 5000,
    className = "",
    // Optional. Skips auto-detecting the ratio from the first photo, so two
    // carousels can share one frame size (e.g. a CAD/hardware pair). Omitted,
    // behavior is unchanged.
    aspectRatio: aspectRatioProp,
    // Optional. Hides the divider line above the caption, for callers that
    // want the caption to sit directly under the image instead. Omitted,
    // behavior is unchanged.
    captionDivider = true,
    ...props
}) => {
    const [isPaused, setIsPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    // Lazy initializer: if this src's ratio is already cached (seen before
    // this session, or pre-warmed by a caller), start with it immediately
    // instead of `null` — the frame is correctly sized on its very first
    // render, with no fallback-then-snap flash.
    const [detectedAspectRatio, setDetectedAspectRatio] = useState(
        () => (photos && photos[0] && aspectRatioCache.get(photos[0].src)) || null
    );
    const aspectRatio = aspectRatioProp || detectedAspectRatio;

    const carouselRef = useRef(null);
    const liveRegionRef = useRef(null);

    useEffect(() => {
        setActiveIndex(0);
    }, [photos]);

    useEffect(() => {
        if (aspectRatioProp) return;
        if (!photos || photos.length === 0) return;

        const cached = aspectRatioCache.get(photos[0].src);
        if (cached) {
            setDetectedAspectRatio(cached);
            return;
        }

        // Guards against setting state after this instance has unmounted —
        // matters when an engine/page is switched away from before its
        // first image finishes loading (e.g. rapid HADES/DEIMOS switching).
        let cancelled = false;
        const firstImage = new Image();
        firstImage.src = photos[0].src;

        firstImage.onload = () => {
            const ratio = `${firstImage.naturalWidth} / ${firstImage.naturalHeight}`;
            aspectRatioCache.set(photos[0].src, ratio);
            if (!cancelled) setDetectedAspectRatio(ratio);
        };

        return () => {
            cancelled = true;
        };
    }, [photos, aspectRatioProp]);

    useEffect(() => {
        // Warm the browser cache for the next slide only, so advancing (via
        // autoplay or a click) doesn't wait on a fresh fetch. Native
        // loading="lazy" on the <img> itself still governs the initial,
        // unvisited state of every other slide.
        if (!photos || photos.length <= 1) return;
        const next = photos[(activeIndex + 1) % photos.length];
        const preload = new Image();
        preload.src = next.src;
    }, [activeIndex, photos]);

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
                {Math.min(activeIndex + 1, photos.length)} / {photos.length}
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
                                // Prioritise the visible first slide; let the
                                // browser defer the rest so a multi-image gallery
                                // doesn't decode every full-res photo up front.
                                loading={index === 0 ? "eager" : "lazy"}
                                decoding="async"
                                style={{
                                    // Fill a fixed box so every slide occupies the
                                    // exact same frame; object-fit handles the aspect
                                    // ratio without affecting the layout box (a
                                    // shrink-to-fit image drifts horizontally on
                                    // slides 2+ inside Bootstrap's float/translate
                                    // carousel).
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                    display: "block",
                                }}
                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            {photos[activeIndex] && photos[activeIndex].caption && (
                <div className={'mt-3 pt-3' + (captionDivider ? ' border-t border-white/15' : '')}>
                    {/* `text-[#ffffff]`, not `text-white`: Bootstrap also defines a
                        `.text-white` utility, `!important`, scoped to this same
                        `.contained-bootstrap` wrapper. Its color variable is only
                        defined on the Carousel element itself (data-bs-theme=light)
                        and its descendants, not on this sibling caption, so it was
                        winning the cascade and resolving to an unrelated Bootstrap
                        fallback color instead of white. The arbitrary-value class
                        can't collide with any Bootstrap utility name. */}
                    <p className="font-display-bold text-[#ffffff] text-sm uppercase tracking-wide">
                        {photos[activeIndex].caption.title}
                    </p>
                    {photos[activeIndex].caption.subtitle && (
                        <p className="font-display2 text-stardust text-xs mt-0.5">
                            {photos[activeIndex].caption.subtitle}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default AccessibleCarousel;