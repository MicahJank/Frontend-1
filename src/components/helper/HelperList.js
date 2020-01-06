import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

import HelpItem from "./HelpItem";


const HelperList = () => {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get("/tickets")
        .then(res => {
            console.log("Getting response data", res.data);
            setTickets(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <div>
            <h2>Welcome to random places</h2>
            {tickets.map(ticket => {                
                if (!ticket.status) {
                return (
                    <HelpItem 
                        ticket={ticket} 
                        key={ticket.id} 
                    />
                )}  
            })}
        </div>
    )
}

export default HelperList;

