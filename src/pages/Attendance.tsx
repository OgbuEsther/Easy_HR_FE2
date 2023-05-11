import React, { useState } from "react";
import styled from "styled-components";


import InputStaffAttendance from "./InputFieldAttendance/InputStaffAttendance";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOneAdmin, getOneStaff } from "../utils/Api/ApiCall";
import { useAppSelector } from "../components/global/Store";

// const Option = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "chocolate", label: "Chocolate" },
//   { value: "chocolate", label: "Chocolate" },
// ];

const Attendance: React.FC = () => {
  const [value, setValue] = useState("");
  const [annualcheck, setannualCheck] = useState(false);
  const [examchecker, setexamCheck] = useState(false);
  const [sickchecker, setsickCheck] = useState<boolean>(false);
  const [mathanitychecker, setmathanityCheck] = useState<boolean>(false);
  const [certificationchecker, setcertificationCheck] =
    useState<boolean>(false);

  const navigate = useNavigate();

  const [PunchStateChanger, setPunchStateChanger] = useState(true);
  const [width, setWidth] = useState(0);
  const [show, setShow] = useState(false);

  const Removetoken = () => {
    setShow(false);
  };

  const annualchecker = () => {
    setannualCheck(true);
    setexamCheck(false);
    setsickCheck(false);
    setcertificationCheck(false);
    setmathanityCheck(false);
    navigate("/staffdashboard/leave-form");
  };

  const ExamChecker = () => {
    setannualCheck(false);
    setexamCheck(true);
    setsickCheck(false);
    setcertificationCheck(false);
    setmathanityCheck(false);
  };

  const Sickchecker = () => {
    setsickCheck(true);
    setannualCheck(false);
    setexamCheck(false);
    setcertificationCheck(false);
    setmathanityCheck(false);
  };
  const Mathanitychecker = () => {
    setmathanityCheck(true);
    setannualCheck(false);
    setexamCheck(false);
    setsickCheck(false);
    setcertificationCheck(false);
  };
  const Certificationchecker = () => {
    setcertificationCheck(true);
    setannualCheck(false);
    setexamCheck(false);
    setsickCheck(false);
    setmathanityCheck(false);
  };

  // const int = () => {
  //   setWidth(width + 10);
  // };

  const Toggle = () => {
    setShow(true);
  };

  // const PunchStateChangerFunction = () => {
  //   setPunchStateChanger(!PunchStateChanger);
  // };

  console.log("this is value: " + value);

  const user = useAppSelector((state) => state.currentStaff);

  //admin

  const admin = useAppSelector((state) => state.currentUser);
  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(admin?._id),
  });

  const total = useAppSelector((state)=> state.leave)

  const clockin = useAppSelector((state) => state.clockIn);
  const late = useAppSelector((state) => state.late);


  const [early , setEarly] = useState({})



  //api consumption

  return (
    <AttendancePage>
      <AttendanceMainPage>
      <Word>
        Attendance <br />
           <span>
          <a href="/dashboard">
          Dashboard
          </a>
           / Employee Attendance
           </span>
          </Word>

          <StaffDetail>

           <Details>
            <Pic>
              DC
            </Pic>
            <Div>
              <Name>
                Valerian Pedro
              </Name>
              <Post>
                Full Stack Developer
              </Post>
            </Div>
           </Details>

           <Employee>
           <Name>
           Employee ID
              </Name>
              <Post>
              IM062587UT
              </Post>
           </Employee>
           <Employee>
           <Name>
           Joining Date
              </Name>
              <Post>
              3 April 2033
              </Post>
           </Employee>
           <Employee>
           <Name>
           Department
              </Name>
              <Post>
               API Consumption
              </Post>
           </Employee>
         </StaffDetail>

        <StatisticColumn>
          <Card className="one">
            <CardTitle>
              Timesheet <span>{
                early ?(
                  <>
                   {clockin?.date} 
                  </>
                ): (
                  <>
                  {late?.data} 
                  </>
                )} </span>
            </CardTitle>

            <CardContent>
              <PunchInRecord>
                <PunchInat>Punch In at</PunchInat>
                <Date>{`${clockin?.date} ${clockin?.time}`}</Date>
              </PunchInRecord>
              <CircleTimerHold>
                <CircleTimer>
                  <Timer>{clockin?.time} </Timer>
                </CircleTimer>
                <PunchButton onClick={Toggle}>Punch In</PunchButton>

                <PunchButton onClick={Toggle}>Punch Out</PunchButton>
              </CircleTimerHold>

              {/* <BreakAndOvertime>
                <BreakBox>
                  <BreakText>Break</BreakText>
                  <HourText>1.21 hrs</HourText>
                </BreakBox>
                <OverTimeBox>
                  <OverTimeText>Over</OverTimeText>
                  <HourText>3.21 hrs</HourText>
                </OverTimeBox>
              </BreakAndOvertime> */}
            </CardContent>
          </Card>
          <Card className="two">
            <CardTitle>Leave Stats</CardTitle>
           
              <CardContent>
                 {getAdmin?.data?.data?.adminLeave?.map((el: any) => (
                <StatisticsMeasureColumn className="today">
                  <DayAndHourColumn>
                    <Day>
                    {el?.title}
                    </Day>
                    <HourMeasure>
                     Total Days :{el?.days}
               
                    </HourMeasure>
                  </DayAndHourColumn>
                  <ProgressBarHold>
                    <ProgressBar width={width}></ProgressBar>
                    {/* <button onClick={int}>click me</button> */}
                  </ProgressBarHold>
                </StatisticsMeasureColumn>
                ))}
              </CardContent>
            
          </Card>
          <Card className="three">
            <CardTitle>Apply For Leave</CardTitle>
            <CardContent>
              <LeaveOptionForm>
                <OptionInputHold
                  cl={annualcheck ? "white" : "black"}
                  bd={annualcheck ? "none" : "silver"}
                  onClick={annualchecker}
                  bg={annualcheck ? "blue" : ""}
                >
                  <Label htmlFor="html">Anuual</Label>
                  <OptionInput
                    className="annual"
                    type="radio"
                    checked={annualcheck ? true : false}
                    name="annual"
                    id="html"
                    value="annual"
                  />
                </OptionInputHold>

                <OptionInputHold
                  cl={examchecker ? "white" : "black"}
                  bd={examchecker ? "none" : "silver"}
                  onClick={ExamChecker}
                  bg={examchecker ? "blue" : ""}
                >
                  <Label>Exam</Label>{" "}
                  <OptionInput
                    className="annual"
                    type="radio"
                    checked={examchecker ? true : false}
                    name="annual"
                    id="html"
                  />
                </OptionInputHold>

                <OptionInputHold
                  cl={sickchecker ? "white" : "black"}
                  bd={sickchecker ? "none" : "silver"}
                  onClick={Sickchecker}
                  bg={sickchecker ? "blue" : ""}
                >
                  <Label>Sick</Label>{" "}
                  <OptionInput
                    className="annual"
                    type="radio"
                    checked={sickchecker ? true : false}
                    name="annual"
                    id="html"
                  />
                </OptionInputHold>

                <OptionInputHold
                  cl={mathanitychecker ? "white" : "black"}
                  bd={mathanitychecker ? "none" : "silver"}
                  onClick={Mathanitychecker}
                  bg={mathanitychecker ? "blue" : ""}
                >
                  <Label>Maternity</Label>{" "}
                  <OptionInput
                    className="annual"
                    type="radio"
                    checked={mathanitychecker ? true : false}
                    name="annual"
                    id="html"
                  />
                </OptionInputHold>

                <OptionInputHold
                  cl={certificationchecker ? "white" : "black"}
                  bd={certificationchecker ? "none" : "silver"}
                  onClick={Certificationchecker}
                  bg={certificationchecker ? "blue" : ""}
                >
                  <Label>Sick</Label>{" "}
                  <OptionInput
                    className="annual"
                    type="radio"
                    checked={certificationchecker ? true : false}
                    name="annual"
                    id="html"
                  />
                </OptionInputHold>
              </LeaveOptionForm>
            </CardContent>
          </Card>
        </StatisticColumn>

        
        {/* <TimingColumn>
          <TimeCard className="date">
            <DateText>2023-04-21</DateText>
            <Icon>
              <BsCalendar4Event />
            </Icon>
          </TimeCard>
          <TimeCard className="select">
            <Select
              defaultInputValue={selectOption}
              onChange={setSelectOption}
              options={Option}
              placeholder="choose an option"
            />
          </TimeCard>
          <TimeCard className="select">
            <Select
              defaultInputValue={selectOption}
              onChange={setSelectOption}
              options={Option}
              placeholder="choose an option"
            />
          </TimeCard>

          <SearchButton>Search</SearchButton>
        </TimingColumn> */}

        <LastComp>
          <First>
            <Part>
              <Up>
                08:00 Hrs
              </Up>
              <Down>
              Average Working Hours
              </Down>
            </Part>
            <Part>
              <Up>
              10:30 AM
              </Up>
              <Down>
              Average In Time
              </Down>
            </Part>
            <Part>
              <Up>
              07:30 PM
              </Up>
              <Down>
              Average Out Time
              </Down>
            </Part>
            <Part>
              <Up>
              01:00 Hr
              </Up>
              <Down>
              Average Break Time
              </Down>
            </Part>
          </First>

          <Table>
          <table>
            <tr>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Working Hours</th>
              <th>Status</th>
            </tr>

            <tr>
              <td>
              {/* {clockin?.date}  */}
              10-02-2023
              </td>
              <td>
              <Time>
                10:28
                </Time>
              </td>
              <td> 
                <Time>
                10:28
                </Time>
              </td>
              <td>
                 <Time>
                10:28
                </Time>
              </td>
              <td>
                <Box>
                  Present
                </Box>
              </td>
            </tr>

          

            <tr>
              <td>
              {/* {clockin?.date}  */}
              31-03-2090
              </td>
              <td>
              <Time1>
                10:50
                </Time1>
              </td>
              <td> 
                <Time>
                10:54
                </Time>
              </td>
              <td>
                 <Time1>
                10:28
                </Time1>
              </td>
              <td>
                <Box1>
                  Absent
                </Box1>
              </td>
            </tr>
          </table>
         </Table>
        </LastComp>
        

        {show ? (
          <Holds>
            <InputStaffAttendance />
            <Icron onClick={Removetoken}>
              <MdOutlineCancel />
            </Icron>
          </Holds>
        ) : null}
      </AttendanceMainPage>
    </AttendancePage>
  );
};

