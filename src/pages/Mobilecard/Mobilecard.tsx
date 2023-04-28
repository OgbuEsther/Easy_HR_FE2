import React from 'react'
import styled from "styled-components"

const Mobilecard = () => {
  return (
      <Container>
          <Wrapper>
              <Card>
                  <Balance>
                      Wallet Balance
                  </Balance>
                  <Amount>$1,988.9</Amount>
                  <Button>Credit Wallet</Button>
              </Card>
          </Wrapper>
    </Container>
  )
}

export default Mobilecard
const Button = styled.button`
    width: 130px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50px;
    cursor: pointer;
    background-color: blue;
    margin-left: 10px;
    margin-top: 27px;
    border: none;
`
const Amount = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    font-weight: 600;
    font-size: 22px;
`
const Balance = styled.div`
    margin-top: 12px;
    font-weight: 600;
    color: gray;
    margin-left: 10px;
`
const Card = styled.div`
    width: 95%;
    height: 170px;
    background-color: #fff;
    border-radius: 10px;
    /* margin-left: 12px; */
    padding: 12px;
    flex-direction: column;
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 100%;
    display: none;
    @media screen and (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
        margin-bottom: 10px;
    }
`