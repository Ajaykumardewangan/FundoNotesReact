import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login';
import Registration from './pages/registration';

import ForgetPassword from './pages/forgetpassword';
import ResetPassword from './pages/resetpassword'
import Sidenav from './pages/sidenav';
import Header from './pages/header';
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
          
          <Route path='/header' component={Header} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;