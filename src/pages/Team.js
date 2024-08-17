import Banner from '../components/shared/banner/Banner';
import DividerLine from '../components/shared/DividerLine';
import PageWrapper from '../components/shared/PageWrapper';
import Profile from '../components/team/Profile';
import GradientBanner from '../components/shared/banner/GradientBanner';
import {H1, H4} from '../components/shared/styles/H';

function Team() {

  const tempProfilePic = "images/team/pattern_1.jpg";
  const data = {
      major_exec: [
          {
              imagePath: tempProfilePic,
              name: "Kamon Blong",
              title: "Co-President",
              //email: "johndoe@example.com",
              //linkedin: "https://linkedin.com/johndoe"
          },
          {
              imagePath: tempProfilePic,
              name: "Madeline Taylor",
              title: "Co-President",
             // email: "johndoe@example.com"
          },
          {
              imagePath: tempProfilePic,
              name: "Parth Karande",
              title: "Treasurer",
              //email: "johndoe@example.com"
          },
          {
              imagePath: tempProfilePic,
              name: "Alejandro Diaz Contreras",
              title: "Project Director",
             // email: "johndoe@example.com"
          },
          {
              imagePath: tempProfilePic,
              name: "Jonah Nobel",
              title: "Test Stand Director",
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
             // email: "johndoe@example.com"
          },
          {
              imagePath: tempProfilePic,
              name: "James Nida",
              title: "Education Director",
              //email: "johndoe@example.com"
          },
      ],
      project_leads: [
        {
          imagePath: tempProfilePic,
          name: "Kamon Blong",
          title: "Turbopump lead",
          //email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "Madeline Taylor",
          title: "Hall Thruster Lead",
          //email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "Josh Hyatt",
          title: "Turbojet Lead",
          //email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "Vincent Fazio",
          title: "Teeny-K Lead",
          //email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "Dominik",
          title: "Nitromethane Lead",
          //email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "Ben Beckman",
          title: "Pulsejet Lead",
          //email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "Alejandro Diaz Contreras",
          title: "HMB Lead",
          //email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "James Nida",
          title: "Coaxial Swirler Lead",
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
      <p className="text-white font-display-bold text-2xl mt-12 md:mt-16 mb-4">Major Executive Board</p>
      <div className="flex flex-col px-4 md:px-16 lg:px-32 bg-dusk mt-8">
        <div className="flex flex-row mx-auto overflow-x-auto w-full md:flex-wrap gap-x-4 md:gap-x-12 md:gap-y-8 md:justify-center">
          {data.major_exec.map((profile, index) => (
            <Profile
              key={index}
              imagePath={profile.imagePath}
              name={profile.name}
              title={profile.title}
              email={profile.email}
              linkedin={profile.linkedin}
            />
          ))}
        </div>
        <p className="text-white font-display-bold text-2xl mt-12 md:mt-16 mb-4">Executive Board</p>
        <div className="flex flex-row mx-auto overflow-x-auto w-full md:flex-wrap gap-x-4 md:gap-x-12 md:gap-y-8 md:justify-center">
          {data.admin_exec.map((profile, index) => (
            <Profile
              key={index}
              imagePath={profile.imagePath}
              name={profile.name}
              title={profile.title}
              email={profile.email}
              linkedin={profile.linkedin}
            />
          ))}
        </div>
        <p className="text-white font-display-bold text-2xl mt-12 md:mt-16 mb-4">Project Leads</p>
        <div className="flex flex-row mx-auto overflow-x-auto w-full md:flex-wrap gap-x-4 md:gap-x-12 md:gap-y-8 md:justify-center">
          {data.project_leads.map((profile, index) => (
            <Profile
              key={index}
              imagePath={profile.imagePath}
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
