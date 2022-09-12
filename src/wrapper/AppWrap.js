import React from "react";
import { NavigationDots, SocialMedia } from "../components";
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <section
        id={idName}
        style={{ ...classNames }}
        className={`app__container`}
      >
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@{new Date().getFullYear()} Omar</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </section>
    );
  };

export default AppWrap;
