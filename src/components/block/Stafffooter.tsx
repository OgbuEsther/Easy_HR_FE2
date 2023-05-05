import React from 'react'
import styled from "styled-components"

const Stafffooter = () => {
  return (
      <Container>
          <Right></Right>
          <Mid>
              <Circle>
                  <Big>
                      
                  </Big>
              </Circle>
          </Mid>
          <Left></Left>
      </Container>
  )
}

export default Stafffooter
const Big = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: red;
`
const Circle = styled.div`
    width: 120px;
    height: 120px;
    background-color: #fff;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 40px;
    position: fixed;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
`
const Left = styled.div`
    width: 35%;
    height: 100%;
    /* background-color: red; */
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
`
const Mid = styled.div`
    width: 30%;
    height: 100%;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    position: relative;
`

const Right = styled.div`
    width: 35%;
    height: 100%;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    /* background-color: green; */
`

const Container = styled.div`
    
    display: none;
    
    /* margin-top: 350px; */

    @media screen and (max-width: 500px) {
        display: flex;
        width: 100%;
        height: 90px;
        /* background-color: red; */
        position: absolute;
        bottom: 0;
        position: fixed;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`