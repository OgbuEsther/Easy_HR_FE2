import React from 'react'
import styled from "styled-components";
import {AiOutlineReload} from 'react-icons/ai'


const Otp = () => {
  return (
    <OtpPageContainer>
        <OtpFormContainer>
            <TitleAndDescriptionContainer>
                <Title>OTP VERIFICATION</Title>
            <Description>A verification Code will be sent to you shortly by our Admin</Description>
            </TitleAndDescriptionContainer>
            <InputFieldContainer>
                <OtpInput type='text' placeholder='Enter OTP'/>
            <ResendOtptext>
               <Text> Resend OTP</Text>
               <Icon><AiOutlineReload/></Icon>
            </ResendOtptext>
            </InputFieldContainer>

            {/* Button to DashBoard Area */}
            <ButtonToDashBoardContainer>
                <Button>Continue</Button>
            </ButtonToDashBoardContainer>
        </OtpFormContainer>
    </OtpPageContainer>
  )
}

export default Otp

const Button = styled.button`
    height: 50px;
    width: 100%;
    background-color: #12aee2;
    border: none;
    color: black;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: all 390ms;

    :hover{
        transform: scale(1.05);
    }
`

const ButtonToDashBoardContainer = styled.div`
    height: 200px;
    width: 300px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Icon = styled.div`
font-size: 19px;
font-weight: bolder;
margin-top: 10px;
cursor: pointer;
`
const Text = styled.div`
  font-size: 24px;
  margin-right: 5px;
  cursor: pointer;
`

const ResendOtptext = styled.div`
    margin-top: 20px;
  
    color: #0084ff;
    font-weight: 600;
    display: flex;
    align-items: center;
`

const OtpInput = styled.input`
height: 50px;
width: 90%;
border: 3px solid gray;
border-radius: 5px;
background-color: transparent;
outline-color: #12aee2;
outline-width: 50px;
padding-left: 10px;
font-size: 25px;
text-align: center;


::placeholder{
    color: silver;
    /* text-align: center; */
}
`

const InputFieldContainer = styled.div`
height: 200px;
width: 500px;
/* background-color: gray; */
margin-top: 50px;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Description = styled.p`
font-size: 25px;
text-align: center;
font-weight: 600;
`
const Title = styled.h1`
margin-bottom: 5px;
font-size: 50px;
`
const TitleAndDescriptionContainer = styled.div`
height: 200px;
width: 500px;
/* background-color: gray; */
`

const OtpFormContainer = styled.div`
    height: 90vh;
    width: 90%;
    padding-top: 50px;
    /* background-color: blue; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;


`

const OtpPageContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
`
