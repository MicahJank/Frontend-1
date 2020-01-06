import React from "react";

function HelpItem(props) {
  
   let status 
    if(props.ticket.status) {
      status = "resolved"
      } else {
      status = "Not Resolved"
    }

    return (
    <div>
      <h2>Ticket ID#: {props.ticket.id}</h2>
      <p>Name: {props.ticket.student_first_name, props.ticket.student_first_name}</p>
      <p>Email: {props.ticket.email}</p>
      <p>Category: {props.ticket.category_id}</p>
      <p>Description: {props.ticket.description}</p>
      <p>What I've Tried: {props.ticket.tried}</p>
      <p>Status: {status}</p>
    </div>
  )
}

export default HelpItem