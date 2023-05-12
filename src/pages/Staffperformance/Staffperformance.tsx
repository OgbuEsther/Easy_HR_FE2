import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { RotatingLines } from 'react-loader-spinner'
import Inputdate from "../Inputdate/Inputdate";
import Staffrate from "./Staffrate";
import Staffdetails from "./Staffdetails";

import { mileStone } from "../../components/global/ReduxState";

import { setMilestones } from "../../utils/Api/ApiCall";

import { useAppSelector } from "../../components/global/Store";



const StaffPerformance = () => {
 
  
const admin = useAppSelector((state)=> state.currentUser)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

   const Toggle1 = () => {
     setShow1(true)
     setShow2(false)
     setShow3(false)
  }
  const Toggle2 = () => {
    setShow2(!show2)
    setShow1(false)
    setShow3(false)
  }

  const Toggle3 = () => {
    setShow3(!show3)
    setShow2(false)
    setShow1(false)
  }

  const [text, setText] = useState(localStorage.getItem('myTextArea') || '')
  
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText)
  }

  const handleSaveClick = () => {
    localStorage.setItem('myTextArea', text)
  }

  useEffect(() => {
   setTimeout(() => {
      setIsLoading(true)
    },2000)

    const handleStorageChange = () => {
        setText(localStorage.getItem('myTextArea')  || '')
    }
    
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])






  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
          <Pending onClick={Toggle1}><h3>View Goals</h3><span>{isLoading ? (1) : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"/>}</span>
          </Pending>

          <Pending onClick={Toggle2}><h3>Rating</h3><span>{isLoading ? "" : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}</span>
          </Pending>

            <Pending onClick={Toggle3}><h3>Details</h3><span>{isLoading ? "" : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}</span>
          </Pending>
          </Top>
          
          {isLoading ? (
            <Mid>
              {show1 ? (
            <div style={{
              width: "100%"
            }}>
              <Textplace>
            <Inputhold>
              <Inputdate selectedDate={selectedDate} onDateChange={handleDateChange} />
            </Inputhold>
          </Textplace>

          <Goals>
            <ol style={{ listStyleType: 'decimal', marginLeft: '30px'}}>
              <li>{text}</li>
            </ol>
          </Goals>
            </div>
          ) : null}
            </Mid>
          ) : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}

          {show2 ? (
            <Staffrate />
          ) : null}

          {show3 ? (
            <Staffdetails />
          ) : null}
        </Wrapper>
      </Container>
    </div>
  );
}

export default StaffPerformance ;

const Mid = styled.div`
  width: 100%;
  margin-top: 10px;
`
const Goals = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  border: 1px solid lightgray;
  padding: 12px;
`
const Button = styled.button`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #007bff;
  border: none;
  outline: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 7px;
`
const Texthold = styled.form`
  display: flex;
  flex-direction: column;
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
    /* margin-left: 20px; */
`
const Textarea = styled.textarea`
  width: 700px;
  height: 150px;
  border: 1px solid lightgray;
  resize: none;
  padding: 12px;
  border-radius: 10px;
  outline: #007bff;
`
const Textplace = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  align-items: center;
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
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15px;
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

const Container = styled.div`
  width: calc(100vw - 220px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  overflow: hidden;
  margin-top: 20px;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`
