/**
* This is the student's homepage
* It will contain a list of student's tickets
**/

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTickets } from '../actions/TicketsAction';

function DashStudent() {
  const dispatch = useDispatch();

  const getData = () => {
    console.log("Staring");
    dispatch(getTickets());
  }

  return (
    <div>
      <h1>Student's homepage goes here.</h1>
      <button onClick={getData}>Click Me</button>
      <Link to="/"><button>Go Back Home</button></Link>
    </div>
  );
}

export default DashStudent;
