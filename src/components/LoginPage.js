/**
* This is the login page.
* It will take the user to the appropriate dashboard page (DashStudent or DashHelper)
**/

import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/"><button>Go Back Home</button></Link>
    </div>
  );
}

export default LoginPage;
