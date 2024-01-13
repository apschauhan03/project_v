import React, { useState } from "react";
import styles from "./Login.module.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import registerUser from "../../apis/registerUser";

function SignUpDiv(props) {
  const [togglePassword, setTogglePassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    firstName:"",
    lastName:"",
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
  const onSignUpHandler = async () => {
    console.log("signup clicked");
    const res = await registerUser(credentials);
    console.log(res);
  };
  return (
    <div className={styles.loginCredentials}>
      <div className={styles.individualCredentials}>
        <input name="email" value={credentials.email} placeholder="Email" onChange={credentialsChangeHandler}/>
      </div>
      <div className={styles.individualSignUpCredentials}>
        <div className={styles.signUpCredentials}>
          <input name="firstName" value={credentials.firstName} placeholder="First Name" onChange={credentialsChangeHandler}/>
        </div>
        <div className={styles.signUpCredentials}>
          <input name="lastName" value={credentials.lastName} placeholder="Last Name" onChange={credentialsChangeHandler}/>
        </div>
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
      <div className={styles.signUpButton}>
        <button onClick={props.loginHandler}>Login</button>
        <button onClick={onSignUpHandler}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUpDiv;
