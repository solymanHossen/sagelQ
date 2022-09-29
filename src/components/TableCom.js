import React from 'react';
import { Dropdown, Table } from 'react-bootstrap';
// import { RiArrowDropDownLine } from 'react-icons/ri';
import styles from "../ModiuleCss/TableCom.module.css"
import media2 from "../Asset/media2.svg"
import media from "../Asset/media.svg"
import { BsThreeDotsVertical } from 'react-icons/bs';

const TableCom = () => {
  return (
    <div className={styles.tableSection}>
      <p className='mb-2'>Showing: 34 results</p>
      <Table>
        <thead className={styles.tableHead}>
          <tr className={styles.displayBlockNone2}>
            <th>Name</th>
            <th>Email Address</th>
            <th>Permissions</th>
            <th>Assessments</th>
          </tr>
          {/* responsive */}
          <tr className={styles.displayBlockNoneHead}>
            <th>Name & EmailAddress</th>
            <th>Permissions & Assessments</th>
          </tr>
        </thead>
        <tbody >
          <tr className={styles.displayBlockNone2}>
           <td><div className='d-flex align-items-center gap-2'><div className={styles.circle}></div> <span className={styles.nameFont}> Rashad Howard </span></div></td>
            <td> <div> rashad@dla.mil </div></td>
            <td>
              <Dropdown className={styles.testContainer}>
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
            </td>
            <td >
              <div className='d-flex justify-content-between align-items-center'>
                <div className='relative'>
                  <img src={media2} alt="media" />
                  <img src={media} alt="media" className={styles.media} />
                </div>
                <BsThreeDotsVertical />
              </div>
            </td>
          </tr>
        </tbody>

        <tbody >
          <tr  className={styles.displayBlockNone2}>
           <td><div className='d-flex align-items-center gap-2'><div className={styles.circle}></div><span className={styles.nameFont}>Rashad Howard</span> </div></td>
            <td> <div>  rashad@dla.mil </div></td>
            <td>
              <Dropdown className={styles.testContainer}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className={styles.dropdownBasic}>

                  <div> Super Admin</div>
                  {/* <div><RiArrowDropDownLine /></div> */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
            <td >
              <div className='d-flex justify-content-between align-items-center'>
                <div className='relative'>
                  <img src={media2} alt="media" />
                  <img src={media} alt="media" className={styles.media} />
                </div>
                <BsThreeDotsVertical />
              </div>
            </td>
          </tr>
        </tbody>
        <tbody >
          <tr className={styles.displayBlockNone2}>
           <td><div className='d-flex align-items-center gap-2'><div className={styles.circle}></div><span className={styles.nameFont} > Dante Smoke</span></div></td>
            <td> <div> rashad@dla.mil </div></td>
            <td>
              <Dropdown className={styles.testContainer}>
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
            </td>
            <td >
              <div className='d-flex justify-content-between align-items-center'>
                <div className='relative'>
                  <img src={media2} alt="media" />
                  <img src={media} alt="media" className={styles.media} />
                </div>
                <BsThreeDotsVertical />
              </div>
            </td>
          </tr>
          {/* responsive */}
          <tr className={styles.displayBlockNone}>
          <td><div className='d-flex  gap-2'><div className={styles.circle}></div>
          
          <div className='d-flex flex-column'>
            <span className={styles.nameFont}>Rashad Howard</span>
          <div>rashad@dla.mil</div>
          </div>
           </div></td>

           <td>
              <Dropdown className={styles.testContainer}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className={styles.dropdownBasic}>

                  <div> Super Admin</div>
                  {/* <div><RiArrowDropDownLine /></div> */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>



        </tbody>

       

      


      </Table>

    </div>
  );
};

export default TableCom;