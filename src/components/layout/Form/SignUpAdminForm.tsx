import React from 'react'
import styled from 'styled-components'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { NavLink, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { createAdmin } from '../../../utils/Api/ApiCall';
import { UseAppDispach } from '../../global/Store';
import { Admin } from '../../global/ReduxState';





const SignupAdminForm = () => {

const dispatch = UseAppDispach();
const navigate = useNavigate();



  const schema = yup.object({
    yourName: yup.string().required(),
    companyname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(9).required()
  }).required()
  
  type formData = yup.InferType<typeof schema>
  
  const{handleSubmit, formState: {errors}, reset, register} = useForm<formData>({
    resolver: yupResolver(schema)
  })




  const posting = useMutation({
   mutationKey: ["create Admin"],
   mutationFn: createAdmin,

   onSuccess: (myData)=>{
    dispatch(Admin(myData.data));
    navigate("/sign-in-admin")
    
   }
  })

  
  
  const Submit = handleSubmit(async(data)=>{
    posting.mutate(data)
    reset()
  
    
  })


  return (

        <Form onSubmit={Submit}>
<SignUpTitle>Sign Up</SignUpTitle>
<SignUpDescription>You will be signup as an Admin</SignUpDescription>
{/* <SignUpDescription>Pay smart and save time with Easy Pay</SignUpDescription> */}

<InputField>

<NameInputColumn>
  <FirstNameInputContainer>
    
    <FirstNameInput {...register("yourName")} placeholder='Your Name'/>
  </FirstNameInputContainer>
</NameInputColumn>

{/* Admin Email Area */}
<AdminEmailColumn>
<AdminEmailContainer>
 
  <AdminEmailInput {...register("email")} placeholder='Email Address'/>
</AdminEmailContainer>
</AdminEmailColumn>

{/* Admin Company and Password Area */}
<CompanyNameAndPasswordInputColumn>
  <CompanyNameInputContainer>
   
    <CompanyNameInput {...register("companyname")}  placeholder='Company Name'/>
  </CompanyNameInputContainer>
  <PasswordInputContainer>
    <PasswordInput {...register("password")}  placeholder='Password' type='password'/>
  </PasswordInputContainer>
</CompanyNameAndPasswordInputColumn>

{/* Admin Sign up Button Area */}
<SignUpButtonColumn>
<SignUpButton>
    <Button type='submit'>Sign Up</Button>
  </SignUpButton>
</SignUpButtonColumn>

{/* Admin Sign in Button Area */}
<AdminSignOptionColumn>
  <p>Already have account? <NavLink to="/sign-in" style={{textDecoration:"none"}}>
  <span>Sign In</span>
    </NavLink></p>
</AdminSignOptionColumn>
</InputField>
</Form>

  
  )
}

export default SignupAdminForm;


const PasswordInput = styled.input`
height: 50px;
width: auto;
border: 1px solid silver;
`

const CompanyNameInput = styled.input`
height: 50px;
width: auto;
border: 1px solid silver;
`

const PasswordInputContainer = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
justify-content: center;
flex-direction: column;
`

const CompanyNameInputContainer = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
justify-content: center;
flex-direction: column;
margin-right: 5px;
`

const CompanyNameAndPasswordInputColumn = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    justify-content: center;
    
  }
  `

const AdminEmailInput = styled.input`
  height: 50px;
  width: auto;
`

const AdminEmailColumn = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: gray; */

  @media screen and (max-width: 500px){
    align-items: center;
  }
`

const AdminEmailContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

@media screen and (max-width: 500px) {
  width: 300px;
}
`

const FirstNameInput = styled.input`
height: 50px;
width: auto;
border: 1px solid silver;
`

const FirstNameInputContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
justify-content: center;
flex-direction: column;
margin-right: 5px;
`

const NameInputColumn = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    justify-content: center;
    
  }
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
  width: 100%;
  padding: 10px 0px;
  margin-top: 30px;
  
  input{
    border-radius: 5px;
    border: 1px solid black;
    outline-color: #00d1ff;
    padding-left: 10px;
    border: 1px solid #007bff8c;
  }

  button{
    cursor: pointer;
  }

  label{
    color: #0172f7;
  }
  
`


const AdminSignOptionColumn = styled.div`
height: 50px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;

p{
  font-size: 13px;
  span{
    margin-left: 5px;
    font-weight: bold;
    color: #0174f7d1;
  
  }
}
`
const SignUpButtonColumn = styled.div`
height: 50px;
width: 100%;
margin-top: 20px;

@media screen and (max-width: 500px) {
  display: flex;
  justify-content: center;
  align-items: center;
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
color: #0174f7bf;
`

const Form = styled.form`
  height: auto;
  width: 620px;
  padding-top: 40px;
  
  @media screen and (max-width: 960px){
    width: 620px;
    /* box-shadow: 1px 2px 10px 1px rgba(177, 177, 177, 0.5); */
    padding: 10px;
    padding-left: 15px;
    border-radius: 10px;
    padding-top: 40px;
    width: 620px;
}


@media screen and (max-width: 500px) {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 170px;
  width: auto;
}
`

