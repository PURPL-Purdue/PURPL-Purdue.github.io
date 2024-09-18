import React from 'react';
import PageWrapper from '../components/shared/PageWrapper';
import Banner from '../components/shared/banner/Banner';
import ContentWrapper from '../components/shared/ContentWrapper';
import Sponsors from '../components/Sponsors';
import ContactForm from '../components/ContactForm';

const Donate = () => {
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
                                Donate
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[950px] flex flex-col w-full space-y-8 md:space-y-10">
                    <div className="flex flex-col w-full mr-auto space-y-2 lg:space-y-4">
                        <div className="flex flex-col w-full h-full text-white font-display text-lg md:text-xl text-left my-4 lg:my-8 space-y-8 md:space-y-14">
                            <div className="flex flex-col space-y-1 md:space-y-2 pb-2 md:pb-4 text-center">
                                <p className="">Want to support our club? We'd love to hear from you!</p>
                                <p className="">Email us at <a href="mailto:purpl.purdue@gmail.com" className="text-stardust">purpl.purdue@gmail.com</a> or use the form below.</p>
                            </div>
                            <ContactForm />
                            <div className="flex flex-col space-y-2 md:space-y-4 w-full text-center">
                                <p className="">Join our lineup of sponsors!</p>
                                <div className="w-full bg-dusk overflow-x-auto h-min mb-4 ">
                                <Sponsors />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Donate;