import React from "react";
import LandingContent from "./LandingComponents/LandingContent";
import LandingHeader from "./LandingComponents/LandingHeader";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import classes from "../../App.module.css";

const Landing = () => {
  return (
    <div className={classes.Landing}>
      <LandingHeader />
      <LandingContent />
    </div>
  );
};

export default Landing;
