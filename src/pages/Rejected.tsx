import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { RotatingLines } from 'react-loader-spinner'
import { IoMdArrowDropdown } from "react-icons/io"
import {AiOutlineClose} from "react-icons/ai"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UseAppDispach, useAppSelector } from '../components/global/Store'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getOneAdmin, createAdmin } from '../utils/Api/ApiCall'
import { CreateLeave } from '../components/global/ReduxState'

const Rejected = () => {

  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const Toggle1 = () => {
    setShow1(true)
  }

  const Toggle2 = () => {
    setShow2(!show2)
  }

  const Cancle = () => {
    setShow2(false)
  }
  
  useEffect(() => {
   setTimeout(() => {
      setIsLoading(true)
    },2000)

  }, [])

  const admin = useAppSelector((state) => state.currentUser);


  const user = useAppSelector((state) => state.currentUser);
  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(user?._id),
  });
  console.log("this is getAdmin id", user);


  return (
    <Container>
      <Wrapper>
       
        {show1 ? (
          <Down>
          <Inputhold>
            <Input placeholder='All Employees' />
            <Icon><IoMdArrowDropdown /></Icon>
            </Inputhold>

          <Mid>
            {isLoading ? (
            <Table>
              <table>
                <tr>
                  <th>Employee Name</th>
                  <th>Leave Period</th>
                  <th>Days</th>
                  <th>Type</th>
                  <th>Applied On</th>
                  <th>Reason</th>
                </tr>

                <tr>
                  <td>
                  <Circlehold>
                    <Circle>O</Circle>
                    <Name>Okwoli Godwin</Name>
                    </Circlehold>
                  </td>
                  <td>09 May, 2023</td>
                  <td>1 Day</td>
                  <td>Casual Leave</td>
                  <td>
                    07 May, 2023
                  </td>
                  <td>nothing</td>
                  <td>
                  <Hold>
                    <Box2>Rejected</Box2>
                  </Hold>
                </td>
                </tr>
                </table>
                <Plan>On the free plan, you can access the last 14 days of data only. Upgrade to the Pro plan to get the historical data.</Plan>
            </Table>
            ) : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"/>}
          </Mid>
          
        </Down>
        ) : null}
      </Wrapper>
    </Container>
  )
}

export default Rejected

const Plan = styled.div`
  margin-top: 19px;
  color: grey;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 50px;
`
const Mid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  flex-direction: column;
  align-items: center;
`
const Hold = styled.div`
  display: flex;
`
const Name = styled.div`
    color: #34495e;
    font-size: .9rem;
    margin-left: 5px;
`
const Circlehold = styled.div`
  display: flex;
  align-items: center;
`


const Box2 = styled.div`
  color: #dc3545;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .875rem;
  line-height: 1.5;
  width: 90px;
  height: 35px;
  font-weight: 400;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 10px;
`

const Circle = styled.div`
  width: 40px;
  height: 40px;
  margin: 3px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-weight: 500;
  color: #fff;
  border-radius: 50px;
  background-color: #40baab;

  @media screen and (max-width: 900px) {
    height: 30px;
    width: 30px;
    font-size: 12px;
  }
`;
const Table = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  overflow-x: auto;
  margin-top: 40px;
  flex-direction: column;

  table {
    min-width: 400px;
    max-width: 1440px;
    width: 100%;
  }

  table,
  th,
  tr:nth-child(even) {
    background-color: #fff;
  }

  td,
  th {
    padding: 14px 2px;
    text-align: left;
    border-top: 1px solid #e2e5e8;
    padding-left: 18px;
    padding-right: 18px;
  }

  td {
      color: #34495e;
    font-size: .9rem;
    font-weight: 500;
    }
  

  th {
    border-top: 1px solid #e2e5e8;
    background-color: #fefefe;
    padding: 1rem 0.75rem;
    padding-left: 20px;
    padding-right: 20px;
    color: #383838;
    font-size: 16px;
    font-weight: bold;
  }
`;
const Icon = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
`
const Input = styled.input`
  height: 100%;
  border: none;
  outline: none;
  width: 250px;
  border-right: 1px solid rgb(204, 204, 204);
  color: rgb(26, 26, 26);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
  padding-left: 10px;
`
const Inputhold = styled.div`
  -webkit-box-align: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-color: #007bff;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    cursor: default;
    display: flex;
    justify-content: space-between;
    min-height: 43px;
    position: relative;
    transition: all 100ms ease 0s;
    box-sizing: border-box;
    outline: 0px !important;
    width: 300px;
    overflow: hidden;
`
const Down = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 33px;
`
const Pending = styled.div`
  display: flex;
  margin: 18px;
  cursor: pointer;
  h3{
    font-weight: 500;
  font-size: 19px;
  color: #6c757d;
  }
  span{
    margin-left: 7px;
    font-weight: 500;
  font-size: 19px;
  color: #6c757d;
  }
`
const Top = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid lightgray;
`
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
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
  /* margin-top: 20px; */
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;
