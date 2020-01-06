import React from "react";

function HelpItem(props) {
  
  return (
  <div>
    <h2>Ticket ID#: {props.ticket.id}</h2>
    <p>Name: {props.ticket.student_first_name, props.ticket.student_first_name}</p>
    <p>Email: {props.ticket.email}</p>
    <p>Category: {props.ticket.category}</p>
    <p>Description: {props.ticket.description}</p>
    <p>What I've Tried: {props.ticket.tried}</p>
    <button>Resolved</button>
    <button>Throw Back</button>

  </div>
  )
}

export default HelpItem