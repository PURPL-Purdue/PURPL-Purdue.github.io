import PageWrapper from '../../components/layout/PageWrapper';
import ContentWrapper from '../../components/layout/ContentWrapper';

import TurbopumpHero from './turbopump/TurbopumpHero';
import TurbopumpIntro from './turbopump/TurbopumpIntro';
import TurbopumpSystemFlow from './turbopump/TurbopumpSystemFlow';
import TurbopumpAssembly from './turbopump/TurbopumpAssembly';
import TurbopumpSubsystems from './turbopump/TurbopumpSubsystems';
import TurbopumpSystemProfile from './turbopump/TurbopumpSystemProfile';
import TurbopumpDevelopment from './turbopump/TurbopumpDevelopment';
import TurbopumpRecognition from './turbopump/TurbopumpRecognition';

// Turbopump project page. Same shell as RDE / Testbed: the shared banner hero,
// then one ContentWrapper with an 800px left-aligned column. Sections are
// separated by whitespace, not background bands. THE SYSTEM, FULL ASSEMBLY and
// SUBSYSTEMS are the distinctive technical moments; the rest stay clean.
const Turbopump = () => (
    <PageWrapper>
        <TurbopumpHero />
        <ContentWrapper>
            <div className="lg:w-[800px] flex flex-col space-y-8 md:space-y-12">
                <TurbopumpIntro />
                <TurbopumpSystemFlow />
                <TurbopumpAssembly />
                <TurbopumpSubsystems />
                <TurbopumpSystemProfile />
                <TurbopumpDevelopment />
                <TurbopumpRecognition />
            </div>
        </ContentWrapper>
    </PageWrapper>
);

export default Turbopump;
