import React from 'react';

function DisplayGrid() {
    const values = [
        { number: "2024", text: "founded" },
        { number: "30+", text: "members" },
        { number: "13+", text: "majors" },
        { number: "4", text: "projects" },
    ];
    
    return (
        <div className="flex flex-row overflow-x-auto h-28 md:h-48 border-stardust border-2 w-full rounded-sm divide-x-2 divide-stardust py-4 md:py-8 ">
            {values.map((item, index) => (
                <div className="flex flex-col justify-center px-10 w-full" key={index}>
                    <p className="font-display-bold text-2xl md:text-4xl lg:text-5xl text-stardust">{item.number}</p>
                    <p className="font-display2 text-md md:text-xl text-white">{item.text}</p>
                </div>
            ))}
        </div>
    );
}

export default DisplayGrid;