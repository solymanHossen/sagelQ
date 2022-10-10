
import "../src/App.css"
import CheckEmail from './components/CheckEmail';
import EmailUpdate from './components/EmailUpdate';
import Header from './components/Header';
import Cropping from './components/LogIn/Cropping';
import Login from './components/LogIn/Login';
import SingUp from './components/LogIn/SingUp';
import NewEmail from './components/NewEmail';
import Setting from './components/Setting';
import SideBar from './components/SideBar';
import TermsAnd from './components/TermsAnd';

import UpdateProfile from './components/UpdateProfile';

const App = () => {

  return (

    <div className="container-fluid">

      <Header />
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-10">
          <Setting />
        </div>
      </div>
      <UpdateProfile />
      <NewEmail />
      <CheckEmail />
      <EmailUpdate />
      <TermsAnd />
      <SingUp />
      <Login />
      <Cropping />

    </div>

  );
};

export default App;
