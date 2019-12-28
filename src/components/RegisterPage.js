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
    <div className="form-body">
      <h1 className="form-h1">Register Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label className="form-label">Role</label>
        <select name="role_id" ref={register}>
          <option value="1">Student</option>
          <option value="2">Helper</option>
        </select>
        <label className="form-label">First Name</label>
        <input 
          name="first_name" 
          ref={register({ required: true })} 
          className="form-input"
        />
        {errors.first_name && <p className="form-p">Enter your first name.</p>}
        <label className="form-label">Last Name</label>
        <input 
          name="last_name" 
          ref={register({ required: true })} 
          className="form-input"
        />
        {errors.last_name && <p className="form-p">Enter your last name.</p>}
        <label className="form-label">Email</label>
        <input 
          name="email" 
          type="email"
          ref={register({ required: true })} 
          className="form-input"
        />
        {errors.email && <p className="form-p">Enter a proper email.</p>}
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
