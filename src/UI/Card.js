import React from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import "./Card.scss";
const Card = ({ tag, description, imgURL, githubLink, hostingLink }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="app__work-card app__flex"
    >
      <div className="app__work-img">
        <motion.img src={imgURL} alt="test" />
        <motion.div
          whileHover={{
            opacity: 1,
          }}
          transition={{ duration: 0.4 }}
          className="app__work-icons app__flex"
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <a
              target="_blank"
              rel="noreferrer"
              href={hostingLink}
              className="app__flex icon"
            >
              <AiFillEye />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <a
              target="_blank"
              rel="noreferrer"
              href={githubLink}
              className="app__flex icon"
            >
              <AiFillGithub size={20} href={githubLink} />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="app__work-content app__flex">
        <h4 className="bold-text">{description}</h4>
        <p className="app__work-card_tag p-text">{tag}</p>
      </div>
    </motion.div>
  );
};

export default Card;
