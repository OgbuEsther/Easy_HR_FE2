import React from 'react'
import styled from 'styled-components'

import img4 from "../../Assets/spider.jpg"

import img8 from "../../Assets/shazam.jpg"

import img14 from "../../Assets/val.jpg"

// import { NavLink } from 'react-router-dom'


const Payment = () => {



  return (
    <Container>
        <Text>Sell world-class HR solutions <br /> and increase profitability</Text>
        <P>It is a Catch Them Young approach to help promote Business culture</P>
        <Wrapper >
         
             <Box2>
                <Up>
                    <Img  src={img14}/>
                </Up>
                <Down6>
                    <Data><span>Channel Manager  </span>
                     <h5>
                        Get all the strategy advice and business support you'll need to help you maximize 
                        </h5></Data>

                <New>Collaborator  🥉</New>
                </Down6>
            </Box2>

            <Box2>
                <Up>
                    <Img  src={img4}/>
                </Up>
                <Down6>
                    <Data><span>Product Knowledge  </span>
                     <h5>
                       We will teach your sales and support personnels to help you imporve sales, better support your customers and improve product adoption
                    </h5>
                    </Data>

                <New>Researcher 🥉</New>
                </Down6>
              </Box2>

              <Box2>
                <Up>
                    <Img  src={img8}/>
                </Up>
                <Down6>
                    <Data><span>Marketing Collateral</span>
                     <h5>
                     We will provide you with sales support tools to communicate EasyHR product offerings.
                     </h5>
                     </Data>

                <New>Collaborator 🥉</New>
                </Down6>
              </Box2>


        </Wrapper>
        {/* <NavLink to="/gallery" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>

        </NavLink> */}
    </Container>
  )
}

export default Payment

const New = styled.div`
    width: 150px;
    height: 40px;
    border: 1px solid #00A85A;
    background-color: white;
    cursor: pointer;
    position: absolute;
    color: #00A85A;
    align-items: center;
    display: flex;
    /* padding-right: 20px; */
    justify-content: center;
    border-radius: 50px;
    bottom: 480px;
    right: 220px;
    @media screen and (max-width: 1024px) {
        right: 340px;
    }
    @media screen and (max-width: 768px) {
        right: 220px;
    }
    @media screen and (max-width: 425px) {
        right: 205px;
        bottom: 500px;
    }
    @media screen and (max-width: 320px) {
        right: 180px;
        bottom: 475px;
    }
`

const Data = styled.div`
    h5{
        margin: 0px;
        font-weight: 500;
        font-size: 15px;
        margin-top: 30px;
        line-height: 20px;
    }
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: -15px;
    /* background-color: red; */
    width: 315px;
    p{
        margin: 0;
        font-size: 15px;
    }
    span{
        font-weight: bolder;
        font-size: 18px;
        line-height: 2rem;
        text-align: center;
        @media screen and (max-width: 320px) {
            font-size: 19px;
            text-align: center;
        }
    }
   
`



const Down6 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #001328;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
    @media screen and (max-width: 425px) {
        padding-left: 15px;
    }
`

const Img = styled.img`
    transition: all 350ms;
    object-fit: cover;
    width: 100%;
    height: 500px;
    cursor: pointer;
    :hover{
        display: block;
        transform: scale(1.1);
        background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.9));
        z-index: 1;
        filter: grayscale(3);
    }
`
const Up = styled.div`
    width: 100%;
    height: 60%;
    overflow: hidden;
    :hover{
        
    }
`

const Box2 = styled.div`
    width: 390px;
    height: 490px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 30px;
    @media screen and (max-width: 1024px) {
        width: 440px;
    }
    @media screen and (max-width: 768px) {
        width: 320px;
    }
    @media screen and (max-width: 445px) {
        width: 100%;
    }

`
const Box3 = styled.div`
    width: 390px;
    height: 420px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 40px;
    visibility: hidden;
`

const P = styled.div`
    font-size: 1.125rem;
    width: 85%;
    line-height: 1.75rem;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
    color: #000000;
    /* background-color: red; */
    margin-top: -8px;
    @media screen and (max-width: 425px) {
        font-size: 17px;
        text-align: center;
        line-height: 1.65rem;
    }
    @media screen and (max-width: 320px) {
        font-size: 15px;
        text-align: center;
        line-height: 1.65rem;
        width: 80%;
        padding-left: 20px;
        padding-right: 20px;
    }
`
const Text = styled.h2`
    font-weight: 600;
    /* text-align: center; */
    line-height: 1.25;
    font-size: 3rem;
    color: #00A85A;
    @media screen and (max-width: 445px) {
        font-size: 32px;
        text-align: center;
    }
`
const Wrapper = styled.div`
    width: 91%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 425px) {
        margin-top: 30px;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* margin-top: 140px; */
    /* padding-bottom: 20px; */
`