import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { RotatingLines } from 'react-loader-spinner'
import { IoMdArrowDropdown } from "react-icons/io"



import {  useAppSelector } from '../components/global/Store'
import {  useQuery } from '@tanstack/react-query'
import { getOneAdmin } from '../utils/Api/ApiCall'


const AllLeave = () => {

  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  
  useEffect(() => {
   setTimeout(() => {
      setIsLoading(true)
    },2000)

  }, [])

 

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
                  <th>Leave type</th>
                  <th>Leave Period</th>
                </tr>
                {getAdmin?.data?.data?.adminLeave?.map((el: any) => (
                <tr>
                  <td>{el?.title}</td>
                  <td>{el?.days} Days</td>
                </tr>
                   ))}
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

export default AllLeave


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
