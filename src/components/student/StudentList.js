import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

import { ContentDiv } from "../../Style/StudentAppStyle";
import { GridDiv } from "../../Style/ContentStyle";
import HelpItem2 from "./StudentItem";


const StudentList = () => {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get("/tickets/open")
        .then(res => {
            console.log("StudentList - Getting response data", res.data);
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
                        <HelpItem2 
                            ticket={ticket}
                            key={ticket.id} 
                        />
                    )} 
                })} 
            </GridDiv>
        </ContentDiv>
    )
}
export default StudentList;

