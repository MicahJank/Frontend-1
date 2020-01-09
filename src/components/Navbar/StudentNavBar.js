import React from 'react';
import { useHistory } from "react-router-dom";

import { MenuDiv, MenuNav, NavLinks, StyledBtn} from "../../Style/HelperAppStyle";



function StudentNavBar() {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/login')
  }

  return (
    <MenuDiv>
      <MenuNav>
          <NavLinks href="/dashboard">Dashboard</NavLinks>
          <NavLinks  href="/dashboard/tickets">Open Tickets</NavLinks>
          <NavLinks  href="/dashboard/post">New Ticket</NavLinks>          
          <StyledBtn onClick={()=>logout()}>Log Out</StyledBtn>  
      </MenuNav>    
    </MenuDiv>
  );
}

export default StudentNavBar;