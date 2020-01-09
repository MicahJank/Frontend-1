/**
* This is the home page for our app. When user comes to this page, it should tell them about our product.
* This page will provide a link to a login page and a register page.
**/

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../img/homepage-splash.jpg';

const MainContainer = styled.div`

 
  

`;

const MenuContainer = styled.div`



`;

const H1 = styled.h1`
    text-decoration:none;
    color: #B91432;
    padding-left:4%;

`;

const BackgroundImgContainer = styled.div`
  max-width: 100%;
  height: 97vh;
  background-image: url(${img});

`;

const CTAContainer = styled.div`

  width:50%;
  height:100%;
  background-color: rgb(0,0,0,0.8);

`;

const CTAContent = styled.div`

  padding-top: 16%;
  padding-left: 30%;

`;

const Btn = styled.button`

  box-shadow: 0px 10px 14px -7px #276873;
  background:linear-gradient(to bottom, #B91432; 5%, #408c99 100%);
  background-color:#B91432;
  border-radius:8px;
  cursor:pointer;
  color:#ffffff;
  font-family:Trebuchet MS;
  font-size:20px;
  font-weight:bold;
  padding:13px 32px;
  text-decoration:none;
  text-shadow:0px 1px 0px #3d768a;
  width: 60%;

`;

const H2 = styled.h2`

  color:white;
  font-size: 3.1rem;
  width:100%;
  text-align: center;
  font-family:Trebuchet MS;
  margin-left: -20%;

`;

const H3 = styled.h3`

  color: white;
  width: 60%;
  text-align: center;
  font-size: 1.3rem;
  padding-bottom: 5%;
  font-family:Trebuchet MS;

`;



function HomePage() {
  return (
    <MainContainer>
      <H1>
          DevDesk Queue
      </H1>
      <BackgroundImgContainer>
        <CTAContainer> 
          <CTAContent>
            <H2>DevDesk Solution Provider</H2>
            <H3>Are you having an issue's on your project and can not resolve the issue on your own?</H3>
            <Link to="/login"><Btn>Login</Btn></Link>
            <br />
            <br />
            <Link to="/register"><Btn>Register</Btn></Link>
          </CTAContent>
        </CTAContainer>
      </BackgroundImgContainer>
      
      
     
    </MainContainer>
  );
}

export default HomePage;
