/**
* This is the helper's homepage
* It will contain a list of open tickets
**/

import React from 'react';
import { Link } from 'react-router-dom';

import HelperNavBar from './Navbar/HelperNavBar';
import HelperList from './helper/HelperList';

function DashHelperTickets() {
  return (
    <div>
      <h1>Helper's home page goes here.</h1>
      <Link to="/"><button>Go Back Home</button></Link>
      <HelperNavBar />
      <HelperList />
    </div>
  );
}

export default DashHelperTickets;

