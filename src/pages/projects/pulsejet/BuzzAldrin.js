import { Fragment } from 'react';
import { pulsejetData } from '../../../json/projects';

// Buzz Aldrin-specific content for the Pulsejet page, shown when Buzz Aldrin
// is the selected profile.

const BuzzAldrin = () => {
    const data = pulsejetData.buzzAldrinData;

    return (
        <>
            {/* Photo: original background, caption panel overlapping the right
                edge and vertically centered on the photo (matches the
                HADES/DEIMOS/ElectricPropulsion featured-image pattern). On
                mobile there's no room for an overlap, so the panel drops
                below the photo instead. */}
            <div className="w-full z-0 mb-[190px] md:mb-0">
                <div className="w-full relative min-h-min">
                    <div className="w-[90%] md:w-[70%] lg:w-[70%] relative top-0 left-0">
                        <img
                            src={data.photo.src}
                            alt={data.photo.alt}
                            loading="eager"
                            decoding="async"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="bg-moon/90 p-4 lg:p-6 max-w-[90%] w-[320px] md:w-[300px] lg:w-[42%] absolute top-[102%] md:top-1/2 md:-translate-y-1/2 right-2 md:right-0 z-10">
                        <p className="font-display2 text-stardust text-sm uppercase mb-2">{data.selector_subtitle}</p>
                        <p className="text-white font-display2 text-sm md:text-md leading-6">{data.overview}</p>
                    </div>
                </div>
            </div>

            {/* Design and Fabrication: full-width heading and intro, then a
                balanced 2-column numbered breakdown (SpecsTable's
                row-divider language, not boxes). */}
            <div>
                <p className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-4 uppercase whitespace-nowrap md:mt-4">
                    Design and Fabrication
                </p>
                <p className="font-display2 text-white/80 text-sm md:text-md leading-7 text-left max-w-2xl mb-8 md:mb-10">
                    {data.design_fabrication_lead}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
                    {data.design_fabrication.map((f, i) => (
                        <div
                            key={f.heading}
                            className={
                                'py-5 ' +
                                (i > 0 ? 'border-t border-white/15 ' : '') +
                                (i < 2 ? 'md:border-t-0' : '')
                            }
                        >
                            <div className="flex gap-4">
                                <span className="font-display2 text-stardust text-sm shrink-0 w-6 pt-0.5">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div className="text-left">
                                    <p className="font-display-bold text-white text-sm md:text-md uppercase text-left">{f.heading}</p>
                                    <p className="font-display2 text-white/75 text-sm leading-6 mt-1 text-left">{f.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testing and Validation: a connected measurement rail, not
                cards — three related categories sharing one thin stardust
                line (SubsystemNavigation/MegatrnChart's connector language),
                with no ordering implied. */}
            <div>
                <p className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
                    Testing and Validation
                </p>
                <p className="font-display2 text-white/85 text-sm md:text-md leading-7 mb-8 md:mb-10 max-w-2xl text-left">
                    {data.testing.intro}
                </p>

                <div className="relative">
                    <div
                        className="hidden md:block absolute left-0 right-0 h-px bg-stardust/40"
                        style={{ top: '4px' }}
                        aria-hidden="true"
                    />
                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
                        {data.testing.categories.map((c, i) => (
                            <Fragment key={c.label}>
                                <div className="flex md:flex-col items-start md:items-center gap-3 md:gap-0 flex-1 md:text-center md:px-4">
                                    <span className="w-2 h-2 bg-stardust shrink-0 mt-1.5 md:mt-0 md:mb-4" aria-hidden="true" />
                                    <div className="text-left md:text-center">
                                        <p className="font-display-bold text-stardust text-xs md:text-sm uppercase tracking-wide text-left md:text-center">
                                            {c.label}
                                        </p>
                                        <p className="font-display2 text-white/75 text-sm leading-6 mt-1 text-left md:text-center">{c.text}</p>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>

                <p className="font-display2 text-white/60 text-sm leading-6 mt-8 border-l-2 border-stardust pl-4 text-left">
                    {data.testing.closing}
                </p>
            </div>
        </>
    );
};

export default BuzzAldrin;
