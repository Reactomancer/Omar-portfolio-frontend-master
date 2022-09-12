import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./About.scss";
const abouts = [
  {
    title: "Web development",
    description: "I am a good web developer",
    imgURL: images.about01,
  },
  {
    title: "Frontend Development",
    description: "I am a good web designer",
    imgURL: images.about02,
  },
  {
    title: "Backend Development",
    description: "I am a good UI/UX developer",
    imgURL: images.about03,
  },
  {
    title: "MERN Stack",
    description: "I am a good Frontend developer",
    imgURL: images.about04,
  },
];
const About = () => {
  return (
    <>
      <h2 className="head-text app__about">
        I know that <span>Good Apps</span>
        <br />
        means&nbsp;
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About), "about", { backgroundColor: "#fff" });
