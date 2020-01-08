/**
* This is the helper's homepage
* It will contain a list of open tickets
**/

import React from 'react';

import HelperNavBar from './Navbar/HelperNavBar';
import CurrentHelpList from "./helper/CurrentHelpList";

import { TopDiv, PageTitle } from "../HelperStyle"

function DashHelper() {
  return (
    <div>
      <TopDiv>
        <PageTitle>DashBoard</PageTitle>
      </TopDiv>      
      <HelperNavBar />
      <CurrentHelpList />      
    </div>
  );
}

export default DashHelper;
