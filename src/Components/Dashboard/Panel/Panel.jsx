import React from "react";
import styles from "./Panel.module.css";
import Midpanel from "../Midpanel/Midpanel";
import LastPanel from "../Lastpanel/Lastpanel";
import Sidepanel from "../Sidepanel/Sidepanel";

function Panel() {
  return (
    <div className={styles.Panel}>
      <Sidepanel />

      <Midpanel />
      <LastPanel />
    </div>
  );
}

export default Panel;
