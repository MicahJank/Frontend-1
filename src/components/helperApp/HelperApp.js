/**
* This is the helper's homepage
* It will contain a list of open tickets
**/

import React from 'react';
import { Link, Switch } from 'react-router-dom';
import PrivateRoute from '../../utils/PrivateRoute';

import HelperNavBar from './helpercomponents/HelperNavBar';
import CurrentHelpList from "./helpercomponents/CurrentHelpList";
import HelperList from './helpercomponents/HelperList';

function HelperApp() {
  return (
    <div>
      <h1>Helper's DashBoard</h1>
      <div>
        <p>LOGO</p>
        <HelperNavBar />
        <Link to="/"><button>Go Back Home</button></Link>
      </div>

      <div>   
        <Switch>
          <PrivateRoute path="/dashboard/tickets">
            <HelperList />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <CurrentHelpList /> 
          </PrivateRoute>
        </Switch>  
      </div>



    </div>
  );
}

export default HelperApp;
