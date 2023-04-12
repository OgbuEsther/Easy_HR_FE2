import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <Last>
              <Copy>Copyright © 2022 EasyPay</Copy>
              <Insu>Insurance offered through OnPay Insurance Agency, LLC (CA License #0L29422)</Insu>
              <Tems>Terms and Conditions | Privacy | Sitemap</Tems>
        </Last>
    </Container>
  )
}

export default Footer
const Tems = styled.div`
    color: #fff;
    display: flex;
    margin-top: 20px;
    margin-left: 50px;
    @media screen and (max-width: 500px) {
        margin-left: 0;
    }
`
const Insu = styled.div`
    color: #fff;
    display: flex;
    margin-top: 20px;
    text-align: center;
    margin-left: 50px;
    @media screen and (max-width: 500px) {
        margin: 0;
        width: 300px;
    }
`


const Copy = styled.div`
    color: #fff;
    display: flex;
    margin-top: 20px;
    margin-left: 50px;
    text-align: center;
    @media screen and (max-width: 500px) {
        margin-left: 0;
        margin-bottom: 15px;
    }
`



const Last = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`



const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    background-color: #005AD9;
    padding-top: 50px;
    overflow: hidden;
    hr{
        width: 100%;
        margin-top: 35px;
    }
`