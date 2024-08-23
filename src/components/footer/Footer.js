import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { logo } from "../../assets/index";

const handleClick = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Footer = () => {
  return (
    <footer className="w-full py-20 h-auto border-t-[1px] border-t-black bg-bodyColor text-white">
      <div className="container mx-auto text-center mb-8">
        <h3 className="text-xl font-semibold text-designColor uppercase mb-4">
          Quick Links
        </h3>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center gap-8 text-center">
        <a href="#about" className="relative text-lg hover:text-designColor transition-colors duration-300">
          About
          <span className="absolute bottom-0 left-0 w-full h-1 bg-designColor transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="#portfolio" className="relative text-lg hover:text-designColor transition-colors duration-300">
          Portfolio
          <span className="absolute bottom-0 left-0 w-full h-1 bg-designColor transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="#services" className="relative text-lg hover:text-designColor transition-colors duration-300">
          Services
          <span className="absolute bottom-0 left-0 w-full h-1 bg-designColor transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="#blog" className="relative text-lg hover:text-designColor transition-colors duration-300">
          Blog
          <span className="absolute bottom-0 left-0 w-full h-1 bg-designColor transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="#contact" className="relative text-lg hover:text-designColor transition-colors duration-300">
          Contact
          <span className="absolute bottom-0 left-0 w-full h-1 bg-designColor transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
