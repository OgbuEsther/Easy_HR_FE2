import React from 'react'
import styled from 'styled-components'
import { RotatingLines } from 'react-loader-spinner'
// import Inputdate from "../Inputdate/Inputdate";

const Adminrate = () => {
  return (
      <Container>
          <Wrapper>
              <Top>
                  <Pending><h3>Set Goals</h3><span></span>
                </Pending>

          <Pending><h3>Rate Staffs</h3><span></span>
          </Pending>
              </Top>
          </Wrapper>
    </Container>
  )
}

export default Adminrate

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
  margin-bottom: 15px;
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
const Container = styled.div`
    width: 100%;
    display: flex;
`