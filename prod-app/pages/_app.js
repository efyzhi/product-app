import '@/components/styles/globals.css'
import { app } from '../firebaseConfig'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
