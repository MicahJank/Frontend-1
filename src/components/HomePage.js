/**
* This is the home page for our app. When user comes to this page, it should tell them about our product.
* This page will provide a link to a login page and a register page.
**/

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>This is the home page of DevDesk!</h1>
      <Link to="/login"><button>Take me to the login page~ </button></Link>
      <br />
      <br />
      <Link to="/register"><button>Register at here</button></Link>
      <h3>To-Do: Design This Page~~~</h3>
    </div>
  );
}

export default HomePage;
