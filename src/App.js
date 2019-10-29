import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login';
import Registration from './pages/registration';
import Dashboard from './components/dashboard';
import ForgetPassword from './pages/forgetpassword';
import ResetPassword from './pages/resetpassword'
 import './App.css';
import TemporaryDrawer from './components/drawer';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/registration' component={Registration} />
          <Route path='/forgetpassword' component={ForgetPassword} />
          <Route path='/resetpassword/:token' component={ResetPassword} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/drawer' component={TemporaryDrawer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;