import React from 'react';
import { FaMapMarkerAlt, FaGraduationCap, FaCode, FaBrain, FaStar, FaClipboardList } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="about-me"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="About Me" des="Learn more about who I am and what I enjoy" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Location"
          des="Based in the Bay Area, a vibrant tech hub where I stay updated with the latest trends and innovations. It's an exciting place to collaborate and grow."
          icon={<FaMapMarkerAlt />}
        />
        <Card
          title="Education"
          des="Graduated magna cum laude with a B.S. in Computer Science from San Jose State University. My degree covered a broad range of computer science principles."
          icon={<FaGraduationCap />}
        />
        <Card
          title="Software Development"
          des="Experienced in building scalable applications using modern technologies. Passionate about creating efficient software solutions and tackling complex problems."
          icon={<FaCode />}
        />
        <Card
          title="Data Science"
          des="Deeply interested in machine learning and data analysis. Skilled in using data to uncover insights and inform strategic decisions."
          icon={<FaBrain />}
        />
        <Card
          title="Product Management"
          des="Experience in managing product lifecycles, collaborating with teams, and delivering solutions that meet user needs and drive business goals."
          icon={<FaClipboardList />}
        />
        <Card
          title="Hobbies"
          des="I love exploring the outdoors and playing football and basketball. These activities keep me active and teach valuable lessons in teamwork and strategy."
          icon={<FaStar />}
          className="col-span-1 md:col-span-2 xl:col-span-1"
        />
      </div>
    </section>
  );
}

export default Features;
