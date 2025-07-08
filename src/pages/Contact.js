
import PageWrapper from '../components/layout/PageWrapper';
import Banner from '../components/banner/Banner';
import ContentWrapper from '../components/layout/ContentWrapper';
import ContactForm from '../components/ContactForm';
import { contactInfo } from '../json/shared';

const Contact = () => {
    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                                Contact Us
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[950px] flex flex-col w-full space-y-8 md:space-y-10">
                    <div className="flex flex-col items-center space-y-8 md:space-y-14 my-4 lg:my-8 ">
                        <div className="flex flex-col space-y-2 text-white font-display2 text-md md:text-xl text-center">
                            <p>Interested in joining or supporting our club? We'd love to hear from you!</p>
                            <p>Contact us via the form below or by email at <a href={`mailto:${contactInfo.email}`} className="hover:text-boilermaker-gold underline text-stardust">{contactInfo.email}</a>.</p>
                        </div>
                        <ContactForm />
                        <div className="flex flex-row w-full justify-center items-center space-x-4">
                            <div className="flex flex-col h-full text-white font-display2 text-md md:text-xl text-center space-y-2">
                                <p className="text-balance">
                                    <span className="">Email: </span>
                                    <a href={`mailto:${contactInfo.email}`} className="hover:text-boilermaker-gold underline text-stardust">{contactInfo.email}</a>
                                </p>
                                <p className="text-balance">
                                    <span>Linkedin: </span>
                                    <a href="https://www.linkedin.com/company/purpl-purdue/mycompany"
                                        className="hover:text-boilermaker-gold underline text-stardust">@purpl-purdue
                                    </a>
                                </p>
                                <p className="text-balance">
                                    <span className="">Instagram: </span>
                                    <a href="https://instagram.com/purpl_purdue" className="hover:text-boilermaker-gold underline text-stardust">
                                        @purpl_purdue
                                    </a>
                                </p>
                                <p className="text-balance">
                                    <span className="">Location: </span>
                                    <span className="text-stardust">Bechtel Innovation Design Center</span>
                                </p>
                            </div>
                        </div>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10157.6625308148!2d-86.91906866377394!3d40.4273754830227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8812e2b44b97d635%3A0xeba05cd76eaa53d8!2sBechtel%20Innovation%20Design%20Center%20Purdue!5e0!3m2!1sen!2sus!4v1736202898039!5m2!1sen!2sus"
                            className="border-0 w-full max-w-[600px] h-[300px] md:h-[400px]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            title="PURPL location on Google Maps">
                        </iframe>
                    </div>
                </div>
            </ContentWrapper >
        </PageWrapper >
    );
};

export default Contact;