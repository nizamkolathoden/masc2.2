import React from 'react'
import LandingHeader from "../LandingHeader";
import ProfileContent from './ProfileContent';
import Status from './Status'
import classes from './Profile.module.css'

const Profile = () => {
return(
    <div className={classes.profile}>
        <LandingHeader />
        <ProfileContent />
        <Status />
    </div>
)
}

export default Profile


