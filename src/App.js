import React from 'react';
import "../src/App.css"
import Header from './components/Header';
import Setting from './components/Setting';
import SideBar from './components/SideBar';

const App = () => {
  return (
 <div className="container-fluid">
  <Header/>
       <div className="row">
      <div className="col-md-2">
        <SideBar/>
      </div>
      <div className="col-md-10">
       <Setting/>
      </div>
    </div>
 </div>
   
  );
};

export default App;
