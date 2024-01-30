import React from "react";
import { GalleryEdit } from "./GalleryEdit";
import * as classes from "./style.module.css";

export const Box = () => {
  return (
    <div className={classes.box}>
      <div className={classes.backgroung}>
        <div className={classes.background}>
          <div className={classes.desktop}>
            <GalleryEdit className={classes["vuesax-linear"]} />
            {/* <img className={classes.arrow} alt="Arrow" src="arrow-38.svg" /> */}
            <div className={classes["text-wrapper"]}>NAME OF THE STARTUP</div>
            <div className={classes.div}>Percentage equity :</div>
            <div className={classes["text-wrapper-2"]}>Offer amount :</div>
            <div className={classes["overlap-group"]}>
              <div className={classes["text-wrapper-3"]}>Make offer</div>
            </div>
            <div className={classes["text-wrapper-4"]}>Add comments :</div>
            <div className={classes.navbar}>
              <div className={classes.frame}>
                <div className={classes["text-wrapper-5"]}>Home</div>
                <div className={classes["text-wrapper-5"]}>About</div>
                <div className={classes["text-wrapper-5"]}>Notifications</div>
                <div className={classes["text-wrapper-5"]}>Settings</div>
              </div>
              <div className={classes["frame-2"]}>
                <div className={classes.PECUNIA}>{""}</div>
              </div>
              <div className={classes["frame-3"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
