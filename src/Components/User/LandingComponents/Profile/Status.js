import React from "react";
import Analytics from '../../../../Asset/analytics.png'
import Test from '../../../../Asset/test.png';
import classes from "./Profile.module.css";

const Status = () => {
  return (
    <div className={classes.Status}>
      <div className={classes.InternalMark}><img className={classes.Test} src={Test} alt=""/></div>
      <div className={classes.Attendencek}><img className={classes.Analytics} src={Analytics} alt=""/></div>
    </div>
  );
};

export default Status;
