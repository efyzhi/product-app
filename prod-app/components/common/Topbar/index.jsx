import React from "react";
import styles from "../../../styles/Topbar.module.css";
import inLogo from "../../../public/linkedinLogo.png";
import user from "../../../public/user.png";
import { useRouter } from 'next/router'
import Image from "next/image";
import { AiOutlineHome, AiOutlineUserSwitch, AiOutlineSearch, AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import { BsBriefcase } from 'react-icons/bs';


const Topbar = () => {
  const router = useRouter();
  const goToRoute = (route) => {
      router.push(route)
  }
  return (
    <div className={styles.topbarBox}>
      <Image className={styles.inImg} src={inLogo} alt="logo" />
      <div className={styles.icons}>
        <AiOutlineSearch size={30} className={styles.icon} />
        <AiOutlineHome size={30} className={styles.icon}
        onClick={() => goToRoute('/home')}/>
        <AiOutlineUserSwitch size={30} className={styles.icon}
        onClick={() => goToRoute('/profile')}/>
        <BsBriefcase size={30} className={styles.icon}/>
        <AiOutlineMessage size={30} className={styles.icon} />
        <AiOutlineBell size={30} className={styles.icon} />
      </div>
      <Image className={styles.userImg} src={user} alt='user' />
    </div>
  );
};

export default Topbar;
