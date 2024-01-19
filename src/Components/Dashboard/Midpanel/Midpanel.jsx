import React from "react";
import styles from "./Midpanel.module.css";
import Chatcontacts from "../Chat/Chatcontacts";

function Midpanel() {
  return (
    <div className={styles.midpanel}>
     <Chatcontacts />
     
    </div>

  );
}

export default Midpanel;
