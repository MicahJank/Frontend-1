import React from 'react';

const TicketList = props => {
    //console.log('what is happening', props.studentTickets)
    return (
        <div>
            <p>Hello</p>
            {props.studentTickets.map()}
        </div>
    )
}

export default TicketList;