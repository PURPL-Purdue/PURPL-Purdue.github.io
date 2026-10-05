import PageWrapper from '../../components/layout/PageWrapper';
import ContentWrapper from '../../components/layout/ContentWrapper';

import TurbopumpHero from './turbopump/TurbopumpHero';
import TurbopumpIntro from './turbopump/TurbopumpIntro';
import TurbopumpPublications from './turbopump/TurbopumpPublications';
import MarlinProgram from './turbopump/MarlinProgram';
import TurbopumpSystemFlow from './turbopump/TurbopumpSystemFlow';
import TurbopumpSubsystems from './turbopump/TurbopumpSubsystems';
import TurbopumpRoadmap from './turbopump/TurbopumpRoadmap';
import TurbopumpTesting from './turbopump/TurbopumpTesting';

// Section order mirrors RDE: research/credibility content sits right after
// the intro, before the deep technical sections, not at the bottom.
const Turbopump = () => (
    <PageWrapper>
        <TurbopumpHero />
        <ContentWrapper>
            <div className="lg:w-[800px] flex flex-col space-y-8 md:space-y-12">
                <TurbopumpIntro />
                <TurbopumpPublications />
                <MarlinProgram />
                <TurbopumpSystemFlow />
                <TurbopumpSubsystems />
                <TurbopumpRoadmap />
                <TurbopumpTesting />
            </div>
        </ContentWrapper>
    </PageWrapper>
);

export default Turbopump;
