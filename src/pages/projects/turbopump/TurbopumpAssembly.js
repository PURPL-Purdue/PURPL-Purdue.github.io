import AccessibleCarousel from '../../../components/carousel/AccessibleCarousel';
import { turbopumpData as d } from '../../../json/turbopump';

// Full Assembly — a strong mechanical visual on the page's normal near-black
// canvas. The CAD carousel is the dominant element (~60%); the explanation sits
// beside it (~40%) on a stardust accent edge, wide enough for natural line
// lengths. No purple slab, no container box.
//
// A low-profile spec strip finishes the section: three parts of the machine in
// the CAD above, as thin-ruled columns (stardust mono number, white label,
// muted value). Not a second section — a finishing detail.
const TurbopumpAssembly = () => (
    <section>
        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
            Full Assembly
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 lg:gap-10 md:items-center">
            <div className="w-full">
                <AccessibleCarousel photos={d.assembly.photos} ariaLabel="Turbopump assembly CAD" />
            </div>
            <div className="border-l-2 border-stardust pl-4">
                <p className="font-display2 text-stardust text-sm uppercase mb-2">{d.assembly.subtitle}</p>
                <p className="font-display2 text-white text-sm md:text-md leading-7 text-left">
                    {d.assembly.desc}
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 md:mt-10">
            {d.assembly.strip.map((item) => (
                <div key={item.n} className="border-t border-white/25 pt-3">
                    <p className="font-display2 text-stardust text-xs mb-1">{item.n}</p>
                    <p className="font-display-bold text-white text-sm md:text-base uppercase leading-tight">
                        {item.label}
                    </p>
                    <p className="font-display2 text-white/60 text-xs md:text-sm mt-1">{item.value}</p>
                </div>
            ))}
        </div>
    </section>
);

export default TurbopumpAssembly;
