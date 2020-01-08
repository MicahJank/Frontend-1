import React, { useState, useEffect } from "react";
import axiosWithAuth from '../../utils/axiosWithAuth';
import CurrentHelpItem from "./CurrentHelpItem";

import { ContentDiv} from "../../Style/AppStyle"

import { GridDiv } from "../../Style/HelperStyle";

function CurrentHelpList() {
  const [tickets, setTickets] = useState([]);

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
}, []);

  return(
    <ContentDiv>
      <GridDiv>
        {tickets.map(ticket => {         
          return (
            <CurrentHelpItem 
                ticket={ticket} 
                key={ticket.id} 
            />
          )}
        )} 
      </GridDiv> 
    </ContentDiv>     
  );
}

export default CurrentHelpList;