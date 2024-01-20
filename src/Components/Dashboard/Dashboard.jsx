import React from "react";
import styles from "./Dashboard.module.css";
import Sidepanel from "./Sidepanel/Sidepanel";
import Panel from "./Panel/Panel";



function Dashboard() {
  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.blurredBackground}></div>
      <Panel />
    </div>
  );
}

export default Dashboard;
