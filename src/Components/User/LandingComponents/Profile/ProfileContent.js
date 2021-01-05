import React,{useContext} from "react";
import {userContext} from '../../Auth/User'
import classes from "./Profile.module.css";

const ProfileContent = () => {
 const {state} = useContext(userContext)
  const user = JSON.parse(localStorage.getItem('user_majlis'));
  return (
    <div className={classes.Profile}>
      <div className={classes.ProfileContent}>
        <div className={classes.Profilecard}>
          <ul className={classes.Profiledetails}>
            <li className={classes.Name}>Name:- <label htmlFor="">{state ? state.name : "Loading"}</label></li>
            <li className={classes.AdmissionNumber}>Admission Number:- <label htmlFor="">{state ? state.admno : "Loading"}</label></li>
            <li className={classes.Batch}>Batch:- <label htmlFor="">{state ? state.batch : "Loading"}</label></li>
            <li className={classes.Course}>Course:- <label htmlFor="">{state ? state.course : 'Loading'}</label></li>
            <li className={classes.Semester}>Semester:- <label htmlFor="">{state ? state.sem : "Loading"}</label></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ProfileContent;
