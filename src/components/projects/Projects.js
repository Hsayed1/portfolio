import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="PROJECTS" des="Check out some of my work" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Point-Of-Sale Web App"
          des="Developed a client-server POS system for cash-only businesses, transforming order management and user experiences. Introduced a real-time Kitchen Display System, streamlining order tracking and improving customer interactions. Achieved operational efficiency with a personalized menu interface and seamless order processing."
          src={projectOne}
          gitLink={
            "https://github.com/Hsayed1/Point-of-Sale-Application/tree/staging"
          }
        />
        <ProjectsCard
          title="MelodyStream: Integrated Music Player"
          des="Collaborated with peers to develop an Android MusicPlayer app that lets users seamlessly search and play music from local files and Spotify. The app enables smooth transitions between Spotify and local tracks, featuring integrated playback and cross-search functionality. Gained expertise in Android development and MediaStore API."
          src={projectTwo}
          gitLink={"https://github.com/Hsayed1/AndroidMusicPlayer"}
        />

        <ProjectsCard
          title="Live Housing Market Analysis"
          des="Leveraged AI and machine learning techniques to analyze live housing data using the Zillow Scraper API. Built predictive models including CNN, SVR, and GBR, achieving 89% accuracy in housing price predictions. Integrated real-time data visualization, providing AI-driven insights for homebuyers by analyzing over 40,000 properties."
          src={"/house.png"}
          gitLink={
            "https://github.com/Hsayed1/Live-Housing-Market-Analysis-and-Price-Predictions"
          }
        />

        <ProjectsCard
          title="Radiology Image Recognition"
          des="Developed an AI-powered Convolutional Neural Network to automate the categorization of radiology images, enhancing diagnostic efficiency in healthcare. Achieved 97% accuracy in classifying diverse medical scans, streamlining diagnosis and improving patient outcomes through automated and precise image analysis."
          src={"/radiology.png"}
          gitLink={"https://github.com/Hsayed1/Medical-Image-Classifier"}
        />

        <ProjectsCard
          title="CampusConnect"
          des="Developed a social media platform tailored for college students to connect and interact. Users can follow others, engage with posts through likes and comments, and build their social network. This project included features like post management, profile interactions, and user authentication, creating a vibrant online community for campus life."
          src={projectOne}
          gitLink={"https://github.com/Hsayed1/Campus-Connect"}
        />

        <ProjectsCard
          title="Index Card Manager"
          des="Created an interactive index card management application for organizing and studying information. Users can create, edit, and review digital index cards, facilitating efficient learning and knowledge retention. Features include customizable card sets and a user-friendly interface designed to enhance study sessions and information recall."
          src={projectTwo}
          gitLink={"https://github.com/Hsayed1/IndexCardManager"} // Replace with actual link if available
        />
      </div>
    </section>
  );
};

export default Projects;
