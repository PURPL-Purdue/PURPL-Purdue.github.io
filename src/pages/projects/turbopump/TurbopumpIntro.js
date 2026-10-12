import Gallery from '../../../components/carousel/Gallery';
import { turbopumpData as d } from '../../../json/turbopump';

// No section heading, unlike the others. Columns are 6fr/6fr so the team
// carousel reads at the same weight as the copy, not as a small sidebar.
const TurbopumpIntro = () => (
    <section>
        <div className="grid grid-cols-1 md:grid-cols-[6fr_6fr] gap-6 lg:gap-10 md:items-start">
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
                {/* Fixed 3:2 box so the carousel doesn't resize slide to slide.
                    The two 4:3 photos letterbox inside it (object-fit: contain
                    in AccessibleCarousel) rather than get cropped. */}
                <Gallery photos={d.introPhotos} ariaLabel="Turbopump team" aspectRatio="3 / 2" />
            </div>
        </div>
    </section>
);

export default TurbopumpIntro;
