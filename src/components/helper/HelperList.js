import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

import { BackGroundDiv, GridDiv } from "../../HelperStyle";
import HelpItem from "./HelpItem";


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
        <BackGroundDiv>
            <h2>Welcome to random places</h2>
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
        </BackGroundDiv>
    )
}

export default HelperList;

