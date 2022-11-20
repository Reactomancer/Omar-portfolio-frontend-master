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
  const [data, setData] = useState({});
  const [topSkills, setTopSkills] = useState([]);

  const getTopSkills = async () => {
    const res = await axios.get(`${API_URL}top-skills`);
    setTopSkills(res.data);
  };

  const getCV = async () => {
    const cv = await axios.get(`${API_URL}download`, {
      responseType: "arraybuffer",
    });
    const namePositionData = await axios.get(`${API_URL}personal`);
    setData(namePositionData.data[0]);

    const url = window.URL.createObjectURL(
      new Blob([cv.data], { type: "application/pdf" })
    );
    setCvURL(url);
  };
  useEffect(() => {
    getCV();
    getTopSkills();
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
                <h1 className="head-text">{data.name}</h1>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text">{data.position}</p>
              <p className="p-text">Freelancer</p>
            </div>
            <div className="tag-cmp app__flex">
              <a href={data.cvLink} className="app__cv-link p-text">
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
          {topSkills.map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle.image} alt="circle" />
            </div>
          ))}
        </motion.div>
      </div>
    </Suspense>
  );
};

export default AppWrap(Header, "home");
