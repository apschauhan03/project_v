import React, { useState } from "react";
import styles from "./Login.module.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Login() {
    const [togglePassword,setTogglePassword] = useState(false);
    const togglePasswordHandler = ()=>{
        setTogglePassword(!togglePassword);
    }
  return (
    <div className={styles.LoginPage}>
      <div className={styles.loginCredentials}>
        <div className={styles.individualCredentials}>
          <input placeholder="Email"></input>
        </div>
        <div className={styles.individualCredentials}>
          <input type={togglePassword?"text":"password"} placeholder="Password"/>
          <span onClick={togglePasswordHandler} className={styles.showPassword}>{togglePassword?<FaRegEyeSlash />:<FaRegEye/>}</span>
        </div>
        <div className={styles.loginButton}>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
