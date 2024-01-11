import React, { useState } from "react";
import styles from "./Login.module.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Login() {
  const [togglePassword, setTogglePassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const credentialsChangeHandler = (event) => {
    setCredentials((prevValue)=>{
      return {...prevValue,[event.target.name]:event.target.value};
    })
  };
  const togglePasswordHandler = () => {
    setTogglePassword(!togglePassword);
  };
  const onSubmitHandler = ()=>{
    console.log("helo");
    console.log(credentials);
  }
  return (
    <div className={styles.LoginPage}>
      <div className={styles.loginCredentials}>
        <div className={styles.individualCredentials}>
          <input
            onChange={credentialsChangeHandler}
            name="email"
            value={credentials.email}
            placeholder="Email"
          ></input>
        </div>
        <div className={styles.individualCredentials}>
          <input
          name="password"
            onChange={credentialsChangeHandler}
            value={credentials.password}
            type={togglePassword ? "text" : "password"}
            placeholder="Password"
          />
          <span onClick={togglePasswordHandler} className={styles.showPassword}>
            {togglePassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
        <div className={styles.loginButton}>
          <button onClick={onSubmitHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
