import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import HelpItem from "./HelpItem";

import { ContentDiv,H2 } from "../../Style/HelperAppStyle"
import { GridDiv } from "../../Style/ContentStyle";



const HelperList = () => {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get("/tickets/open")
        .then(res => {
            console.log("HelperList - Getting response data", res.data);
            setTickets(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <ContentDiv>
            <H2> Ticket Pool </H2>
            <GridDiv>            
                {tickets.map(ticket => {
                    if (!ticket.status) {
                    return (
                        <HelpItem 
                            ticket={ticket} 
                            key={ticket.id} 
                        />
                    )} 
                })} 
            </GridDiv>
        </ContentDiv>
    )
}

export default HelperList;

