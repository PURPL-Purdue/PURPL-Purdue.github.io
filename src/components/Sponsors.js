import React from 'react';

const Sponsors = () => {
    return (
        <div className="flex flex-row overflow-x-auto lg:mb-8 space-x-4 px-2 lg:space-x-8 lg:px-8 items-center bg-jet-grey w-min h-min mx-auto justify-center ">
            <a className="w-[80px] md:w-[120px] lg:w-[120px] py-2" href="https://cfturbo.com/">
                <img className="mx-auto" alt="CFturbo sponsor logo" src="/images/sponsors/CFturbo-Logo-RGB-transparent.png"></img>
            </a>
            <a className="w-[80px] md:w-[120px] lg:w-[120px] py-2" href="https://www.purdueesc.org/">
                <img className="mx-auto" alt="PESC sponsor logo" src="/images/sponsors/PESC_logo-color-transparent.png"></img>
            </a>
            <a className="w-[80px] md:w-[110px] lg:w-[120px] py-2 " href="https://engineering.purdue.edu/Engr/Academics/Undergraduate/PEPC">
                <img className="mx-auto" alt="PEPC sponsor logo" src="/images/sponsors/pepc_logo_transparent.png"></img>
            </a>
            <a className="w-[100px] md:w-[140px] lg:w-[150px] py-2" href="https://web.ics.purdue.edu/~shreve/">
                <img className="mx-3" alt="Shrevel Hall Club sponsor mascot" src="/images/sponsors/shreve_hall_club_mascot.jpg"></img>
            </a>
            <a className="w-[120px] md:w-[150px] lg:w-[150px] py-2" href="https://www.purdue.edu/bidc/">
                <img className="mr-4 my-auto" alt="Bechtel Innovation Design Center sponsor logo" src="/images/sponsors/BIDC_V-Full-RGB.png"></img>
            </a>
        </div>
    );
};

export default Sponsors;