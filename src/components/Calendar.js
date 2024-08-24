import React from 'react';
import SmallButton from "./shared/button/SmallButton.js";
import DividerLine from './shared/DividerLine.js';

function Calendar() {
    const values = [
        { month: "August", day: "17", title: "B-Involved Fair", loc: "IM Fields", time: "12pm-3pm"},
        { month: "August", day: "26", title: "Callout!", loc: "PHYS 114", time: "6pm-7pm"},
        /*{ month: "August", day: "20", title: "First Meeting", loc: "WTHR 172", time: "6pm-9pm"},*/
        /*{ month: "August", day: "27", title: "Second Meeting", loc: "WALC 1132", time: "6pm-9pm"},*/
    ];

    return (
        <div className="flex flex-row max-w-[450px] lg:max-w-[680px] mx-auto w-full rounded-sm overflow-x-auto">
            {values.map((item, index) => (
                <div className="mx-auto">
                    <div className="w-48 md:w-52 lg:w-80 shrink-0 flex flex-col justify-center px-6 lg:py-6 py-4 border-2 border-stardust" key={index}>
                        <p className="font-display2 text-lg md:text-xl lg:text-2xl text-white lg:mb-2">{item.month}</p>
                        <p className="font-display-bold text-2xl md:text-4xl lg:text-5xl text-stardust mb-4 lg:mb-6">{item.day}</p>
                        <p className="font-display h-[15h] text-xl lg:text-4xl text-white mb-4 lg:mb-8">{item.title}</p>
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