import Gallery from '../../../components/carousel/Gallery';
import { turbopumpData as d } from '../../../json/turbopump';

// No section heading, unlike the others. Columns are 7fr/5fr, not 50/50, so
// the copy reads as prose and the carousel still has presence.
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
                <Gallery photos={d.introPhotos} ariaLabel="Turbopump team" />
            </div>
        </div>
    </section>
);

export default TurbopumpIntro;
