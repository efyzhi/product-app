import '@/components/styles/globals.css'
import { app, auth } from '../firebaseConfig'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import HomeLayout from '../layouts/HomeLayout';
  


export default function App({ Component, pageProps }) {
  return (
 <>
  <HomeLayout />
  <Component {...pageProps} />
  <ToastContainer />
  </>
  )
}
