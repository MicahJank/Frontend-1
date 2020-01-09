import styled from "styled-components";
import { NavLink } from 'react-router-dom';

// Master Div with CSS Grid
export const ContainerDiv = styled.div`
  background-color: #B91432;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 2%;
  

`;

// Display Header/Top Div (Div 1)
export const HeaderDiv = styled.div`
  grid-column: 2 / -1 ;
  background-color: #423F40;
  border: solid 1px #423F40;
`;

export const LogoDiv = styled.div`
  grid-column: 1 / 2 ;
  background-color: #FEFEFE;
`;

export const PageTitle = styled.h1`
  line-height: 4rem;
  color: #FFFFFF;
  text-align: center;
  
`;

// Display Menu (Div 2)
export const MenuDiv = styled.div`
  grid-column: 1 / 2;
  display: flex;
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  padding: 5% 0;
`;

// Display Content (Div 3)
export const ContentDiv = styled.div`
  grid-column: 2 / -1;

`;

// Footer (Div4)
export const FooterDiv = styled.div`
  grid-column: 1 / -1;  
  background-color: #423F40;
  display: flex;
  justify-content: center;
`;

export const FooterA = styled.a`
  line-height: 4rem;
  color: #FEFEFE;
  margin: 0 5%;
`;