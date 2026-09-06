import Banner from '../../../components/banner/Banner';
import { turbopumpData as d } from '../../../json/turbopump';

// Hero — the standard PURPL project-page hero, identical in structure to
// Turbojet / RDE / Electric Propulsion: the shared atmospheric banner with the
// large centred white project title and nothing else. The project introduction
// starts in the first content section below.
const TurbopumpHero = () => (
    <Banner>
        <div className="bg-gradient-background bg-cover bg-center h-full">
            <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
            <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                <div className="flex flex-col text-center">
                    <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                        {d.title}
                    </h1>
                </div>
            </div>
        </div>
    </Banner>
);

export default TurbopumpHero;
