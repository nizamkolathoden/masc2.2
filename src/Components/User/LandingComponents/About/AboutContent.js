import React from "react";
import Masc from "../../../../Asset/Logo-removebg-preview.png";
import classes from "./About.module.css";
const AboutContent = () => {
  return (
    <div className={classes.AboutContent}>
      <div className={classes.Aboutcard}>
        <div className={classes.aboutMasc}>
          <p className={classes.MascOff}>Official</p>
          <img
          className={classes.AboutMascLogo} 
          src={Masc} alt="***" />
          <p className={classes.AboutText}>Majlis Arts And Science College<br/> <span className={classes.spanAb}>Majlis Nagar, Malappuram Dist, Puramannur, Kerala 676552</span></p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
