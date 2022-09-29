import React from 'react';

import styles from "../ModiuleCss/Header.module.css"
import dot from "../Asset/dot.png"
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';
const Header = () => {
  return (
    <div className='container-fluid'>
    {/* header */}
    <div className={styles.padding}>
  <div className="row">
    {/* logo section */}
    
    <div className="col-2 col-md-2 col-sm-6">
      <div className={styles.borderSection}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={dot} alt="logo" />
          <div>SageIQ</div>
        </div>
        <FaAngleDoubleLeft className={styles.displayNone}/>
      </div>
      </div>
    </div>
   {/* right header section */}
    <div className="col-10 col-md-10 col-sm-6">
      <div className={styles.borderHeader}>
    <div className="d-flex d-flex justify-content-between align-items-center alignItem">
     <div className="d-flex align-items-center gap-2 ">
      <span className={styles.displayNone}>User Management</span>
      <AiOutlineRight className={styles.displayNone}/>
      <span>Defense Logistics Agency</span>
     </div>
      <div className={styles.inviteNum}>
        <AiOutlinePlus /><span>Invite Members</span>
      </div>
    </div>
    </div>
   
    </div>


  </div>
  </div>
  </div>
  );
};

export default Header;