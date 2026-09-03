import { testbedData } from '../../../json/projects';

const d = testbedData.platforms.megatrn;

// MEGATRN profile — short description + current focus areas (verified only).
const MEGATRN = () => (
    <div className="flex flex-col gap-8">
        <p className="font-display2 text-white text-md md:text-lg leading-7 max-w-[640px] mx-auto text-center">
            {d.blurb}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            {d.focus.map(([name, detail]) => (
                <div key={name} className="border-2 border-white/40 p-4">
                    <p className="font-display-bold text-stardust text-lg md:text-xl uppercase">{name}</p>
                    <p className="font-display2 text-white text-sm mt-1 leading-6">{detail}</p>
                </div>
            ))}
        </div>
    </div>
);

export default MEGATRN;
