
import Button from '../components/shared/button/Button.js';
import PageWrapper from '../components/shared/PageWrapper.js';
import ContentWrapper from '../components/shared/ContentWrapper.js';

const ComingSoon = () => {
    return (
        <div className="top-0 w-full bg-dusk">
            <PageWrapper>
                <ContentWrapper>
                <div className="flex flex-col w-full h-full py-28 lg:py-64 items-center space-y-12">
                    <p className="text-stardust text-6xl font-display">Coming Soon!</p>
                    <Button text="Return Home" link="/" isNavLink={true} />
                </div>
            </ContentWrapper>
            </PageWrapper>
        </div>
    );
};

export default ComingSoon;