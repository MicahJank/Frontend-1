import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import useForm from 'react-hook-form';
import { postTicket } from '../../actions/TicketsAction';
import axiosWithAuth from '../../utils/axiosWithAuth';
import styled from 'styled-components';

const MainContainer = styled.div`

    display:flex;
    flex-direction: column;
    height: 80%;
    align-items: center;
    width:70%;

`;

const Form = styled.form`

    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    

`;

const Input = styled.input`

    width:50%;
    height: 50px;
    border-radius: 9px;
    font-family:Trebuchet MS;
	font-size:20px;
	font-weight:bold;
    padding:.5%;
    margin-bottom: 3%;
    box-shadow: 0px 10px 14px -7px #276873;

`;

const Select = styled.select`

    width:70%;
    box-shadow: 0px 10px 14px -7px #276873;
	background:linear-gradient(to bottom, #00b200; 5%, #408c99 100%);
	border-radius:8px;
	cursor:pointer;
	color:black;
	font-family:Trebuchet MS;
	font-size:20px;
	font-weight:bold;
	padding:13px 32px;
	text-decoration:none;

`;

const SubmitInput = styled.input`

    width:30%;
    box-shadow: 0px 10px 14px -7px #276873;
	background:linear-gradient(to bottom, #00b200; 5%, #408c99 100%);
	background-color:#00b200;
	border-radius:8px;
	cursor:pointer;
	color:white;
	font-family:Trebuchet MS;
	font-size:20px;
	font-weight:bold;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
    margin-bottom:3%;

`;

const ErrorP = styled.p`

  background-color:white;
  color: red;
  text-align:center;
  width:30%;
`;

const AttemptInput = styled.textarea`

    height: 200px;
    width:50%;
    font-family:Trebuchet MS;
	font-size:20px;
	font-weight:bold;
    border-radius: 9px;
    padding:.5%;
    resize:none;
    margin-bottom: 3%;
    box-shadow: 0px 10px 14px -7px #276873;
    

`;

const BackButton = styled.button`

    box-shadow: 0px 10px 14px -7px #276873;
	background:linear-gradient(to bottom, #B91432; 5%, #408c99 100%);
	background-color:#B91432;
	border-radius:8px;
	cursor:pointer;
	color:#ffffff;
	font-family:Trebuchet MS;
	font-size:20px;
	font-weight:bold;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
    width:30%;

`;

const DescriptionInput = styled.textarea`

    height: 100px;
    width:50%;
    font-family:Trebuchet MS;
	font-size:20px;
	font-weight:bold;
    border-radius: 9px;
    padding:.5%;
    resize:none;
    margin-bottom: 3%;
    box-shadow: 0px 10px 14px -7px #276873;
    

`;

const BackLink = styled.a`

    width:100%;

`;

const StyledLink = styled(Link)`

    width:25%;
    text-align:center;
    box-shadow: 0px 10px 14px -7px #276873;
	background:linear-gradient(to bottom, #B91432; 5%, #408c99 100%);
	background-color:#B91432;
	border-radius:8px;
	cursor:pointer;
	color:#ffffff;
	font-family:Trebuchet MS;
	font-size:20px;
	font-weight:bold;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;

`;

const Label = styled.label`

    font-size: 2rem;
    font-weight:bold;
    width:28%;

`;

const CategoryWrapper = styled.div`

    display:flex;
    flex-direction:row;
    width:50%;
    justify-content: space-between;
    margin-bottom: 3%;

`;

function TicketForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm(); 
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

    const onSubmit = data => {
        console.log("Starting to submit a ticket", data);
        dispatch(postTicket(data, ()=>history.push('/dashboard')));
    }

    return (
        <MainContainer> 
            <h1 className="form-h1">Submit a Ticket</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {/* Submitting a ticket: Title */}
                <Input 
                    name="title" 
                    ref={register({ required: true })} 
                    className="form-input"
                    placeholder="Title"
                />
                {errors.title && <ErrorP>A title is required!</ErrorP>}
                {/* Submitting a ticket: Category */}
                <CategoryWrapper>
                <Label className="form-label">Category:</Label>
                    <Select name="category_id" ref={register({ required: true })}>
                        {categories.map(category => <option value={category.id}>{category.name}</option>)}
                    </Select>
                    {errors.category && <ErrorP>Please select a category!</ErrorP>}
                </CategoryWrapper>
                {/* Submitting a ticket: Description */}
                <DescriptionInput
                    name="description"
                    ref={register({ required: true })}
                    className="form-input"
                    placeholder="Description"
                />
                {errors.description && <ErrorP>Please enter a description.</ErrorP>}
                {/* Submitting a ticket: Attempt */}
                <AttemptInput
                    name="tried"
                    ref={register({ required: true })}
                    className="form-input"
                    placeholder="Attempt"
                />
                {errors.attempt && <ErrorP>Tell us if this is your first attempt, second attempt, etc.</ErrorP>}
                {/* Submitting the ticket */}
                <SubmitInput type="submit" />
                <StyledLink to="/dashboard">Go Back</StyledLink>
            </Form>
        </MainContainer>
    );
}

export default TicketForm;