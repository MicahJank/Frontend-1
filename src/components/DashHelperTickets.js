/**
* This is the helper's homepage
* It will contain a list of open tickets
**/

import React from 'react';

import Header from "./Header/Header"
import HelperNavBar from './Navbar/HelperNavBar';
import HelperList from './helper/HelperList';
import Footer from "./Footer/Footer";

import { ContainerDiv } from "../Style/HelperAppStyle"

function DashHelperTickets() {
  return (
    <ContainerDiv>
      <Header />
      <HelperNavBar />
      <HelperList />
      <Footer />
    </ContainerDiv>
  );
}

export default DashHelperTickets;

