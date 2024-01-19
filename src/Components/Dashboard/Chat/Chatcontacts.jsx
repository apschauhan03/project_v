import React, { useState } from "react";
import styles from "./Chatcontacts.module.css";
import { IoIosSearch } from "react-icons/io";
import Chatcontact from "./Chatcontact";

function Chatcontacts() {
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const searchButtonClickedHandler = () => {
    setSearchButtonClicked(!searchButtonClicked);
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.heading}>Chats</div>
        <div
          onClick={searchButtonClickedHandler}
          className={styles.searchChats}
        >
          <IoIosSearch />
        </div>
      </div>
      {searchButtonClicked && (
        <div className={styles.searchBox}>
          <div className={styles.individualCredentials}>
            <input />
          </div>
        </div>
      )}
      <div className={styles.chatHistory}>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>
        <Chatcontact/>


      </div>
    </>
  );
}

export default Chatcontacts;
