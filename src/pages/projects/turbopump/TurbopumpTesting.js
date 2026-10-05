import { useState } from 'react';
import Gallery from '../../../components/carousel/Gallery';
import { turbopumpData as d } from '../../../json/turbopump';

const CampaignTab = ({ campaign, active, onSelect }) => (
    <button
        type="button"
        onClick={() => onSelect(campaign.key)}
        aria-pressed={active}
        className={
            'flex-1 text-left pb-3 border-b-2 transition-colors ' +
            'focus:outline-2 focus:outline-stardust focus:outline-offset-2 ' +
            (active ? 'border-stardust' : 'border-white/15 hover:border-white/30')
        }
    >
        <p className={'font-display-bold text-sm md:text-base uppercase ' + (active ? 'text-white' : 'text-white/50')}>
            {campaign.label}
        </p>
        <p className={'font-display2 text-xs uppercase mt-0.5 ' + (active ? 'text-stardust' : 'text-white/35')}>
            {campaign.period}
        </p>
    </button>
);

const TurbopumpTesting = () => {
    const [active, setActive] = useState(d.testing.campaigns[0].key);
    const campaign = d.testing.campaigns.find((c) => c.key === active);

    return (
        <section>
            <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-5 uppercase md:mt-4">
                Testing
            </h2>

            <div className="flex gap-6 md:gap-10">
                {d.testing.campaigns.map((c) => (
                    <CampaignTab key={c.key} campaign={c} active={active === c.key} onSelect={setActive} />
                ))}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 lg:gap-10 items-center">
                <Gallery photos={campaign.photos} ariaLabel={`${campaign.label} test photos`} aspectRatio="4 / 3" />
                <p className="font-display2 text-white/85 text-sm md:text-md leading-7">{campaign.blurb}</p>
            </div>
        </section>
    );
};

export default TurbopumpTesting;
