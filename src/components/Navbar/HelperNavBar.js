import React from 'react';
import { NavLink } from "react-router-dom";

function HelperNavBar() {
  return (
    <div>
      <nav>
        <div className="nav-links">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/dashboard/tickets">Ticket Pool</NavLink>
          <button>Log Out</button>  
        </div>
      </nav>    
    </div>
  );
}

export default HelperNavBar;