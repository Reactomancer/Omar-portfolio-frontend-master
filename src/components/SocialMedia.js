import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
        style={{ cursor: "pointer" }}
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.instagram.com/0mar_medhat"
        target="_blank"
        rel="noreferrer"
        style={{ cursor: "pointer" }}
      >
        <BsInstagram />
      </a>
      <a
        href="https://www.github.com/equsix"
        target="_blank"
        rel="noreferrer"
        style={{ cursor: "pointer" }}
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
