import React from 'react'
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { UseAppDispach, useAppSelector } from '../components/global/Store';
import { useMutation } from '@tanstack/react-query';
import { ApplyForLeave } from '../components/global/ReduxState';
import Swal from 'sweetalert2';
import { applyForLeave } from '../utils/Api/ApiCall';

const LeavePage = () => {
    const dispatch = UseAppDispach();
    const navigate = useNavigate();
  
    const staff = useAppSelector((state)=> state.currentStaff)
    const admin = useAppSelector((state)=> state.currentUser)
  
    const schema = yup
      .object({
        title: yup.string().required(),
        startDate: yup.string().required(),
      
        numberOfDays: yup.number().required(),
        reason: yup.string().required(),
       
      })
      .required();
  
    type formData = yup.InferType<typeof schema>;
  
    const {
      handleSubmit,
      formState: { errors },
      reset,
      register,
    } = useForm<formData>({
      resolver: yupResolver(schema),
    });
  
    const posting = useMutation({
      mutationKey: ["apply4leave"],
      // mutationFn: createAdmin,
      mutationFn: (data: any) => applyForLeave(data , staff?._id , admin?._id),
  
      onSuccess: (myData) => {
        dispatch(ApplyForLeave(myData.data))
        Swal.fire({
          title: "you just applied for leave",
          html: "redirecting to dashbaord",
          timer: 1000,
          timerProgressBar: true,
  
          willClose: () => {
            // navigate("/sign-in-admin");
          }
        })
      
      },
    });
  
    const Submit = handleSubmit(async (data: any) => {
      console.log("apply for leave", data)
      posting.mutate(data);
      // reset();
    });
  return (
    <LeavePageContainer>
       <MainLeavePage>
            <LeaveForm onSubmit={Submit}>
                <TitleandSubtitle>
                    <Title>Leave Form</Title>
                    <SubTitle>Apply for a annual leave</SubTitle>
                </TitleandSubtitle>
                <InputField>
                    <Input {...register("title")} placeholder='type of leave' className='your name'/>
                    <span>{errors?.title && errors?.title?.message}</span>

                    <Input {...register("numberOfDays")} placeholder='numberOfDays' className='position'/>
                    <span>{errors?.numberOfDays && errors?.numberOfDays?.message}</span>

                    <Input {...register("startDate")} placeholder='startDate' className='relive-office'/>
                    <span>{errors?.startDate && errors?.startDate?.message}</span>


                    <Input {...register("reason")} placeholder='reasons....' className='relive-office'/>
                    <span>{errors?.reason && errors?.reason?.message}</span>

                    <SubmitButton>
                        <Button type='submit'>Submit</Button>
                    </SubmitButton>
                </InputField>
            </LeaveForm>
       </MainLeavePage>
    </LeavePageContainer>
  )
}

export default LeavePage;



// Leave form

const Button = styled.button`
height: 36px;
width: 120px;
background-color: #1F337C;
border-radius: 7px;
margin-top: 10px;
color: white;
font-size: 16px;
font-weight: bold;
border: none;
`

const SubmitButton = styled.div`
height: auto;
width: 100%;
`

const Textarea = styled.textarea`
    height: 88px;
    width: 100%;
    border: 2px solid silver;
    margin-top: 20px;
    resize: none;
    padding-left: 10px;
    outline-color: #1F337C;
`

const Input = styled.input`
    height: 44px;
    width: 100%;
    margin-top: 16px;
    border: 2px solid silver;
    padding-left: 10px;
    outline-color: #1F337C;

`

const InputField = styled.div`
    height: auto;
    width: auto;
    padding: 0px 24px;
   
`

const SubTitle = styled.div`
    height: 22px;
    width: auto;
    font-size: 16px;
    font-weight: 500;

`

const Title = styled.div`
    height: 34px;
    width: auto;
    font-size: 24px;
    font-weight: bold;
    
`

const TitleandSubtitle = styled.div`
    height: 72px;
    width: auto;
    margin-left: 88px;

    @media screen and (max-width: 500px) {
        margin-left: 24px;
    }
`
const LeaveForm = styled.form`
    height: auto;
    width: 400px;
    border: 2px solid silver;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-top: 20px;
    padding-bottom: 50px;

    @media screen and (max-width: 500px) {
        width: 300px;
    }
`

// Leave main page
const MainLeavePage = styled.div`
    height: calc(100vh - 50px);
    width: calc(100vw - 220px);
    display: flex;
    justify-content: center;
    align-items: start;
    

    @media screen and (max-width: 900px) {
        width: 100%;
    }

`
// Leave page
const LeavePageContainer = styled.div`
height:100vh;
width: 100vw;
display: flex;
justify-content: flex-end;
align-items: end;
@media screen and (max-width: 900px) {
        width: 100%;
        justify-content: center;
    }
`
