import React from 'react';
import { NavLink } from "react-router-dom";
import {MainContainer,NavLinks,StyledBtn,Nav} from './StudentNavStyle';


function StudentNavBar() {
  const logout = () => {
    localStorage.clear();
  }

  return (
    <MainContainer>
      <Nav>
        <div className="nav-links">
          <NavLinks href="/dashboard">Dashboard</NavLinks>
          <NavLinks  href="/dashboard/post">Create Help Ticket</NavLinks>
          <NavLinks  href="/dashboard/tickets">OpenTickets</NavLinks>
          <StyledBtn onClick={logout()}>Log Out</StyledBtn>  
        </div>
      </Nav>    
    </MainContainer>
  );
}

export default StudentNavBar;