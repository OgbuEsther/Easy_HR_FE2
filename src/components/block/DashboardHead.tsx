import React from 'react'
import styled from 'styled-components'
import { FiMenu } from "react-icons/fi";
import img from ".././Assets/easyhr.png"
import { MdDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const DashboardHead = () => {
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  const Toggle = () => {
    setShow(!show);
  };

   const Toggle3 = () => {
    setShow2(!show);
  };
  
  return (
      <Container>
      <Wrapper>
        <Left onClick={Toggle}>
          <FiMenu />
        </Left>

        <Mid>
          <Welcome>
            <Circ></Circ>
            <Prof>
              <Comp>Company's profile</Comp>
              <Nam>Codelab</Nam>
              <Id>ID: 00213456</Id>
            </Prof>
          </Welcome>
        </Mid>

        <Right>
          <Icons>
            <Hello>Hello Godwin</Hello>
            <Circle>2</Circle>
          </Icons>
          <Up>
            <Profile>G</Profile>
          </Up>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default DashboardHead

const Profile = styled.div`
  width: 48px;
  height: 48px;
  font-size: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  display: flex;
  margin-right: 35px;
  border-radius: 50px;
  font-weight: bold;
  color: black;
  border: 1px solid black;
`;

const Up = styled.div`
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  font-size: 13px;
  top: 20px;
`;

const Hello = styled.div`
  display: flex;
  font-size: 14px;
`

const Icons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 27px;
  margin-right: 30px;
`;

const Right = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 120px;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: 30px;
  }
`;

const Id = styled.div`
  font-size: 11px;
`

const Nam = styled.div`
  font-size: 17px;
  font-weight: 400px;
`

const Comp = styled.div`
  font-size: 11px;
`

const Prof = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

const Circ = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #CEC2C2;
  border-radius: 50px;
`

const Welcome = styled.div`
  width: 190px;
  padding-left: 15px;
  text-align: center;
  height: 60px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  border: 1px solid #CEC2C2;
`;

const Mid = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  font-size: 25px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
  @media screen and (max-width: 500px) {
    margin-left: 30px;
  }
`;

const Wrapper = styled.div`
  width: 74%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 30px;
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
  height: 80px;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 500px) {
    justify-content: center;
    display: flex;
  }
`