import React from 'react';
import PageWrapper from '../components/shared/PageWrapper';
import Banner from '../components/shared/banner/Banner';
import ContentWrapper from '../components/shared/ContentWrapper';
import ContactForm from '../components/ContactForm';

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
                    <div className="flex flex-col items-center space-y-8 md:space-y-14 my-4 lg:my-8 ">
                        <div className="flex flex-col h-full text-white font-display text-lg md:text-xl text-center space-y-2">
                            <p className="text-balance">
                                <span className="">Email: </span>
                                <a href="mailto:purpl.purdue@gmail.com" className="hover:text-boilermaker-gold underline text-stardust">purpl.purdue@gmail.com</a>
                                <span>. Linkedin: </span>
                                <a href="https://www.linkedin.com/company/purpl-purdue/mycompany"
                                    className="hover:text-boilermaker-gold underline text-stardust">@purpl-purdue
                                </a>.
                            </p>
                            <p className="text-balance">
                                <span className="">Instagram: </span>
                                <a href="https://instagram.com/purpl_purdue" className="hover:text-boilermaker-gold underline text-stardust">
                                    @purpl_purdue
                                </a>
                                <span className="">. Location: </span>
                                <span className="text-stardust">Bechtel Innovation Design Center</span>.
                            </p>
                        </div>
                        <ContactForm />
                        <img src={image} alt={imageAlt} className="pt-8 w-full max-w-[600px]"></img>
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Contact;