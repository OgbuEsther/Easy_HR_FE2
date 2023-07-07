import React, { useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import {  FiPower } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { useAppSelector } from '../global/Store';
import { FaBattleNet} from "react-icons/fa"
import { GiStarSattelites, GiTransportationRings } from "react-icons/gi"
import { CiSearch } from "react-icons/ci"
import { IoIosNotificationsOutline } from "react-icons/io"

const DashboardHead = () => {
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

   const [show7, setShow7] = React.useState(false)

    const Toggle7 = () => {
        setShow7(!show7)
    }



   const Toggle3 = () => {
    setShow2(!show2);
  };

 
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((res) => {
        console.log(res)
      })
    }
  })



  const user = useAppSelector((state) => state.currentStaff);
  const admin = useAppSelector((state) => state.currentUser);


  return (
      <Container>
      <Wrapper>
        <Inputhold>
          <Icohold>
            <CiSearch />
          </Icohold>
          <Input placeholder='search'/>
        </Inputhold>

        <Left2>
          <Person></Person>
          <Prof>
            <Yello>Hello, {user?.yourName?.split(" ")[0]}</Yello>
            <Iden>ID: {user?.companyCode}</Iden>
            <Iden>{user?.walletNumber}</Iden>
            </Prof>
        </Left2>

        <Settingshold>
          <Notification>
            <IoIosNotificationsOutline />
            <Red></Red>
          </Notification>
          <Circlehold>
            <Circle>
              {/* <Img src={img} /> */}
              {admin?.yourName?.charAt(0)}
            </Circle>
            <Name>{admin?.yourName}</Name>
            {/* <DarkMode/> */}
          </Circlehold>
        </Settingshold>
        {/* <Left onClick={Toggle}>
          <FiMenu />
        </Left> */}

      
        

        {show ? (
        <Hold onClick={Toggle3}>
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
            <Text2 onClick={Toggle7}>Savings</Text2>
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

const Name = styled.div`
  margin-left: 6px;
`
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  background-color:rgb(1,104,170);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Circlehold = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
`
const Red = styled.div`
  width: 13px;
  height: 13px;
  background-color: red;
  border-radius: 50px;
  position: absolute;
  top: 0;
  right: 4px;
`
const Notification = styled.div`
  font-size: 30px;
  cursor: pointer;
  position: relative;
  color: gray;
`

const Settingshold = styled.div`
  display: flex;
  align-items: center;
  width: 130px;
  justify-content: flex-end;
`
const Input = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
`
const Icohold = styled.div`
  display: flex;
  width: 43px;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 21px;
`
const Inputhold = styled.div`
  width: 350px;
  height: 42px;
  /* background-color: red; */
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  align-items: center;
  border: 1px solid #BABFC4;
  @media screen and (max-width: 500px) {
    display: none;
  }
`
const Iden = styled.div`
  color: #fff;
  font-size: 14px;
`
const Yello = styled.div`
  color: #fff;
  font-size: 14px;
`
const Person = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #fff;
`
const Left2 = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
    margin-left: 10px;
  }
`


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


const Prof = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`


// const Left = styled.div`
//   font-size: 25px;
//   cursor: pointer;
//   display: none;
//   @media screen and (max-width: 1024px) {
//     display: flex;
//   }
//   @media screen and (max-width: 500px) {
//     margin-left: 30px;
//     display: flex;
//     color: #fff;
//   }
// `;

const Wrapper = styled.div`
  width: 97%;
  height: 100%;
  display: flex;
  align-items: center;
  /* background-color: blue; */
  /* padding-right: 30px; */
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
  width: calc(100% - 220px);
  height: 80px;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: fixed;
  z-index: 15;
  display: flex;
  justify-content: center;
  /* justify-content: flex-end; */
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    justify-content: center;
    display: flex;
    height: 100px;
    width: 100%;
    background-color: #00244E;
    position: fixed;
  }
`