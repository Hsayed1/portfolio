import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[320px] h-[420px] lgl:w-[900px] lgl:h-[620px] z-10 object-cover"
        src={bannerImg}
        alt="bannerImg"
      />
      {/* Green shadow applied outside the shape */}
      <div className="absolute bottom-4 w-[320px] h-[300px] lgl:w-[500px] lgl:h-[500px] 
        bg-gradient-to-r from-[#1e2024] to-[#202327] 
        shadow-[0px_0px_50px_10px_#32a852] flex justify-center items-center">
      </div>
    </div>
  );
}

export default RightBanner;
