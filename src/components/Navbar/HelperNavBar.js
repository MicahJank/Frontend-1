import React from 'react';
import { MenuDiv, MenuNav, NavLinks, StyledBtn } from "../../Style/HelperAppStyle";
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
        <StyledBtn onClick={()=>logout()}>Log Out</StyledBtn>
      </MenuNav>    
    </MenuDiv>
  );
}

export default HelperNavBar;