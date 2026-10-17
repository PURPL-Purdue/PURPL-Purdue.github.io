import { useState, Fragment } from 'react';

// Shared year-tabs + horizontal milestone-strip roadmap used by every PURPL
// project page. The Turbopump roadmap is the visual/behavioral reference
// this was extracted from; do not change its look without updating that
// reference too.
//
// Usage:
//   import ProjectRoadmap from '../../../components/projects/ProjectRoadmap';
//
//   <ProjectRoadmap
//       roadmap={myProjectRoadmap}               // [[date, title, description], ...], any order
//       heading="My Project Roadmap"              // optional, omit to skip the heading
//       description="One line telling the reader what to do here."  // optional
//   />
//
// `roadmap` entries are `[date, title, description]` tuples, `date` as
// "Mon YYYY" (e.g. "Oct 2026"), matching the data already in turbopump.js
// and projects.js, so no transformation is needed at the call site. Entries
// don't need to be pre-sorted: the component sorts chronologically itself.

const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
const sortKey = (date) => {
    const [mon, year] = date.split(' ');
    return Number(year) * 12 + (MONTHS[mon] ?? 0);
};
const yearOf = (date) => date.split(' ')[1];

// Uses `stardust` for the accent, not `border-purple`/`bg-purple`: those
// classes have no matching color in this Tailwind config and silently
// compile to nothing.
const ProjectRoadmap = ({ roadmap, heading = 'Roadmap', description }) => {
    const sorted = [...roadmap].sort((a, b) => sortKey(a[0]) - sortKey(b[0]));
    const YEARS = [...new Set(sorted.map(([date]) => yearOf(date)))];
    const indicesForYear = (year) => sorted.map((_, i) => i).filter((i) => yearOf(sorted[i][0]) === year);

    const [selected, setSelected] = useState(sorted.length - 1);
    const [selectedYear, setSelectedYear] = useState(yearOf(sorted[sorted.length - 1][0]));

    const selectMilestone = (idx) => {
        setSelected(idx);
        setSelectedYear(yearOf(sorted[idx][0])); // keeps the year tab in sync
    };
    const selectYear = (year) => {
        setSelectedYear(year);
        setSelected(indicesForYear(year)[0]); // selecting a year selects its first milestone
    };

    const [date, title, milestoneDescription] = sorted[selected];
    const yearMilestones = indicesForYear(selectedYear);

    return (
        <section>
            {heading && (
                <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
                    {heading}
                </h2>
            )}
            {description && (
                <p className="font-display2 text-sm md:text-md text-gray-300 text-center mb-8 max-w-2xl px-4 mx-auto">
                    {description}
                </p>
            )}

            <div className="w-full border-2 border-white/40 p-5 md:p-6">
                <div className="flex items-center gap-6 md:gap-8 border-b border-white/15 pb-3 mb-5">
                    {YEARS.map((year) => (
                        <button
                            key={year}
                            type="button"
                            onClick={() => selectYear(year)}
                            aria-pressed={selectedYear === year}
                            className={
                                'pb-1 -mb-px font-display-bold text-sm md:text-base uppercase tracking-wide border-b-2 transition-colors ' +
                                'focus:outline-2 focus:outline-stardust focus:outline-offset-2 ' +
                                (selectedYear === year ? 'text-white border-stardust' : 'text-white/40 border-transparent hover:text-white/70')
                            }
                        >
                            {year}
                        </button>
                    ))}
                </div>

                <div className="roadmap-scroll overflow-x-auto pb-1">
                    <div className="flex items-stretch min-w-max">
                        {yearMilestones.map((idx, i) => (
                            <Fragment key={idx}>
                                {i > 0 && <div className="w-4 md:w-6 h-px self-center bg-white/20 shrink-0" aria-hidden="true" />}
                                <button
                                    type="button"
                                    onClick={() => selectMilestone(idx)}
                                    aria-pressed={selected === idx}
                                    className={
                                        'shrink-0 w-32 md:w-36 text-left border-2 p-3 transition-all ' +
                                        'focus:outline-2 focus:outline-stardust focus:outline-offset-2 ' +
                                        (selected === idx ? 'border-stardust bg-moon/40' : 'border-white/25 hover:border-stardust')
                                    }
                                >
                                    <p className="font-display2 text-stardust text-xs">{sorted[idx][0]}</p>
                                    <p className="font-display-bold text-white text-sm uppercase leading-tight mt-1">
                                        {sorted[idx][1]}
                                    </p>
                                </button>
                            </Fragment>
                        ))}
                    </div>
                </div>

                {/* Accent line is absolutely positioned so it doesn't shift the
                    centered text off center. */}
                <div className="mt-6 relative">
                    <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-stardust" aria-hidden="true" />
                    <div className="text-center">
                        <p className="font-display2 text-stardust text-sm mb-3">{date}</p>
                        <h3 className="font-display-bold text-2xl md:text-4xl text-white uppercase mb-4">{title}</h3>
                        <p className="font-display2 text-white/75 text-md md:text-lg leading-8 max-w-xl mx-auto">
                            {milestoneDescription}
                        </p>
                        <p className="font-display2 text-white/30 text-xs mt-6">
                            Milestone {selected + 1} / {sorted.length}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectRoadmap;
