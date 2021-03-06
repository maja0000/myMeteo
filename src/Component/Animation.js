import React from "react";
import { Link } from "react-router-dom";
import "../css/Animation.css";
import Logo from "../pictures/icons/newlogo.svg";
import Cloud from "../pictures/icons/singlecloud.svg";
import Header from "./Header";

function Animation() {
  return (
    <div>
      <Header />
      <div className="animation-group">
        <div className="smaller-container">
          <div className="container-sun">
            <svg
              className="svg-sun"
              version="1.1"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMinYMin meet"
            >
              <circle cx="50" cy="50" r="35" id="sun"></circle>
            </svg>
          </div>
          {/* <img src={Sun} alt="sun" className="sun" /> */}
          <Link exact to="/home">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          <img src={Cloud} alt="Cloud" className="c1" />
          <img src={Cloud} alt="Cloud" className="c2" />
          <img src={Cloud} alt="Cloud" className="c3" />
        </div>
        <br />
        <div className="clouds"></div>
      </div>
    </div>
  );
}

export default Animation;
