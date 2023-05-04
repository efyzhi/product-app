import React from 'react';
import { Modal, Button } from 'antd';
import styles from '../../../styles/Modal.module.css'


const ModalComponent = ({ modalOpen, setModalOpen, setStatus, status, sendStatus }) => {  
  const handleStatus = (e) =>{
    setStatus(e.target.value)
  }
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
          onClick={sendStatus}
          key='submit'
          type='primary'
          disabled={status.length > 0 ? false : true}>
            Post
          </Button>
        ]}
      >
        <input 
        className={styles.modalInput}
        placeholder='what do you want to talk about'
        onChange={handleStatus}
        value={status}
        />
      </Modal>
    </>
  );
};

export default ModalComponent;