import React, { useEffect, useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import Loader from "../components/common/Loader";

const Login = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        router.push("/");
      } else {
        setLoading(false);
      }
    });
  }, []);
  const router = useRouter();

  return
   loading ? <Loader/> : <LoginComponent />;
};

export default Login;




import React, { useState } from "react";
import Image from "next/image";
import inLogo from "../public/linkedinLogo.png";
import GoogleButton from "react-google-button";
import { LoginApi, GoogleSignInApi } from "components/api/AuthApi";
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
      toast.success('Signed to LinkedIn')
      router.push("/")
    } catch (error) {
      toast.error('Please check your details')
    }
  };

  const googleSignIn = () => {
    let res = GoogleSignInApi()
    console.log(res)
  }

  const router = useRouter()

  const handleRegister = () => {
    router.push('/register')
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
      <hr className={styles.hrText} data-content="or" />
      <div className={styles.googleBtnBox}>
        <GoogleButton
         className={styles.googleBtn}
          onClick={googleSignIn}
        />
        <p className={styles.goSignup}> New to LinkedIn? <span className={styles.joinNow} onClick={handleRegister}> Join now </span>
          </p>        
      </div>
    </div>
  );
};

export default LoginComponent;
