import React from 'react';

function DisplayGrid() {
    const values = [
        { number: "7", text: "projects" },
        { number: "200+", text: "members" },
        { number: "7+", text: "majors" },
        { number: "2024", text: "founded" },
    ];
    
    return (
        <div className="flex flex-row overflow-x-auto border-stardust border-2 w-full rounded-sm divide-x-2 divide-stardust py-4 md:py-6 ">
            {values.map((item, index) => (
                <div className="flex flex-col justify-center px-10 w-full h-min py-4" key={index}>
                    <p className="font-display-bold text-2xl md:text-4xl lg:text-5xl text-stardust">{item.number}</p>
                    <p className="font-display text-lg md:text-2xl text-white">{item.text}</p>
                </div>
            ))}
        </div>
    );
}

export default DisplayGrid;