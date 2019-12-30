/**
* This is the student's homepage
* What should this page include?
* It should come with a default nav bar and foot bar, and whatever other accessories deemed necessary
* On loading, it should render a list of all tickets currently active under the student's name
* It should also provide a button to open a form, allowing ticket creation
**/

import React from 'react';
import { Link } from 'react-router-dom';
import TicketList from './tickets/TicketList';

function DashStudent() {
  return (
    <div>
      <h1>Student's homepage goes here.</h1>
      <Link to="/dashboard/post"><button>Post Ticket</button></Link>
      <Link to="/"><button>Go Back Home</button></Link>
      <div className="ticket-display">
        <TicketList />
      </div>
    </div>
  );
}

export default DashStudent;