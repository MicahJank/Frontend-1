import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../../actions/TicketsAction';
import TicketItem from './TicketItem';

const TicketList = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.TicketsReducer.tickets);
    const isLoading = useSelector(state => state.TicketsReducer.isLoading);

    useEffect(() => {
        dispatch(getTickets());
    }, [dispatch])

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {!isLoading && tickets && tickets.map(ticket => (
                <TicketItem ticket={ticket} key={ticket.id} />
            ))}
        </div>
    )
}

export default TicketList;