import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { MenuDiv, MenuNav, NavLinkS } from "../../Style/AppStyle"

function HelperNavBar() {
  return (
    <MenuDiv>
      <MenuNav>  
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/dashboard/tickets">
          Ticket Pool
        </NavLink>
        <button>Log Out</button>
        <Link to="/"><button>Go Back Home</button></Link>
      </MenuNav>    
    </MenuDiv>
  );
}

export default HelperNavBar;