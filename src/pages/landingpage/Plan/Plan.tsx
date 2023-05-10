import React,{useState} from 'react'
import styled from "styled-components"
import { Fade } from 'react-awesome-reveal'
import img from "../../Assets/dollar.png"
import {RiExchangeDollarLine} from "react-icons/ri"
import {DiFsharp} from "react-icons/di"
import {HiCubeTransparent} from "react-icons/hi"
import {MdOutlineManageHistory} from "react-icons/md"
import {GiTimeBomb,GiClockwork} from "react-icons/gi"
import PlanProps from './PlanProps'

const Plan = () => {

    const [show, setshow] = useState<Boolean>(true);
    const [show2, setshow2] = useState<Boolean>(false);
    const [show3, setshow3] = useState<Boolean>(false);
    const [show4, setshow4] = useState<Boolean>(false);
    const [show5, setshow5] = useState<Boolean>(false);

    const Toogle = () =>{
        setshow(true);
        setshow2(false);
        setshow3(false);
        setshow4(false);
        setshow5(false);
    }
    const Toogle2 = () =>{
        setshow(false);
        setshow2(true);
        setshow3(false);
        setshow4(false);
        setshow5(false);
    }
    const Toogle3 = () =>{
        setshow(false);
        setshow2(false);
        setshow3(true);
        setshow4(false);
        setshow5(false);
    }
    const Toogle4 = () =>{
        setshow(false);
        setshow2(false);
        setshow3(false);
        setshow4(true);
        setshow5(false);
    }
    const Toogle5 = () =>{
        setshow(false);
        setshow2(false);
        setshow3(false);
        setshow4(false);
        setshow5(true);
    }

  return (
      <Container>
          <Wrapper>
              <Fade direction='up'>
                  <Par>WE DO MORE FOR YOUR WORLD</Par>
                  <Bolder>all-in-one Payroll and HR your business</Bolder>
              </Fade>
            <Fade direction='up'>
            <Hold>
                  <Circlehold>
                      <Circle
                       bg={show ? "#dc3545" : ""}
                       onClick={Toogle}
                      >
                      <RiExchangeDollarLine/>
                      </Circle>
                      <Text>Payroll</Text>
                  </Circlehold>

                  <Circlehold>
                  <Circle 
                  bg={show2 ? "#dc3545" : ""}
                  onClick={Toogle2}
                  >
                    <GiClockwork/>
                  </Circle>
                  <Text>Time & Attendance</Text>
                  </Circlehold>

                  <Circlehold>
                  <Circle
                   bg={show3 ? "#dc3545" : ""}
                   onClick={Toogle3}
                   >
                    <DiFsharp/>
                  </Circle>
                  <Text>Benefits</Text>
                  </Circlehold>

                 <Circlehold>
                 <Circle 
                 bg={show4 ? "#dc3545" : ""}
                 onClick={Toogle4}
                 >
                    <MdOutlineManageHistory/>
                 </Circle>
                 <Text>Hr Management</Text>
                 </Circlehold>

                 <Circlehold>
                  <Circle
                 bg={show5 ? "#dc3545" : ""}
                 onClick={Toogle5}
                  >
                    <HiCubeTransparent/>
                  </Circle>
                  <Text>Hiring</Text>
                 </Circlehold>
               </Hold>
            <Fade direction='down'>
            <Box>
             {
                show ? (
                    <PlanProps 
                    text='' 
                    image=""
                    writeup=''/>
                ) 
                :null
             }
             {
                show2 ? (
                    <PlanProps 
                    text=""
                    image=''
                     writeup=""/>
                ) 
                :null
             }
             {
                show3 ? (
                    <PlanProps 
                    text="" 
                    image='' 
                    writeup=""/>
                ) 
                :null
             }
             {
                show4 ? (
                    <PlanProps 
                    text=""
                     image=''
                     writeup=""/>
                ) 
                :null
             }
             {
                show5 ? (
                    <PlanProps
                     text=""
                    image=''
                     writeup=""/>
                ) 
                :null
             }
              </Box>
            </Fade>
            </Fade>
          </Wrapper>
    </Container>
  )
}

export default Plan
const Box = styled.div`
display: flex;
flex-wrap: wrap;
`

const Text = styled.div`
    font-size: 16px;
    margin: 0;
    color: #001328;
    font-weight: 800;
`
const Circlehold = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px;
`

const Circle = styled.div<{bg:string}>`
font-size: 60px;
color: #1271D5;
    width: 150px;
    height: 150px;
    border-radius: 100px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.bg};
    margin-bottom: 20px;
    :hover{
        background-color: #dc3545;
        color: white;
    }

    @media screen and (max-width:320px) {
        width: 100px;
        height: 100px;
        background-color: blue;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: red; */
    }
`
const Hold = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    /* margin: 70px; */
    align-items:center;
    margin-left: 30px;
    flex-wrap: wrap;

    @media screen and (max-width:320px) {
        width: 100%;
            display: flex;
            flex-wrap: wrap;
    }
`
const Bolder = styled.h2`
    margin: 0;
    color: #001328;
    font-weight: 800;
    font-size: 40px;
    letter-spacing: -0.03em;
    width: 500px;
    text-align: center;

    @media screen and (max-width:320px) {
        font-size:3px;
        margin: 0;
        width: 400px;
        text-align: center;
        /* font-weight: 700; */
        line-height: 30px;
        letter-spacing: -0.04em;
    }

    @media screen and (max-width:360px) {
        font-size:20px;
        /* color: yellow; */
        width: 400px;
        text-align: center;
    }
    @media screen and (max-width:375px) {
        font-size: 24px;
        width: 400px;
    }
    @media screen and (max-width:425px) {
        font-size: 33px;
        width: 450px;
    }
`
const Par = styled.div`
    display: block;
    text-transform: uppercase;
    color: #0057B3;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: .04em;
    margin-bottom: 5px;

    @media screen and (max-width:320px) {
        font-size: 12px;
    }

    @media screen and (max-width:375px) {
        font-size: 15px;
    }
`
const Wrapper = styled.div`
    width: 91.666667%;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:320px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`