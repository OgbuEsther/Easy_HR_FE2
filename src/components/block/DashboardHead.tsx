import React from 'react'
import styled from 'styled-components'
import { FiMenu, FiPower } from "react-icons/fi";
import img from "../../Assets/easyhr.png"
import { HiUsers } from "react-icons/hi"
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom"
import { FaBattleNet} from "react-icons/fa"
import { GiStarSattelites, GiTransportationRings } from "react-icons/gi"

import { useAppSelector } from '../global/Store';

const DashboardHead = () => {
  const [show, setShow] = React.useState(false);
  const [drop, setDrop] = React.useState(false)

  const Dropdown = () => {
    setDrop(!drop)
  }

  const Toggle = () => {
    setShow(!show);
  };


  

  const admin = useAppSelector((state) => state.currentUser);

  return (
      <Container>
      <Wrapper>
        <Left>
          <Ico onClick={Toggle}>
            <FiMenu />
          </Ico>
          <Img src={img} />
        </Left>

        <Right>
          <Up>
            <Profile onClick={Dropdown}>{admin?.yourName?.charAt(0)} </Profile>
          </Up>
        </Right>
        {drop ? (
          <Drop>
            <p>Organization</p>
            <Orgname>
              <Icon><HiUsers /></Icon>
              <Name><h4>{admin?.companyname} </h4></Name>
            </Orgname>
              <Line></Line>
              <Account>Account Settings</Account>
              <Account>Sign Out</Account>
        </Drop>
        ) : null}

        {show ? (
        <Hold>
          <Box>
            <Home>
              <Icon2>
                <MdDashboard />
              </Icon2>
              <NavLink
            to="/staffdashboard"
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
            to=""
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
            <Text2>Savings</Text2>
          </Home2>

          
      <Home2>
            <Icon2>
            <GiTransportationRings />
            </Icon2>
            <NavLink
            to="/staffdashboard/stafftransaction"
            style={({ isActive }) => {
                return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "#2AA7FF" : "#3e4956",
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
          </Box>
        </Hold>
      ) : null}
      </Wrapper>
    </Container>
  )
}

export default DashboardHead
const Text = styled.div`
  margin-left: 25px;
`;
const Power = styled.div`
  width: 100%;
  display: flex;
  margin-top: 80px;
`;
const Text2 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  align-items: center;
  display: flex;
  margin-left: 15px;
  width: 410px;
  height: 40px;
`;
const Home2 = styled.div`
  width: 100%;
  display: flex;
  margin-top: 23px;
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
`;
const Icon2 = styled.div`
  color: #3e4956;
  font-size: 23px;
  cursor: pointer;
`;
const Home = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  width: 40%;
  height: 100vh;
  flex-direction: column;
  background-color: #fff;
  padding-left: 25px;
  left: 0;
  transition: all 350ms ease-in;
  @media screen and (max-width: 1024px) {
    width: 24%;
  }
  @media screen and (max-width: 500px) {
    width: 44%;
  }
  @media screen and (max-width: 375px) {
    width: 48%;
  }
`;
const Hold = styled.div`
  width: 18%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  position: fixed;
  margin-top: 80px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* border-top-right-radius: 120px; */
  z-index: 9999999;
  overflow: hidden;
  animation: slides 0.5s ease-in-out;

  @keyframes slides {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Ico = styled.div`
  margin-top: 9px;
`
const Img = styled.img`
  height: 80px;
  @media screen and (max-width: 500px) {
    margin-left: 16px;
  }
`
const Account = styled.div`
  color: #035fcb!important;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #6c757d;
  margin-top: 9px;
`
const Name = styled.div`
  h4{
    font-weight: 800;
    font-size: 15px;
    margin-left: 7px;
    color: #242424;
  }
`
const Icon = styled.div`
  margin-left: 12px;
`
const Orgname = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  border: 1px solid #ededed;
  background-color: #fff;
  align-items: center;
  color: #333;
  cursor: pointer;
  transition: all .1s ease;
  margin-top: 7px;
  border-radius: 50px;
`
const Drop = styled.div`
  width: 180px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  padding-left: 12px;
  padding-top: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  right: 0;
  top: 70px;
  padding-bottom: 10px;
  p{
    color: #6c757d!important;
    font-size: 15px;
    font-weight: 400;
  }
`

const Profile = styled.div`
  width: 45px;
  height: 45px;
  font-size: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  display: flex;
  border-radius: 50px;
  font-weight: bold;
  color: #fff;
  background-color: blue;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    background-color: #fff;
    color: lightgray;
  }
`;

const Up = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  @media screen and (max-width: 500px) {
  }
`;

const Left = styled.div`
  font-size: 25px;
  cursor: pointer;
  align-items: center;
  color: #fff;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
  @media screen and (max-width: 500px) {
    /* margin-left: 30px; */
  }
`;

const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 93%;
    justify-content: space-between;
    display: flex;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    @media screen and (max-width: 500px) {
    justify-content: center;
    display: flex;
    height: 100px;
    background-color: #00244E;
    position: fixed;
  }
  }
`