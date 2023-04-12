import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/shape2.svg"
import img2 from "../../Assets/shape3.svg"
import img3 from "../../Assets/shape1.svg"
import img4 from "../../Assets/trans.svg"
import MethodsCard from './MethodsCard'


const Methods = () => {
  return (
      <Container id='source'>
          <Wrapper>
              <Top><h1>Add Payment Methods in a Click.</h1></Top>
              <Boxhold>
                  <MethodsCard text='Fast' word='Using Paydem is fast & reliable way to send money to multiple people. Payments happen at the push of a button after putting in the telephone numbers of individuals.' button='Learn More' img={img4} climg={img2}/>
                  <MethodsCard text='Cost-Effective' word='Using Paydem is fast & reliable way to send money to multiple people. Payments happen at the push of a button after putting in the telephone numbers of individuals.' button='Learn More' img={img4} climg={img}/>
                  <MethodsCard text='Security' word='Using Paydem is fast & reliable way to send money to multiple people. Payments happen at the push of a button after putting in the telephone numbers of individuals.' button='Learn More' img={img4} climg={img3}/>
              </Boxhold>    
          </Wrapper>
    </Container>
  )
}

export default Methods
const Started = styled.div`
    width: 85%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    margin-top: 50px;

    
`
const Down = styled.div`
    width: 100%;
    padding: 20px;
    flex-direction: column;
    h3{
        font-size: 20px;
        line-height: 1.4;
        width: 220px;
    }
`
const Img = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`

const Card = styled.div`
    width: 370px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 20px;
    @media screen and (max-width: 768px){
        width: 340px;
    }
`
const Boxhold = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 40px;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 500px){
        justify-content: center;
        display: flex;
    }
`
const Top = styled.div`
    @media screen and (max-width: 500px){
        width: 100%;
        display: flex;
        justify-content: center;
    }
    h1{
        color: #00214F;
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
  flex-wrap: wrap;
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
  }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`