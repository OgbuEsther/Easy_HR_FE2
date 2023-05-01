import React, { useState } from 'react'
import styled from 'styled-components'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {AiOutlineEyeInvisible} from "react-icons/ai"
import {AiOutlineEye} from "react-icons/ai"
import { NavLink } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import { useMutation } from '@tanstack/react-query'
import { LoginStaff } from '../../../utils/Api/ApiCall'
import { useDispatch } from 'react-redux'
import { Staff } from '../../global/ReduxState'
import Swal from 'sweetalert2'




const SigninForm = () => {

const dispatch = useDispatch()

  const navigate = useNavigate()
    const [ViewPassword, SetViewPassword] = useState(false)

    const ViewPasswordFunction = ()=>{
SetViewPassword(!ViewPassword)
    }


    const ForgetPasswordFunction = ()=>{

        navigate("/")
    }

   


   

    const NavigateToVeficationPageFunction = ()=>{
      navigate("/verification")
    }



  const schema = yup.object({
    companyName: yup.string().required("please enter a valid company's name"),
    email: yup.string().email().required("please enter a valid email"),
    password: yup.string().min(9).required("please enter a password")
  }).required()
  
  type formData = yup.InferType<typeof schema>
  
  const{handleSubmit, formState: {errors}, reset, register} = useForm<formData>({
    resolver: yupResolver(schema)
  })
  

  const loginin = useMutation({
    mutationKey: ["login"],
    mutationFn: LoginStaff,



    onSuccess: (myData) => {
      dispatch(Staff(myData.data));

      Swal.fire({
        title: "Login succesful",
        html: "Taking you to your dashboard",
        timer: 1000,
        timerProgressBar: true,

        didOpen: () => {
          Swal.showLoading();
        },

        willClose: () => {
          navigate("/admindashboard");
        },
      });
    },
    onError: (error: any) => {
      Swal.fire({
        title: "registration failed",
        text: "email or password incorrect",
        icon: "error",
      });
    },
});

  const Submit = handleSubmit(async(data)=>{
    loginin.mutate(data)
    reset()
  })


  return (

        <Form>
<SignUpTitle>Sign In</SignUpTitle>
{/* <SignUpDescription>Pay smart and save time with Easy Pay</SignUpDescription> */}
<SignUpDescription>You will be signed in as a Staff</SignUpDescription>

<InputField onSubmit={Submit}>

<CompanyNameInputHold>
    
    <CompanyNameInput {...register("companyName")} placeholder='Company Name'/>
    <span>{errors?.email && errors?.companyName?.message}</span>

</CompanyNameInputHold>

<EmailInputColumn>
  
    <EmailInput {...register("email")} placeholder='Email Address'/>
    <span>{errors?.email && errors?.email?.message}</span>

</EmailInputColumn>
<CompanyPasswordColumn>
    
    <CompanyPasswordInputHold>
    <CompanyPasswordInput {...register("password")}placeholder='Password' type={ViewPassword? "text":"password"} />
    <span>{errors?.email && errors?.password?.message}</span>

    </CompanyPasswordInputHold>

    <ShowPasswordAndForgetPassword>
<ShowPassword onClick={ViewPasswordFunction}>
  <ShowPasswordInput  type='checkbox' checked={ViewPassword}/>
              <span>{errors?.email && errors?.password?.message}</span>

  <ShowPasswordText>
    show password
  </ShowPasswordText>
</ShowPassword>
<ForgetPassword onClick={ForgetPasswordFunction}>
  Forget Password
</ForgetPassword>
    </ShowPasswordAndForgetPassword>
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

const ForgetPassword = styled.div`
  height: auto;
  width: auto;
  font-size: 13px;
  color: #0174f7c8;
  cursor: pointer;
`

const ShowPasswordInput = styled.input`
  height: 12px;
  width: 12px;
 

  
`
const ShowPasswordText = styled.div`
  height: auto;
  width: auto;
  font-size: 13px;
  margin-bottom: 3px;
  margin-left: 2px;
   :hover{
    color: #0174f78d;;
  }
`
const ShowPassword = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  cursor: pointer;
  /* background-color: blue; */
`

const ShowPasswordAndForgetPassword = styled.div`
  height: auto;
  width: auto;
  margin-top: 5px;
  padding-right: 40px;
  padding: 0px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

const CompanyNameInput = styled.input`
    height: 50px;
    width: auto;
    border-radius: 5px;
    border: 1px solid #0174f78d;
    outline: none;
    padding-left: 10px;
`

const CompanyNameInputHold = styled.div`
    height: 70px;
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    flex-direction:column;
`


const CompanyPasswordInput = styled.input`
    height: 40px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #0174f78d;
    outline: none;
    padding-left: 10px;
    
   
`


const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 10px;
  background: rgb(1,107,247);
background: linear-gradient(90deg, #2e7ade 0%, rgba(1,184,240,1) 69%, rgba(0,183,255,1) 100%);
  background-color: #0a72e9;
  border: none;
  font-weight: bold; 
  color: white;
`

const SignUpButton = styled.div`
height: auto;
width: auto;
`

const InputField = styled.form`
  height: auto;
  width: 90%;
  padding: 10px 0px;
  margin-top: 30px;

 

  button{
    cursor: pointer;
  }

  label{
    color: #0172f7;
  }
`

const EmailInput = styled.input`
   height: 50px;
    width: auto;
    border-radius: 5px;
    border: 1px solid #0174f78d;
    outline: none;
    padding-left: 10px;
`



const Label = styled.label`
font-weight: 600;
font-size: 13px;
margin-bottom: 5px;

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
    color: #0172f7;
  }
}
`
const FourtInputColumn = styled.div`
height: 50px;
width: 100%;
margin-top: 50px;
`
const CompanyPasswordColumn = styled.div`
height: 100px;
width: 100%;
margin-bottom: 60px;
margin-top: 20px;
display: flex;
flex-direction: column;
/* background-color: blue; */
`



const CompanyPasswordInputHold = styled.div`
height: auto;
width: 100%;
display: flex;

`


const EmailInputColumn = styled.div`
 height: 70px;
   width: 100%;
    margin-bottom: 15px;
    display: flex;
    flex-direction:column;
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
color: #0174f7b5;
`

const Form = styled.form`
  height: auto;
  width: 500px;
  padding-top: 40px;
  padding-left: 5px;
  /* background-color: blue; */
 
  @media screen and (max-width: 960px){
    width: 285px;
    padding: 10px 20px;
    border-radius: 10px;
    padding-top: 40px;
}

`