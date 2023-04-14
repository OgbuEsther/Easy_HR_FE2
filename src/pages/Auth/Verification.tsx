import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/easy.png"

const Verification = () => {
  return (
      <Container>
          <Img src={img} />
          <Confirm><h3>Confirmation</h3></Confirm>
          <Styles></Styles>

          <Awesomehold>
              <Awesome><h3>Awesome!</h3></Awesome>
              <Successful><h3>You have successfully registered.</h3></Successful>
          </Awesomehold>
    </Container>
  )
}

export default Verification
const Successful = styled.div`
    h3{
        margin-top: 7px;
        font-weight: 400;
    }
`
const Styles = styled.div`
    width: 150px;
    height: 7px;
    border-radius: 50px;
    background-color: #1576FA;
`
const Awesome = styled.div`
    font-size: 30px;
    h3{
        font-size: 30px;
        color: #333333;
        margin: 0;
        margin-top: 20px;
    }
`
const Awesomehold = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 60px;
`
const Confirm = styled.div`
    h3{
        margin: 0;
        font-size: 26px;
        margin-top: 10px;
        color: #333333;
        font-style: italic;
    }
`
const Img = styled.img`
    height: 28px;
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cecece;
    flex-direction: column;
`