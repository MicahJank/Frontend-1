import React from 'react';
import { NavLink } from "react-router-dom";


function StudentNavBar() {
  return (
    <div>
      <nav>
        <div className="nav-links">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/dashboard/tickets">Ticket Pool</NavLink>

          <NavLink to="/dashboard/post"><button>Post Ticket</button></NavLink>
          <NavLink to="/"><button>Go Back Home</button></NavLink>

          <button>Log Out</button>  
        </div>
      </nav>    
    </div>
  );
}

export default StudentNavBar;