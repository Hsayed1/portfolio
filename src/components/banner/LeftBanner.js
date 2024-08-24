import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Data Scientist", "Mobile Developer", "Tech Enthusiast"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">Welcome</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, my name is <span className="capitalize" style={{ color: '#32a852' }}>Hamed Sayed</span>
        </h1>
        <h2 className="text-4xl font-bold text-white sm:text-3xl md:text-4xl">
          I am <br className="block md:hidden" /> {/* Forces a new line in mobile view */}
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#32a852"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Changing the world one bit at a time 🚀😊
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base font-titleFont mb-4">
            Find me on
          </h2>
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
    </div>
  );
}

export default LeftBanner;
