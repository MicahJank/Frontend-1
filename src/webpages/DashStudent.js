/**
* This is the student's homepage
* It will contain a list of student's tickets
**/

import React from 'react';
import { Link } from 'react-router-dom';

function DashStudent() {
  return (
    <div>
      <h1>Student's homepage goes here.</h1>
      <Link to="/"><button>Go Back Home</button></Link>
    </div>
  );
}

export default DashStudent;
