import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/easyhr.png"
import { MdDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import {FiPower} from "react-icons/fi";

const SideBar = () => {
    const [show, setShow] = React.useState(false);

  const Toggle = () => {
    setShow(!show);
  };

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
          to="/dashboard"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text1>Dashboard</Text1>
        </NavLink>
      </Home>

      <Home2>
        <Icon2>
          <MdDashboard />
        </Icon2>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text1>Staffs</Text1>
        </NavLink>
      </Home2>

      <Home2>
        <Icon2>
          <MdDashboard />
        </Icon2>

        <Text3 onClick={Toggle}>Financials</Text3>
      </Home2>
      {show ? (
        <Staffs>
          <NavLink to="/payroll" style={{ textDecoration: "none" }}>
            <p>Send Payment</p>
          </NavLink>
        </Staffs>
      ) : null}
      
      <Home2>
        <Icon2>
          <MdDashboard />
        </Icon2>
        <NavLink
          to="/transaction"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text3>Transaction</Text3>
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
const Text = styled.div`
  font-size: 17px;
  cursor: pointer;
  align-items: center;
  display: flex;
  margin-left: 30px;
  width: 120px;
  height: 40px
`;

const Power = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`;

const Staffs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    margin-left: 40px;
  }
`;

const Text3 = styled.div`
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

const Icon2 = styled.div`
  color: #3e4956;
  font-size: 23px;
  cursor: pointer;
`;

const Home = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  align-items: center;
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
  width: 270px;
  height: 100vh;
  position: fixed;
  background-color: #f2f5f8;
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