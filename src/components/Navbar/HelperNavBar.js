import React from 'react';
import { Link, NavLink, useHistory } from "react-router-dom";
import { MenuDiv, MenuNav } from "../../Style/AppStyle"

function HelperNavBar() {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/login')
  }

  return (
    <MenuDiv>
      <MenuNav>  
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/dashboard/tickets">
          Ticket Pool
        </NavLink>
        <button onClick={()=>logout()}>Log Out</button>
        <Link to="/"><button>Go Back Home</button></Link>
      </MenuNav>    
    </MenuDiv>
  );
}

export default HelperNavBar;