import React, {useState} from 'react'
import styled from "styled-components"
import { BsPlusLg, BsFillCheckSquareFill } from "react-icons/bs"
import { BiHomeAlt2, BiDotsHorizontalRounded } from "react-icons/bi"
import {FaUsers} from "react-icons/fa"

const Stafffooter = () => {
    const [show, setShow] = useState(false)

    const Toggle = () => {
        setShow(!show)
    }
  return (
      <Container>
          <Right>
              <Hold>
                  <BiHomeAlt2 />
                  <Text>Home</Text>
              </Hold>
              <Hold>
                  <FaUsers />
                  <Text>Plans</Text>
              </Hold>
          </Right>
          <Mid>
              <Circle>
                  <Big onClick={Toggle}>
                      <BsPlusLg />
                  </Big>
              </Circle>
          </Mid>
          <Left>
              <Hold>
                  <BsFillCheckSquareFill />
                  <Text>Attendance</Text>
              </Hold>
              <Hold>
                  <BiDotsHorizontalRounded />
                  <Text>More</Text>
              </Hold>
          </Left>
          
          {show ? (
            <Show>
              
          </Show>
          ) : null}
      </Container>
  )
}

export default Stafffooter
const Show = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const Text = styled.div`
    font-size: 15px;
    cursor: pointer;
`
const Hold = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Big = styled.div`
    width: 65px;
    font-size: 28px;
    cursor: pointer;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: red;
`
const Circle = styled.div`
    width: 100px;
    height: 100px;
    /* background-color: #fff; */
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 40px;
    position: fixed;
    cursor: pointer;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
`
const Left = styled.div`
    width: 35%;
    height: 100%;
    /* background-color: red; */
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 25px;
`
const Mid = styled.div`
    width: 30%;
    height: 100%;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    position: relative;
`

const Right = styled.div`
    width: 35%;
    height: 100%;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    /* background-color: green; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 25px;
`

const Container = styled.div`
    
    display: none;
    
    /* margin-top: 350px; */

    @media screen and (max-width: 500px) {
        display: flex;
        width: 100%;
        height: 90px;
        background-color: #fff;
        /* position: absolute; */
        bottom: 0;
        position: fixed;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`