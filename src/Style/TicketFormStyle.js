import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;
    width:70%;
    background-color:white;
    padding-left: 10%;
    padding-right:10%;

`;

export const Form = styled.form`

    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    background-color:white;
    padding-bottom: 5%;
    

`;

export const Input = styled.input`

    width:60%;
    height: 50px;
    border-radius: 9px;
    font-family:Trebuchet MS;
	font-size:20px;
	font-weight:bold;
    padding:.5%;
    margin-bottom: 3%;
    box-shadow: 0px 10px 14px -7px #276873;

`;

export const Select = styled.select`

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

export const SubmitInput = styled.input`

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

export const ErrorP = styled.p`

  background-color:white;
  color: red;
  text-align:center;
  width:30%;
`;

export const AttemptInput = styled.textarea`

    height: 200px;
    width:60%;
    font-family:Trebuchet MS;
	font-size:20px;
	font-weight:bold;
    border-radius: 9px;
    padding:.5%;
    resize:none;
    margin-bottom: 3%;
    box-shadow: 0px 10px 14px -7px #276873;
    

`;

export const DescriptionInput = styled.textarea`

    height: 100px;
    width:60%;
    font-family:Trebuchet MS;
	font-size:20px;
	font-weight:bold;
    border-radius: 9px;
    padding:.5%;
    resize:none;
    margin-bottom: 3%;
    box-shadow: 0px 10px 14px -7px #276873;
    

`;


export const StyledLink = styled(Link)`

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

export const Label = styled.label`

    font-size: 2rem;
    font-weight:bold;
    width:28%;

`;

export const CategoryWrapper = styled.div`

    display:flex;
    flex-direction:row;
    width:60%;
    justify-content: space-between;
    margin-bottom: 3%;

`;

export const ResolvedButton = styled.button`

    box-shadow: 0px 10px 14px -7px #276873;
	background:linear-gradient(to bottom, #00b200; 5%, #408c99 100%);
	background-color:#00b200;
	border-radius:8px;
	cursor:pointer;
	color:white;
	font-family:Trebuchet MS;
	font-weight:bold;
    padding:5%;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
    margin-bottom:3%;

`;

export const ThrowButton = styled.button`

    width:55%;
    box-shadow: 0px 10px 14px -7px #276873;
    background:linear-gradient(to bottom, #00b200; 5%, #408c99 100%);
    background-color:#B91432;
    border-radius:8px;
    cursor:pointer;
    color:white;
    font-family:Trebuchet MS;
    font-weight:bold;
    padding:5%;
    text-decoration:none;
    text-shadow:0px 1px 0px #3d768a;
    margin-bottom:3%;

`;

export const DeleteButton = styled.button`

    min-width:45%;
    box-shadow: 0px 10px 14px -7px #276873;
    background:linear-gradient(to bottom, #00b200; 5%, #408c99 100%);
    background-color:#B91432;
    border-radius:8px;
    cursor:pointer;
    color:white;
    font-family:Trebuchet MS;
    font-weight:bold;
    padding:5%;
    text-decoration:none;
    text-shadow:0px 1px 0px #3d768a;
    margin-bottom:3%;

`;

export const EditButton = styled.button`

    min-width:45%;
    box-shadow: 0px 10px 14px -7px #276873;
    background:linear-gradient(to bottom, #00b200; 5%, #408c99 100%);
    background-color:#00b200;
    border-radius:8px;
    cursor:pointer;
    color:white;
    font-family:Trebuchet MS;
    font-weight:bold;
    padding:5%;
    text-decoration:none;
    text-shadow:0px 1px 0px #3d768a;
    margin-bottom:3%;

`;

export const ButtonDiv = styled.div`

    display:flex;
    justify-content:space-around;

`;
