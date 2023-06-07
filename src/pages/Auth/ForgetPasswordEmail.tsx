import React, { useState } from 'react'
import styled from "styled-components";
import {AiOutlineReload} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';



const ForgotPasswordEmail = () => {

    const navigate = useNavigate()


    const BackToAuthPageFuntion = () =>{
       navigate("/sign-in")
    }

    


  return (
    <OtpPageContainer>
       <OtpForm>
            <TextArea>
                <Title>enter your email</Title>
                <Description>Let's help you find your account</Description>
            </TextArea>
            <InputField>
                <EmailInput placeholder='Enter Email'/>
                <GetOtpAndContinueButton>
                 <GetOtpHold onClick={BackToAuthPageFuntion}>
                    Back
                 </GetOtpHold>
                    <Button>
                        Continue
                    </Button>
                </GetOtpAndContinueButton>
            </InputField>
       </OtpForm>
    </OtpPageContainer>
  )
}

export default ForgotPasswordEmail;



// OTP input field Area

const GetOtpHold = styled.button`
   height: 40px;
width: 100px;
border: none;
background-color: #0a72e9;
border-radius: 5px;
color: white;
font-size: 16px;
font-weight: 500;
cursor: pointer;
   
   
`



const Button = styled.button`
height: 40px;
width: 130px;
border: none;
background-color: #0a72e9;
border-radius: 5px;
color: white;
font-size: 16px;
font-weight: 500;
cursor: pointer;
`





const EmailInput = styled.input`
height: 50px;
width: auto;
height: 50px;
    width: auto;
    border-radius: 5px;
    border: 1px solid #0174f78d;
    outline: lightblue;
    padding-left: 10px;
margin-bottom: 10px;
`
const GetOtpAndContinueButton = styled.div`
height: 50px;
width: auto;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding-left:10px;
padding-right: 10px;
/* background-color: blue; */
`

const InputField = styled.div`
    height: 200px;
    width: 500px;
    /* background-color: gray; */
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 510px) {
        width: 300px
    }
    
`
// OTP Text Area
const TextArea = styled.div`
height: 100px;
width: 98%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
text-align: center;
/* background-color: blue; */
`
const Title = styled.div`
font-size: 20px;
font-weight: bold;
text-transform: uppercase;
margin-bottom: 10px;
`
const Description = styled.div`
font-size: 16px;
font-weight: 500;
`

// OTP Form Area
const OtpForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: auto;
width: auto;
`


// OTP page container Area
const OtpPageContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: blue; */
`
