import React from "react";
import styled from "styled-components";
import { UseAppDispach, useAppSelector } from "../../components/global/Store";
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { staffClockIn } from "../../utils/Api/ApiCall";
import { StaffClockIn, StaffClockInLate } from "../../components/global/ReduxState";

const InputStaffAttendance = () => {

  const staff = useAppSelector((state) => state.currentStaff);
  const admin = useAppSelector((state) => state.currentUser);

  // https://easyhr.onrender.com/api/clockin/644e8e63cfbe10e9cc38bb04
  // const staffClockIn =  async() => {
  //   await axios
  //       .post(`https://easyhr.onrender.com/api/clockin/644e8e63cfbe10e9cc38bb04`, {setToken : tokenValue , clockIn: clockInBoolean })
  //       .then((res) => {
  //         console.log(res)
  //       });

  
   
  const dispatch = UseAppDispach();
  const navigate = useNavigate();



  const schema = yup
    .object({
      setToken: yup.string().required(),
      clockIn: yup.boolean().required(),
     
    })
    .required();

  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },
  
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const posting = useMutation({
    mutationKey: ["create_Leave"],
    // mutationFn: createAdmin,
    mutationFn: (data: any) => staffClockIn(data , staff?._id , admin?._id ),

    onSuccess: (myData: any) => {
      dispatch(StaffClockIn(myData.data))
      Swal.fire({
        title: "staff  clockin  successfully",
        html: "redirecting to dashbaord",
        timer: 1000,
        timerProgressBar: true,

        willClose: () => {
          navigate("/staffdashboard");
        }
      })
    
    },
    onError: (error: any) => {
      dispatch(StaffClockInLate(error.response))
      Swal.fire({
        title: "punch in failed",
        text: `${error?.response?.data?.message}`,
        icon: "error",
      });
    }
  });

  const Submit = handleSubmit(async (data: any) => {
    console.log("user", data)
    posting.mutate(data);
    // reset();
  });

  return (
    <Container>
      <Proceed onSubmit={Submit}>
        <Top>Enter your attendance token here</Top>

        <Input
          cl="red"
          placeholder="Token"
          {...register("setToken")} 
          />
   <span>{errors?.setToken && errors?.setToken?.message}</span>
          <label htmlFor="">click to check in</label>
          {/* <br /> */} {" "}
          <input type="checkbox"
           {...register("clockIn")} 
          />
           <span>{errors?.clockIn && errors?.clockIn?.message}</span>
        <Button type="submit" 
        >Confirm</Button>
      </Proceed>
    </Container>
  );
};

export default InputStaffAttendance;
const Button = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: #fff;
  cursor: pointer;
  border-radius: 7px;
  outline: none;
  border: none;
  margin-top: 12px;
`;

const Input = styled.input<{ cl: string }>`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid lightgray;
  padding-left: 10px;
  border-radius: 8px;
  margin-top: 10px;
  outline: ${(prop) => prop.cl};
`;

const Top = styled.div``;

const Proceed = styled.form`
  width: 350px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
    font-size: 14px;
    margin-top: 3px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.7); */
  position: absolute;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;

  animation: play 0.5s ease-out forwards;

  @keyframes play {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
