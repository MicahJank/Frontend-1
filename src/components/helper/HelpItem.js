import React from "react";
import { TicketCard } from "../../Style/ContentStyle";
import styled from 'styled-components';
import {ResolvedButton} from '../../Style/TicketFormStyle';

function HelpItem(props) {
  
  let status 
    if(props.resolved) {
      status = "resolved"
      } else {
      status = "Not Resolved"
    }
 
  return (
    <TicketCard>
      <h2>#{props.ticket.id}</h2>
      <h4>{`${props.ticket.student_first_name} ${props.ticket.student_last_name}`}</h4>
      <h4>Category: {props.ticket.category}</h4>
      <p>Description: {props.ticket.description}</p>
      <p>What I've Tried: {props.ticket.tried}</p>
      <h5>Status: {status}</h5>
      <ResolvedButton>Accept</ResolvedButton>
    </TicketCard>
  )
}

export default HelpItem