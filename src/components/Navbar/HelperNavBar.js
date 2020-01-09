import React from 'react';
import { MenuDiv, MenuNav, NavLinks } from "../../Style/AppStyle";
import { useHistory } from "react-router-dom";

function HelperNavBar() {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/login')
  }

  return (
    <MenuDiv>
      <MenuNav>  
        <NavLinks href="/dashboard">Dashboard</NavLinks>
        <NavLinks href="/dashboard/tickets">
          Ticket Pool
        </NavLinks>
        <button onClick={()=>logout()}>Log Out</button>
      </MenuNav>    
    </MenuDiv>
  );
}

export default HelperNavBar;