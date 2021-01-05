import React from "react";
import LandingHeader from "../LandingHeader";
import AboutContent from "./AboutContent";
import classes from './About.module.css'

const About = () => {
  return (
    <div className={classes.About}>
      <LandingHeader />
      <AboutContent />
    </div>
  );
};

export default About;
