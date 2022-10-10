import React, { useState } from 'react';
import { AiFillCamera, AiOutlineEye, AiOutlineUserAdd } from 'react-icons/ai';
import styles from "../../ModiuleCss/SingUp.module.css"
import logo from "../../Asset/man.jpg"
import { Form } from 'react-bootstrap';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { BsChevronLeft } from 'react-icons/bs';

const SingUp = () => {

  const [file, setFile] = useState(logo);
  console.log(file);
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="container mb-5">


      {/* upload photo */}
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div className={styles.uploadPhoto}>
          <div className={styles.bgUpload}>
            <img src={file} alt="logo" className={styles.imgPostion} />
            <AiFillCamera className={styles.cameraIcons} />
            <input className={styles.custom_file__input} type="file" onChange={handleChange} />
          </div>  
        </div>
        <h3>Upload a photo</h3>
      </div>

      {/* form */}
      


      <div className={styles.mainFormSection}>

        <div className="col-md-5 ">
          <form className="form form-vertical" action="/site/avatar-upload/1" method="post" enctype="multipartform-data">
            {/* form line */}
            <div className="row marginForm ">
              <div className="col-md-6 marginBottomRes">
                <div className="form-group">
                  <input type="email" className="form-control" name="email" required placeholder='first name' />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="password" className="form-control" name="pwd" required placeholder='last name' />
                </div>
              </div>
            </div>

             <div className="col-md-12 ">
              <div className="form-group marginForm">
                <div className={styles.formIconControl}>
                <input type="text" className="form-control formIcon-control" name="pwd" required placeholder='example@gmail.com' />
                <AiOutlineUserAdd className={styles.iconD}/>
                </div>
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="form-group marginForm">
                <div className={styles.formIconControl}>  
                <input type="password" className="form-control " name="pwd" required placeholder='password' />
                <AiOutlineEye className={styles.iconD}/>
                </div>
              </div>
            </div>

            {/* button */}
            <div className="col-md-12 mt-3">
              <button className={styles.singUpBtn}>Sign Up</button>
            </div>
            {/* check box */}
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  className='mt-3'
                  type={type}
                  id={`default-${type}`}
                  label={"I agree to Asili’s Terms of Service"}
                />
              </div>
            ))}
          </form>
        </div>

        {/* right side button */}

        <div className="col-md-5">

          <button className={styles.btnGoogle}>Sign up with Google</button>
          <button className={styles.btnGoogle}>Sign up with Microsoft</button>
          <button className={styles.btnFacebook}><RiFacebookBoxFill />Sign up with Microsoft</button>
        </div>
      </div>
      {/* back btn */}
      <button className={styles.backBtn}><BsChevronLeft/>Back</button>

    </div>
  );
};

export default SingUp;