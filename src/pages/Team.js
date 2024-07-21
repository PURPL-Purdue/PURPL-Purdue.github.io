import Banner from '../components/Banner';
import DividerLine from '../components/shared/DividerLine';
import Profile from '../components/team/Profile';

function Team() {

  const tempProfilePic = "images/pattern_1.jpg";
  const data = {
      major_exec: [
          {
              imagePath: tempProfilePic,
              name: "Kamon Blong",
              title: "Co-President",
              email: "johndoe@example.com",
              linkedin: "https://linkedin.com/johndoe"
          },
          {
              imagePath: tempProfilePic,
              name: "Maddie Taylor",
              title: "Co-President",
              email: "johndoe@example.com"
          },
          {
              imagePath: tempProfilePic,
              name: "Parth Karande",
              title: "Treasurer",
              email: "johndoe@example.com"
          },
          {
              imagePath: tempProfilePic,
              name: "Alejandro Diaz Contreras",
              title: "Project Director",
              email: "johndoe@example.com"
          },
          {
              imagePath: tempProfilePic,
              name: "Jonah Nobel",
              title: "Test Stand Director",
              email: "johndoe@example.com"
          }
      ],
      admin_exec: [
          {
              imagePath: tempProfilePic,
              name: "Jack Bolster",
              title: "Marketing Chair",
              email: "johndoe@example.com"
          },
          {
              imagePath: tempProfilePic,
              name: "Alina Li",
              title: "Webmaster",
              email: "johndoe@example.com"
          },
          {
              imagePath: tempProfilePic,
              name: "James Nida",
              title: "Education Director",
              email: "johndoe@example.com"
          },
      ],
      project_leads: [
        {
          imagePath: tempProfilePic,
          name: "Kamon Blong",
          title: "Turbopump lead",
          email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "Maddie Taylor",
          title: "Hall Thruster Lead",
          email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "Josh Hyatt",
          title: "Turbojet Lead",
          email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "Vincent Fazio",
          title: "Teeny-K Lead",
          email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "Dominik",
          title: "Nitromethane Lead",
          email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "Ben Beckman",
          title: "Pulsejet Lead",
          email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "Alejandro Diaz Contreras",
          title: "HMB Lead",
          email: "johndoe@example.com"
      },
      {
          imagePath: tempProfilePic,
          name: "James Nida",
          title: "Coaxial Swirler Lead",
          email: "johndoe@example.com"
      },
      ]
  }

  return (
    <div className="bg-dusk pb-16 md:px-16">
      <Banner title="Our Team" blurb={"Made by students, for students. \n We are comprised of an executive team and project leads."}/>
      <div className="flex flex-col px-4 bg-dusk mt-8">
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
        <p className="text-white font-display-bold text-2xl mt-12 md:mt-16 mb-4">Administrative Leads</p>
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
    </div>
  );
}

export default Team;
