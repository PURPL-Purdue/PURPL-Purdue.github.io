import Banner from '../components/shared/banner/Banner';
import PageWrapper from '../components/shared/PageWrapper';
import Profile from '../components/team/Profile';

function Team() {

    const tempProfilePic = "/images/team/pattern_1.jpg";
    const imagePath = "/images/team/headshots/original/";
    const data = {
        major_exec: [
            {
                imagePath: tempProfilePic,
                name: "Kamon Blong",
                title: "Co-President",
                image1: "DSC03351.jpg", // serious
                image2: "DSC03352.jpg", // smiling
                //email: "johndoe@example.com",
                //linkedin: "https://linkedin.com/johndoe"
            },
            {
                imagePath: tempProfilePic,
                name: "Madeline Taylor",
                title: "Co-President",
                image1: "DSC03317.jpg",
                image2: "DSC03319.jpg",
                // email: "johndoe@example.com"
            },
            {
                imagePath: tempProfilePic,
                name: "Parth Karande",
                title: "Treasurer",
                image1: "DSC03341.jpg",
                image2: "DSC03337.jpg",
                //email: "johndoe@example.com"
            },
            {
                imagePath: tempProfilePic,
                name: "Alejandro Diaz Contreras",
                title: "Project Director",
                image1: "DSC03294.jpg",
                image2: "DSC03293.jpg",
                // email: "johndoe@example.com"
            },
            {
                imagePath: tempProfilePic,
                name: "Jonah Nobel",
                title: "Test Stand Director",
                image1: "DSC03301.jpg",
                image2: "DSC03297.jpg",
                //email: "johndoe@example.com"
            }
        ],
        admin_exec: [
            {
                imagePath: tempProfilePic,
                name: "Jack Bolster",
                title: "Marketing Chair",
                // email: "johndoe@example.com"
            },
            {
                imagePath: tempProfilePic,
                name: "Alina Li",
                title: "Webmaster",
                image1: "DSC03309.jpg",
                image2: "DSC03308.jpg",
                // email: "johndoe@example.com"
            },
            {
                imagePath: tempProfilePic,
                name: "James Nida",
                title: "IT Chair",
                image1: "DSC03289.jpg",
                image2: "DSC03287.jpg",
                //email: "johndoe@example.com"
            },
        ],
        project_leads: [
            {
                imagePath: tempProfilePic,
                name: "Kamon Blong",
                title: "Turbopump Co-Lead",
                image1: "DSC03351.jpg",
                image2: "DSC03352.jpg",
                //email: "johndoe@example.com"
            }, {
                imagePath: tempProfilePic,
                name: "Forrest Lim",
                title: "Turbopump Co-Lead",
                //email: "johndoe@example.com"
            },
            {
                imagePath: tempProfilePic,
                name: "Josh Hyatt",
                title: "Turbojet Lead",
                image1: "DSC03305.jpg",
                image2: "DSC03304.jpg",
                //email: "johndoe@example.com"
            },
            {
                imagePath: tempProfilePic,
                name: "Madeline Taylor",
                title: "Electric Propulsion Lead",
                image1: "DSC03317.jpg",
                image2: "DSC03319.jpg",
                //email: "johndoe@example.com"
            },
            {
                imagePath: tempProfilePic,
                name: "Dominik Sloup",
                title: "Testbed Co-Lead",
                image1: "DSC03285.jpg",
                image2: "DSC03283.jpg",
                //email: "johndoe@example.com"
            },
            {
                imagePath: tempProfilePic,
                name: "James Nida",
                title: "Testbed Co-Lead",
                image1: "DSC03289.jpg",
                image2: "DSC03287.jpg",
                //email: "johndoe@example.com"
            },
            {
                imagePath: tempProfilePic,
                name: "Vincent Fazio",
                title: "Teeny-K Lead",
                image1: "DSC03335.jpg",
                image2: "DSC03334.jpg",
                //email: "johndoe@example.com"
            },
            {
                imagePath: tempProfilePic,
                name: "Alejandro Diaz Contreras",
                title: "HMB Lead",
                image1: "DSC03294.jpg",
                image2: "DSC03293.jpg",
                //email: "johndoe@example.com"
            },
        ]
    }

    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl italic text-white text-balance leading-normal">
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
                    {data.major_exec.map((profile, index) => (
                        <Profile
                            key={index}
                            imagePath={profile.image2 ? (imagePath + profile.image2) : tempProfilePic}
                            name={profile.name}
                            title={profile.title}
                            email={profile.email}
                            linkedin={profile.linkedin}
                        />
                    ))}
                </div>
                <p className="text-white font-display-bold text-2xl mt-12 md:mt-16 mb-4">Project Leads</p>
                <div className="flex flex-row mx-auto w-full flex-wrap gap-x-4 md:gap-x-8 md:gap-y-8 justify-center">
                    {data.project_leads.map((profile, index) => (
                        <Profile
                            key={index}
                            imagePath={profile.image2 ? (imagePath + profile.image2) : tempProfilePic}
                            name={profile.name}
                            title={profile.title}
                            email={profile.email}
                            linkedin={profile.linkedin}
                        />
                    ))}
                </div>
                <p className="text-white font-display-bold text-2xl mt-12 md:mt-16 mb-4">Administrative Board</p>
                <div className="flex flex-row mx-auto w-full flex-wrap gap-x-4 md:gap-x-8 md:gap-y-8 justify-center">
                    {data.admin_exec.map((profile, index) => (
                        <Profile
                            key={index}
                            imagePath={profile.image2 ? (imagePath + profile.image2) : tempProfilePic}
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
