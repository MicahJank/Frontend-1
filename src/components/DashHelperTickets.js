/**
* This is the helper's homepage
* It will contain a list of open tickets
**/

import React from 'react';


import HelperNavBar from './Navbar/HelperNavBar';
import HelperList from './helper/HelperList';

import { TopDiv, PageTitle } from "../HelperStyle"

function DashHelperTickets() {
  return (
    <div>
      <TopDiv>
        <PageTitle>Ticket Pool
        </PageTitle>        
      </TopDiv>
      
      <HelperNavBar />
      <HelperList />
    </div>
  );
}

export default DashHelperTickets;

