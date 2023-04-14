import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/easy.png"

const Verification = () => {
  return (
      <Container>
          <Box>
              <Img src={img} />
              <Card></Card>
          </Box>
    </Container>
  )
}

export default Verification
const Card = styled.div`
    
`
const Img = styled.img`
    width: 110px;
`

const Box = styled.div`
    display: flex;
    width: 300px;
    flex-direction: column;
    background-color: #fff;
    padding-top: 25px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 5px;
    align-items: center;
`


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d6d6d67f;
    flex-direction: column;
`