import React from 'react';
import styles from "../ModiuleCss/SearchEmail.module.css"
// import "../Styles/SearchEmail.css"
import { BsChevronDoubleRight, BsSearch } from "react-icons/bs"
import { Dropdown } from 'react-bootstrap';
import {  RiArrowDropRightLine } from "react-icons/ri"

const SearchEmail = () => {
  return (
    <div>
      {/* search content */}
      <div className={styles.searchContentMain} >
    
          <div className={styles.responsiveContent}>

            {/* search */}
            <div>
              <p>Search username or email</p>
              <div className={styles.searchBox}>
                <input type="text" placeholder='Search...' />
                <BsSearch className={styles.searchIcon} />
              </div>
            </div>
            {/* permission */}
            <div >
              <p>Permissions</p>
              <Dropdown className='mt-2 '>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className={styles.dropdownBasic}>

                  <div> All</div>
                  {/* <div><RiArrowDropDownLine /></div> */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* Status */}
            <div >
              <p>Status</p>
              <Dropdown className='mt-2'>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className={styles.dropdownBasic}>

                  <div>All</div>
                  {/* <div><RiArrowDropDownLine /></div> */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* assesments */}
            <div>
              <p>Assessments</p>
              <Dropdown className='mt-2'>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className={styles.dropdownBasic}>
                  <div> All</div>
                  {/* <div><RiArrowDropDownLine /></div> */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>


        {/* profile */}
        <div className={styles.mainProfile2}>
          <div>
        <div className={styles.mainProfile}>
          <div className={styles.circle}></div>
          <div className="d-flex align-items-center gap-2 ">
            <span className={styles.profileText}>
              Open Profile
            </span>
            <span><RiArrowDropRightLine /></span>
          </div>
        </div>
        </div>
         
       
          <div className={styles.newFilter}>
            <span>Filter</span>
            <BsChevronDoubleRight/>
          </div>
        


        </div>

      </div>

      {/* table */}

    </div>
  );
};

export default SearchEmail;