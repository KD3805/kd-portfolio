import React from "react";

import { github, linkedin, instagram } from "../assets";
import { Link } from "react-router-dom";

import { SectionWrapper } from "../hoc";

const Footer = () => {
    return (
        <div className="w-full py-8 px-4 sm:px-8 mt-12 bg-black-100/10 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-white text-sm sm:text-base font-normal text-center sm:text-left">
                    &copy; {new Date().getFullYear()} • All rights reserved |{" "}
                    <b className="text-[#915EFF]">Kishan Dabhi</b>
                </p>
                <div className="flex flex-row items-center justify-center gap-6 sm:gap-8">
                    <Link 
                        to="https://github.com/kd3805" 
                        target="_blank"
                        className="hover:scale-110 transition-transform duration-300"
                    >   
                        <img
                            src={github}
                            alt="github"
                            className="w-7 h-7 sm:w-8 sm:h-8 object-contain cursor-pointer"
                        />
                    </Link>
                    <Link 
                        to="https://www.linkedin.com/in/kishan-dabhi-837a64257" 
                        target="_blank"
                        className="hover:scale-110 transition-transform duration-300"
                    >
                        <img
                            src={linkedin}
                            alt="linkedin"
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain cursor-pointer"
                        />
                    </Link>
                    <Link 
                        to="https://www.instagram.com/k.dabhi_01" 
                        target="_blank"
                        className="hover:scale-110 transition-transform duration-300"
                    >
                        <img
                            src={instagram}
                            alt="instagram"
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain cursor-pointer"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
