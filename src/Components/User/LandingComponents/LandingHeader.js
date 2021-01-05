import React,{useEffect} from "react";
// import { HiMenuAlt4, HiInformationCircle, HiUserCircle } from 'react-icons/hi';
import sal from "sal.js";
import "sal.js/dist/sal.css";
import classes from "../../../App.module.css";
import {Link} from 'react-router-dom'
function LandingHeader() {
  useEffect(sal, []);
  return (
    <div className={classes.LandingHeader}>
      <header className={classes.Landing_Header}>
        <h3 className={classes.Landing_Header_Head}
        data-sal-duration="1200"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease-out"
        >Masc Feedback</h3>
        </header>
        <div className={classes.LandingNav}>
          <ul className={classes.Landing_Ul}
           data-sal-duration="1200"
           data-sal="slide-left"
           data-sal-delay="300"
           data-sal-easing="ease-out"
          >
           <Link style={{ textDecoration: 'none', color: '#ffffff' }} to ="/About" ><li className={classes.Landing_link}>About</li></Link>
           <Link style={{ textDecoration: 'none', color: '#ffffff' }} to="/Profile"><li className={classes.Landing_link}>Profile</li></Link> 
          </ul>
          
        </div>
    </div>
  );
}

export default LandingHeader;
