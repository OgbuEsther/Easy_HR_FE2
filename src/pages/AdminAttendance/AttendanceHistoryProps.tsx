import React from 'react'
import styled from "styled-components";


const AttendanceHistoryProps = () => {
  return (
      <div>
          <Container>
                <Title>
              Attendance History Of All Working Staffs
          </Title>
        </Container>
    </div>
  )
}

export default AttendanceHistoryProps

const Title = styled.div``

const Container = styled.div`
 width: 80vw;
 height: 300px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: red;
 margin-top: 7px;
 flex-direction: column;
`