import styles from '@/components/styles/Home.module.css'
import HomeComponent from '../components/HomeComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../firebaseConfig'
import Loader from '../components/common/Loader'
import { useRouter } from 'next/router'
import HomeLayout from '../layouts/HomeLayout'

const index = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        router.push('/')
      } else {
        setLoading(false)
      }
    });
  }, []);
  return (
    <div>
        {/* <HomeLayout /> */}
      {loading ? <Loader /> : <HomeComponent />}
    </div>
  )
}

export default index


