import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./About.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/config";

const About = () => {
  const [about, setAbout] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`${API_URL}about`);
    if (response.status === 200) {
      setAbout(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2 className="head-text app__about">
        I know that <span>Good Apps</span>
        <br />
        means&nbsp;
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {about.map((about, index) => (
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
