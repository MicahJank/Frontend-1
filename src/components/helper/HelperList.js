import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import HelpItem from "./HelpItem";

import { ContentDiv} from "../../Style/AppStyle"
import { GridDiv } from "../../Style/HelperStyle";



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

