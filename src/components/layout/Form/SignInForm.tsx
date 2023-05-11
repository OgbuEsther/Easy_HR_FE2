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
import { useDispatch } from 'react-redux'
import { Staff } from '../../global/ReduxState'
import Swal from 'sweetalert2'
import { LoginStaff } from '../../../utils/Api/ApiCall'
import BackButton from '../../Buttons/BackButton'



const SigninForm = () => {

const [work, setWork] = useState(false);

const WorkSet = () =>{
  setWork(true)
}

const dispatch = useDispatch()

  const navigate = useNavigate()
    const [ViewPassword, SetViewPassword] = useState(false)

    const ViewPasswordFunction = ()=>{
SetViewPassword(!ViewPassword)
    }

  const schema = yup.object({
    companyname: yup.string().required("please enter a valid company's name"),
    email: yup.string().email().required("please enter a valid email"),
    password: yup.string().required("please enter a password")
  }).required()
  
  type formData = yup.InferType<typeof schema>
  
  const{handleSubmit, formState: {errors}, reset, register} = useForm<formData>({
    resolver: yupResolver(schema)
  })
  

  const loginin = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: any) => LoginStaff(data),



    onSuccess: (myData) => {
      dispatch(Staff(myData.data));
      // console.log(myData)

      Swal.fire({
        title: "Login succesful",
        html: "Taking you to your dashboard",
        timer: 1000,
        timerProgressBar: true,

        didOpen: () => {
          Swal.showLoading();
        },

        willClose: () => {
          navigate("/staffdashboard");
        },

      });
      reset()

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
    console.log("this is sign in data" , data)

  })


  return (

        <Form  onSubmit={Submit}>
<BackButton path='/sign-in-option'/>

<SignUpTitle>Sign In</SignUpTitle>
{/* <SignUpDescription>Pay smart and save time with Easy Pay</SignUpDescription> */}
<SignUpDescription>You will be signed in as a Staff</SignUpDescription>

<InputField>

<CompanyNameInputHold onClick={WorkSet}>
    
    <CompanyNameInput outline={work? "lightblue":""} {...register("companyname")} placeholder='Company Name'/>
    <span>{errors?.companyname && errors?.companyname?.message}</span>

</CompanyNameInputHold>

<EmailInputColumn>
  
    <EmailInput {...register("email")} placeholder='Email Address'/>
    <span>{errors?.email && errors?.email?.message}</span>

</EmailInputColumn>
<CompanyPasswordColumn>
    <PasswordInputHold>
      <InputmainHold>
        <MainPassword {...register("password")} type={ViewPassword? "text":"password"} placeholder='password'/> <ShowPassword  onClick={ViewPasswordFunction}>
        {
          ViewPassword?<AiOutlineEye/>:<AiOutlineEyeInvisible/>
        }
        </ShowPassword>
      </InputmainHold>
    </PasswordInputHold>
    
    <ShowPasswordAndForgetPassword>
<ForgetPassword >
  Forget Password
</ForgetPassword>
    </ShowPasswordAndForgetPassword>
</CompanyPasswordColumn>
<FourtInputColumn>

  <SignUpButton>
    <Button  type='submit'>Sign In</Button>
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
  font-size: 14px;
  font-weight: 500;
  color: #0174f7c8;
  cursor: pointer;
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

const CompanyNameInput = styled.input<{outline:string;}>`
    height: 50px;
    width: auto;
    border-radius: 5px;
    border: 1px solid #0174f78d;
    outline-color: ${(prop)=>prop.outline};
    padding-left: 10px;
`

const CompanyNameInputHold = styled.div`
    height: auto;
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    flex-direction:column;

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

const InputField = styled.div`
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
@media screen and (max-width: 600px) {
  text-align: center;
}`

const ShowPassword = styled.div`
  height: 50px;
  width: 50px;
display: flex;
justify-content: center;
align-items: center;
font-size: larger;
color: grey;

`

const MainPassword = styled.input`
  height: 45px;
  flex: 1;
  padding-left: 10px;
  outline: none;

`

const InputmainHold = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid  #0174f78d;
  border-radius: 5px;
`
const PasswordInputHold = styled.div`
  height: auto;
  width: 100%;

`
const CompanyPasswordColumn = styled.div`
height: auto;
   width: 100%;
    margin-bottom: 15px;
    display: flex;
    flex-direction:column;

    /* background-color: blue; */
`


const EmailInputColumn = styled.div`
 height: auto;
   width: 100%;
    margin-bottom: 25px;
    margin-top: 25px;
    display: flex;
    flex-direction:column;

    /* background-color: blue; */
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
  width: 600px;
  padding-top: 40px;
  padding-left: 50px;
@media screen and (max-width: 600px) {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 0px;
}

`