export default Attendance;
// TABLE STYLING AREA

const Time = styled.div`
color: green;
font-weight: bold;
`
const Time1 = styled.div`
color: red;
font-weight: bold;
`

const Chc = styled.div`
color: green;
font-weight: bold;
`

const Box1 = styled.div`
  border: 1px solid red;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
`
const Box = styled.div`
  border: 1px solid green;
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
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
color: black;
background-color: blanchedalmond;
border: 1px solid black;
border-radius: 50px;

@media screen and (max-width: 900px) {
  height: 30px;
  width: 30px;
  font-size: 12px;
}`

const Table = styled.div`
display: flex;
height: auto;
width: auto;
justify-content: flex-start;
align-items: center;
margin-bottom: 10px;
overflow-x: auto;
margin-top: 20px;

table{
  min-width: 400px;
  max-width: 1440px;
  width: 100%;
}

table,th,tr:nth-child(even){
  background-color: #fff;
}

td,th{
  padding: 14px 2px;
  text-align: left;
  border-top: 1px solid #e2e5e8;
  padding-left: 18px;
  padding-right: 18px;
}

td{
  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
}



th{
  border-top: 1px solid #e2e5e8;
  background-color: #fefefe;
  padding: 1rem 0.75rem;
  padding-left: 20px;
  padding-right: 20px;

}

`

