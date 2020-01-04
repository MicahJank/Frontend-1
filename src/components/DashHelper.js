/**
* This is the helper's homepage
* It will contain a list of open tickets
**/

import React from 'react';
import { Link } from 'react-router-dom';
import HelperList from './helper/HelpList';

function DashHelper() {
  return (
    <div>
      <h1>Helper's home page goes here.</h1>
      <Link to="/"><button>Go Back Home</button></Link>
      <HelperList />
    </div>
  );
}

export default DashHelper;
