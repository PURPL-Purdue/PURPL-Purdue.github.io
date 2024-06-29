import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaRegEnvelope, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full h-52 bg-dusk flex items-end justify-start p-4 px-16 shadow-md-top shadow-black">
            <div className="mb-8">
                <p className="text-stardust font-display text-left">Purdue<span className="text-white"> _ </span>Undergraduate<span className="text-white"> _ </span>Rocket<span className="text-white"> _ </span>Propulsion<span className="text-white"> _ </span>Laboratory</p>
                <p className="text-stardust font-display text-left pl-0 ml-0 indent-0">Copyright &copy; 2024. All rights reserved.</p>
                <div className="flex flex-row text-stardust space-x-2 align-middle mt-3">
                    {
                        /*
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="hover:text-white" size={24} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="hover:text-white" size={24} />
                    </a>
                    */
                    }
                    <a href="mailto:purpl@outlook.com" target="_blank" rel="noopener noreferrer">
                        <FaRegEnvelope className=" hover:text-white" size={24} />
                    </a>
                    {/*
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare className=" hover:text-white" size={24} />
                    </a>
                    */}
                    <a href="https://www.linkedin.com/company/purpl-purdue/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className=" hover:text-white" size={24} />
                    </a>
                </div>
            </div>
            <div className="ml-auto mb-10 mr-6">
                <img src="images/PU-H-Full-Rev-RGB.svg" alt="Purdue University logo" className="h-16" />
            </div>
        </div>
    );
};

export default Footer;