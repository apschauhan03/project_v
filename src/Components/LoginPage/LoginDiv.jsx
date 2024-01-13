import React, { useState } from "react";
import styles from "./Login.module.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import getLogin from "../../apis/getLogin";

function LoginDiv(props) {
  const [togglePassword, setTogglePassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const credentialsChangeHandler = (event) => {
    setCredentials((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  };
  const togglePasswordHandler = () => {
    setTogglePassword(!togglePassword);
  };
  const onSubmitHandler = async () => {
    console.log("helo");
    const res = await getLogin(credentials);
    if (res.token) {
      localStorage.setItem("token", res.token);
      window.location.href = "/";
    }
  };
  return (
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
      <div className={styles.noLoginCredentials}>
        <span>Forgot Password</span>
        <span onClick={props.signUpHandler}>Sign Up</span>
      </div>
      <div className={styles.loginButton}>
        <button onClick={onSubmitHandler}>Login</button>
      </div>
    </div>
  );
}

export default LoginDiv;
