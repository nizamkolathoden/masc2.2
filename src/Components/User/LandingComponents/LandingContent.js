import React, {useEffect} from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import classes from "../../../App.module.css";

function LandingContent() {
  useEffect(sal, []);
  return (
    <div className={classes.LandingContent}>
      <div className={classes.Landing_FbDisc}>
        <h1 className={classes.Landing_FbHead}
        data-sal-duration="1200"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out"
        >Give Feedback</h1>
        <p className={classes.Landing_Fbtext}
                data-sal-duration="1200"
                data-sal="slide-left"
                data-sal-delay="300"
                data-sal-easing="ease-out"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed
          suscipit consequatur error deserunt animi!
        </p>
      </div>
      <div>
 <div className={classes.LC_Card}>
        <h2 className={classes.TcF}
          data-sal-duration="1200"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >Teachers Feedback</h2>
        <p className={classes.TcP}
        data-sal-duration="1200"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease-out"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             In maxime ipsa corporis vero repellat optio!</p> 
             <button className={classes.TcB}
             data-sal-duration="1200"
             data-sal="slide-right"
             data-sal-delay="300"
             data-sal-easing="ease-out"
             >Enter</button>                        
      </div>
      
      </div>
     
    </div>
  );
}

export default LandingContent;
