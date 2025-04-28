const FeaturedMessage = () => {
    return (
        <div className="h-full flex flex-row">
            <div className="bg-gradient-to-br from-old-gold to-stardust from-30% h-full w-full">
                <div className="flex flex-col m-1 items-center h-fit">
                    <div className="w-full bg-dusk py-4 px-auto space-y-1">
                        <h2 className="font-display text-lg md:text-2xl text-white text-balance">Our spring callout will be Wednesday, January 22nd @ 7pm in PHYS 114.</h2>
                        <h2 className="font-display text-white text-lg md:text-2xl text-balance">Join our <a className="underline hover:text-stardust" href="https://discord.gg/cC6FYAu93W">Discord</a> to stay up-to-date on club activities.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedMessage;