import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiOutlineRight } from 'react-icons/ai';
import { RiDeleteBack2Fill } from 'react-icons/ri';



import styles from "../../ModiuleCss/Cropping.module.css"

const Cropping = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className='container'>

      <Modal
        show={modalShow}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className={styles.heightModal}>
          <div className='d-flex justify-content-end p-2'>
        <Button onClick={() => setModalShow(false)} className=".bg-light"><RiDeleteBack2Fill/></Button>
        </div>
        </div>
        {/* <div className={styles.btnDelete}>
          <div className={styles.boxPic}>
            img
          </div>
          <Modal.Header onClick={() => setModalShow(false)} closeButton className={styles.modalHeader}>
          </Modal.Header>
        </div> */}

          <div className='d-flex justify-content-end'>
          <button onClick={() => setModalShow(false)} className={styles.btnSkip}>Skip <AiOutlineRight /></button>
          </div>

          <button className={styles.finshBtn}>Finish Cropping Photo</button>
        
      </Modal>





      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>



    </div>
  );
};

export default Cropping;