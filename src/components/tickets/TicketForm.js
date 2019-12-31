import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import useForm from 'react-hook-form';
import { postTicket } from '../../actions/TicketsAction';

function TicketForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm(); 

    const onSubmit = data => {
        console.log("Starting to submit a ticket", data);
        dispatch(postTicket(data, ()=>history.push('/dashboard')));
    }

    return (
        <div className="form-body"> 
            <h1 className="form-h1">Submit A Ticket</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {/* Submitting a ticket: Title */}
                <label className="form-label">Title</label>
                <input 
                name="title" 
                ref={register({ required: true })} 
                className="form-input"
                />
                {errors.title && <p className="form-p">A title is required!</p>}
                {/* Submitting a ticket: Category */}
                <label className="form-label">Category</label>
                <select name="category_id" ref={register({ required: true })}>
                    <option value="1">Applied Javascript</option>
                    <option value="2">Intro to React</option>
                    <option value="3">HTML Fundamentals</option>
                </select>
                {errors.category && <p className="form-p">Please select a category!</p>}
                {/* Submitting a ticket: Description */}
                <label className="form-label">Description</label>
                <input
                name="description"
                ref={register({ required: true })}
                className="form-input"
                />
                {errors.description && <p className="form-p">Please enter a description.</p>}
                {/* Submitting a ticket: Attempt */}
                <label className="form-label">Attempt</label>
                <input
                name="tried"
                ref={register({ required: true })}
                className="form-input"
                />
                {errors.attempt && <p className="form-p">Tell us if this is your first attempt, second attempt, etc.</p>}
                {/* Submitting the ticket */}
                <input type="submit" />
                <Link to="/dashboard"><button>Go Back</button></Link>
            </form>
        </div>
    );
}

export default TicketForm;