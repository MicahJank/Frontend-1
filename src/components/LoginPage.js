/**
* This is the login page.
* It will take the user to the appropriate dashboard page (DashStudent or DashHelper)
**/

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useForm from 'react-hook-form';
import { userLogin } from '../actions/LoginAction';
import {MainContainer,H1Wrapper,H2Wrapper,H2Link,FormBody,FocusSpan,InputWrap,Input,ErrorP,SubmitBtn,HomeBtn} from './LoginStyle';

function LoginPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm(); 
  const history = useHistory();
  const onSubmit = data => {
    dispatch(userLogin(data, ()=>history.push('/dashboard')));
  }

  return (
    <MainContainer>
        <H2Wrapper><H2Link href="/">DevDesk Queue</H2Link></H2Wrapper>
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
            <SubmitBtn type="submit" name="Login" />

          </form>
          <br/>
          <Link to="/"><HomeBtn>Go Back Home</HomeBtn></Link>
        </FormBody>
    </MainContainer>
    
  );
}

export default LoginPage;