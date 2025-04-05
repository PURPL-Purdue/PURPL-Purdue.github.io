
import { FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

const Profile = (props) => {
    const { imagePath, name, title, email, linkedin } = props;
    return (
        <div className="w-36 lg:w-48 mb-4">
            <div className="flex flex-col items-center h-fit">
                <div className="bg-gradient-to-b from-stardust to-old-gold w-full h-full">
                    <div className="m-1 bg-dusk">
                        <img className={`w-36 lg:w-48 mx-auto`} src={imagePath} alt="Headshot" />
                    </div>
                </div>
                <div className="flex flex-col items-center bg-dusk w-full ">
                    <h2 className="font-display2-bold text-white text-md mb-1 mt-3">{name}</h2>
                    <h3 className="font-display2 text-sm md:text-md text-white mb-1">{title}</h3>
                    <div className="flex flex-row items-center gap-2 mb-2">
                        {email ?
                            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                                <FaRegEnvelope className="email-icon fill-white hover:fill-stardust" />
                            </a> :
                            <span></span>
                        }
                        {linkedin ?
                            <a href={`${linkedin}`} target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="text-white hover:text-stardust" />
                            </a> :
                            <span></span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;