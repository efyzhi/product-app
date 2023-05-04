import React, { useState } from 'react'
import { Space, Spin } from 'antd';
import styles from "../../styles/Loader.module.css";



const Loader = () => {
  return (
    <div className={styles.loader}>
      <p className={styles.loaderText}>Loading..Please wait..</p>
       <Space size="middle"/>
        <Spin size="large" />
    </div>
  )
}

export default Loader