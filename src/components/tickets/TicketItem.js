import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useForm from 'react-hook-form';
import { editTicket, deleteTicket } from '../../actions/TicketsAction';

const TicketItem = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [editing, setEditing] = useState(false);
    const { register, handleSubmit, errors } = useForm(); 
    const [id] = useState(`${props.ticket.id}`)

    const toggleEdit = () => {
        setEditing(!editing);
    }

    const toggleDelete = () => {
        dispatch(deleteTicket(id, ()=>history.push('/dashboard')));
    }

    const onSubmit = data => {
        console.log("Starting to submit a ticket", data);
        dispatch(editTicket(data, id));
        toggleEdit();
    }

    return (
        <div>
            {!editing ? 
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: "5px", border: "1px solid red", width: "60%"}}>
                    <h3>{props.ticket.title}</h3>
                    <h5>{props.ticket.tried}</h5>
                    <p>{props.ticket.description}</p>
                    <div>
                        <button onClick={()=>toggleEdit()}>Edit</button>
                        <button onClick={()=>toggleDelete()}>Delete</button>
                    </div>
                </div> :
                <div> 
                    <h1>Edit Ticket</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Submitting a ticket: Title */}
                        <label>Title</label>
                        <input 
                            name="title" 
                            ref={register({ required: true })} 
                            defaultValue={props.ticket.title}
                        />
                        {errors.title && <p className="form-p">A title is required!</p>}
                        {/* Submitting a ticket: Category */}
                        <label>Category</label>
                        <select name="category_id" ref={register({ required: true })} defaultValue={props.ticket.category_id}>
                            <option value="1">Applied Javascript</option>
                            <option value="2">Intro to React</option>
                            <option value="3">HTML Fundamentals</option>
                        </select>
                        {errors.category && <p className="form-p">Please select a category!</p>}
                        {/* Submitting a ticket: Description */}
                        <label>Description</label>
                        <input
                            name="description"
                            ref={register({ required: true })}
                            defaultValue={props.ticket.description}
                        />
                        {errors.description && <p className="form-p">Please enter a description.</p>}
                        {/* Submitting a ticket: Attempt */}
                        <label>Attempt</label>
                        <input
                            name="tried"
                            ref={register({ required: true })}
                            defaultValue={props.ticket.tried}
                        />
                        {errors.attempt && <p className="form-p">Tell us if this is your first attempt, second attempt, etc.</p>}
                        {/* Submitting the ticket */}
                        <input type="submit" />
                    </form>
                </div>
            }
        </div>
    )
}

export default TicketItem;