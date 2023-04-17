import React from "react";

import styled from "styled-components";



const Attendance = () => {
 
  return (
    <div>
      <Container>
        <Wrapper>
        <Text>
            Attendance <br />
           <span>
          <a href="/dashboard">
          Dashboard
          </a>
           / Transaction
           </span>
          </Text>

       
         

        </Wrapper>
      </Container>
    </div>
  );
};

export default Attendance;


const Text = styled.div`
font-weight: 500;
font-size: 26px;
color: rgb(31,31,31);
background-color: rgba(0,0,0,0);
line-height: 31.2px;
text-decoration: none solid rgb(31,31,31);
text-align: start;
margin-left: 10px;
display: flex;
/* align-items: center; */
flex-direction: column;
justify-content: flex-start;
/* background-color: greenyellow; */
span{
  color: rgb(51,51,51);
  background-color: rgba(0,0,0,0);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: normal;
  font-weight: 500;
  text-decoration: none solid rgb(51,51,51);
  text-align: left;
}

a{
  text-decoration: none;

  :hover{
    color: black;
  }
}
`


const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
  padding-top: 90px;
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-direction: column; */

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: calc(100vw - 220px);
  background-color: #F5F7FA;
  overflow: hidden;
  display: flex;
  align-items: center;


  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;
