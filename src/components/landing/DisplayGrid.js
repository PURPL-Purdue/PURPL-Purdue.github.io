import { landingData } from '../../json/landing';

function DisplayGrid() {

    return (
        <div className="overflow-hidden border-stardust border-2 w-full rounded-sm py-4 md:py-6">
            <div className="flex flex-row items-center animate-scroll-left-fast w-max">
                {[...landingData.quick_stats, ...landingData.quick_stats].map((item, index) => (
                    <div className="flex flex-col justify-center px-10 h-[90px] md:h-[110px] lg:h-[150px] py-4 border-r-2 border-stardust last:border-r-0" key={index}>
                        <p className="font-display-bold text-3xl md:text-5xl lg:text-6xl text-old-gold italic whitespace-nowrap">{item.number}</p>
                        <p className="font-display2 text-xs md:text-sm lg:text-base text-white/70 whitespace-nowrap">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayGrid;