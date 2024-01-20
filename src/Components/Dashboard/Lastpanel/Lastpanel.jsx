import React, { useState } from "react";
import styles from "./Lastpanel.module.css";
import { IoIosSearch } from "react-icons/io";
import profilePic from "../../../Assets/MERE-NAAM-TU.jpg";

function Lastpanel() {
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const searchButtonClickedHandler = () => {
    setSearchButtonClicked(!searchButtonClicked);
  };
  return (
    <div className={styles.lastpanel}>
      <div className={styles.lastpanelBody}>
        <div className={styles.headerDetails}>
          <div className={styles.headerProfilePic}>
            <img src={profilePic} alt="headerProfilePic" />
            <div className={styles.headerName}>Abhijit Singh</div>
          </div>
          <div
            onClick={searchButtonClickedHandler}
            className={styles.searchChatHistory}
          >
            <IoIosSearch />
          </div>
        </div>
        <div className={styles.chatHistoryBody}></div>
        <div className={styles.newMessageField}>
          <input placeholder="Type a message" />
        </div>
      </div>
    </div>
  );
}

export default Lastpanel;
