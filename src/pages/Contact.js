import React from 'react';
import PageWrapper from '../components/shared/PageWrapper';
import Banner from '../components/shared/banner/Banner';
import ContentWrapper from '../components/shared/ContentWrapper';
import Button from '../components/shared/button/Button';

const Contact = () => {
    const image = "/images/DSC/DSC01647_color_graded.jpg";
    const imageAlt = "Miscellaneous metal parts pictured on a wooden table."
    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl italic text-white text-balance">
                                Contact Us
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[950px] flex flex-col w-full space-y-8 md:space-y-10">
                    <div className="flex flex-col mr-auto space-y-2 lg:space-y-4">
                        <div className="flex flex-col h-full text-stardust font-display text-lg md:text-2xl text-left my-4 lg:my-8 space-y-2 md:space-y-6">
                            <p className=""><span className="text-stardust">Email: </span>purpl.purdue@gmail.com</p>
                            <p className=""><span className="text-stardust">Linkedin: </span>@purpl-purdue</p>
                            <p className=""><span className="text-stardust">Instagram: </span>@purpl_purdue</p>
                            <p className=""><span className="text-stardust">Location: </span>Bechtel Innovation Design Center</p>
                            <p className="">Stay in the loop by joining our <a className="text-white hover:white underline italic" href="https://discord.gg/cC6FYAu93W">Discord</a>.</p>
                        </div>
                        <img src={image} alt={imageAlt} className="mr-auto w-full max-w-[600px]"></img>
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Contact;