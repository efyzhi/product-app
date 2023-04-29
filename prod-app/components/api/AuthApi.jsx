import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '/firebaseConfig';


export const LoginApi = (email, password) => {
  try {
    let res= signInWithEmailAndPassword(auth, email, password) 
    return res;
  } catch (error) {
    alert(error.errors.message)
  }
};

export const RegisterApi = (email, password) => {
  try {
    let res= createUserWithEmailAndPassword(auth, email, password) 
    return res;
  } catch (error) {
    alert(error.errors.message)
  }
};