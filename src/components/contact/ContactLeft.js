import React from 'react'
import { FaGithub, FaLinkedinIn, FaRegHandshake} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={"/shake.jpg"}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Hamed Sayed</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Engineer/Data Scientist
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+1 (510) 690-3840</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sayedhamed8@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
        <span
              className="bannerIcon"
              onClick={() => handleClick('https://www.linkedin.com/in/hamed-sayed-computer-scientist/')}
              style={{
                transition: 'color 0.3s ease',
                color: 'inherit'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#32a852'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
            >
              <FaLinkedinIn />
            </span>
            <span
              className="bannerIcon"
              onClick={() => handleClick('https://github.com/Hsayed1')}
              style={{
                transition: 'color 0.3s ease',
                color: 'inherit'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#32a852'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
            >
              <FaGithub />
            </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft