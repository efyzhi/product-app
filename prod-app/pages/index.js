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
        router.push("/home");
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
