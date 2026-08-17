import { useState } from 'react';
import { rdeData } from '../../../json/projects';

// Interactive HADES roadmap. Click a milestone to preview its details.
// Rendered only inside the HADES profile.
const Roadmap = ({ roadmap = rdeData.sharedRoadmap }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = roadmap[selectedIndex];

    return (
        <div className="w-full flex flex-col items-center">
            <p className="font-display2 text-sm md:text-md text-gray-300 text-center mb-8 max-w-2xl px-4">
                Click a milestone to preview the details for each stage of the RDE project.
            </p>

            <div className="w-full border-2 border-white/40 p-5 md:p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-[40%] relative pl-10">
                        <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-white/20"></div>

                        <div className="flex flex-col gap-3">
                            {roadmap.map(([date, title], index) => (
                                <button
                                    key={`${date}-${title}`}
                                    onClick={() => setSelectedIndex(index)}
                                    className={
                                        "relative text-left border-2 p-3 transition-all " +
                                        (selectedIndex === index
                                            ? "border-stardust bg-moon/40"
                                            : "border-white/25 hover:border-stardust")
                                    }
                                >
                                    <div
                                        className={
                                            "absolute left-[-29px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 z-10 transition-all " +
                                            (selectedIndex === index
                                                ? "bg-purple border-purple shadow-[0_0_14px_#a855f7]"
                                                : "bg-emerald-400 border-dusk")
                                        }
                                    ></div>

                                    <p className="font-display2 text-stardust text-xs">{date}</p>
                                    <p className="font-display-bold text-white text-md uppercase mt-1">{title}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-[60%] border-l-2 border-purple pl-6 min-h-[240px] flex flex-col justify-center">
                        <p className="font-display2 text-stardust text-sm mb-3">{selected[0]}</p>
                        <h3 className="font-display-bold text-3xl md:text-5xl text-white uppercase mb-4">{selected[1]}</h3>
                        <p className="font-display2 text-white/75 text-md md:text-lg leading-8 max-w-xl">{selected[2]}</p>
                        <p className="font-display2 text-white/30 text-xs mt-6">
                            Milestone {roadmap.length - selectedIndex} / {roadmap.length}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
