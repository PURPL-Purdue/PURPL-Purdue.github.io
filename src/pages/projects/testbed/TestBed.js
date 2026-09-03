import { useState } from 'react';
import PageWrapper from '../../../components/layout/PageWrapper';
import Banner from '../../../components/banner/Banner';
import ContentWrapper from '../../../components/layout/ContentWrapper';
import AccessibleCarousel from '../../../components/carousel/AccessibleCarousel';
import { testbedData as data } from '../../../json/projects';
import Maelstrom from './Maelstrom';
import MEGATRN from './MEGATRN';

const SectionHeading = ({ children }) => (
    <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
        {children}
    </h2>
);

const PlatformSelector = ({ platform, active, onSelect }) => (
    <button
        onClick={() => onSelect(platform.key)}
        className={
            'w-full border-2 p-5 text-left transition-all ' +
            (active
                ? 'border-stardust bg-moon/50'
                : 'border-white/40 bg-transparent hover:border-stardust')
        }
    >
        <h2 className="font-display-bold text-3xl text-white uppercase">{platform.title}</h2>
        <p className="font-display2 text-stardust mt-2 text-sm uppercase">{platform.subtitle}</p>
    </button>
);

// Testbed page organizer. Shared content (team, June 2025 testing) comes first,
// then the platform selector and the selected platform's content — the same
// top-down rhythm as the RDE page.
const TestBed = () => {
    const [platform, setPlatform] = useState('maelstrom');

    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                                {data.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>

            <ContentWrapper>
                <div className="lg:w-[800px] mx-auto flex flex-col w-full space-y-8 md:space-y-12">
                    {/* Shared: About the Team */}
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-start w-full">
                            <div className="col-span-1 flex flex-col space-y-4">
                                <p className="font-display2 text-md md:text-lg text-white text-left">
                                    {data.team.blurb}
                                </p>
                            </div>
                            <div className="col-span-1 w-full mt-2">
                                <AccessibleCarousel photos={data.team.photos} ariaLabel="Testbed team photos" />
                            </div>
                        </div>
                            <p className="font-display2 text-md md:text-lg text-white text-left mt-8">
                                {data.about}
                            </p>
                    </div>

                    {/* Shared: June 2025 testing story + carousel */}
                    <div>
                        <SectionHeading>Testing - June &#39;25</SectionHeading>
                        <p className="font-display2 text-md md:text-lg text-white text-left mb-6">
                            {data.testing2025.blurb}
                        </p>
                        <div className="w-full md:w-[75%] mx-auto">
                            <AccessibleCarousel
                                photos={data.testing2025.photos}
                                ariaLabel="Testbed hotfire test photos"
                            />
                        </div>
                    </div>

                    {/* Platform selector */}
                    <div className="border-l-2 border-stardust pl-4">
                        <p className="font-display2 text-white/70 text-sm uppercase">Select platform</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <PlatformSelector
                            platform={data.platforms.maelstrom}
                            active={platform === 'maelstrom'}
                            onSelect={setPlatform}
                        />
                        <PlatformSelector
                            platform={data.platforms.megatrn}
                            active={platform === 'megatrn'}
                            onSelect={setPlatform}
                        />
                    </div>

                    {/* Selected platform content */}
                    {platform === 'maelstrom' ? <Maelstrom /> : <MEGATRN />}
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default TestBed;
