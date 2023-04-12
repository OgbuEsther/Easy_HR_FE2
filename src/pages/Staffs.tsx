import React from "react";

import styled from "styled-components";


const Staffs = () => {
 

  return (
    <div>
      <Container>
        <Wrapper>
          <Text>Welcome Back ,Sylvia</Text>
          <Main>
            <First>
             
            </First>
            <Second>
          
            </Second>
          </Main>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Staffs;

const Second = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const First = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  flex-wrap: wrap;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Text = styled.div`
  width: 100%;
  /* height: 10%; */
  /* background-color: blue; */
  color: #1d1d41;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 15px;
`;

const Wrapper = styled.div`
  width: 95%;
  /* height: 95%; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: calc(100vw - 270px);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #ecf2ff92; */
  background-color: deeppink;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100vw;
    background-color: #f1f4fb92;
  }
`;
