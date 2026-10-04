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

// Turbopump project page. Same shell as RDE / Testbed: the shared banner hero,
// then one ContentWrapper with an 800px left-aligned column, sections
// separated by whitespace (no background bands).
//
// Order follows RDE's actual current pattern: intro, then the shared
// credibility content (AIAA recognition + publications on RDE) right after
// it, not buried beneath the deep technical material, then the project
// overview/selector (Marlin Program), then System -> Subsystems -> Roadmap
// -> Testing, same as RDE's HADES/DEIMOS technical content (incl. its own
// Roadmap) comes after the selector.
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
