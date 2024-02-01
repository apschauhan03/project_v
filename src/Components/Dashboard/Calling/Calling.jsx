import React from "react";
import styles from "./Calling.module.css";
import Sidepanel from "../Sidepanel/Sidepanel";
import Midpanel from "../Midpanel/Midpanel"
function Calling() {
  return (
    <div className={styles.callingDiv}>
      <Sidepanel />

      <Midpanel/>
      <div className={styles.callingPanel}>
        <div className={styles.createNewRoom}><button>Create New Room</button></div>
        <div className={styles.joinRoom}>
          <input placeholder="Room Code" />
          <button>Join Room</button>
        </div>
      </div>
    </div>
  );
}

export default Calling;
