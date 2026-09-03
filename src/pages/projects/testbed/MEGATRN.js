import { testbedData } from '../../../json/projects';
import MegatrnChart from '../../../components/projects/MegatrnChart';

const d = testbedData.platforms.megatrn;

// MEGATRN profile — what the platform is, then a native chart of how its
// current and future development teams are organized.
const MEGATRN = () => (
    <div className="flex flex-col gap-8">
        <p className="font-display2 text-white text-md md:text-lg leading-7 max-w-[640px] mx-auto text-center">
            {d.blurb}
        </p>

        <div className="border-l-2 border-stardust pl-4">
            <p className="font-display2 text-white/70 text-sm uppercase">Development teams</p>
        </div>

        <MegatrnChart chart={d.chart} />
    </div>
);

export default MEGATRN;