const Down = styled.div``

const Up = styled.div`
color: green;
font-weight: 600;
font-size: 21px;
`

const Part = styled.div`
margin-left: 30px;
margin-right: 30px;
text-align: center;
margin-top: 30px;
`

const First = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
/* background-color: yellow; */
`

const LastComp = styled.div`
  width: 1000px;
background-color:white;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
/* background-color: red; */
border-radius: 10px;
margin-top: 20px;
`

const Employee = styled.div`
margin-right: 30px;
`

const Post = styled.div`
font-weight: 500;
font-size: 14px;
`

const Name = styled.div`
font-weight: 600;
font-size: 20px;
`

const Div = styled.div`
margin: 9px;
`

const Pic = styled.div`
width: 45px;
height: 45px;
margin: 3px;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
font-weight: 500;
color: black;
background-color: blanchedalmond;
border: 2px solid black;
border-radius: 50px;

@media screen and (max-width: 900px) {
  height: 30px;
  width: 30px;
  font-size: 12px;
}
`

const Details = styled.div`
display: flex;
align-items: center;
margin-left: 10px;
`

const StaffDetail = styled.div`
background-color: white;
width: 1000px;
border-radius: 10px;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
/* box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px; */
`


const Word = styled.div`
font-weight: 500;
font-size: 26px;
color: rgb(31,31,31);
background-color: rgba(0,0,0,0);
line-height: 31.2px;
text-decoration: none solid rgb(31,31,31);
text-align: start;
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-bottom: 30px;
margin-top: 30px;

span{
  color: rgb(51,51,51);
  background-color: rgba(0,0,0,0);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: normal;
  font-weight: 500;
  text-decoration: none solid rgb(51,51,51);
  text-align: left;
}

a{
  text-decoration: none;

  :hover{
    color: black;
  }
}
`


// Apply for leave

const Label = styled.label`
  font-size: medium;
  font-weight: 550;
  cursor: pointer;
`;

const OptionInput = styled.input`
  cursor: pointer;
