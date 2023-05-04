import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '/firebaseConfig';


export const LoginApi = (email, password) => {
  try {
    let res= signInWithEmailAndPassword(auth, email, password) 
    return res;
  } catch (error) {
    return error;
  }
};

export const RegisterApi = (email, password) => {
  try {
    let res= createUserWithEmailAndPassword(auth, email, password) 
    return res;
  } catch (error) {
    return error;
  }
};

export const GoogleSignInApi = () => {
  try {
    let googleProvider = new GoogleAuthProvider() 
    let res = sijgnInWithPopup(auth, googleProvider);
    return res;
  } catch (error) {
    return error;
  }
};