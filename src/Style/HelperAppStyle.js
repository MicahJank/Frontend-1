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
  background-color: white;
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
  justify-content:left;
  padding-top:.4%;
  margin-left:-1%;
`;

// Logo
export const LogoImg = styled.img`
  width: 3rem;
  margin: 10% 0 0 25%;
`;

export const PageTitle = styled.h1`
  line-height: 2rem;
  color: white;
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
  color: white;
  display: block;
  margin 5%;
    &:hover {
      cursor: pointer;
      color: black;
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


export const StyledBtn = styled.button`

  border: none;
  background-color: #423F40;
  color: white;
  font-size: 1rem;
  margin-top: 2%;
  font-size: 1.5rem;
  border-radius: 8px;
  margin-left: 5%;
  padding: 5%;
  width:50%;
  box-shadow: 0px 10px 14px -7px #276873;
	background:linear-gradient(to bottom, #423F40; 5%, #408c99 100%);
  line-height:1.3rem;

`;

export const H2 = styled.h2`

    color:white;
    max-height:20%;
    text-align:center;

`;