`;

const OptionInputHold = styled.div<{ bg: string; bd: string; cl: string }>`
  height: 40px;
  width: auto;
  background-color: ${({ bg }) => bg};
  color: ${({ cl }) => cl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
  margin-top: 12px;
  border: 1px solid ${({ bd }) => bd};
  cursor: pointer;
`;

const LeaveOptionForm = styled.form`
  height: auto;
  width: auto;
  transition: all 390ms;
`;

const Icron = styled.div`
  position: absolute;
  font-size: 25px;
  right: 33%;
  color: #fff;
  cursor: pointer;
  top: 200px;
  cursor: pointer;
  z-index: 9;
`;

const Holds = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
`;

// Timing styling area
const DateText = styled.div``;

const SearchButton = styled.button`
  height: 40px;
  width: 180px;
  font-size: 16px;
  font-weight: 600;
  background-color: white;
  margin-left: 20px;
  border-radius: 4px;
  border: none;
  background-color: #079b2e;
  margin-bottom: 10px;
  color: white;
`;

const TimeCard = styled.div`
  height: auto;
  width: 240px;
  background-color: white;
  margin-left: 20px;
  border-radius: 4px;
  margin-bottom: 10px;
  outline: none;
`;

const TimingColumn = styled.div`
  height: auto;
  width: auto;
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  .date {
    border: 1px solid silver;
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0px 10px;
    justify-content: space-between;
  }
`;

// Leave stats area
const Icon = styled.div`
  height: auto;
  width: auto;
  color: silver;
  margin-top: 6px;
  margin-right: 1px;
  font-weight: 600;
`;

const ProgressBar = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  height: 10px;
  background-color: blue;
  border-radius: 50px;
  transition: width 0.5s ease;
`;

const ProgressBarHold = styled.div`
  width: 90%;
  height: auto;
  background-color: #ddd;
  margin-top: 10px;
  border-radius: 50px;
`;

const HourMeasure = styled.div`
  height: auto;
  width: auto;
`;

const Day = styled.div`
  height: auto;
  width: auto;
`;

const DayAndHourColumn = styled.div`
  height: auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
`;

const StatisticsMeasureColumn = styled.div`
  height: 50px;
  width: auto;
  margin-top: 10px;
  border: 1px solid #c5c5c5;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #989898;
`;

const PunchInat = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const Timer = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #6b6b6b;
`;
const OverTimeText = styled.div``;

const OverTimeBox = styled.div`
  height: 50px;
  width: 120px;
  border: 1px solid silver;
  border-radius: 4px;
  background-color: #cfcdcd29;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  flex-direction: column;
  font-size: 12px;
`;

const BreakBox = styled.div`
  height: 50px;
  width: 120px;
  text-align: center;
  border: 1px solid silver;
  border-radius: 4px;
  background-color: #cfcdcd29;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  font-size: 12px;
`;

const HourText = styled.div``;
const BreakText = styled.div``;

const BreakAndOvertime = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 20px;
`;

const PunchButton = styled.button`
  height: 50px;
  width: 180px;
  background-color: #1F337C;
  border: 2px solid #1F337C;
  color: white;
  border-radius: 100px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 960ms;

  :hover{
    color:#1F337C;
    background-color: whitesmoke;
  }
`;

const CircleTimer = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 100%;
  border: 2px solid silver;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #a8a8a86d;
`;

const CircleTimerHold = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

const PunchInRecord = styled.div`
  height: 50px;
  width: auto;
  border-radius: 7px;
  border: 1px solid #cfcdcd;
  margin-top: 10px;
  background-color: #cfcdcd29;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardContent = styled.div`
  height: auto;
  width: auto;
`;

const CardTitle = styled.h4`
  height: auto;
  width: auto;
  margin: 0px;
  font-size: 20px;
  text-align: start;
  font-weight: 600;
  padding-top: 10px;

  span {
    color: silver;
  }
`;

const Card = styled.div`
  height: auto;
  width: 300px;
  background-color: white;
  box-shadow: 1px 1px 3px 1px rgba(166, 165, 165, 0.5);
  margin-left: 30px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-bottom: 18px;
  padding-right: 10px;
`;

const StatisticColumn = styled.div`
  height: auto;
  width: auto;
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
  align-items: flex-start;
  flex-wrap: wrap;
`;

// Title and BreadCrum styling area
const TitleAndBreadCrumColumn = styled.div`
  height: 100px;
  width: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 30px;
`;

const BreadCrum = styled.h4`
  margin: 0px;
`;

const Title = styled.h1`
  margin: 0px;
`;

// Attendance main Page
const AttendanceMainPage = styled.div`
  height: auto;
  width: calc(100vw - 320px);
  padding-bottom: 30px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

// Attendance Page
const AttendancePage = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 100px;
`;
