import React from 'react';
import styles from "../ModiuleCss/UpdateProfile.module.css"
import img from "../Asset/media.svg"
import { Button, Form } from 'react-bootstrap';
import { FaUserFriends } from 'react-icons/fa';
import { MdOutlineDownloadDone } from 'react-icons/md';


const UpdateProfile = () => {

  return (
    <div className='mt-5'>
      <div className="container">
        <div className={styles.pMainSection}>
          <div className={styles.imgSection}>
            {/* <input type='file' onchange="readURL(event)" />
            <img id="blah" /> */}

            <span className='text-center'> Update Profile Picture</span>
          </div>

          <div className="mt-4">
            Kent Davis
          </div>
        </div>
        {/* form */}

        <Form className='mt-5'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              < Form.Group className=" d-flex align-items-center position-relative ">
                <Form.Control id="disabledTextInput" placeholder="input your email " />
                <FaUserFriends className={styles.iconAbsulute} />
              </Form.Group>
              <MdOutlineDownloadDone className={styles.doneIcon} />
            </div>
            <button className={styles.buttonD}>Update email</button>
          </div>
          <div className='d-flex justify-content-between align-items-center mt-3'>
            <div className='d-flex align-items-center'>
              < Form.Group className=" d-flex align-items-center position-relative ">
                <Form.Control id="disabledTextInput" placeholder="Disabled input " />
                <FaUserFriends className={styles.iconAbsulute} />
              </Form.Group>
              <MdOutlineDownloadDone className={styles.doneIcon} />
            </div>
            <button className={styles.buttonD}>Update email</button>
          </div>

          <p className='mt-5'>Account Removal</p>
          <p className='mt-1'>deleting your account means youe ccount will no longer exist. This cannot be undone.</p>
          <Button type="submit" className='mt-5 bg-danger mb-5'>Delete Account</Button>
        </Form>

        <p className='mb-1'>Notifications</p>
        <p className='mb-2'>Adjust the frequency you recieve notifications and where you get them</p>
        <div className="d-flex justify-content-between align-items-center pt-3 pb-3 border-top border-bottom mb-3">
          <span> Recieve Notifications via email</span>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
            />
          </Form>
        </div>
        <div className="d-flex justify-content-between align-items-center  pb-3  border-bottom mb-3">
          <span> Recieve Notifications via email</span>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
            />
          </Form>
        </div>


      </div>
    </div>
  );
};

export default UpdateProfile;