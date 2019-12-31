import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../../actions/TicketsAction';
import TicketItem from './TicketItem';

const TicketList = () => {
    const dispatch = useDispatch();
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        dispatch(getTickets());
        setTickets(JSON.parse(localStorage.getItem("student_tickets")));
    }, [])

    return (
        <div>
            {tickets.length>0 && tickets.map(ticket => {
                return(<TicketItem ticket={ticket} key={ticket.id} />);
            })}
        </div>
    )
}

export default TicketList;