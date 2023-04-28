import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";
import Select from "react-select";
import { BsCalendar4Event } from "react-icons/bs";
import InputStaffAttendance from "./InputFieldAttendance/InputStaffAttendance";
import { MdOutlineCancel } from "react-icons/md";

const Option = [
  { value: "chocolate", label: "Chocolate" },
  { value: "chocolate", label: "Chocolate" },
  { value: "chocolate", label: "Chocolate" },
];

const Attendance: React.FC = () => {
  const [PunchStateChanger, setPunchStateChanger] = useState(true);
  const [width, setWidth] = useState(0);
  const [show, setShow] = useState(false)

   const Removetoken = () => {
    setShow(false);
  };

  const Toggle = () => {
    setShow(true)
  }

  const PunchStateChangerFunction = () => {
    setPunchStateChanger(!PunchStateChanger);
  };

  const [selectOption, setSelectOption] = useState<any>(null);

  //api consumption
  


  return (
    <AttendancePage>
      <AttendanceMainPage>
        <TitleAndBreadCrumColumn>
          <Title>Attendance</Title>
          <BreadCrum>
            Dashboard/ <span style={{ color: "#929292" }}>Attendance</span>{" "}
          </BreadCrum>
        </TitleAndBreadCrumColumn>
        <StatisticColumn>
          <Card className="one">
            <CardTitle>
              Timesheet <span>11 May 2019</span>
            </CardTitle>
            <CardContent>
              <PunchInRecord>
                <PunchInat>Punch In at</PunchInat>
                <Date>Wed, 11th Mar 2019 10.00 AM</Date>
              </PunchInRecord>
              <CircleTimerHold>
                <CircleTimer>
                  <Timer>3.45 hrs</Timer>
                </CircleTimer>
                {PunchStateChanger ? (
                  <PunchButton onClick={Toggle}>
                    Punch In
                  </PunchButton>
                ) : (
                  <PunchButton onClick={PunchStateChangerFunction}>
                    Punch Out
                  </PunchButton>
                )}
              </CircleTimerHold>

              <BreakAndOvertime>
                <BreakBox>
                  <BreakText>Break</BreakText>
                  <HourText>1.21 hrs</HourText>
                </BreakBox>
                <OverTimeBox>
                  <OverTimeText>Over</OverTimeText>
                  <HourText>3.21 hrs</HourText>
                </OverTimeBox>
              </BreakAndOvertime>
            </CardContent>
          </Card>
          <Card className="two">
            <CardTitle>Statistics</CardTitle>

            <CardContent>
              <StatisticsMeasureColumn className="today">
                <DayAndHourColumn>
                  <Day>Today</Day>
                  <HourMeasure>3.45 / {width} hrs</HourMeasure>
                </DayAndHourColumn>
                <ProgressBarHold>
                  <ProgressBar width={width}></ProgressBar>
                </ProgressBarHold>
              </StatisticsMeasureColumn>

              <StatisticsMeasureColumn className="week">
                <DayAndHourColumn>
                  <Day>Week</Day>
                  <HourMeasure>28 / 40 hrs</HourMeasure>
                </DayAndHourColumn>
                <ProgressBarHold>
                  <ProgressBar width={width}></ProgressBar>
                </ProgressBarHold>
              </StatisticsMeasureColumn>
              <StatisticsMeasureColumn className="month">
                <DayAndHourColumn>
                  <Day>Month</Day>
                  <HourMeasure>90 / 160 hrs</HourMeasure>
                </DayAndHourColumn>
                <ProgressBarHold>
                  <ProgressBar width={width}></ProgressBar>
                </ProgressBarHold>
              </StatisticsMeasureColumn>
              <StatisticsMeasureColumn className="remaining">
                <DayAndHourColumn>
                  <Day>Remaining</Day>
                  <HourMeasure>90 / 160 hrs</HourMeasure>
                </DayAndHourColumn>
                <ProgressBarHold>
                  <ProgressBar width={width}></ProgressBar>
                </ProgressBarHold>
              </StatisticsMeasureColumn>
              <StatisticsMeasureColumn className="over-time">
                <DayAndHourColumn>
                  <Day>Overtime</Day>
                  <HourMeasure>90/160 hrs / 160 hrs</HourMeasure>
                </DayAndHourColumn>
                <ProgressBarHold>
                  <ProgressBar width={width}></ProgressBar>
                </ProgressBarHold>
              </StatisticsMeasureColumn>
            </CardContent>
          </Card>
          <Card className="three">
            <CardTitle>Today Activity</CardTitle>

            <CardContent>
              <PunchActivities>
                <PunchMain>
                  <PunchInActivities>
                    <PunchInTitle>Punch In at</PunchInTitle>
                    <PunchInTime>
                      {" "}
                      <Icon>
                        <AiOutlineClockCircle />
                      </Icon>{" "}
                      10.00 AM
                    </PunchInTime>
                  </PunchInActivities>
                  <PunchOutActivities>
                    <PunchOutTitle>Punch Out at</PunchOutTitle>
                    <PunchOutTime>
                      {" "}
                      <Icon>
                        <AiOutlineClockCircle />
                      </Icon>{" "}
                      10.00 AM
                    </PunchOutTime>
                  </PunchOutActivities>
                </PunchMain>
              </PunchActivities>
              <PunchActivities>
                <PunchMain>
                  <PunchInActivities>
                    <PunchInTitle onClick={Toggle}>Punch In at</PunchInTitle>
                    <PunchInTime>
                      {" "}
                      <Icon>
                        <AiOutlineClockCircle />
                      </Icon>{" "}
                      10.00 AM
                    </PunchInTime>
                  </PunchInActivities>
                  <PunchOutActivities>
                    <PunchOutTitle>Punch Out at</PunchOutTitle>
                    <PunchOutTime>
                      {" "}
                      <Icon>
                        <AiOutlineClockCircle />
                      </Icon>{" "}
                      10.00 AM
                    </PunchOutTime>
                  </PunchOutActivities>
                </PunchMain>
              </PunchActivities>
              <PunchActivities>
                <PunchMain>
                  <PunchInActivities>
                    <PunchInTitle>Punch In at</PunchInTitle>
                    <PunchInTime>
                      {" "}
                      <Icon>
                        <AiOutlineClockCircle />
                      </Icon>{" "}
                      10.00 AM
                    </PunchInTime>
                  </PunchInActivities>
                  <PunchOutActivities>
                    <PunchOutTitle>Punch Out at</PunchOutTitle>
                    <PunchOutTime>
                      {" "}
                      <Icon>
                        <AiOutlineClockCircle />
                      </Icon>{" "}
                      10.00 AM
                    </PunchOutTime>
                  </PunchOutActivities>
                </PunchMain>
              </PunchActivities>
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
              <TableDown className="date">19 Feb 2019</TableDown>
              <TableDown className="punch">10AM</TableDown>
              <TableDown className="punch">7PM</TableDown>
              <TableDown className="production">9hrs</TableDown>
              <TableDown className="break">1hr</TableDown>
              <TableDown className="over-time">0</TableDown>
            </TableColumn>
            <TableColumn>
              <TableNumber className="number">2</TableNumber>
              <TableDown className="date">19 Feb 2019</TableDown>
              <TableDown className="punch">10AM</TableDown>
              <TableDown className="punch">7PM</TableDown>
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
`

// Table styling area

const TableNumber = styled.td`
  padding: 10px 0px;
  padding-left: 10px;
`;

const TableDown = styled.td`
  height: auto;
  text-align: start;
  padding: 10px 0px;
  /* background-color: blue; */
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
  /* background-color: green; */

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
  /* background-color: blue; */

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

// Statistic styling area

const Icon = styled.div`
  height: auto;
  width: auto;
  color: silver;
  margin-top: 6px;
  margin-right: 1px;
  font-weight: 600;
`;

const PunchOutTime = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  color: silver;
  font-size: 14px;
`;

const PunchOutTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-top: 5px;
`;
const PunchInTime = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  color: silver;
  font-size: 14px;
`;
const PunchInTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-top: 5px;
`;

const PunchOutActivities = styled.div`
  height: 50px;
  width: auto;
  /* background-color: greens; */
  padding-left: 20px;
  margin-top: 10px;
  ::before {
    content: "";
    height: 10px;
    width: 10px;
    position: absolute;
    border-radius: 50%;
    border: 2px solid blue;
    left: 0;
    top: 50px;
    background-color: white;
  }
`;

const PunchInActivities = styled.div`
  height: 50px;
  width: auto;
  padding-left: 20px;
  padding-top: 8px;
  margin-top: 10px;
  ::before {
    content: "";
    height: 10px;
    width: 10px;
    position: absolute;
    border-radius: 50%;
    border: 2px solid blue;
    left: 0;
    top: 0;
    background-color: white;
  }
`;

const PunchMain = styled.div`
  height: auto;
  width: auto;
  padding-left: 5px;
  border-left: medium solid silver;
  /* background-color: blue; */
`;

const PunchActivities = styled.div`
  height: auto;
  width: auto;
  position: relative;
  padding-left: 5px;
  /* background-color: blue; */
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

  /* background-color: blue; */
`;

const StatisticsMeasureColumn = styled.div`
  height: 50px;
  width: auto;
  /* background-color: burlywood; */
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
  /* background-color: #0000ff55; */
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
  /* background-color: #0000ff55; */
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
  /* background-color: #0000ff47; */
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

  :hover {
    background-color: white;
    background-color: blue;
    border: 2px solid blue;
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
  /* background-color: red; */
`;

const CircleTimerHold = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  /* background-color: #0080007b; */
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
  /* background-color: #0000ff28; */
`;

const CardTitle = styled.h4`
  height: auto;
  width: auto;
  margin: 0px;
  font-size: 20px;
  text-align: start;
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
  /* background-color: gray; */
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

// Attendance Page
const AttendanceMainPage = styled.div`
  height: auto;
  width: calc(100vw - 320px);
  padding-bottom: 50px;
  /* background-color: blue; */

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
