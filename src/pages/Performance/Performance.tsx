import React from "react";
import styled from "styled-components";



const Transaction = () => {
 
  return (
    <div>
      <Container>
        
      </Container>
    </div>
  );
};

export default Transaction;

const Container = styled.div`
  width: calc(100vw - 220px);
  height: 100vh;
  background-color: red;
  padding-top: 100px;

  @media screen and (max-width: 900px) {
    width: 100vw;
  }
`;
