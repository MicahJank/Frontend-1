import styled from 'styled-components';

export const GridDiv = styled.div`
  background-color: #FBFCFD;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  overflow: auto;
  grid-gap: 2%;
  padding: 2%;
  border: solid 1px #423F40;
  grid-auto-flow: dense;
  margin-right: 1%;
`;

export const TicketCard = styled.div`
  background-color: #FEFEFE;  
  border: 1px solid #423F40;
  padding: 5%;
`;


  


