import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FaGoogleWallet } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Cards from "./Cards";
import Charts from "../components/Graph/Charts";
import {  BsFillHousesFill, BsBusFront } from "react-icons/bs";
import img from "../Assets/saves.svg"
import { useAppSelector } from "../components/global/Store";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getOneStaff } from "../utils/Api/ApiCall";
import Mobilecard from "./Mobilecard/Mobilecard";



const ParentComp = () => {

    const schema = yup
    .object({
      amount: yup.number().required("field must be"),
      subscribe: yup.boolean().required("field must be checked"),
    })
    .required();
  type formData = yup.InferType<typeof schema>;
  const {
    formState: { errors },
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const user = useAppSelector((state) => state.currentStaff);
  const getStaff = useQuery({
    queryKey: ["singleStaff"],
    queryFn: () => getOneStaff(user?._id),
  });
console.log("this is getStaff id",user?._id)
console.log("this is getStaff ",getStaff?.data?.data?.wallet)

  return (
    <div>
      <Container>
        <Wrapper>

          {/* <Cards /> */}
          <Mobilecard />
          <Down>
            <Piehold>
                          <Pee>
                              <Title>Performance Chart</Title>
                              <Charts />
                          </Pee>
                      </Piehold>
                  </Down>
        </Wrapper>
      </Container>
    </div>

  )
}

export default ParentComp;

const Pee = styled.div`
    width: 100%;
    margin-top: 15px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      margin-top: 12px;
      margin-bottom: 12px;
    }
`
const Title = styled.div`
    margin-bottom: 10px;
    font-size: 20px;
    text-align: center;
    font-weight: 600;
`
const Piehold = styled.div`
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media screen and (max-width: 768px) {
      width: 90%;
    }
    @media screen and (max-width: 500px) {
      width: 90%;
      margin-top: 16px;
    }
`
const Down = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
`

const Wrapper = styled.div`
  width: 99%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  padding-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
@media screen and (max-width: 500px) {
    width: 100%;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    background-color: #e2e2e2;
    margin-top: 100px;
    padding-right: 0px;
    padding-top: 25px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: calc(100vw - 220px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #F5F7FA;
  padding-bottom: 20px;
  @media screen and (max-width: 500px){
    background-color: #00244E;
    display: flex;
    justify-content: center;
    height: 100%;
  }
@media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
@media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;
