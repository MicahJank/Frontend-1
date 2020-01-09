import React from "react";
import { HeaderDiv, PageTitle, HeaderSubDiv1, HeaderSubDiv2, LogoImg, NavLinks } from "../../Style/HelperAppStyle";

import LogoImage from "../../images/logo-trans.png";

function Header() {
  return (
    <HeaderDiv>
      <HeaderSubDiv1>
        <NavLinks href="https://lambdaschool.com/" target="__blank">
          <LogoImg src={LogoImage}></LogoImg>
        </NavLinks>
      </HeaderSubDiv1>   
      <HeaderSubDiv2>
        <PageTitle>DevDesk Queue</PageTitle> 
      </HeaderSubDiv2>       
    </HeaderDiv>
  )
}

export default Header;