import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { RotatingLines } from 'react-loader-spinner'

const Leave = () => {

    const [show1, setShow1] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
   setTimeout(() => {
      setIsLoading(true)
    },5000)

  }, [])


  return (
    <Container>
      <Wrapper>
        <Top>
          <Pending><h3>Pending Leave</h3><span>{isLoading ? (1) : <RotatingLines  visible={true}
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="40"/>}</span>
          </Pending>
          <Pending><h3>Approved Leave</h3></Pending>
          <Pending><h3>Rejected Leave</h3></Pending>
          <Pending><h3>All Leave</h3><span>{isLoading ? (1) : <RotatingLines  visible={true}
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="40"/>}</span></Pending>
        </Top>
      </Wrapper>
    </Container>
  )
}

export default Leave
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
`;

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
