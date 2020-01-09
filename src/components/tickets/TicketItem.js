import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useForm from 'react-hook-form';
import { editTicket, deleteTicket } from '../../actions/TicketsAction';
import { TicketCard } from "../../Style/ContentStyle"
import axiosWithAuth from '../../utils/axiosWithAuth';

const TicketItem = props => {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const { register, handleSubmit, errors } = useForm(); 
    const [id] = useState(`${props.ticket.id}`)

    const toggleEdit = () => {
        setEditing(!editing);
    }

    const toggleDelete = () => {
        dispatch(deleteTicket(id));
    }

    const onSubmit = data => {
        console.log("Starting to submit a ticket", data);
        dispatch(editTicket(data, id));
        toggleEdit();
    }

    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get("/categories")
        .then(res => {
            console.log(`categories`, res.data);
            setCategories(res.data)
        })
        .catch(err => {
            console.log(`error`, err);
        })
    }, [])

    return (
        <TicketCard>
            {!editing ? 
                <div>
                    <h3>{props.ticket.title}</h3>
                    <h3>Category:</h3>
                    <p>{props.ticket.category}</p>
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
                        <select name="category_id" ref={register({ required: true })}>
                            {categories.map(category => <option value={category.id}>{category.name}</option>)}
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
        </TicketCard>
    )
}

export default TicketItem;