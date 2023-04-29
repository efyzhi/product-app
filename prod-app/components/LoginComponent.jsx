import React, { useState } from "react";
import Image from "next/image";
import inLogo from "../public/linkedinLogo.png";

import { LoginApi } from "components/api/AuthApi";
import styles from "../styles/LoginComponent.module.css";

const LoginComponent = () => {
  const [details, setDetails] = useState({});

  const handleEmail = (e) => {
    setDetails({ ...details, email: e.target.value });
  };

  const handlePassword = (e) => {
    setDetails({ ...details, password: e.target.value });
  };
  const login = async () => {
    try {
      let res = await LoginApi(details.email, details.password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.loginContainer}>
      <Image src={inLogo} alt="logo" className={styles.linkedinLogo} />
      <div className={styles.loginInner}>

      <h1 className={styles.heading}> Sign in </h1>
      <p className={styles.subHeading}>
        Stay updated on yur professional world
      </p>

      <div className={styles.input}>
        <input
          onChange={handleEmail}
          className={styles.commonInput}
          placeholder="Email or Phone"
        />

        <input
          onChange={handlePassword}
          className={styles.commonInput}
          placeholder="Password"
      
        />
        </div>
        <button onClick={login} className={styles.loginBtn}>
          Sign in
        </button>
      </div>
      <hr className={styles.hrText} data-content="or"/>
    </div>
  );
};

export default LoginComponent;
