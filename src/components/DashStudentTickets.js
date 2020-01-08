/**
* This is the helper's homepage
* It will contain a list of open tickets
**/

import React from 'react';
import { Link } from 'react-router-dom';

import StudentNavBar from './Navbar/HelperNavBar';
import HelperList2 from './helper/HelperList2';

function DashStudentTickets() {
  return (
    <div>
      <h1>Student's home page goes here.</h1>
      <Link to="/"><button>Go Back Home</button></Link>
      <StudentNavBar />
      
      <HelperList2 />
    </div>
  );
}

export default DashStudentTickets;

