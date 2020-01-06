import React, { useState, useEffect } from "react";
import axiosWithAuth from '../../utils/axiosWithAuth';

import CurrentHelpItem from "./CurrentHelpItem";

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
  <div>
      <h2>Welcome to Your Current Tickets!</h2>
      {tickets.map(ticket => {                
          if (ticket.helper_id === 1) {
          return (
              <CurrentHelpItem 
                  ticket={ticket} 
                  key={ticket.id} 
              />
          )} 
      })}
  </div>
)


}


export default CurrentHelpList;