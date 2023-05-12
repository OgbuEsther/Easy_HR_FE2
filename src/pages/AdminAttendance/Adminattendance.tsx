import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useAppSelector } from "../../components/global/Store";
import { CgPerformance } from "react-icons/cg";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BsPencilFill } from "react-icons/bs";
import { SiSecurityscorecard } from "react-icons/si";
import axios from "axios";
import { genAttendanceToken, getOneAdmin, url } from "../../utils/Api/ApiCall";
import { useQuery } from "@tanstack/react-query";
import { RotatingLines } from 'react-loader-spinner'
import {IoMdArrowDropdown} from "react-icons/io"
import Inputdate from "../Inputdate/Inputdate";
import AbsentEmployee from "../AbsentEmployee";
import LateEmployees from "../LateEmployees";
import UninformedLeave from "../UninformedLeave";

const Adminattendance: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  const admin = useAppSelector((state) => state.currentUser);

  const [token, setToken] = React.useState("");

  const getAdminToken = useQuery({
    queryKey: ["genToken"],
    queryFn: () => genAttendanceToken(admin?._id),
  });
  // console.log("this is admin",admin?._id)
  // console.log("this is admin22",)

  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const Toggle1 = () => {
    setShow1(true)
    setShow2(false)
    setShow3(false)
    setShow4(false)
  }

  const Toggle2 = () => {
    setShow2(!show2)
    setShow1(false)
    setShow3(false)
    setShow4(false)
  }
  const Toggle3 = () => {
    setShow3(!show3)
    setShow2(false)
    setShow1(false)
    setShow4(false)
  }
  const Toggle4 = () => {
    setShow4(!show4)
    setShow3(false)
    setShow2(false)
    setShow1(false)
  }
  
  useEffect(() => {
   setTimeout(() => {
      setIsLoading(true)
    },2000)

  }, [])

  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(admin?._id),

  });

  console.log("this is todays mapping ", getAdmin?.data?.data?.viewStaffAttendance)

    const [search, setSearch] = React.useState("");
  const [searchProps, setSearchProps] = React.useState<any[]>([]);

  const searchData = async (e: any) => {
    if (e.key === "Enter") {
      await axios
        .get(`https://easyhr.onrender.com/api/staff/search?yourName=${search}`)
        .then((res) => {
          console.log(res.data.data);
          setSearchProps(res.data.data);
          console.log(`searchlog`, setSearchProps)
        });
    }
  };
  

  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
          <Pending bg={show1 ? "red" : ""} onClick={Toggle1}><h3>Today's Attendance</h3><span>{isLoading ? "" : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"/>}</span>
          </Pending>

          <Pending2 bg={show2 ? "red" : ""} onClick={Toggle2}><h3>Absent Employees</h3><span>{isLoading ? "" : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}</span>
          </Pending2>

          <Pending3 bg={show3 ? "red" : ""}  onClick={Toggle3}><h3>Late Employees</h3><span>{isLoading ? "" : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}</span>
          </Pending3>

          <Pending4 bg={show4 ? "red" : ""}  onClick={Toggle3}><h3>History</h3><span>{isLoading ? "" : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}</span>
          </Pending4>

            <Button
              onClick={() => {
                axios
                  .post(`${url}/createattendance/${admin?._id}`)
                  .then((res) => {
                    setToken(res.data.data.setToken);
                  });
              }}
            >
              Generate Token
            </Button>

            <p>{token}</p>
        </Top>

          {show1 ? (
            <div style={{
              width: "100%"
            }}>
              <Down>
            <Inputhold>
            <Input onKeyPress={searchData}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search name " />
            <Icon><IoMdArrowDropdown /></Icon>
            </Inputhold>
            <Inputhold>
              <Inputdate selectedDate={selectedDate} onDateChange={handleDateChange} />
            </Inputhold>
        </Down>
            
              <Mid>
                {isLoading ? (
                   <Two>
            <Title>Today's Attendance:</Title>
            {searchProps.length === 0 ? (
          <>
          
            <Table>
              <table>
                <tr>
                  <th>Employee Name</th>
                  <th>Employee ID</th>
                  <th>Date</th>
                  <th>Check In</th>
                
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {getAdmin?.data?.data?.viewStaffAttendance.map((el: any) => (
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
                   ))} 
              </table>
            </Table>

           
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
                    {getAdmin?.data?.data?.viewStaffAttendance.map((el: any) => (
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
                    ))}
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
                  ) : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"/>}
              </Mid>
            </div>
          ) : null}

          {show2 ? (
            <AbsentEmployee />
          ) : null}

          {show3 ? (
            <LateEmployees />
          ) : null}

          {show4 ? (
            <UninformedLeave />
          ) : null}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Adminattendance;
const Mid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  flex-direction: column;
  align-items: center;
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
  @media screen and (max-width: 500px) {
    width: 220px;
    ::placeholder{
      font-size: 13px;
    }
  }
`
const Inputhold = styled.div`
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-color: #007bff;
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
    width: 300px;
    overflow: hidden;
    margin-left: 20px;
    @media screen and (max-width: 500px) {
      width: 250px;
    }
`
  const Down = styled.div`
  width: 100%;
  display: flex;
  height: 90px;
  border: 1px solid lightgray;
  margin-top: 15px;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: space-around;
    padding-right: 18px;
  }
`
const Pending4 = styled.h3<{ bg: string}>`
  display: flex;
  margin: 14px;
  cursor: pointer;
  border: 1px solid ${({ bg }) => (bg ? "#219653" : "#fff")};
  height: 40px;
  width: 160px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-weight: 500;
  font-size: 19px;
  h3{
    
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
  }
  @media screen and (max-width: 500px) {
    margin: 5px;
    width: 200px;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  span{
    margin-left: 7px;
    font-weight: 500;
  font-size: 19px;
  color: #6c757d;
  }
`
const Pending3 = styled.h3<{ bg: string}>`
  display: flex;
  margin: 14px;
  cursor: pointer;
  border: 1px solid ${({ bg }) => (bg ? "#219653" : "#fff")};
  height: 40px;
  width: 210px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-weight: 500;
  font-size: 19px;
  h3{
    
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
  }
  @media screen and (max-width: 500px) {
    margin: 5px;
    width: 170px;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  span{
    margin-left: 7px;
    font-weight: 500;
  font-size: 19px;
  color: #6c757d;
  }
`
const Pending2 = styled.div<{ bg: string}>`
  display: flex;
  margin: 14px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ bg }) => (bg ? "#219653" : "#fff")};
  height: 40px;
  width: 180px;
  border-radius: 50px;
  font-weight: 500;
  font-size: 19px;
  color: #6c757d;
  h3{
    
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
  }
  @media screen and (max-width: 500px) {
    margin: 5px;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  span{
    margin-left: 7px;
    font-weight: 500;
  font-size: 19px;
  color: #6c757d;
  }
`
const Pending = styled.div<{ bg: string}>`
  display: flex;
  margin: 14px;
  cursor: pointer;
  /* background-color: red; */
  height: 40px;
  border: 1px solid ${({ bg }) => (bg ? "#219653" : "#fff")};
  width: 180px;
  border-radius: 50px;
  font-weight: 500;
  font-size: 19px;
  color: #6c757d;
  justify-content: center;
  align-items: center;
  h3{
    
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
  }
  @media screen and (max-width: 500px) {
    margin: 5px;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
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
  /* height: 70px; */
  align-items: center;
  border-bottom: 1px solid lightgray;
  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    /* height: 140px; */
    padding-bottom: 10px;
  }
`

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

const Action = styled.div`
  display: flex;
`;

const Chc = styled.div`
  color: green;
  font-weight: bold;
`;

const Box = styled.div`
  color: #28a745;
  border-color: #28a745;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .875rem;
  line-height: 1.5;
  width: 90px;
  height: 35px;
  font-weight: 400;
  border-radius: 50px;
  border: 1px solid #28a745;
  outline-color: 2px solid #619c6f;
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

const Button = styled.button`
  width: 145px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 33px; */
  background-color: #1f337c;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  color: #fff;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const Word = styled.div`
  font-weight: 500;
  font-size: 26px;
  color: rgb(31, 31, 31);
  background-color: rgba(0, 0, 0, 0);
  line-height: 31.2px;
  text-decoration: none solid rgb(31, 31, 31);
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;
  margin-top: 30px;

  span {
    color: rgb(51, 51, 51);
    background-color: rgba(0, 0, 0, 0);
    font-size: 18px;
    line-height: 24px;
    letter-spacing: normal;
    font-weight: 500;
    text-decoration: none solid rgb(51, 51, 51);
    text-align: left;
  }

  a {
    text-decoration: none;

    :hover {
      color: black;
    }
  }
`;

const One = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: red; */
  @media screen and (max-width: 500px) {
    padding-top: 120px;
  }
`;

const Container = styled.div`
  width: calc(100vw - 220px);
  background-color: #f5f7fa;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;
