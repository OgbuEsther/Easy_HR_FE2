import React, { useState } from 'react'
import styled from 'styled-components'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {AiOutlineEyeInvisible} from "react-icons/ai"
import {AiOutlineEye} from "react-icons/ai"
import { NavLink } from 'react-router-dom';
import {useNavigate} from "react-router-dom"




const SigninForm = () => {

    const [ViewPassword, SetViewPassword] = useState(false)

    const ViewPasswordFunction = ()=>{
SetViewPassword(!ViewPassword)
    }


    const navigate = useNavigate()

    const NavigateToVeficationPageFunction = ()=>{
      navigate("/verification")
    }



  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    companyName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(9).required()
  }).required()
  
  type formData = yup.InferType<typeof schema>
  
  const{handleSubmit, formState: {errors}, reset, register} = useForm<formData>({
    resolver: yupResolver(schema)
  })
  
  const Submit = handleSubmit(()=>{
    reset()
  })


  return (

        <Form onClick={Submit}>
<SignUpTitle>Sign In</SignUpTitle>
<SignUpDescription>Pay smart and save time with Easy Pay</SignUpDescription>

<InputField>

<CompanyNameInputHold>
    <Label>Company Name</Label>
    <CompanyNameInput/>
</CompanyNameInputHold>

<EmailInputColumn>
  <Label>Email Adress</Label> <br />
    <EmailInput {...register("email")}/>

</EmailInputColumn>
<CompanyPasswordColumn>
    <Label>Password</Label><br />
   <CompanyPasswordInputHold>
   <CompanyPasswordInput type={ViewPassword? "password": "text"} />
    <ViewPasswordIconHold onClick={ViewPasswordFunction}>
        {ViewPassword? <AiOutlineEye/>:<AiOutlineEyeInvisible/>}
    </ViewPasswordIconHold>
   </CompanyPasswordInputHold>
   <ForgetPassword>Forget Password</ForgetPassword>
</CompanyPasswordColumn>
<FourtInputColumn>

  <SignUpButton>
    <Button onClick={NavigateToVeficationPageFunction} type='submit'>Sign In</Button>
  </SignUpButton>
</FourtInputColumn>
<FifthInputColumn>
  <p>Don't have account? <NavLink to="/sign-up" style={{textDecoration:"none"}}><span>Sign Up</span></NavLink></p>
</FifthInputColumn>
</InputField>
</Form>
  
  )
}

export default SigninForm;

const CompanyNameInput = styled.input`
    height: 35px;
    width: 270px;
    border-radius: 5px;
    border: 1px solid silver;
    outline: none;
    padding-left: 10px;
`

const CompanyNameInputHold = styled.div`
    height: 70px;
    width: auto;
    margin-bottom: 15px;
`

const ViewPasswordIconHold = styled.div`
    font-size: 24;
    height: 30px;
    width: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    color: black;

    cursor: pointer;
   
`

const CompanyPasswordInput = styled.input`
    height: 30px;
    width: 240px;
    border: none;
    outline: none;
    padding-left: 10px;
   
`


const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 10px;
  background: rgb(1,107,247);
background: linear-gradient(90deg, rgba(1,107,247,1) 0%, rgba(1,184,240,1) 69%, rgba(0,183,255,1) 100%);
  background-color: #0a72e9;
  border: none;
  font-weight: bold; 
  color: white;
`

const SignUpButton = styled.div`
height: auto;
width: auto;
`

const InputField = styled.div`
  height: auto;
  width: 70%;
  padding: 10px 0px;
  margin-top: 30px;

  

  button{
    cursor: pointer;
  }

  label{
    color: gray;
  }
`

const EmailInput = styled.input`
    height: 35px;
    width: 100%;
    outline: none;
    border: 1px solid silver;
    padding-left: 10px;
    border-radius: 5px;
`



const Label = styled.label`
font-weight: 600;
font-size: 13px;
`










const FifthInputColumn = styled.div`
height: 50px;
width: 300px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;

p{
  font-size: 13px;
  span{
    margin-left: 5px;
    font-weight: 600;
    background: rgb(0,136,255);
background-image: linear-gradient(90deg, rgba(0,136,255,1) 6%, rgba(0,183,255,1) 55%, rgba(0,183,255,1) 100%);
    background-size: 100%;
    /* -webkit-background-clip: text; */
    /* -moz-background-clip: text; */
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
}
`
const FourtInputColumn = styled.div`
height: 50px;
width: 300px;
margin-top: 50px;
`
const CompanyPasswordColumn = styled.div`
height: auto;
width: auto;
margin-bottom: 60px;
margin-top: 20px;
`

const ForgetPassword = styled.div`
    font-size: 13px;
    color: blue;
    margin-left: 5px;
    margin-top: 5px;

`

const CompanyPasswordInputHold = styled.div`
height: 35px;
width: 285px;

display: flex;
justify-content:flex-start;

align-items: center;
border: 1px solid silver;
border-radius: 5px;

`


const EmailInputColumn = styled.div`
height: auto;
width: 270px;
margin-bottom: 10px;
`


const SignUpDescription = styled.p`
font-weight: 600;
padding-top: 0px;
`
const SignUpTitle = styled.h3`
font-size: 30px;
font-weight: bold;
margin-bottom: 0px;
margin-top: 0px;
`

const Form = styled.form`
  height: auto;
  width: 350px;
  padding-top: 40px;

  @media screen and (max-width: 960px){
    width: 290px;
    box-shadow: 1px 2px 10px 1px rgba(177, 177, 177, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
    padding-top: 40px;
}

`