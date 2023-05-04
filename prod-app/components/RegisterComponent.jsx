import React, { useState } from "react";
import Image from "next/image";
import inLogo from "../public/linkedinLogo.png";
import GoogleButton from "react-google-button";
import { RegisterApi, GoogleSignInApi } from "components/api/AuthApi";
import styles from "../styles/LoginComponent.module.css";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from 'next/router'

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
      toast.success('Account Created')
      router.push("/")
    } catch (error) {
      toast.error('Cannot Create your Acount')
    }
  };

  const googleSignIn = () => {
    let res = GoogleSignInApi()
    console.log(res)
  }

  const router = useRouter()

  const handleSignin = () => {
    router.push('/login')
  };
  return (
    <div className={styles.loginContainer}>
      <Image src={inLogo} alt="logo" className={styles.linkedinLogo} />
      <div className={styles.loginInner}>
        <h1 className={styles.heading}> Make the most of your professional life
 </h1>

        <div className={styles.input}>
          <input
            onChange={handleEmail}
            className={styles.commonInput}
            placeholder="Email or phone number
            "
          />

          <input
            onChange={handlePassword}
            className={styles.commonInput}
            placeholder="Password (6 or more characters)
            "
          />
        </div>
        <button onClick={login} className={styles.loginBtn}>
          Agree & Join
        </button>
      </div>
      <hr className={styles.hrText} data-content="or" />
      <div className={styles.googleBtnBox}>
        <GoogleButton
         className={styles.googleBtn}
          onClick={googleSignIn}
        />
        <p className={styles.goSignup}> Already on LinkedIn? <span className={styles.joinNow} onClick={handleSignin}> Sign in </span>
          </p>        
      </div>
    </div>
  );
};

export default LoginComponent;
