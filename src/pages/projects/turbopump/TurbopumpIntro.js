import AccessibleCarousel from '../../../components/carousel/AccessibleCarousel';
import { turbopumpData as d } from '../../../json/turbopump';

// Project introduction — one clean editorial section, no heading. A comfortably
// wide copy column (primary statement, secondary explanation, then the
// current-year line on a single stardust accent) beside the team carousel.
// Intentionally not 50/50: the copy runs wider so it reads as prose, the
// carousel stays large enough to matter. Normal flow — nothing overlaps the
// hero.
const TurbopumpIntro = () => (
    <section>
        <div className="grid grid-cols-1 md:grid-cols-[7fr_5fr] gap-6 lg:gap-10 md:items-start">
            <div className="flex flex-col">
                <p className="font-display2 text-lg md:text-xl text-white leading-8 text-left">
                    {d.intro.lead}
                </p>
                <p className="font-display2 text-md md:text-lg text-white/80 leading-7 text-left mt-4">
                    {d.intro.body}
                </p>
                <div className="border-l-2 border-stardust pl-4 mt-6">
                    <p className="font-display2 text-sm md:text-md text-white/70 leading-7 text-left">
                        {d.intro.currentWork}
                    </p>
                </div>
            </div>

            <div className="w-full mt-2 md:mt-0">
                <AccessibleCarousel photos={d.introPhotos} ariaLabel="Turbopump team" />
            </div>
        </div>
    </section>
);

export default TurbopumpIntro;
