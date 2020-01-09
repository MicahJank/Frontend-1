/**
* This is the helper's homepage
* It will contain a list of open tickets
**/

import React from 'react';

import Header from "./Header/Header";
import StudentNavBar from './Navbar/StudentNavBar';
import StudentList from './student/StudentList';
import Footer from "./Footer/Footer";

import { ContainerDiv } from "../Style/StudentAppStyle"

function DashStudentTickets() {
  return (
    <ContainerDiv>
      <Header />
      <StudentNavBar />
      <StudentList />
      <Footer />
    </ContainerDiv>
  );
}

export default DashStudentTickets;

