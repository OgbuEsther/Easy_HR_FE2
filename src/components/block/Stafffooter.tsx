import React from 'react'
import styled from "styled-components"

const Stafffooter = () => {
  return (
      <Container>
          <Circle>djjdjdjdjd</Circle>
      </Container>
  )
}

export default Stafffooter
const Circle = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background-color: #fff;
    position: absolute;
    top: 0;
`

const Container = styled.div`
    width: 100%;
    height: 120px;
    background-color: red;
    display: flex;
    position: fixed;
    /* position: absolute; */
    margin-top: 240px;
`