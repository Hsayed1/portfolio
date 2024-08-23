import React from "react";
import Title from "../layouts/Title";
import SkillsMenu from "./SkillsMenu";
import TimeLine from "./TimeLine";

const Resume = () => {

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black mt-[-2rem]">
      <div className="flex justify-center items-center text-center">
        <Title title="Experience" des="My Resume" />
      </div>
      <div className="flex flex-row flex-wrap justify-between gap-6">
        <div className="flex-1 min-w-[300px]">
          <TimeLine />
        </div>
        <div className="flex-1 min-w-[300px]">
          <SkillsMenu />
        </div>
      </div>
    </section>
  );
};

export default Resume;
