
import { FaInstagram, FaLinkedinIn, FaRegEnvelope, FaDiscord, /*FaFacebookSquare, */ FaYoutube  } from 'react-icons/fa';
import { contactInfo } from '../../json/shared';

const Footer = () => {
    return (
        <div className="w-full bg-dusk flex flex-col md:flex-row items-end justify-start px-8 md:px-16 pt-8 md:pt-12 shadow-md-top shadow-black">
            <div className="mb-8 mr-auto">
                <p className="text-white font-display text-left">Purdue Undergraduate Rocket Propulsion Lab</p>
                <p className="text-white font-display text-left pl-0 ml-0 indent-0">Copyright &copy; 2024. All rights reserved.</p>
                <div className="flex flex-row text-white space-x-2 align-middle mt-3">
                    <a href="https://www.youtube.com/@PURPL_purdue" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="hover:text-stardust" size={24} />
                    </a>
                    <a href="https://discord.gg/cC6FYAu93W" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className=" hover:text-stardust" size={24} />
                    </a>
                    <a href="https://www.instagram.com/purpl_purdue" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="hover:text-stardust" size={24} />
                    </a>
                    <a href={`mailto:${contactInfo.email}`} target="_blank" rel="noopener noreferrer">
                        <FaRegEnvelope className=" hover:text-stardust" size={24} />
                    </a>
                    {/*
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare className=" hover:text-stardust" size={24} />
                    </a>
                    */}
                    <a href="https://www.linkedin.com/company/purpl-purdue/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className=" hover:text-stardust" size={24} />
                    </a>
                </div>
            </div>
            <div className="mb-10 mr-auto md:mt-4 md:mb-auto md:ml-auto lg:mr-6">
                <img src="images/PU-H-Full-Rev-RGB.svg" alt="Purdue University logo" className="h-6 md:h-9 lg:h-12" />
            </div>
        </div>
    );
};

export default Footer;