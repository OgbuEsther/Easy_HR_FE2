import React from 'react'
import styled from 'styled-components'

const InputStaffAttendance = () => {
  return (
      <Container>
          <Proceed>
        <Top>Enter your attendance token here</Top>
        
        <Input placeholder='Token'/>
        <Button>Confirm</Button>
          </Proceed>
    </Container>
  )
}

export default InputStaffAttendance
const Button = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: #fff;
  cursor: pointer;
  border-radius: 7px;
  outline: none;
  border: none;
  margin-top: 12px;
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid lightgray;
  padding-left: 10px;
  border-radius: 8px;
  margin-top: 10px;
  outline: none;
`

const Top = styled.div`
  
`

const Proceed = styled.div`
  width: 350px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
    font-size: 14px;
    margin-top: 3px;
  }
`;

const Container = styled.div`
    width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.7); */
  position: absolute;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;

  animation: play 0.5s ease-out forwards;

   @keyframes play {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
  }
`