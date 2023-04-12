import React from 'react'
import styled from 'styled-components'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { NavLink } from 'react-router-dom'




const SignupForm = () => {



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
<SignUpTitle>Sign Up</SignUpTitle>
<SignUpDescription>Pay smart and save time with Easy Pay</SignUpDescription>

<InputField>
<FirstInputColumn>

    <FirstInputRow>
        <Label>First Name</Label>
        <FirstInput {...register("firstName")}/>
    </FirstInputRow>
    <SecondInputRow>
        <Label>Second Name</Label>
        <SecondInput{...register("lastName")}/>
    </SecondInputRow>
</FirstInputColumn>
<SecondInputColumn>
  <Label>Email Adress</Label> <br />
    <EmailInput {...register("email")}/>

</SecondInputColumn>
<ThirdInputColumn>

<CompanyInputRow>
        <Label>Company Name</Label>
        <ThirdInput {...register("companyName")}/>
    </CompanyInputRow>
    <FourthInputRow>
        <Label>Password</Label>
        <FourthInput {...register("password")}  type='password' required/>
    </FourthInputRow>
</ThirdInputColumn>
<FourtInputColumn>

  <SignUpButton>
    <Button type='submit'>Sign Up</Button>
  </SignUpButton>
</FourtInputColumn>
<FifthInputColumn>
  <p>Already have account? <NavLink to="/sign-in" style={{textDecoration:"none"}}>
  <span>Sign In</span>
    </NavLink></p>
</FifthInputColumn>
</InputField>
</Form>
  
  )
}

export default SignupForm;

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

  input{
    border-radius: 5px;
    border: 1px solid black;
    outline-color: #00d1ff;
    padding-left: 10px;
    border: 1px solid silver;
  }

  button{
    cursor: pointer;
  }

  label{
    color: gray;
  }
  
`

const EmailInput = styled.input`
    height: 30px;
    width: 250px;
`

const FourthInput = styled.input`
width: 100%;
height: 100%;

`
const ThirdInput = styled.input`
width: 100%;
height: 100%;

`
const SecondInput = styled.input`
width: 100%;
height: 100%;
`

const FirstInput = styled.input`
height: 100%;
width: 100%;
`

const Label = styled.label`
font-weight: 600;
font-size: 13px;
`

const CompanyInputRow = styled.div`height: 30px;
width: 140px;
margin-right: 30px;

`

const FourthInputRow = styled.div`height: 30px;
width: 140px;
`

const SecondInputRow = styled.div`
height: 30px;
width: 140px;
`


const FirstInputRow = styled.div`
height: 30px;
width: 140px;
margin-right:30px;
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
    -webkit-background-clip: text;
    -moz-background-clip: text;
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
const ThirdInputColumn = styled.div`
height: auto;
width: auto;
margin-bottom: 60px;
display: flex;
justify-content: flex-start;
align-items: center;

@media screen and (max-width: 960px){
    width: 250px;
}
`


const SecondInputColumn = styled.div`
height: auto;
width: auto;
margin-top: 40px;
margin-bottom: 10px;
`
const FirstInputColumn = styled.div`
height: auto;
width: auto;
display: flex;
align-items: center;

@media screen and (max-width: 960px){
    width: 250px;
}
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
    padding: 10px;
    padding-left: 15px;
    border-radius: 10px;
    padding-top: 40px;
}
`

