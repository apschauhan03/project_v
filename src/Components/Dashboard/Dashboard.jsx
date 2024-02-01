import React from "react";
import styles from "./Dashboard.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./Chat/Chat";
import Calling from "./Calling/Calling";

function Dashboard() {
  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.blurredBackground}></div>
      <Router>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/calling" element={<Calling/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default Dashboard;
