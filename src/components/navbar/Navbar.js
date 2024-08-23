import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const handleClick = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-16 h-auto" />{" "}
        {/* Adjust size here */}
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-24 h-auto" src={logo} alt="logo" />{" "}
                <p className="text-sm text-gray-400 mt-4">
                  Hamed Sayed is a passionate software engineer with expertise
                  in full stack development, data science, and mobile development.
                  Graduating magna cum laude with a B.S. in Computer Science
                  from San Jose State University, he has hands-on experience in
                  developing scalable solutions for industry-leading companies
                  like Medline. Hamed loves building impactful web applications,
                  with skills spanning JavaScript frameworks, cloud services,
                  and machine learning libraries.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
