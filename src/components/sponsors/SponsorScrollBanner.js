import { sponsors } from '../../json/sponsors.js';

const allSponsors = Object.entries(sponsors)
    .filter(([key, s]) => s.image)
    .map(([, s]) => s);

const SponsorScrollBanner = () => {
    return (
        <div className="w-full py-8 lg:py-12">
            <h2 className="font-display-bold text-2xl lg:text-3xl text-white italic mb-6 lg:mb-8 text-center">
                Thank you to our sponsors!
            </h2>
            <div className="relative overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-dusk to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-dusk to-transparent z-10" />

                <div className="flex animate-scroll-left w-max h-10 md:h-20">
                    {/* Duplicate the list for seamless looping */}
                    {[...allSponsors, ...allSponsors].map((sponsor, i) => (
                        <a
                            key={i}
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 mx-6 md:mx-10 flex items-center h-full"
                        >
                            <img
                                src={sponsor.image}
                                alt={sponsor.img_alt}
                                className="object-contain"
                                style={{ height: `${sponsor.height ?? 100}%` }}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SponsorScrollBanner;
