import React from 'react'
import styled from "styled-components"
import { Fade } from 'react-awesome-reveal'
import img from "../../Assets/dollar.png"

const Plan = () => {
  return (
      <Container>
          <Wrapper>
              <Fade direction='up'>
                  <Par>WE DO MORE FOR YOUR WORLD</Par>
                  <Bolder>All-in-one payroll and HR your business</Bolder>
              </Fade>
              <Hold>
                  <Circlehold>
                      <Circle>
                      <Img src={img} />
                      </Circle>
                      <Pay>Payroll</Pay>
                  </Circlehold>
                  <Circle></Circle>
                  <Circle></Circle>
                  <Circle></Circle>
               </Hold>
          </Wrapper>
    </Container>
  )
}

export default Plan
const Pay = styled.div`
    font-size: 16px;
    margin-top: 20px;
    margin: 0;
    color: #001328;
    font-weight: 800;
`
const Circlehold = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Img = styled.img`
    
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    :hover{
        background-color: #dc3545;
    }
`
const Hold = styled.div`
    width: 100%;
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
`
const Bolder = styled.h2`
    margin: 0;
    color: #001328;
    font-weight: 800;
    font-size: 40px;
    letter-spacing: -0.03em;
    width: 500px;
    text-align: center;
`
const Par = styled.div`
    display: block;
    text-transform: uppercase;
    color: #0057B3;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: .04em;
    margin-bottom: 5px;
`
const Wrapper = styled.div`
    width: 91.666667%;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    align-items: center;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`