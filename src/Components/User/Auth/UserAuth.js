import classes from "../../../App.module.css";
import React from "react";
import Bg from "../Background/Bg";
import Auth from "./Auth";

const UserAuth = () => {
  return (
    <div className={classes.Log}>
   
      <Bg />
      <Auth />  
     
    </div>
  );
};

export default UserAuth;
