/**
* This is the login page.
* It will take the user to the appropriate dashboard page (DashStudent or DashHelper)
**/

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useForm from 'react-hook-form';
import { userLogin } from '../actions/LoginAction';

function LoginPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm(); 
  const history = useHistory();
  const onSubmit = data => {
    dispatch(userLogin(data, ()=>history.push('/dashboard')));
  }

  return (
    <div className="form-body">
      <h1 className="form-h1">Login Page</h1>
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
        <input type="submit" />
      </form>
      <Link to="/"><button>Go Back Home</button></Link>
    </div>
  );
}

export default LoginPage;