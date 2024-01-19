import React, { useState } from "react";
import styles from "./Chatcontacts.module.css";
import profilePic from "../../../Assets/MERE-NAAM-TU.jpg";

function Chatcontact() {
  const [user, setUser] = useState({
    profilePicUrl: profilePic,
    Name: "Abhijit Singh",
    LastMessage:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  });

  const truncateString = (str,maxLength)=>{
    if(str.length>maxLength){
        str = str.substring(0,maxLength);
        str+="...";
        return str;
    }
    return str;
  }
  return (
    <div className={styles.chatContact}>
      <div className={styles.profilePic}>
        <img src={user.profilePicUrl} alt="profile_picture" />
      </div>
      <div className={styles.chatUserDetails}>
        <div className={styles.contactName}>{user.Name}</div>
        <div className={styles.messagePreview}>{truncateString(user.LastMessage,30)}</div>
      </div>
    </div>
  );
}

export default Chatcontact;
