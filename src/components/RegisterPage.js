/**
* This is the register page.
* After the user completes registration, it should guide them to the login page
* After registration, should go back to login page
**/

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useForm from 'react-hook-form';
import { userRegister } from '../actions/RegisterAction';
import {MainContainer,H1Wrapper,H2Wrapper,H2Link,FormBody,RoleLabel,Select,Option,InputWrap,Input,ErrorP,SubmitBtn,HomeBtn} from './LoginStyle';



function RegisterPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm(); 
  const history = useHistory();
  const onSubmit = async data => {
    console.log('showing the login', data);
    await dispatch(userRegister(data));
    history.push('/login');
  }

  return (
    <MainContainer>
      <H2Wrapper><H2Link href="/">DevDesk Queue</H2Link></H2Wrapper>
      <FormBody>
        <H1Wrapper>Register</H1Wrapper>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <RoleLabel className="form-label">Role</RoleLabel>
          <Select name="role_id" ref={register}>
            <Option value="1">Student</Option>
            <Option value="2">Helper</Option>
          </Select>
          <InputWrap>
            <Input 
              name="first_name" 
              ref={register({ required: true })} 
              className="form-input"
              placeholder="First Name"
            />
          </InputWrap>
          {errors.first_name && <ErrorP>Enter your first name.</ErrorP>}
          <InputWrap>
            <Input 
              name="last_name" 
              ref={register({ required: true })} 
              className="form-input"
              placeholder="Last Name"
            />
          </InputWrap>
          {errors.last_name && <ErrorP>Enter your last name.</ErrorP>}
          <InputWrap>
            <Input 
              name="email" 
              type="email"
              ref={register({ required: true })} 
              className="form-input"
              placeholder="Email"
            />
          </InputWrap>
          {errors.email && <ErrorP>Enter a proper email.</ErrorP>}
          <InputWrap>
            <Input 
              name="password"
              type="password"
              ref={register({ 
                required: true,
                minLength: {
                  value: 6,
                  message: "Password too short!"
                },
                pattern: {
                  value: /[A-Z]{1,12}[0-9]{1,12}[`~!@#$%^&*()_=<+>?=/.,]{1,12}$/i,
                  message: "Password must have at least 6 characters, including at least 1 letter, 1 digit, and 1 special character."
                }
              })}
              className="form-input"
              placeholder="Password"
            />
          </InputWrap>
          {errors.password && <ErrorP>{errors.password.message}</ErrorP>}
          <SubmitBtn type="submit" value="Register Now!" />
        </form>
        <br/>
        <Link to="/"><HomeBtn>Go Back Home</HomeBtn></Link>
      </FormBody>
    </MainContainer>
  );
}

export default RegisterPage;