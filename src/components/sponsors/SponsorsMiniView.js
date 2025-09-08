const SponsorsMiniView = () => {
    return (
        <div className="flex flex-col space-y-4 lg:space-y-8 lg:mb-8 px-8 md:px-16 lg:px-20 pb-4 pt-6 items-center bg-[#938a98] w-min h-min mx-auto justify-center">
            <div className="flex flex-col space-y-0">
                <h2 className="font-display-bold text-xl lg:text-2xl uppercase text-dusk">Platinum Tier</h2>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <a className="w-[140px] md:w-[170px] lg:w-[200px] py-2 " href="https://protolabs.com">
                        <img className="mx-auto" alt="Protolabs sponsor logo" src="/images/sponsors/Protolabs_logo.png"></img>
                    </a>
                    <a className="w-[150px] md:w-[180px] lg:w-[200px] py-2" href="https://marotta.com/">
                        <img className="mx-auto" alt="marotta controls sponsor logo" src="/images/sponsors/marotta_controls_logo.png"></img>
                    </a>
                </div>
            </div>
            <div className="flex flex-col space-y-0">
                <h2 className="font-display-bold text-xl lg:text-2xl uppercase text-dusk">Gold Tier</h2>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <a className="w-[70px] md:w-[80px] lg:w-[100px] py-2 " href="https://engineering.purdue.edu/Engr/Academics/Undergraduate/PEPC">
                        <img className="mx-auto" alt="PEPC sponsor logo" src="/images/sponsors/pepc_logo_transparent.png"></img>
                    </a>
                </div>
            </div>
            <div className="flex flex-col space-y-0">
                <h2 className="font-display-bold text-xl lg:text-2xl uppercase text-dusk">Silver Tier</h2>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <a className="w-[70px] md:w-[100px] lg:w-[115px] py-2" href="https://web.ics.purdue.edu/~shreve/">
                        <img className="mx-auto" alt="Shreve Hall Club sponsor mascot" src="/images/sponsors/shreve_hall_club_mascot.jpg"></img>
                    </a>
                    <a className="w-[90px] md:w-[110px] lg:w-[120px] py-2" href="https://www.purdue.edu/bidc/">
                        <img className="mx-auto my-auto" alt="Bechtel Innovation Design Center sponsor logo" src="/images/sponsors/BIDC_V-Full-RGB.png"></img>
                    </a>
                    <a className="w-[50px] md:w-[60px] lg:w-[70px] pr-4" href="https://www.revolution-bbq.com/">
                        <img className="mx-auto" alt="Revolution Barbeque sponsor logo" src="/images/sponsors/Revolution-Barbeque-Icon-transparent.png"></img>
                    </a>
                </div>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <a className="w-[40px] md:w-[40px] lg:w-[60px]" href="https://chipotle.com">
                        <img className="mx-auto" alt="Chipotle sponsor logo" src="/images/sponsors/chipotle.png"></img>
                    </a>
                    <a className="w-[150px] md:w-[180px] lg:w-[200px]" href="https://dyrobes.com/">
                        <img className="mx-auto" alt="Dyrobes sponsor logo" src="/images/sponsors/dyrobes.png"></img>
                    </a>
                    <a className="w-[70px] lg:w-[110px]" href="https://cfturbo.com/">
                        <img className="mx-auto" alt="CFturbo sponsor logo" src="/images/sponsors/CFturbo-Logo-RGB-transparent.png"></img>
                    </a>
                </div>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <a className="w-[75px] md:w-[90px] lg:w-[100px]" href="https://ansys.com">
                        <img className="mx-auto" alt="Ansys sponsor logo" src="/images/sponsors/Ansys_logo_black.png"></img>
                    </a>
                    <a className="w-[100px] lg:w-[150px]" href="https://polymaker.com/">
                        <img className="mx-auto" alt="Polymaker sponsor logo" src="/images/sponsors/Polymaker_Logo_TEAL.png"></img>
                    </a>
                    <a className="w-[80px] lg:w-[90px]" href="https://www.purdueesc.org/">
                        <img className="mx-auto" alt="PESC sponsor logo" src="/images/sponsors/PESC_logo-color-transparent.png"></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SponsorsMiniView;