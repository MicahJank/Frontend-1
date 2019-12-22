/**
* This is the register page.
* After the user completes registration, it should guide them to the login page
**/

import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div>
      <h1>Register Page</h1>
      <Link to="/"><button>Go Back Home</button></Link>
    </div>
  );
}

export default RegisterPage;
