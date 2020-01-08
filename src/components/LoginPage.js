/**
* This is the login page.
* It will take the user to the appropriate dashboard page (DashStudent or DashHelper)
**/

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useForm from 'react-hook-form';
import { userLogin } from '../actions/LoginAction';
import styled from 'styled-components';

const H2Wrapper = styled.h2`
    
  text-decoration:none;
  color: #B91432;
  padding-left:4%;

`;

const H1Wrapper = styled.h1`

 text-align:center;
 width:30%;
`;

const MainContainer = styled.div`

 
  background:#fff;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction:column;

`;

const Input = styled.input`
  
  color:#403866;
  line-height: 1.2;
  font-size: 20px;
  display: block;
  width: 100%;
  background:transparent;
  height: 62px;
  padding: 0 20px 0 38px;
  border:none;


`;

const FocusSpan = styled.span`


`;

const InputWrap = styled.div`
  width: 30%;
  position: relative;
  background-color: #e6e6e6;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 0;
  box-sizing: border-box;
  margin-bottom:3%;

`;

const FormBody = styled.div`

  padding-left: 36%;

`;

const SubmitBtn = styled.input`

  box-shadow: 0px 10px 14px -7px #276873;
	background:linear-gradient(to bottom, #B91432;5%, #408c99 100%);
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
  width: 30%;

`;

const HomeBtn = styled.button`

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
  width: 30%;

`;

const ErrorP = styled.p`

  background-color:white;
  color: red;
  text-align:center;
  width:30%;
`;

function LoginPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm(); 
  const history = useHistory();
  const onSubmit = data => {
    dispatch(userLogin(data, ()=>history.push('/dashboard')));
  }

  return (
    <MainContainer>
        <H2Wrapper>DevDesk Queue</H2Wrapper>
        <FormBody>
          <H1Wrapper className="form-h1">Login</H1Wrapper>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <InputWrap>
              <Input 
                name="email" 
                ref={register({ required: true })} 
                className="form-input"
                placeholder="Email"
              />
              <FocusSpan/>
            </InputWrap>
            {errors.email && <ErrorP>You need a proper email to login!</ErrorP>}
              {/*
                To Do: Add specific requirements for password
              */}
            
            {/*<label className="form-label">Password</label>*/}
            <InputWrap>
            <Input 
              name="password"
              type="password"
              ref={register({ required: true })}
              className="form-input"
              placeholder="Password"
            />
            </InputWrap>
            {errors.password && <ErrorP>You need a password to login!</ErrorP>}
            <SubmitBtn type="submit"  />

          </form>
          <Link to="/"><HomeBtn>Go Back Home</HomeBtn></Link>
        </FormBody>
    </MainContainer>
    
  );
}

export default LoginPage;