import React from 'react';
import { AiOutlineEye, AiOutlineUserAdd } from 'react-icons/ai';
import { RiFacebookBoxFill } from 'react-icons/ri';
import styles from '../../ModiuleCss/LogIn.module.css'


const Login = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className={styles.headColor}>Login to your account</h1>
        <p>Increase your program’s rate of success like our <br /> countless number of clients</p>
      </div>
      <div className={styles.mainFormSection}>

        <div className="col-md-5 ">
          <form className="form form-vertical" action="/site/avatar-upload/1" method="post" enctype="multipartform-data">

            {/* sing in form */}
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
            <div className="col-md-12 ">
              <button className={styles.singUpBtn}>Sign In</button>
            </div>

          </form>
        </div>

        {/* right side button */}

        <div className="col-md-5">

          <button className={styles.btnGoogle}>Sign up with Google</button>
          <button className={styles.btnGoogle}>Sign up with Microsoft</button>
          <button className={styles.btnFacebook}><RiFacebookBoxFill />Sign up with Microsoft</button>
        </div>
      </div>
      <div>Don’t have an account? <a href="#">Create new account</a></div>
     <div className="text-center mt-4"><a href="#">Forgot your password?</a></div>
    </div>
  );
};

export default Login;