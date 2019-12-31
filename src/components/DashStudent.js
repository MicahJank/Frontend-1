/**
* This is the student's homepage
* What should this page include?
* It should come with a default nav bar and foot bar, and whatever other accessories deemed necessary
* On loading, it should render a list of all tickets currently active under the student's name
* It should also provide a button to open a form, allowing ticket creation
**/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../actions/TicketsAction';
import TicketItem from './tickets/TicketItem';
import axiosWithAuth from '../utils/axiosWithAuth';

function DashStudent() {
  //const dispatch = useDispatch();
  const [tickets, setTickets] = useState([]);
  //const tickets = useSelector(state => state.tickets);
  //const isLoading = useSelector(state => state.isLoading);

  //useEffect(() => {
      //dispatch(getTickets());
      //setTickets(JSON.parse(localStorage.getItem("student_tickets")));
  //}, [dispatch])

  useEffect(() => {
    axiosWithAuth()
      .get("/tickets")
      .then(res => {
        setTickets(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  })

  return (
    <div>
      <h1>Student's homepage goes here.</h1>
      <Link to="/dashboard/post"><button>Post Ticket</button></Link>
      <Link to="/"><button>Go Back Home</button></Link>
      <div className="ticket-display">
        {tickets.map(ticket => {
          return <TicketItem ticket={ticket} key={ticket.id} />
        })}
      </div>
    </div>
  );
}

export default DashStudent;