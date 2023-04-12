import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/connect2.png"
import img2 from "../../Assets/payment.png"
import img3 from "../../Assets/growth.png"
import img4 from "../../Assets/connect.png"

const Team = () => {
  return (
      <Container id='team'>
          <Wrapper>
              <Left>
                  <Top><h1>Connecting all your business banking needs.</h1></Top>
                  <P><p>Get a unique bank account number that enables your company to pay employees' salaries through the wallet, view transaction history, check account balance, make deposits, withdraw, & transfer with ease!</p></P>
                  <Payment>
                      <Img2 src={img2} />
                      <Second>
                          <Up><h3>Payment Solution</h3></Up>
                          <p>We automatically route payments through the most optimal channels, ensuring the highest transaction success rates in the market.</p>
                      </Second>
                  </Payment>

                  <Payment>
                      <Img2 src={img3} />
                      <Second>
                          <Up><h3>Business Growth</h3></Up>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur libero delectus repellendus eum deleniti?</p>
                      </Second>
                  </Payment>

                  <Payment>
                      <Img2 src={img4} />
                      <Second>
                          <Up><h3>Connected People</h3></Up>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur libero delectus repellendus eum deleniti?</p>
                      </Second>
                  </Payment>
              </Left>
              <Right>
                  <Img src={img} />
              </Right>
          </Wrapper>
    </Container>
  )
}

export default Team
const Right = styled.div`
    width: 48%;
    display: flex;
    /* justify-content: center; */
    @media screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 425px) {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 35px;
    }
    @media screen and (max-width: 768px) {
         width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 35px;
    }
`
const Up = styled.div`
    h3{
        color: #00214f;
        font-weight: 700;
        margin: 0;
    }
`
const Second = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    p{
        margin: 0;
        line-height: 25px;
        margin-top: 5px;
        font-size: 15px;
    }
`
const Img2 = styled.img`
    @media screen and (max-width: 320px) {
        height: 50px;
    }
    @media screen and (max-width: 500px) {
        height: 50px;
    }
`
const Payment = styled.div`
    display: flex;
    margin-top: 40px;
`
const P = styled.div`
    p{
        margin: 0;
        line-height: 25px;
    }
`
const Top = styled.div`
    h1{
        color: #00214F;
        /* text-align: center; */
        @media screen and (max-width: 425px) {
            font-size: 26px;
        }
        @media screen and (max-width: 768px) {
            font-size: 26px;
            text-align: center;
        }
         @media screen and (max-width: 375px) {
            font-size: 22px;
        }
    }
`
const Img = styled.img`
    height: 650px;
     @media screen and (max-width: 1024px) {
        height: 430px;
    }
    @media screen and (max-width: 768px) {
        height: 390px;
    }
    @media screen and (max-width: 425px) {
        height: 400px;
    }
    @media screen and (max-width: 320px) {
        height: 350px;
    }
`
const Left = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 425px) {
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
const Wrapper = styled.div`
    width: 92%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row-reverse;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 70px;
`