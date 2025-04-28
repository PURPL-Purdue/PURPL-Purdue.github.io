
import Banner from './Banner';

const GradientBanner = ({ children }) => {
    return (
        <Banner>
            <div className="bg-gradient-to-b from-orion/100 to-dusk/100 h-full ">
                <div className="absolute left-0 right-0 mx-auto px-4 bottom-12 md:bottom-16">
                    {children}
                </div>
            </div>
        </Banner>
    );
};

export default GradientBanner;