import React, { useEffect, useState, Suspense } from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import { BsDownload } from "react-icons/bs";
import axios from "axios";
import { API_URL } from "../../config/config";
import FadeLoader from "react-spinners/FadeLoader";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const [cvURL, setCvURL] = useState("");
  const getCV = async () => {
    const cv = await axios.get(`${API_URL}download`, {
      responseType: "arraybuffer",
    });
    const url = window.URL.createObjectURL(
      new Blob([cv.data], { type: "application/pdf" })
    );
    setCvURL(url);
  };
  useEffect(() => {
    getCV();
  }, []);
  return (
    <Suspense fallback={<FadeLoader />}>
      <div id="home" className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋🏻</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Omar</h1>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text">Web Developer</p>
              <p className="p-text">Freelancer</p>
            </div>
            <div className="tag-cmp app__flex">
              <a href={cvURL} className="app__cv-link p-text">
                Download Resume
                <BsDownload />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.profile} alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.sass, images.react, images.html].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div>
      </div>
    </Suspense>
  );
};

export default AppWrap(Header, "home");
