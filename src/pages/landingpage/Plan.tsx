import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/tired.png"
import img2 from "../../Assets/logos2.png"
import img3 from "../../Assets/pays.png"

const Plan = () => {
  return (
      <Container id='accep'>
          <Wrapper>
              <Top><h1>The new way to accept payments</h1></Top>
              <Down>
                  <Left>
                      <Img src={img} />
                  </Left>
                  <Right>
                      <Img2 src={img2} />
                      <Img3 src={img3} />
                  </Right>
              </Down>
          </Wrapper>
    </Container>
  )
}

export default Plan

const Img3 = styled.img`
    height: 520px;
`
const Img2 = styled.img`
    height: 40px;
    margin-top: 90px;
`
const Right = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
     @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
        border: none;
    }
`
const Img = styled.img`
    @media screen and (max-width: 500px) {
        height: 250px;
    }
`
const Left = styled.div`
    width: 48%;
    display: flex;
    border-right: 2px solid #D3D3D3;
    @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
        border: none;
        margin-top: 36px;
    }
`
const Down = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    /* margin-top: 15px; */
`
const Top = styled.div`
    h1{
        color: #00214F;
        /* text-align: center; */
        @media screen and (max-width: 500px) {
            font-size: 26px;
            text-align: center;
        }
         @media screen and (max-width: 375px) {
            font-size: 22px;
        }
    }
`
const Wrapper = styled.div`
    display: flex;
    width: 92%;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    flex-wrap: wrap;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-top: 60px;
`