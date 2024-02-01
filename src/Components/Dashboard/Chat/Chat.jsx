import React from "react";
import Sidepanel from "../Sidepanel/Sidepanel";
import Midpanel from "../Midpanel/Midpanel";
import Lastpanel from "../Lastpanel/Lastpanel";
import styles from "./Chatcontacts.module.css";

function Chat() {
  return (
    <div className={styles.Panel}>
      <Sidepanel />
      <Midpanel />
      <Lastpanel />
    </div>
  );
}

export default Chat;
