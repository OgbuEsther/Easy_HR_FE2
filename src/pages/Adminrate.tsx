import React from 'react'
import styled from 'styled-components'
import { RotatingLines } from 'react-loader-spinner'
// import Inputdate from "../Inputdate/Inputdate";

const Adminrate = () => {
  return (
      <Container>
          <Wrapper>
              <Top>
                  <Pending><h3>Very Poor</h3><Box></Box> = <h3>1 - 25</h3> </Pending>
                <Pending><h3>Very Poor</h3><Box2></Box2> = <h3>1 - 25</h3> </Pending>
                <Pending><h3>Very Poor</h3><Box3></Box3> = <h3>1 - 25</h3> </Pending>
                <Pending><h3>Very Poor</h3><Box4></Box4> = <h3>1 - 25</h3> </Pending>
              </Top>
          </Wrapper>
    </Container>
  )
}

export default Adminrate
const Box4 = styled.div`
    width: 25px;
    height: 25px;
    background-color: green;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 3px;
`
const Box3 = styled.div`
    width: 25px;
    height: 25px;
    background-color: blue;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 3px;
`
const Box2 = styled.div`
    width: 25px;
    height: 25px;
    background-color: yellow;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 3px;
`

const Box = styled.div`
    width: 25px;
    height: 25px;
    background-color: red;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 3px;
`

const Pending = styled.div`
  display: flex;
  margin: 18px;
  cursor: pointer;
  h3{
    font-weight: 500;
  font-size: 16px;
  color: #6c757d;
  margin-left: 5px;
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
  /* padding-top: 13px; */
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