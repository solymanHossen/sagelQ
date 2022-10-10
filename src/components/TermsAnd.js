import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BsChevronLeft } from 'react-icons/bs';
import styles from "../ModiuleCss/TermsAnd.module.css"

const TermsAnd = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      
        >
          <div   className={styles.modalChange}>

        <Modal.Title className='text-center'>Terms and condition</Modal.Title>

        <Modal.Body>
        <p>Last Updated: June 1, 2021</p>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h6 className='mb-3'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Scelerisque varius morbi enim nunc faucibus a. Fringilla ut morbi tincidunt augue interdum velit euismod. Id nibh tortor id aliquet lectus proin nibh nisl. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Sed turpis tincidunt id aliquet. Volutpat odio facilisis mauris sit amet massa vitae. Pretium nibh ipsum consequat nisl vel pretium. Vulputate mi sit amet mauris. Non quam lacus suspendisse faucibus interdum posuere lorem.</h6>
        <h6>Arcu bibendum at varius vel pharetra vel turpis nunc eget. Odio morbi quis commodo odio aenean sed adipiscing diam donec. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. </h6>
        </Modal.Body>


        <div className="d-flex justify-content-between align-items-center">
        <button className={styles.btn}  onClick={handleClose}> <BsChevronLeft />Go Back</button>
        <button className={styles.btn2} onClick={handleClose}>Accept Terms & Conditions</button>
        </div>
        </div>

        
      </Modal>
      

    </>
  );
};

export default TermsAnd;