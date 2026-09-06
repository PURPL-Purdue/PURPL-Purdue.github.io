import SpecsTable from '../../../components/projects/SpecsTable';
import { turbopumpData as d } from '../../../json/turbopump';

// System Profile — deliberately minimal. The shared SpecsTable (large title,
// horizontal rules, label left / value right) at full readable width, plus one
// clarifying line. Section spacing gives it room; no oversized empty band.
const profileTable = d.profile.rows.reduce(
    (acc, r) => ({ ...acc, [r.label]: r.value }),
    { [d.profile.hero.label]: d.profile.hero.value },
);

const TurbopumpSystemProfile = () => (
    <section>
        <SpecsTable table={profileTable} title="System Profile" />
        <p className="font-display2 text-white/40 text-xs md:text-sm leading-6 mt-4">
            1,500 lbf is the engine the turbopump is being designed to feed, not the turbopump’s own thrust.
        </p>
    </section>
);

export default TurbopumpSystemProfile;
