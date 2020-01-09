/**
* This is the helper's homepage
* It will contain a list of open tickets
**/

import React from 'react';

import HelperNavBar from './Navbar/HelperNavBar';
import CurrentHelpList from "./helper/CurrentHelpList";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import { ContainerDiv } from "../Style/AppStyle"

function DashHelper() {
  return (
    <ContainerDiv>
      <Header />
      <HelperNavBar />
      <CurrentHelpList />
      <Footer />      
    </ContainerDiv>
  );
}

export default DashHelper;
