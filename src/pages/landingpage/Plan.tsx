import React from 'react'
import styled from "styled-components"
import { Fade } from 'react-awesome-reveal'

const Plan = () => {
  return (
      <Container>
          <Wrapper>
              <Fade direction='up'>
                  <Par>WE DO MORE FOR YOUR WORLD</Par>
                  <Bolder>All-in-one payroll and HR your business</Bolder>
              </Fade>
          </Wrapper>
    </Container>
  )
}

export default Plan
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