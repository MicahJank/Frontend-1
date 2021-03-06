/**
* This is the student's homepage
* What should this page include?
* It should come with a default nav bar and foot bar, and whatever other accessories deemed necessary
* On loading, it should render a list of all tickets currently active under the student's name
* It should also provide a button to open a form, allowing ticket creation
**/

import React from 'react';
//import { useStore } from 'react-redux';

import Header from "./Header/Header";
import TicketList from './tickets/TicketList';
import StudentNavBar from './Navbar/StudentNavBar';
import Footer from "./Footer/Footer";

import { ContainerDiv, H2 } from "../Style/HelperAppStyle";



function DashStudent() {
  //const store = useStore();
  //console.log('The store have states', store.getState().TicketsReducer);
  
  return (
    <ContainerDiv>
      <Header />
      <StudentNavBar />
      <TicketList />
      <Footer />
    </ContainerDiv>
  );
}

export default DashStudent;