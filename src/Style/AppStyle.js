import styled from "styled-components";

// Master Div with CSS Grid
export const ContainerDiv = styled.div`
  background-color: #B91432;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2%;
  width: 90%;
  margin: auto;
`;

// Display Header/Top Div (Div 1)
export const HeaderDiv = styled.div`
  grid-column: 1 / -1 ;
  background-color: #423F40;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const HeaderSubDiv1 = styled.div`
  grid-column: 1 / 2 ;
  background-color: #423F40;
  maxwidth: 100%;
`;

export const HeaderSubDiv2 = styled.div`
  grid-column: 2 / -1 ;  
  background-color: #423F40;
  display: flex;
  justify-content: center;
`;

// Logo
export const LogoImg = styled.img`
  width: 3rem;
  margin: 10% 0 0 25%;
`;

export const PageTitle = styled.h1`
  line-height: 2rem;
  color: #E6A522;
  text-align: center;
`;

// Display Menu (Div 2)
export const MenuDiv = styled.div`
  grid-column: 1 / 3;
  display: flex;
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%; 
  justify-content: flex-start;
  margin-left: 5%;
`;

export const NavLinks = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: #E6A522;
  display: block;
  margin 5%;
    &:hover {
      cursor: pointer;
      color: white;
    }
`;

// Display Content (Div 3)
export const ContentDiv = styled.div`
  grid-column: 3 / -1;

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