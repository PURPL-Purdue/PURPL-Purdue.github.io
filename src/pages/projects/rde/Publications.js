import { rdeData } from '../../../json/projects';

// Shared RDE publications. Compact secondary link rows — same dark / sharp-edged
// / thin-border / purple-accent language as the rest of the RDE page, kept
// deliberately lighter-weight than the HADES / DEIMOS selector below it.
const Publications = () => {
    return (
        <div className="flex flex-col gap-3">
            {rdeData.publications.map((paper) => (
                <a
                    key={paper.title}
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 border border-white/40 px-4 py-3 transition-all hover:border-stardust hover:bg-moon/30"
                >
                    <h3 className="font-display-bold text-white text-sm md:text-base uppercase">
                        {paper.title}
                    </h3>

                    <p className="font-display2 text-stardust text-xs md:text-sm uppercase whitespace-nowrap shrink-0">
                        Read publication →
                    </p>
                </a>
            ))}
        </div>
    );
};

export default Publications;
