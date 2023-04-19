import React from 'react'
import styled from "styled-components"

const Attendance = () => {
  return (
    <AttendancePage>
       <AttendanceMainPage>
       <TitleAndBreadCrumColumn>
            <Title>Title</Title>
            <BreadCrum>Bread crum/Bread crum</BreadCrum>
        </TitleAndBreadCrumColumn>
        <StatisticColumn>
            <Card className='one'>
              <CardTitle>
                  Timesheet <span>11 May 2019</span>
              </CardTitle>
              <CardContent>
                <PunchInRecord>

                </PunchInRecord>
              </CardContent>
            </Card>
            <Card className='two'>two</Card>
            <Card className='three'>three</Card>
        </StatisticColumn>
        <TimingColumn>
            <TimeCard className='one'>one</TimeCard>
            <TimeCard className='two'>two</TimeCard>
            <TimeCard className='three'>three</TimeCard>
            <SearchButton>Search</SearchButton>
        </TimingColumn>
        <TableSection>
            <TableColumn>
                <TableHead className='number-sign'>#</TableHead>
                <TableHead className='date-head'>Date</TableHead>
                <TableHead className='punch-head'>Punch In</TableHead>
                <TableHead className='punch-head'>Punch Out</TableHead>
                <TableHead className='production-head'>Production</TableHead>
                <TableHead className='break-head'>Break</TableHead>
                <TableHead className='over-time-head'>Over Time</TableHead>
            </TableColumn>
            <TableColumn>
                <TableNumber className='number'>1</TableNumber>
                <TableDown className='date'>19 Feb 2019</TableDown>
                <TableDown className='punch'>10AM</TableDown>
                <TableDown className='punch'>7PM</TableDown>
                <TableDown className='production'>9hrs</TableDown>
                <TableDown className='break'>1hr</TableDown>
                <TableDown className='over-time'>0</TableDown>
            </TableColumn>
            <TableColumn>
                <TableNumber className='number'>2</TableNumber>
                <TableDown className='date'>19 Feb 2019</TableDown>
                <TableDown className='punch'>10AM</TableDown>
                <TableDown className='punch'>7PM</TableDown>
                <TableDown className='production'>9hrs</TableDown>
                <TableDown className='break'>1hr</TableDown>
                <TableDown className='over-time'>0</TableDown>
            </TableColumn>
        </TableSection>
       </AttendanceMainPage>
    </AttendancePage>
  )
}

export default Attendance;


// Table styling area

const TableNumber = styled.td`
padding: 10px 0px;
padding-left: 10px;
`

const TableDown = styled.td`
  height: auto;
text-align: start;
padding: 10px 0px;
`

const TableHead = styled.th`
height: auto;
width: 150px;
text-align: start;
padding: 10px 0px;
`

const TableColumn = styled.tr`
height: auto;
width: auto;

.number-sign{
  width: 50px;
  padding-left: 10px;
}



`

const TableSection = styled.div`
height: auto;
width: auto;
margin-top: 10px;
margin-left: 20px;
margin-right: 20px;
border-top: 1px solid #cfcfcfbe;
border-radius: 4px;

tr:nth-child(even){
  background-color: #cfcfcfbe;
}
box-shadow: 1px 1px 10px 1px rgba(105, 105, 105, 0.1);
`



// Timing styling area
const SearchButton = styled.button`
height: 40px;
width: 180px;
font-size: 16px;
font-weight: 600;
background-color: white;
margin-left: 20px;
border-radius: 4px;
border: none;
background-color: #2fff44;
margin-bottom: 10px;
color:white;
`

const TimeCard = styled.div`
height: 40px;
width: 240px;
background-color: white;
margin-left: 20px;
border-radius: 4px;
border: 1px solid #cfcfcfbe;
margin-bottom: 10px;
`

const TimingColumn = styled.div`
    height: auto;
  width: auto;
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

`



// Statistic styling area

const PunchInRecord = styled.div``

const CardContent = styled.div``;

const CardTitle = styled.h4`
height: auto;
width: auto;
margin: 0px;
font-size: 20px;
text-align: start;
padding-top: 10px;

span{
  color: silver;
}
`

const Card = styled.div`
  height: 370px;
  width: 300px;
  background-color: white;
  box-shadow: 1px 1px 3px 1px rgba(166, 165, 165, 0.5);
  margin-left: 30px;
  margin-bottom: 10px;
  padding-left: 10px;
`;

const StatisticColumn = styled.div`
   height: auto;
  width: auto;
  /* background-color: gray; */
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

`



// Title and BreadCrum styling area
const TitleAndBreadCrumColumn = styled.div`
  height: 100px;
  width: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 30px;
`

const BreadCrum = styled.h4`
  margin: 0px;
`;

const Title = styled.h1`
  margin: 0px;
`




// Attendance Page
const AttendanceMainPage = styled.div`
   height: auto;
   width: calc(100vw - 320px);
   padding-bottom: 50px;
   /* background-color: blue; */

`


// Attendance Page
const AttendancePage = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 100px;
`
