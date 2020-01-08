import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from 'react-hook-form';
import { acceptHelper, openHelper, resolveHelper } from '../../actions/HelperAction';

function HelpItem(props) {
  
    let status 
     if(props.resolved) {
       status = "resolved"
       } else {
       status = "Not Resolved"
     }
 
   // program the accepted button to add helper props for own ticket list
 
     return (
     <div>
       <h2>Ticket ID#: {props.ticket.id}</h2>
       <p>Name: {props.ticket.student_first_name}</p>
       <p>Email: {props.ticket.email}</p>
       <p>Category: {props.ticket.category}</p>
       <p>Description: {props.ticket.description}</p>
       <p>What I've Tried: {props.ticket.tried}</p>
       <p>Status: {status}</p>
       <button>Accepted</button>
     </div>
   )
 }

export default HelpItem;
