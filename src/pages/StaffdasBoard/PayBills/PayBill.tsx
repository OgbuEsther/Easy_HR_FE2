import React from "react";
import { FcCheckmark } from "react-icons/fc"
import {GrFormClose} from "react-icons/gr"
import styled from "styled-components";



const PayBills = () => {
 
  return (
    <div>
      <Container>
        <Wrapper>
        <Word>
        PayBills <br />
           <span>
          <a href="/staffdashboard">
          Staff Dashboard
          </a>
           / PayBills
           </span>
          </Word>

      
         
        </Wrapper>
      </Container>
    </div>
  );
};

export default PayBills;

const Word = styled.div`
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
margin-bottom: 30px;
margin-top: 30px;
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
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
  padding-top: 90px;
  padding-left: 30px;
  padding-right: 30px;
`;

const Container = styled.div`
  width: calc(100vw - 220px);
  background-color: #F5F7FA;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
