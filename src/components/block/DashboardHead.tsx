import React from 'react'
import styled from 'styled-components'
import { FiMenu } from "react-icons/fi";
import img from "../../Assets/new.png"
import {HiUsers} from "react-icons/hi"

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
          <Img src={img} />
        </Left>

        {/* <Mid>
          <Welcome>
            <Circ>{admin?.companyname?.charAt(0)}</Circ>
            <Prof>
              <Comp>Company's profile</Comp>
              <Nam>{admin?.companyname} </Nam>
              <Id>ID:{admin?.companyCode} </Id>
            </Prof>
          </Welcome>
        </Mid> */}

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
      </Wrapper>
    </Container>
  )
}

export default DashboardHead
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
const Img = styled.img`
  height: 60px;
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
  color: #2e2e2e;
  background-color: white;
  cursor: pointer;
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
    width: 30px;
  }
`;

const Left = styled.div`
  font-size: 25px;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
  @media screen and (max-width: 500px) {
    margin-left: 30px;
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
    width: 93%;
    justify-content: space-between;
    display: flex;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #1F337C;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: fixed;
  z-index: 11;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    justify-content: center;
    display: flex;
  }
`