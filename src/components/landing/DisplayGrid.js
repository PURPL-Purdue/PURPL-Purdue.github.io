import { landingData } from '../../json/landing';

function DisplayGrid() {

    return (
        <div className="flex flex-row items-center overflow-x-auto border-stardust border-2 w-full rounded-sm divide-x-2 divide-stardust py-4 md:py-6 ">
            {landingData.quick_stats.map((item, index) => (
                <div className="flex flex-col justify-center px-10 w-full h-[90px] md:h-[110px] lg:h-[150px] py-4" key={index}>
                    <p className="font-display-bold text-2xl md:text-4xl lg:text-5xl text-white">{item.number}</p>
                    <p className="font-display text-md md:text-xl text-white">{item.text}</p>
                </div>
            ))}
        </div>
    );
}

export default DisplayGrid;