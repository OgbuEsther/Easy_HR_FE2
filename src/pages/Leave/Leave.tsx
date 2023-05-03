import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import styled from "styled-components";
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

import {

  AiFillDashboard,
} from "react-icons/ai";
import { UseAppDispach, useAppSelector } from "../../components/global/Store";
import { useMutation } from "@tanstack/react-query";
import { createLeave  } from "../../utils/Api/ApiCall";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {  CreateLeave } from "../../components/global/ReduxState";

const ParentComp = () => {
  const [show, setShow] = React.useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  const Toggle2 = () => {
    setShow(false);
  };

  const dispatch = UseAppDispach();
  const navigate = useNavigate();

  const admin = useAppSelector((state)=> state.currentUser)

  const schema = yup
    .object({
      title: yup.string().required(),
      days: yup.number().required(),
     
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
    mutationKey: ["create_Leave"],
    // mutationFn: createAdmin,
    mutationFn: (data: any) => createLeave(data , admin?._id),

    onSuccess: (myData) => {
      dispatch(CreateLeave(myData.data))
      Swal.fire({
        title: "leave created  successfully",
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
    console.log("user", data)
    posting.mutate(data);
    // reset();
  });

  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <Left>
              <Bold>
                <Icn>
                  <AiFillDashboard />
                </Icn>
               On Leave
              </Bold>
              <button onClick={Toggle}>Create Leave</button>
            </Left>
            <hr />

            {show ? (
              <Slidein>
                <Wallets>
                  <Icon onClick={Toggle2}>
                    <MdOutlineCancel />
                  </Icon>
                  <Card2>
                    {/* <Circle>
                      <FaGoogleWallet />
                    </Circle> */}
                   
                      <Wallet>
                        <h4>Create leave types</h4>
                       
                      </Wallet>
                   
                  </Card2>

                  <Tap onSubmit={Submit}>
                    <h3>Leave Title</h3>
                    <input {...register("title")} type="text" placeholder="e.g maternity leave"/>
                    <span>{errors?.title && errors?.title?.message}</span>
                    <h3>Start</h3>
                    <input {...register("days")} type="text" placeholder=" " />
                    <span>{errors?.days && errors?.days?.message}</span>
                    {/* <h3>Start</h3>
                    <input type="text" placeholder=" " /> */}
                     <button type="submit">Create</button>
                  </Tap>

                   
                </Wallets>
              </Slidein>
            ) : null}
          </Top>
          

         
        </Wrapper>
        
      </Container>
      <One>
        <Wraps>
          <Title>Maternity leave</Title>
        <Cards>
    
          <Box>
          <Name>Ighoruemuse Esther</Name>
          <Days>start:</Days>
          <Days>end:</Days>
          </Box>
        </Cards>
        </Wraps>
        <Wraps>
        <Title>Annual leave</Title>
      <Cards>
  
        <Box>
        <Name>Ighoruemuse Esther</Name>
        <Days>start:</Days>
        <Days>end:</Days>
        </Box>
      </Cards>
      </Wraps>
       </One>
    </div>
  );
};

export default ParentComp;
const Wraps= styled.div`
margin-top: 20px;
margin-left: 30px;
`

const Box = styled.div`
  border-bottom: 0.5px solid black;
display: flex;
justify-content: space-between;
margin: 10px;
`
const One = styled.div`

display: flex;

`
const Cards = styled.div`

width: 500px;
height: 40vh;
border-radius: 3px;
background-color: white;
margin-top: 20px;
margin-left: 5px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`
const Name= styled.div``
const Days= styled.div``
const Title= styled.div`
font-size: 20px;
font-weight: bold;
`


const Tap = styled.form`
input{
  border: 0.5px solid #7eb0f5;
  border-radius: 3px;
  outline: 1px solid #3184f7;
}
  h3 {
    margin: 0;
    margin-bottom: 6px;
    font-size: 19px;
    font-weight: 500;
  }
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    font-size: 13px;
    font-weight: 500;
    margin-top: 30px;
  }
  strong {
    font-size: 16px;
    margin-left: 15px;
  }
`;

const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  margin-top: 15px;
  
  h4 {
    color: #fff;
    margin-top: 5px;
    font-size: 23px;
    font-weight: bold;
  }
  
 
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #3184f7;
  color: #fff;
  font-size: 30px;
`;

const Card2 = styled.div`
  width: 300px;
  height: 150px;
  margin-top: 30px;
  background-color:#3184f7;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
`;

const Icon = styled.div`
  position: absolute;
  font-size: 25px;
  top: 15px;
  cursor: pointer;
`;

const Wallets = styled.div`
  width: 330px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  button{
    margin-top: 30px;
  }
`;

const Slidein = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 12345;
  position: fixed;
  justify-content: flex-end;
  animation: slide-in 0.5s ease-out;

  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
const Icn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin: 3px;
`;

const Bold = styled.div`
  font-size: 30px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  button {
    width: 130px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3434f8;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
    color: #fff;
    position: relative;
    border: none;
    outline: none;
  }
`;

const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Container = styled.div`
  width: calc(100vw - 220px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  overflow: hidden;
  margin-top: 20px;
flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;
