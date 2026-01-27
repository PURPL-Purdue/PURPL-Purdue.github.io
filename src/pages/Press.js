import PageWrapper from '../components/layout/PageWrapper';
import Banner from '../components/banner/Banner';
import ContentWrapper from '../components/layout/ContentWrapper';
import { pressArticles } from '../json/press.js';

const Press = () => {
    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance leading-normal">
                                Press
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[950px] flex flex-col w-full space-y-8 md:space-y-10">
                    <div className="flex flex-col items-center space-y-8 md:space-y-14 my-4 lg:my-8">
                        <div className="flex flex-col space-y-2 text-white font-display2 text-md md:text-xl text-center">
                            <p>PURPL has been featured in various news articles and publications.</p>
                            <p>Read about our work and achievements below.</p>
                        </div>
                        <div className="w-full max-w-[800px] flex flex-col space-y-6">
                            <h2 className="font-display-bold text-3xl lg:text-4xl text-white text-center">
                                News & Articles
                            </h2>
                            <div className="h-1 max-w-lg mx-auto w-full bg-gradient-to-r from-old-gold to-stardust mb-6" />
                            <div className="flex flex-col space-y-4">
                                {pressArticles.map((article, index) => (
                                    <a
                                        key={index}
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-moon/50 hover:bg-moon/80 transition-colors p-4 rounded-lg"
                                    >
                                        <div className="flex flex-col space-y-1">
                                            <h3 className="font-display-semibold text-lg md:text-xl text-white hover:text-stardust">
                                                {article.title}
                                            </h3>
                                            <p className="font-display2 text-sm md:text-md text-stardust">
                                                {article.source} {article.date && `• ${article.date}`}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Press;
