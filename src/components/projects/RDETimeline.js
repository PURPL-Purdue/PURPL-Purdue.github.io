import { useState } from 'react';
import { rdeData as data } from '../../json/projects';

import { FaCheckCircle } from 'react-icons/fa';

const RDETimeline = () => {
    const timelineData = data.timeline.data || [];
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (idx) => {
        setSelectedIndex(selectedIndex === idx ? null : idx);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-emerald-400';
            case 'in_progress':
                return 'bg-emerald-400 ring-2 ring-white ring-offset-2 ring-offset-dusk';
            default:
                return 'bg-gray-500';
        }
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case 'completed':
                return 'COMPLETED';
            case 'in_progress':
                return 'IN PROGRESS';
            default:
                return 'PLANNED';
        }
    };

    // Get popup position classes based on index
    const getPopupPositionClasses = (idx) => {
        if (idx === 0) {
            // First item: align left edge with dot
            return 'left-0';
        } else if (idx === timelineData.length - 1) {
            // Last item: align right edge with dot
            return 'right-0';
        } else {
            // Middle items: center below dot
            return 'left-1/2 -translate-x-1/2';
        }
    };

    // Get arrow position classes based on index
    const getArrowPositionClasses = (idx) => {
        if (idx === 0) {
            return 'left-4';
        } else if (idx === timelineData.length - 1) {
            return 'right-4';
        } else {
            return 'left-1/2 -translate-x-1/2';
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            <p className="font-display2 text-sm md:text-md text-gray-300 text-center mb-8 max-w-2xl px-4">
                {data.timeline.blurb}
            </p>

            {/* Timeline container */}
            <div className="w-full overflow-x-auto pb-4 h-[300px] overflow-visible">
                <div className="relative min-w-max flex flex-row items-start justify-center px-8 pt-8">
                    {/* Month labels row */}
                    <div className="absolute top-0 left-0 right-0 flex justify-between px-8">
                        {timelineData.map((item, idx) => (
                            <div key={`label-${idx}`} className="flex flex-col items-center w-24 md:w-32">
                                <span className="font-display2 text-xs md:text-sm text-gray-400">
                                    {item.date.split(' ')[0]}
                                </span>
                                <span className="font-display2 text-xs text-gray-500">
                                    {item.date.split(' ')[1]}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Horizontal line */}
                    <div className="absolute top-16 left-8 right-8 h-0.5 bg-gray-600"></div>

                    {/* Timeline items */}
                    {timelineData.map((item, idx) => (
                        <div key={idx} className="relative flex flex-col items-center w-24 md:w-32">
                            {/* Vertical tick marks */}
                            <div className="absolute top-14 w-px h-4 bg-gray-600"></div>

                            {/* Timeline dot - clickable */}
                            <button
                                onClick={() => handleClick(idx)}
                                className={`relative top-12 w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer transition-all duration-200 hover:scale-125 ${getStatusColor(item.status)}`}
                                aria-label={`View details for ${item.title}`}
                            >
                                {item.status === 'in_progress' && (
                                    <svg className="absolute inset-0 w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                )}
                            </button>

                            {/* Popup card - appears below on click */}
                            {selectedIndex === idx && (
                                <div className={`absolute top-24 w-64 md:w-72 transform ${getPopupPositionClasses(idx)}`}>
                                    <div className="bg-moon/90 border border-stardust/30 rounded-lg p-4 shadow-lg">
                                        {/* Arrow pointing up */}
                                        <div className={`absolute -top-2 w-4 h-4 bg-moon/90 border-l border-t border-stardust/30 rotate-45 transform ${getArrowPositionClasses(idx)}`}></div>
                                        {/* Card content */}
                                        <div className="relative">
                                            <div className="flex items-center gap-2 mb-2">
                                                {item.status === 'completed' && (
                                                    <FaCheckCircle className="text-emerald-400" />
                                                )}
                                                <h3 className="font-display-bold text-md text-emerald-400">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <p className="font-display2 text-sm text-gray-300 mb-2">
                                                {item.date}
                                            </p>
                                            <p className="font-display2 text-sm text-gray-400 mb-3">
                                                {item.description}
                                            </p>
                                            <p className={`font-display2 text-xs ${item.status === 'completed' ? 'text-emerald-400' : item.status === 'in_progress' ? 'text-yellow-400' : 'text-gray-500'}`}>
                                                ✓ {getStatusLabel(item.status)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Click hint */}
            <p className="font-display2 text-xs text-gray-500 mt-4">
                Click on a milestone to view details
            </p>
        </div>
    );
};

export default RDETimeline;
