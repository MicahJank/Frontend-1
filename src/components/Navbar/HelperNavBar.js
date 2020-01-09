import React from 'react';
import { MenuDiv, MenuNav, NavLinks } from "../../Style/AppStyle";

function HelperNavBar() {
  return (
    <MenuDiv>
      <MenuNav>  
        <NavLinks href="/dashboard">Dashboard</NavLinks>
        <NavLinks href="/dashboard/tickets">
          Ticket Pool
        </NavLinks>
        <NavLinks>Log Out</NavLinks>
        <NavLinks to="/">Go Back Home</NavLinks>
      </MenuNav>    
    </MenuDiv>
  );
}

export default HelperNavBar;