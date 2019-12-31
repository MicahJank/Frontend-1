import React from 'react';

const TicketItem = props => {

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: "5px", border: "1px solid red", width: "60%"}}>
            <h3>{props.ticket.title}</h3>
            <h5>{props.ticket.tried}</h5>
            <p>{props.ticket.description}</p>
        </div>
    )
}

export default TicketItem;