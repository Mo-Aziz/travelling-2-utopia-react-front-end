import React from "react";
// import "../../app.css";
import { Button } from "../Button/Button";
import v1 from "../../videos/video-1.mp4";
 
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={v1} autoPlay loop muted />
      <h1>ADVENTURE AHEAD</h1>
      <p> Are you joining us ?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
        WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};
export default HeroSection;
