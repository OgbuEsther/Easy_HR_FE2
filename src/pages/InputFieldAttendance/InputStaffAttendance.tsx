import React from "react";
import styled from "styled-components";
import { UseAppDispach, useAppSelector } from "../../components/global/Store";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { staffClockInfuntion, url } from "../../utils/Api/ApiCall";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Staff } from "../../components/global/ReduxState";
const InputStaffAttendance = () => {

  const dispatch = UseAppDispach();
  const staff = useAppSelector((state) => state.currentStaff);

  const [tokenValue, setTokenValue] = React.useState("");
  const [clockInBoolean , setClockInBoolean] = React.useState<boolean>(false)

  const schema = yup.object({
    token: yup.string().required()
  }).required()

  type formData = yup.InferType<typeof schema>

  const {
    handleSubmit, register, reset, formState:{errors
    }
  } = useForm<formData>({resolver: yupResolver(schema)})
  
  const staffClockIn = useMutation({
    mutationKey:["staff-clockin"],
    mutationFn: (data)=>staffClockInfuntion(data!),
    
    onSuccess(StaffData){
      dispatch(Staff(StaffData!))
    }

    
  });

  



  return (
    <Container>
      <Proceed>
        <Top>Enter your attendance token here</Top>

        <Input
          cl="red"
          placeholder="Token"
        
        />

       
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
