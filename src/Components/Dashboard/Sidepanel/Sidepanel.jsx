import React from "react";
import styles from "./Sidepanel.module.css";
import {
  IoCallOutline,
  IoChatboxOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { CiStreamOn } from "react-icons/ci";
import profilePic from "../../../Assets/MERE-NAAM-TU.jpg";

function Sidepanel() {
  return (
    <div className={styles.sidePanel}>
      <div className={styles.upperPanel}>
        <div className={styles.sidePanelIcon}>
          <IoChatboxOutline style={{ color: "white" }} />
        </div>
        <div className={styles.sidePanelIcon}>
          <IoCallOutline style={{ color: "white" }} />
        </div>
        <div className={styles.sidePanelIcon}>
          <CiStreamOn style={{ color: "white" }} />
        </div>
      </div>
      <div className={styles.lowerPanel}>
        <div className={styles.sidePanelIcon}>
          <IoSettingsOutline style={{ color: "white" }} />
        </div>
        <div className={styles.sidePanelProfilePic}>
          <img src={profilePic} />
        </div>
      </div>
    </div>
  );
}

export default Sidepanel;
