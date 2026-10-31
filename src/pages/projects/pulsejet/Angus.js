import { pulsejetData } from '../../../json/projects';

// Angus-specific content for the Pulsejet page, shown when Angus is the
// selected profile. Text and wireframe form one two-column composition
// (stacked on mobile) rather than separate floating pieces; target specs
// are integrated into the text column instead of a separate row.
const Angus = () => {
    const data = pulsejetData.angusData;

    return (
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 lg:gap-10 md:items-center">
            <div className="flex flex-col">
                <p className="font-display-bold text-3xl lg:text-5xl text-white uppercase mb-3">Angus</p>
                <p className="font-display2 text-white text-md md:text-lg leading-7 text-left">{data.intro}</p>
                <p className="font-display2 text-white/80 text-sm md:text-md leading-7 text-left mt-4">{data.team_structure}</p>

                <div className="flex gap-6 mt-6">
                    <div className="border-l-2 border-stardust pl-3">
                        <p className="font-display-bold text-stardust text-xl">{data.target_thrust}</p>
                        <p className="font-display2 text-white/60 text-xs uppercase mt-1">Target thrust</p>
                    </div>
                    <div className="border-l-2 border-stardust pl-3">
                        <p className="font-display-bold text-stardust text-xl">{data.target_mass}</p>
                        <p className="font-display2 text-white/60 text-xs uppercase mt-1">Target mass</p>
                    </div>
                </div>
            </div>

            <div className="relative w-full aspect-[7/6] flex items-center justify-start overflow-visible">
                <img
                    src={data.wireframe_image.src}
                    alt={data.wireframe_image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-[93%] h-auto object-contain lg:w-[130%] lg:max-w-none"
                    style={{ transform: "rotate(-35deg)" }}
                />
            </div>
        </div>
    );
};

export default Angus;
