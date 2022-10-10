import React from 'react';
import { Form } from 'react-bootstrap';
import { BsChevronLeft } from 'react-icons/bs';
import { FaLock, FaUserFriends } from 'react-icons/fa';
import styles from "../ModiuleCss/NewEmail.module.css"

const NewEmail = () => {
  return (
    <div className="container pt-5">
      <div className={styles.falock}>
        <FaLock className={styles.falockIcont} />
      </div>
      <div className="styles.contentForm">
        <div className="text-center mb-2">
          <p className='mt-2'>Type in an new email</p>
          <p className='mt-2'>No worries. We will send <br /> your reset instructions</p>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          < Form.Group className=" d-flex align-items-center position-relative ">
            <Form.Control id="disabledTextInput" placeholder="your@gmail.com " />
            <FaUserFriends className={styles.iconAbsulute} />
          </Form.Group>
        </div>
      </div>
      <div className={styles.emailVarification}>
        <div >
          <button className={styles.btn}> <BsChevronLeft />Go Back</button>
        </div>
        <button className={styles.btnsev}>Send Email Verification Link</button>
      </div>
    </div>
  );
};

export default NewEmail;