import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../Assets/Logo/png/logo-no-background-no-name.png";
import LoginDiv from "./LoginDiv";
import SignUpDiv from "./SignUpDiv";

function Login() {
  const [signUp,setSignUp] = useState(false);
  const signUpHandler = () =>{
    setSignUp(true);
  }
  const loginHandler = () =>{
    setSignUp(false);
  }
  return (
    <div className={styles.LoginPage}>
      <div className={styles.blurredBackground}></div>
      <div className={styles.loginCredentialsWrapper}>
        <div className={styles.loginLogo}>
          <img src={logo} alt="gammalogo" />
        </div>
        {signUp?<SignUpDiv loginHandler={loginHandler}/>:<LoginDiv signUpHandler={signUpHandler} />}
      </div>
    </div>
  );
}

export default Login;
