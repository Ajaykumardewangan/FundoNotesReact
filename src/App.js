import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login';
import Registration from './pages/registration';
import NoteDialogBox from './pages/notedialogbox'
import ForgetPassword from './pages/forgetpassword';
import ResetPassword from './pages/resetpassword'
import Sidenav from './pages/sidenav';
import Header from './pages/header';
import DisplayNote from './pages/displaynote';
import Property from './pages/properties';
import CreateNote from './pages/createnote';
import Color from './pages/color';
 import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/registration' component={Registration} />
          <Route path='/forgetpassword' component={ForgetPassword} />
          <Route path='/resetpassword/:token' component={ResetPassword} />
          <Route path='/sidenav' component={Sidenav} />
          <Route path='/displaynote' component={DisplayNote} />
          <Route path='/property' component={Property} />
          <Route path='/createnote' component={CreateNote}/>
          <Route path='/header' component={Header} />
          <Route path='/notedialogbox' component={NoteDialogBox} />
          <Route path='/color' component={Color} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;