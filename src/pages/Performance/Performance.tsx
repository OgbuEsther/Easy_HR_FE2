import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { RotatingLines } from 'react-loader-spinner'



const Transaction = () => {

  const [show1, setShow1] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

   const Toggle1 = () => {
    setShow1(true)
  }

  useEffect(() => {
   setTimeout(() => {
      setIsLoading(true)
    },2000)

  }, [])
 
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
          <Pending onClick={Toggle1}><h3>Set Goals</h3><span>{isLoading ? (1) : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"/>}</span>
          </Pending>

          <Pending><h3>Rate Staffs</h3><span>{isLoading ? "" : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}</span>
          </Pending>
          </Top>
          
          <Textplace>
            <Textarea placeholder="Set Goals.....">

            </Textarea>
          </Textplace>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Transaction;
const Textarea = styled.textarea`
  width: 700px;
  height: 150px;
  border: 1px solid lightgray;
  resize: none;
  padding: 12px;
  border-radius: 10px;
`
const Textplace = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`
const Pending = styled.div`
  display: flex;
  margin: 18px;
  cursor: pointer;
  h3{
    font-weight: 500;
  font-size: 19px;
  color: #6c757d;
  }
  span{
    margin-left: 7px;
    font-weight: 500;
  font-size: 19px;
  color: #6c757d;
  }
`
const Top = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid lightgray;
`
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

const Container = styled.div`
  width: calc(100vw - 220px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  overflow: hidden;
  margin-top: 20px;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;
