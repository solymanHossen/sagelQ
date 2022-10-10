import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';
import styles from '../ModiuleCss/CheckEmail.module.css'

const CheckEmail = () => {
  return (
    <div className='container pt-5 pb-5'>
      <div className={styles.falock}>
        <FaLock className={styles.falockIcont} />
      </div>
      <div className="text-center">
      <h2>check your email</h2>
        <p className='mt-2 mb-2'>We sent a password reset link to </p>
        <h4>example@gmail.com</h4>
        <h6 className='mt-5 text-info'>Didn’t get a link? <a href="#">Resend reset link?</a></h6>
      </div>
      <button className={styles.btn}> <BsChevronLeft />Go Back</button>
    </div>
  );
};

export default CheckEmail;