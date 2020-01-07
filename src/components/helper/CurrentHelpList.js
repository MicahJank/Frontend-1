import React, { useState, useEffect } from "react";
import axiosWithAuth from '../../utils/axiosWithAuth';

import CurrentHelpItem from "./CurrentHelpItem";

import { BackGroundDiv, GridDiv } from "../../HelperStyle";

function CurrentHelpList() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get("/tickets")
    .then(res => {
        console.log("Getting CURRENT HELP LIST response data", res.data);
        setTickets(res.data)
    })
    .catch(err => {
        console.log("Getting CURRENT HELP LIST response data", err);
    })
}, [])

  return(
    <BackGroundDiv>
    
        {tickets.map(ticket => {               
            return (
              <GridDiv>
                <CurrentHelpItem 
                    ticket={ticket} 
                    key={ticket.id} 
                />
              </GridDiv>
            )}
        )}        
    </BackGroundDiv>
  )
}

export default CurrentHelpList;