import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

import { GridDiv } from "../../Style/HelperStyle";
import HelpItem2 from "./HelpItem2";


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
        <GridDiv>            
            {tickets.map(ticket => {       
                if (!ticket.status) {
                return (
                    <HelpItem2 
                        ticket={ticket}
                        key={ticket.id} 
                    />
                )} 
            })} 
        </GridDiv>
    )
}
export default HelperList;

