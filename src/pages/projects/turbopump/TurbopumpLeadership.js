import { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { turbopumpData as d } from '../../../json/turbopump';

const YEARS = d.leadershipArchive;

// Neutral square placeholder for people without a photo on file yet.
const PhotoPlaceholder = () => (
    <div className="w-[72px] h-[72px] bg-white/10 border border-white/20 shrink-0" aria-hidden="true" />
);

// Same square footprint as the placeholder; object-cover crops naturally
// without stretching or distorting the source image.
const Photo = ({ src, name }) => (
    <img
        src={src}
        alt={name}
        className="w-[72px] h-[72px] object-cover border border-white/20 shrink-0"
    />
);

// Shared by both Project Leads and Subsystem Leads: a square, a name that
// wraps neatly instead of overflowing, and a small role/subsystem label.
// The name column is wider than the photo so a long name (e.g. "Alejandro
// Diaz Contreras") wraps across two lines instead of three, without
// enlarging the photo itself.
const Person = ({ name, role }) => {
    const photo = d.leadershipPhotos[name];
    const linkedin = d.leadershipLinkedIn[name];
    return (
        <div className="flex flex-col items-center text-center w-24 md:w-28">
            {photo ? <Photo src={photo} name={name} /> : <PhotoPlaceholder />}
            <p className="font-display-bold text-white text-xs uppercase mt-2 leading-tight">{name}</p>
            <p className="font-display2 text-stardust text-[10px] uppercase mt-0.5 leading-tight">{role}</p>
            {linkedin && (
                <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${name}'s LinkedIn profile`}
                    className="mt-1"
                >
                    <FaLinkedinIn className="text-white hover:text-stardust text-sm" />
                </a>
            )}
        </div>
    );
};

// Small bordered tab buttons, matching SubsystemNavigation's pattern
// (border-2, stardust border + moon tint when selected) rather than
// ProjectRoadmap's plain-text underline — the brief calls for visible
// "rectangular buttons," not text links.
const YearTab = ({ year, active, onSelect }) => (
    <button
        type="button"
        onClick={onSelect}
        aria-pressed={active}
        className={
            'px-3 py-1.5 md:px-4 md:py-2 border-2 font-display-bold text-xs md:text-sm uppercase tracking-wide ' +
            'transition-colors motion-reduce:transition-none focus:outline-2 focus:outline-stardust focus:outline-offset-2 ' +
            (active ? 'border-stardust bg-moon/40 text-white' : 'border-white/25 text-white/50 hover:border-stardust/60')
        }
    >
        {year}
    </button>
);

const TurbopumpLeadership = () => {
    const [selected, setSelected] = useState(YEARS.length - 1); // most recent year
    const data = YEARS[selected];
    const hasSubsystemLeads = data.subsystemLeads && data.subsystemLeads.length > 0;

    return (
        <section>
            <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-5 uppercase md:mt-4">
                Leadership
            </h2>

            <div className="w-full border border-white/20 p-5 md:p-6">
                <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                    {YEARS.map((y, i) => (
                        <YearTab key={y.year} year={y.year} active={selected === i} onSelect={() => setSelected(i)} />
                    ))}
                </div>

                <div className="flex justify-center gap-10 md:gap-20 mt-6">
                    {data.projectLeads.map((name) => (
                        <Person key={name} name={name} role="Project Lead" />
                    ))}
                </div>

                {hasSubsystemLeads && (
                    <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-5 justify-items-center max-w-2xl mx-auto">
                            {data.subsystemLeads.map((p, i) => (
                                <Person key={p.subsystem + i} name={p.name} role={p.subsystem} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TurbopumpLeadership;
