import React, {useState} from 'react'
import styled from "styled-components"
import {IoMdArrowDropdown} from "react-icons/io"
import Inputdate from "./Inputdate/Inputdate";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BsPencilFill } from "react-icons/bs";
// import axios from 'axios';
import { useAppSelector } from '../components/global/Store';
import { useQuery } from '@tanstack/react-query';
import {  getOneAdmin } from '../utils/Api/ApiCall';
const LateEmployees = () => {

     const [selectedDate, setSelectedDate] = useState<Date>(new Date());
        const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  const admin = useAppSelector((state) => state.currentUser);


  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(admin?._id),
  });

  // const [search, setSearch] = React.useState("");
  const [searchProps, setSearchProps] = React.useState<any[]>([]);

  // const searchData = async (e: any) => {
  //   if (e.key === "Enter") {
  //     await axios
  //       .get(`https://easyhr.onrender.com/api/staff/search?yourName=${search}`)
  //       .then((res) => {
  //         console.log(res.data.data);
  //         setSearchProps(res.data.data);
  //         console.log(`searchlog`, setSearchProps)
  //       });
  //   }
  // };

  return (
      <Container>
          <Wrapper>
              <Down>
            <Inputhold width="300px">
            <Input placeholder='All Employees' />
            <Icon><IoMdArrowDropdown /></Icon>
            </Inputhold>
            <Inputhold width="120px">
              <Inputdate selectedDate={selectedDate} onDateChange={handleDateChange} />
            </Inputhold>
        </Down>
            
            <Two>
            <Title>Late Employees:</Title>

            {searchProps.length === 0 ? (
          <>
            {getAdmin?.data?.data?.viewLateStaff.map((el: any) => (
            <Table>
              <table>
                <tr>
                  <th>Employee Name</th>
                  <th>Employee ID</th>
                  <th>Department</th>
                  <th>Check In</th>
                  <th>Shift</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

                <tr>
                <td>
                    <Circlehold>
                    <Circle>O</Circle>
                    <Name>{el?.nameOfStaff}</Name>
                    </Circlehold>
                  </td>
                  <td>{getAdmin?.data?.data?.companyCode}</td>
                  <td>{el?.date}</td>
                  <td>
                    <Chc>{el?.time}</Chc>
                  </td>
                  <td>
                  {
                    getAdmin?.data?.data?.expectedClockIn <=el?.time ? (
                      <>
                        <Box>Early</Box>
                      </>
                    ):(
                      <>
                       <Box>Late</Box>
                      </>
                    )
                  }
                  </td>
                  <td>
                    <Action>
                      <Cir>
                        <BsPencilFill />
                      </Cir>
                      <Cir1>
                        <RiDeleteBin2Line />
                      </Cir1>
                    </Action>
                  </td>
                </tr>
              </table>
            </Table>

              ))} 
          </>
        ) :(
          <>
          {searchProps?.length >= 1 ? (
            <>
              {searchProps?.map((el: any) => (
                  <Table>
                  <table>
                    <tr>
                      <th>Employee Name</th>
                      <th>Employee ID</th>
                      <th>Department</th>
                      <th>Check In</th>
                      <th>Shift</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
    
                    <tr>
                      <td>
                        <Circlehold>
                        <Circle>O</Circle>
                        <Name>Okwoli Godwin</Name>
                        </Circlehold>
                      </td>
                      <td>1001</td>
                      <td>Development</td>
                      <td>
                        <Chc>10:28</Chc>
                      </td>
                      <td>Shift 1</td>
                      <td>
                        <Box>Present</Box>
                      </td>
                      <td>
                        <Action>
                          <Cir>
                            <BsPencilFill />
                          </Cir>
                          <Cir1>
                            <RiDeleteBin2Line />
                          </Cir1>
                        </Action>
                      </td>
                    </tr>
                  </table>
                </Table>
                  ))} 
                  </>
                ) :(
                  <>
                  <p>oops!! staff doesn't exist</p>
                  </>
                )}
              </>
            )}
          </Two>
          </Wrapper>
    </Container>
  )
}

export default LateEmployees

const Action = styled.div`
  display: flex;
`;

const Cir = styled.div`
  margin: 5px;
  border-radius: 50px;
  background-color: green;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Cir1 = styled.div`
  margin: 5px;
  border-radius: 50px;
  background-color: red;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;





const Chc = styled.div`
  color: green;
  font-weight: bold;
`;

const Box = styled.div`
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1.5;
  width: 90px;
  height: 35px;
  font-weight: 500;
  border-radius: 50px;
  cursor: pointer;
`;

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
  color: black;
  background-color: blanchedalmond;
  border: 1px solid black;
  border-radius: 50px;

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
  margin-top: 50px;

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
    @media screen and (max-width: 900px) {
      font-size: 12px;
    }
  }

  th {
    border-top: 1px solid #e2e5e8;
    background-color: #fefefe;
    padding: 1rem 0.75rem;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 19px;
  margin-top: 30px;
  margin-left: 20px;
`;

const Two = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 15px;
`;
const Name = styled.div`
    color: #34495e;
    font-size: .9rem;
    margin-left: 5px;
`
const Circlehold = styled.div`
  display: flex;
  align-items: center;
`
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
const Inputhold = styled.div<{width:string}>`
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-color: #001328;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    cursor: default;
    display: flex;
    justify-content: space-between;
    height: 43px;
    transition: all 100ms ease 0s;
    box-sizing: border-box;
    outline: 0px !important;
    width: ${(props)=>props.width};
    overflow: hidden;
    margin-left: 20px;

    @media screen and (max-width: 500px) {
      width: 250px;
    }
`
  const Down = styled.div`
  width: 500px;
  display: flex;
  height: 90px;
  /* border-top: 1px solid lightgray; */
  margin-top: 30px;
  align-items: center;
  background-color:white;
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: space-around;
    padding-right: 18px;
  }
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 14px;
  flex-direction: column;
  /* background-color: red; */
`;
const Container = styled.div`
    width: 100%;
    display: flex;
`