import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/easyhr.png"
import { MdDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FiPower } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs"
import { RiMoneyDollarCircleFill } from "react-icons/ri"
import {GiMoneyStack,GiFlatTire} from "react-icons/gi"

const SideBar = () => {

  return (
    <Container>
      <Top>
        <Img src={img} />
      </Top>

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
  color: #fff;
  display: flex;
  margin-left: 17px;
  width: 120px;
  height: 40px
`;

const Power = styled.div`
    display: flex;
    align-items: center;
    margin-top: 80px;
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