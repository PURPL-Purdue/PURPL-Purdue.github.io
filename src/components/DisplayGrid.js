import React from 'react';

function DisplayGrid() {
    return (
        <div className="flex flex-row h-[200px] border-stardust border-2 w-full rounded-sm divide-x-2 divide-stardust py-8 ">
            <div className="flex flex-col justify-center px-10 w-full">
                <p className="font-display-bold text-6xl text-stardust">2024</p>
                <p className="font-display2 text-xl text-white">Founded in</p>
            </div>
            <div className="flex flex-col justify-center px-10 w-full">
                <p className="font-display-bold text-6xl text-stardust">30+</p>
                <p className="font-display2 text-xl text-white">members</p>
            </div>
            <div className="flex flex-col justify-center px-10 w-full">
                <p className="font-display-bold text-6xl text-stardust">13+</p>
                <p className="font-display2 text-xl text-white">majors</p>
            </div>
            <div className="flex flex-col justify-center px-10 w-full">
                <p className="font-display-bold text-6xl text-stardust">#%</p>
                <p className="font-display2 text-xl text-white">Lorem ipsum</p>
            </div>
            <div className="flex flex-col justify-center px-10 w-full">
                <p className="font-display-bold text-6xl text-stardust">#%</p>
                <p className="font-display2 text-xl text-white">Lorem ipsum</p>
            </div>
        </div>
    );
}

export default DisplayGrid;