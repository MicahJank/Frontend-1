/**
* This is the register page.
* After the user completes registration, it should guide them to the login page
**/

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useForm from 'react-hook-form';
import { userRegister } from '../actions/RegisterAction';

function RegisterPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm(); 
  const history = useHistory();
  const onSubmit = data => {
    console.log('showing the login', data);
    dispatch(userRegister(data));
    history.push('/login');
  }

  return (
    <div className="form-body">
      <h1 className="form-h1">Register Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label className="form-label">Email</label>
        <input 
          name="email" 
          ref={register({ required: true })} 
          className="form-input"
        />
        {errors.email && <p className="form-p">You need a proper email to login!</p>}
        <label className="form-label">Password</label>
        <input 
          name="password"
          type="password"
          ref={register({ required: true })}
          className="form-input"
        />
        {errors.password && <p className="form-p">You need a password to login!</p>}
        <input type="submit" value="Register Now!" />
      </form>
      <Link to="/"><button>Go Back Home</button></Link>
    </div>
  );
}

export default RegisterPage;
