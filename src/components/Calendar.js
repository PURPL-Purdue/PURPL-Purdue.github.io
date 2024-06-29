import React from 'react';
import SmallButton from "./shared/button/SmallButton.js";
import DividerLine from './shared/DividerLine.js';

function Calendar() {
    const values = [
        { month: "May", day: "15", title: "Team Cookout", loc: "Krach Lawn", time: 15},
        { month: "June", day: "06", title: "Summer Session", loc: "WALC 215", time: 19},
        { month: "July", day: "18", title: "Summer Hotfire", loc: "TBD", time: 13},
        { month: "August", day: "14", title: "Fall Callout", loc: "WALC", time: 16},
        { month: "September", day: "08", title: "First Meeting", loc: "WALC 2121", time: 18},
    ];

    return (
        <div className="flex flex-row overflow-x-auto border-stardust border-2 w-full rounded-sm divide-x-2 divide-stardust py-6 lg:py-8">
            {values.map((item, index) => (
                <div className="w-48 md:w-52 lg:w-64 shrink-0 flex flex-col justify-center px-8 lg:px-12 lg:py-2" key={index}>
                    <p className="font-display2 text-lg md:text-xl lg:text-2xl text-white lg:mb-2">{item.month}</p>
                    <p className="font-display-bold text-2xl md:text-4xl lg:text-5xl text-stardust mb-4 lg:mb-8">{item.day}</p>
                    <p className="font-display2-bold h-[2lh] text-lg lg:text-3xl text-white mb-4 lg:mb-12">{item.title}</p>
                    <DividerLine/>
                    <div className="flex flex-row items-center mt-4 space-x-2">
                        <img src="/images/purple_pin.png" alt="purple pin icon" className="w-4 h-4"/>
                        <p className="font-display2 text-sm md:text-lg text-white text-left">{item.loc}</p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <img src="/images/purple_clock.png" alt="purple clock icon" className="w-4 h-4"/>
                        <p className="font-display2 text-sm md:text-lg text-white text-left">{item.time}:00</p>
                    </div>
                    {/* 
                    <SmallButton text="Learn More" link="/404"/>
                    */}
                </div>
            ))}
        </div>
    );
}

export default Calendar;