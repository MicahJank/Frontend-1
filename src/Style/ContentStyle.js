import styled from 'styled-components';

// styling for tickets diplayed in content div (grid div 3/4)

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
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    &: hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      cursor: grab;
  }
`;


  


