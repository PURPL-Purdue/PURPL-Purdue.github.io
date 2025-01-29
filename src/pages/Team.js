import Banner from '../components/shared/banner/Banner';
import PageWrapper from '../components/shared/PageWrapper';
import Profile from '../components/team/Profile';
import SmallerProfile from '../components/team/SmallerProfile.js';

import teamData from '../static/team.js';

function Team() {
    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance leading-normal">
                                Our Team
                            </h1>
                            <h2 className="font-display text-white mt-4 md:mt-12 text-md md:text-xl lg:text-2xl">
                                Made by students, for students.<br></br>We are comprised of an executive team and project leads.
                            </h2>
                        </div>
                    </div>
                </div>
            </Banner>
            <p className="text-white font-display-bold text-2xl mt-12 md:mt-16 mb-4">Executive Board</p>
            <div className="flex flex-col px-4 md:px-16 lg:px-32 bg-dusk mt-8">
                <div className="flex flex-row mx-auto w-full flex-wrap gap-x-4 md:gap-x-8 md:gap-y-8 justify-center">
                    {teamData.major_exec.map((profile, index) => (
                        <Profile
                            key={profile.name}
                            imagePath={profile.image2}
                            name={profile.name}
                            title={profile.title}
                            email={profile.email}
                            linkedin={profile.linkedin}
                        />
                    ))}
                </div>
                <p className="text-white font-display-bold text-2xl mt-12 md:mt-16 mb-4">Project Leads</p>
                <div className="flex flex-row mx-auto w-full flex-wrap gap-x-4 md:gap-x-8 md:gap-y-8 justify-center">
                    {teamData.project_leads.map((profile, index) => (
                        <SmallerProfile
                            key={profile.name}
                            imagePath={profile.image2}
                            name={profile.name}
                            title={profile.title}
                            email={profile.email}
                            linkedin={profile.linkedin}
                        />
                    ))}
                </div>
                <p className="text-white font-display-bold text-2xl mt-12 md:mt-16 mb-4">Administrative Board</p>
                <div className="flex flex-row mx-auto w-full flex-wrap gap-x-4 md:gap-x-8 md:gap-y-8 justify-center">
                    {teamData.admin_exec.map((profile, index) => (
                        <SmallerProfile
                            key={profile.name}
                            imagePath={profile.image2}
                            name={profile.name}
                            title={profile.title}
                            email={profile.email}
                            linkedin={profile.linkedin}
                        />
                    ))}
                </div>

            </div>
        </PageWrapper>
    );
}

export default Team;
