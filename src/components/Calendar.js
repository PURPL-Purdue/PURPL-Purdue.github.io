import React from 'react';
import SmallButton from "./shared/button/SmallButton.js";
import DividerLine from './shared/DividerLine.js';

function Calendar() {
    const values = [
        { month: "September", day: "03", title: "General Meeting", loc: "ME 1130", time: "6:30pm-9pm"},
        { month: "September", day: "10", title: "General Meeting", loc: "WTHR 172", time: "6:30pm-9pm"},
        { month: "September", day: "17", title: "General Meeting", loc: "WTHR 172", time: "6:30pm-9pm"},
    ];

    return (
        <div className="flex flex-row w-full md:max-w-[800px] lg:max-w-[900px] mx-auto w-full rounded-sm overflow-x-auto">
            {values.map((item, index) => (
                <div className="mx-auto">
                    <div className="w-48 md:w-52 lg:w-64 shrink-0 flex flex-col justify-center px-6 lg:py-6 py-4 border-2 border-stardust" key={index}>
                        <p className="font-display2 text-md md:text-lg lg:text-xl text-white lg:mb-2">{item.month}</p>
                        <p className="font-display-bold text-2xl md:text-4xl lg:text-5xl text-stardust mb-4">{item.day}</p>
                        <p className="font-display h-[15h] text-lg md:text-xl lg:text-3xl text-white mb-4 lg:mb-7">{item.title}</p>
                        <div className="w-full border-2 border-stardust"></div>
                        <div className="flex flex-row items-center mt-4 space-x-2">
                            <img src="/images/purple_pin.png" alt="purple pin icon" className="w-4 h-4"/>
                            <p className="font-display2 text-sm md:text-lg text-white text-left">{item.loc}</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <img src="/images/purple_clock.png" alt="purple clock icon" className="w-4 h-4"/>
                            <p className="font-display2 text-sm md:text-lg text-white text-left">{item.time}</p>
                        </div>
                        {/* 
                        <SmallButton text="Learn More" link="/404"/>
                        */}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Calendar;