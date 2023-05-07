import React, { useState } from "react";
import styled from "styled-components";

import Select from "react-select";
import { BsCalendar4Event } from "react-icons/bs";
import InputStaffAttendance from "./InputFieldAttendance/InputStaffAttendance";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOneAdmin, getOneStaff } from "../utils/Api/ApiCall";
import { useAppSelector } from "../components/global/Store";

const Option = [
  { value: "chocolate", label: "Chocolate" },
  { value: "chocolate", label: "Chocolate" },
  { value: "chocolate", label: "Chocolate" },
];

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

  const int = () => {
    setWidth(width + 10);
  };

  const Toggle = () => {
    setShow(true);
  };

  const PunchStateChangerFunction = () => {
    setPunchStateChanger(!PunchStateChanger);
  };

  console.log("this is value: " + value);

  const user = useAppSelector((state) => state.currentStaff);
  const getStaff = useQuery({
    queryKey: ["singleStaff"],
    queryFn: () => getOneStaff(user?._id),
  });
  //admin

  const admin = useAppSelector((state) => state.currentUser);
  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(admin?._id),
  });

  const total = useAppSelector((state)=> state.leave)

  const clockin = useAppSelector((state) => state.clockIn);
  const clockout = useAppSelector((state) => state.clockOut);

  const [selectOption, setSelectOption] = useState<any>(null);

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
                Valerian Pedro
              </Name>
              <Post>
                Full Stack Developer
              </Post>
           </Employee>
           <Employee>
           <Name>
                Valerian Pedro
              </Name>
              <Post>
                Full Stack Developer
              </Post>
           </Employee>
           <Employee>
           <Name>
                Valerian Pedro
              </Name>
              <Post>
                Full Stack Developer
              </Post>
           </Employee>
         </StaffDetail>

        <StatisticColumn>
          <Card className="one">
            <CardTitle>
              Timesheet <span>{clockin?.date} </span>
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
        <TimingColumn>
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
        </TimingColumn>
        <TableSectionHold>
          <TableSection>
            <TableColumn>
              <TableHead className="number-sign">#</TableHead>
              <TableHead className="date-head">Date</TableHead>
              <TableHead className="punch-head">Punch In</TableHead>
              <TableHead className="punch-head">Punch Out</TableHead>
              <TableHead className="production-head">Production</TableHead>
              <TableHead className="break-head">Break</TableHead>
              <TableHead className="over-time-head">Over Time</TableHead>
            </TableColumn>

            <TableColumn>
              <TableNumber className="number">1</TableNumber>
              <TableDown className="date">{clockin?.date} </TableDown>
              <TableDown className="punch"> {clockin?.time}</TableDown>
              <TableDown className="punch"> {clockout?.time}</TableDown>
              <TableDown className="production">9hrs</TableDown>
              <TableDown className="break">1hr</TableDown>
              <TableDown className="over-time">0</TableDown>
            </TableColumn>
          </TableSection>
        </TableSectionHold>

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
background-color: blanchedalmond;
width: 1000px;
border-radius: 10px;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
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

// Table styling area

const TableNumber = styled.td`
  padding: 10px 0px;
  padding-left: 10px;
`;

const TableDown = styled.td`
  height: auto;
  text-align: start;
  padding: 10px 0px;
  width: auto;
`;

const TableHead = styled.th`
  height: auto;
  width: 160px;
  text-align: start;
  padding: 10px 0px;
`;

const TableColumn = styled.tr`
  height: auto;
  width: auto;

  .number-sign {
    width: 50px;
    padding-left: 10px;
  }
`;

const TableSectionHold = styled.div`
  height: auto;
  width: auto;
  overflow: auto;
`;

const TableSection = styled.div`
  height: auto;
  width: 900px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border-top: 1px solid #cfcfcfbe;
  border-radius: 4px;

  tr:nth-child(even) {
    background-color: #cfcfcfbe;
    width: 900px;
  }
  box-shadow: 1px 1px 10px 1px rgba(105, 105, 105, 0.1);
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
  background-color: blue;
  border: 2px solid blue;
  color: white;
  border-radius: 100px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 960ms;
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
  padding-bottom: 50px;
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
