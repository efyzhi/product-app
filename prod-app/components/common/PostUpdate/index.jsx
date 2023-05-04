import React, { useMemo, useState } from 'react';
import ModalComponent from '../Modal';
import styles from '../../../styles/Post.module.css'
import { getStatus, postStatus } from '../../api/FirestoreAPI';


export const PostStatus = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState('');
    const [allStatus, setAllStatus] = useState([])
    const sendStatus = async () => {
      await postStatus(status);
      await setModalOpen(false);
      await setStatus('');
    }

    useMemo(() => {
      getStatus(setAllStatus)
    })
  return (
    <div className={styles.statusMain}>
        <div className={styles.statusBox}>
            <button className={styles.openPostModal} onClick={() => setModalOpen(true)} >Start a Post</button>
        </div>

        <ModalComponent 
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen} 
        setStatus={setStatus}  
        sendStatus={sendStatus}
        status={status}/>

          <div>
        {allStatus.map((posts) => {
          return (
            <>
            <p>
              {posts.status}
            </p>
            </>
          )
        })}
        </div>
    </div>
  )
}
