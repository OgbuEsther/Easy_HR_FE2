import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/easyhr.png"
import { MdDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FiPower } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs"
import { IoMdPerson} from "react-icons/io"
import { FaBattleNet,FaHornbill } from "react-icons/fa"
import {GiStarSattelites,GiFlatTire} from "react-icons/gi"

const SideBar = () => {

    const [show, setShow] = React.useState(false)

    const Toggle = () => {
        setShow(!show)
    }

  return (
    <Container>
      <Top>
        <Img src={img} />
      </Top>

          <Home>
            <Icon2>
            <MdDashboard />
            </Icon2>
            <NavLink
            to=""
            style={({ isActive }) => {
                return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "#2AA7FF" : "#fff",
                };
            }}
            >
            <Text1>Dashboard</Text1>
            </NavLink>
      </Home>

          <Home2>
            <Icon2>
            <FaBattleNet />
            </Icon2>
            <NavLink
            to="/staffdashboard/staffattendance"
            style={({ isActive }) => {
                return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "#2AA7FF" : "#fff",
                };
            }}
            >
            <Text1>Attendance</Text1>
            </NavLink>
      </Home2>

      <Home2>
            <Icon2>
              <GiStarSattelites/>
            </Icon2>
            <Text2 onClick={Toggle}>Savings</Text2>
          </Home2>

          {show ? (
              <Staffs>
                  <NavLink to="/schoolfees" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                      <p>School Fees</p>
                    </NavLink>
                  <NavLink to="/travel" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                      <p>Travel & Tour</p>
                  </NavLink>
                  <NavLink to="/Rent" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                      <p>Rents</p>
                  </NavLink>
          </Staffs>
          ) : null}

          <Home2>
            <Icon2>
            <FaHornbill />
            </Icon2>
            <NavLink
            to="/staffdashboard/paybills"
            style={({ isActive }) => {
                return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "#2AA7FF" : "#fff",
                };
            }}
            >
            <Text1>Pay Bills</Text1>
            </NavLink>
      </Home2>

          <Home2>
            <Icon2>
            <BsFillPersonFill />
            </Icon2>
            <NavLink
            to="/"
            style={({ isActive }) => {
                return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "#2AA7FF" : "#fff",
                };
            }}
            >
            <Text1>Transaction</Text1>
            </NavLink>
      </Home2>
      <Power>
        <Icon2>
          <FiPower />
        </Icon2>
        <Text>Logout</Text>
      </Power>
    </Container>
  )
}

export default SideBar
const Staffs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    p{
        margin-left: 40px;
        color: #e7e7e7;
    }
`
const Text2 = styled.div`
    font-size: 17px;
    cursor: pointer;
    align-items: center;
    color: #fff;
    display: flex;
    margin-left: 15px;
    width: 410px;
    height: 40px;
`
const Home2 = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  align-items: center;
`;
const Text1 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  align-items: center;
  display: flex;
  margin-left: 15px;
  width: 210px;
  height: 40px;
`
const Home = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: center;
`;
const Text = styled.div`
  font-size: 17px;
  cursor: pointer;
  align-items: center;
  color: #fff;
  display: flex;
  margin-left: 17px;
  width: 120px;
  height: 40px
`;

const Power = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

const Icon2 = styled.div`
  color: #fff;
  font-size: 23px;
  cursor: pointer;
`;

const Img = styled.img`
  height: 120px;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
`;
const Container = styled.div`
  width: 220px;
  height: 100vh;
  position: fixed;
  background-color: #1F337C;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  overflow: hidden;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`