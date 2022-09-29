
// import { useState } from 'react';

import React from 'react';

import { MdKeyboardArrowDown, MdDashboardCustomize, MdOutlineSpaceDashboard } from "react-icons/md"
import { TbGridDots } from "react-icons/tb"
import { BiRightArrow } from "react-icons/bi"
import styles from "../ModiuleCss/SideBar.module.css"
import rect from "../Asset/Rectangle 4.png"



const SideBar = () => {

  return (
    <>

      <div className={styles.mainSidebar}>
        <div className={styles.sidebarBorder}>
          {/* <div className={styles.sidebarContent} >
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex gap-2'>
                <img src={dot} alt="img1" />
                <div className={styles.logoImg}>
                  SageIQ
                </div>
              </div>
              <div>
                <BsChevronDoubleLeft className={styles.doubleArraw} />
              </div>
            </div>
          </div> */}

          {/* kent devis */}
          <div className={styles.mainKent}>
            <div>
              <img src={rect} alt="rect" />
            </div>
            <div>
              <p className={styles.davisFont}>Kent Davis</p>
              <p className={styles.defense}>Defense Logistics...</p>
            </div>

            <div>
              <MdKeyboardArrowDown />
            </div>
          </div>

          {/* protfolio */}
          <div className={styles.protfolioAll}>
            <p className={styles.titleColor}>Portfolio</p>
            <div className={styles.pProtfolio}>
              <TbGridDots /><span>Programs</span>
            </div>
            <div className={styles.allCardStyle}>
              <MdDashboardCustomize /><span className='mx-2'>Dashboard</span>
            </div>
          </div>


          {/* assig */}
          <div className={styles.protfolioAll}>
            <p className={styles.titleColor}>Assessments</p>
            <div className={styles.pProtfolio}>
              <BiRightArrow /><span>PPQ Assessment</span>
            </div>
            <div className={styles.allCardStyle}>
              <MdOutlineSpaceDashboard /><span className='mx-2'>Engagement Interview</span>
            </div>
          </div>

          {/* application */}


          <div className={styles.protfolioAll}>
            <p className={styles.titleColor}>Application</p>
            <div className={styles.pProtfolio}>
              <TbGridDots /><span>Notifications</span>
            </div>
            <div className={styles.pProtfolio}>
              <MdDashboardCustomize /><span>Settings</span>
            </div>
            <div className={styles.pProtfolio}>
              <MdDashboardCustomize /><span>Logout</span>
            </div>
          </div>

        </div>


      </div>

    </>

  );
};

export default SideBar;