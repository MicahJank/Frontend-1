/**
* This is the helper's homepage
* It will contain a list of open tickets
**/

import React from 'react';
import { Link } from 'react-router-dom';

import HelperNavBar from './Navbar/HelperNavBar';
import CurrentHelpList from "./helper/CurrentHelpList";

function DashHelper() {
  return (
    <div>
      <h1>Helper's DashBoard</h1>
      <Link to="/"><button>Go Back Home</button></Link>
      <HelperNavBar />
      <CurrentHelpList />      
    </div>
  );
}

export default DashHelper;
