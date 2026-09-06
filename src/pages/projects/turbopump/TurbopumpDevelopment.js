import { turbopumpData as d } from '../../../json/turbopump';

// Development & Testing — a tasteful asymmetric editorial layout: the verified
// current-year objective emphasized on a stardust accent edge, the program
// context as a comfortably readable paragraph beside it. Both sides readable.
// No box, no stages, no timeline, no cards.
const TurbopumpDevelopment = () => (
    <section>
        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
            Development &amp; Testing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-6 lg:gap-10 md:items-start">
            <div className="border-l-2 border-stardust pl-4 md:pl-5">
                <p className="font-display2 text-stardust text-sm uppercase mb-2">Current objective</p>
                <p className="font-display-bold text-xl md:text-2xl text-white uppercase leading-tight">
                    {d.development.objective}
                </p>
            </div>
            <p className="font-display2 text-md md:text-lg text-white/80 leading-7 text-left">
                {d.development.blurb}
            </p>
        </div>
    </section>
);

export default TurbopumpDevelopment;
