import { sponsors } from "../../json/shared";

const SponsorsMiniView = () => {
    return (
        <div className="flex flex-col space-y-4 lg:space-y-8 lg:mb-8 px-8 md:px-16 lg:px-20 pb-4 pt-6 items-center bg-[#938a98] w-min h-min mx-auto justify-center">
            <div className="flex flex-col space-y-0">
                <h2 className="font-display-bold text-xl lg:text-2xl uppercase text-dusk">Platinum Tier</h2>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <a className="w-[140px] md:w-[170px] lg:w-[200px] py-2 " href={sponsors.protolabs.link}>
                        <img className="mx-auto" alt={sponsors.protolabs.img_alt} src={sponsors.protolabs.image}></img>
                    </a>
                    <a className="w-[150px] md:w-[180px] lg:w-[200px] py-2" href={sponsors.marotta.link}>
                        <img className="mx-auto" alt={sponsors.marotta.img_alt} src={sponsors.marotta.image}></img>
                    </a>
                </div>
            </div>
            <div className="flex flex-col space-y-0">
                <h2 className="font-display-bold text-xl lg:text-2xl uppercase text-dusk">Gold Tier</h2>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <a className="w-[70px] md:w-[80px] lg:w-[100px] py-2 " href={sponsors.pepc.link}>
                        <img className="mx-auto" alt={sponsors.pepc.img_alt} src={sponsors.pepc.image}></img>
                    </a>
                </div>
            </div>
            <div className="flex flex-col space-y-0">
                <h2 className="font-display-bold text-xl lg:text-2xl uppercase text-dusk">Silver Tier</h2>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <a className="w-[70px] md:w-[100px] lg:w-[115px] py-2" href={sponsors.shreve.link}>
                        <img className="mx-auto" alt={sponsors.shreve.img_alt} src={sponsors.shreve.image}></img>
                    </a>
                    <a className="w-[90px] md:w-[110px] lg:w-[120px] py-2" href={sponsors.bidc.link}>
                        <img className="mx-auto my-auto" alt={sponsors.bidc.img_alt} src={sponsors.bidc.image_dark}></img>
                    </a>
                    <a className="w-[50px] md:w-[60px] lg:w-[70px] pr-4" href={sponsors.revolution.link}>
                        <img className="mx-auto" alt={sponsors.revolution.img_alt} src={sponsors.revolution.image}></img>
                    </a>
                </div>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <a className="w-[40px] md:w-[40px] lg:w-[60px]" href={sponsors.chipotle.link}>
                        <img className="mx-auto" alt={sponsors.chipotle.img_alt} src={sponsors.chipotle.image}></img>
                    </a>
                    <a className="w-[150px] md:w-[180px] lg:w-[200px]" href={sponsors.dyrobes.link}>
                        <img className="mx-auto" alt={sponsors.dyrobes.img_alt} src={sponsors.dyrobes.image}></img>
                    </a>
                    <a className="w-[70px] lg:w-[110px]" href={sponsors.cfturbo.link}>
                        <img className="mx-auto" alt={sponsors.cfturbo.img_alt} src={sponsors.cfturbo.image}></img>
                    </a>
                </div>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <a className="w-[75px] md:w-[90px] lg:w-[100px]" href={sponsors.ansys.link}>
                        <img className="mx-auto" alt={sponsors.ansys.img_alt} src={sponsors.ansys.image}></img>
                    </a>
                    <a className="w-[100px] lg:w-[150px]" href={sponsors.polymaker.link}>
                        <img className="mx-auto" alt={sponsors.polymaker.img_alt} src={sponsors.polymaker.image}></img>
                    </a>
                    <a className="w-[80px] lg:w-[90px]" href={sponsors.pesc.link}>
                        <img className="mx-auto" alt={sponsors.pesc.img_alt} src={sponsors.pesc.image}></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SponsorsMiniView;