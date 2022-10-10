import React from 'react';
import { FaLock } from 'react-icons/fa';
import styles from "../ModiuleCss/EmailUpdate.module.css"

const EmailUpdate = () => {
  return (
    <div>
        <div className='container pt-5 pb-5'>
      <div className={styles.falock}>
        <FaLock className={styles.falockIcont} />
      </div>
      <div className="text-center">
      <h2>Email has been updated!</h2>
        <p className='mt-2 mb-2'>Your password has been reset! Please click continue  to <br /> close this window. </p>
       
      </div>
      <div className="d-flex justify-content-center mt-5">
      <button className={styles.btn}>Continue</button>
      </div>
    </div>
    </div>
  );
};

export default EmailUpdate;