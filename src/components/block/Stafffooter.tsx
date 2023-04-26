import React from 'react'
import styled from "styled-components"

const Stafffooter = () => {
  return (
      <Container>
          <Right></Right>
          <Mid>
              <Circle></Circle>
          </Mid>
          <Left></Left>
      </Container>
  )
}

export default Stafffooter
const Circle = styled.div`
    width: 110px;
    height: 110px;
    background-color: #fff;
    border-radius: 100px;
    position: absolute;
    bottom: 60px;
`
const Left = styled.div`
    width: 35%;
    height: 100%;
    background-color: red;
`
const Mid = styled.div`
    width: 30%;
    height: 100%;
    background-color: blue;
    display: flex;
    justify-content: center;
    position: relative;
`

const Right = styled.div`
    width: 35%;
    height: 100%;
    background-color: green;
`

const Container = styled.div`
    
    display: none;
    
    /* margin-top: 350px; */

    @media screen and (max-width: 500px) {
        display: flex;
        width: 100%;
        height: 110px;
        background-color: red;
        position: absolute;
        bottom: 0;
        position: fixed;
    }
`