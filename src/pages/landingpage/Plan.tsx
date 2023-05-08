import React from 'react'
import styled from "styled-components"
import { Fade } from 'react-awesome-reveal'
import img from "../../Assets/dollar.png"
import {RiExchangeDollarLine} from "react-icons/ri"
import {DiFsharp} from "react-icons/di"
import {MdOutlineManageHistory} from "react-icons/md"
import {GiTimeBomb,GiClockwork} from "react-icons/gi"

const Plan = () => {
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
                      <Circle>
                      <RiExchangeDollarLine/>
                      </Circle>
                      <Text>Payroll</Text>
                  </Circlehold>

                  <Circlehold>
                  <Circle>
                    <GiClockwork/>
                  </Circle>
                  <Text>Time & Attendance</Text>
                  </Circlehold>

                  <Circlehold>
                  <Circle>
                    <DiFsharp/>
                  </Circle>
                  <Text>Benefits</Text>
                  </Circlehold>

                 <Circlehold>
                 <Circle>
                    <MdOutlineManageHistory/>
                 </Circle>
                 <Text>Hr Management</Text>
                 </Circlehold>

                 <Circlehold>
                  <Circle></Circle>
                  <Text>Hiring</Text>
                 </Circlehold>
               </Hold>
            </Fade>
          </Wrapper>
    </Container>
  )
}

export default Plan
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

const Circle = styled.div`
font-size: 60px;
color: #001328;

    width: 150px;
    height: 150px;
    border-radius: 100px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-bottom: 20px;
    :hover{
        background-color: #dc3545;
        color: white;
    }
`
const Hold = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    /* margin: 70px; */
    align-items:center;
    margin-left: 30px;
`
const Bolder = styled.h2`
    margin: 0;
    color: #001328;
    font-weight: 800;
    font-size: 40px;
    letter-spacing: -0.03em;
    width: 500px;
    text-align: center;
`
const Par = styled.div`
    display: block;
    text-transform: uppercase;
    color: #0057B3;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: .04em;
    margin-bottom: 5px;
`
const Wrapper = styled.div`
    width: 91.666667%;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    align-items: center;
    justify-content: center;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`