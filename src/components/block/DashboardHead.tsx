import React from 'react'
import styled from 'styled-components'
import { FiMenu, FiSearch } from "react-icons/fi";
import img from "../../Assets/new.png"
import { MdNotificationsActive } from "react-icons/md";
import { useAppSelector } from '../global/Store';
import { RiArrowDropDownLine } from 'react-icons/ri';

const DashboardHead = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  const onToggled = () => {
    setToggle(!toggle);
  };


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

           <Holder1>
            {/* <Icon1 /> */}
            <DashBoard>
              Welcome Valerian Pedro
            </DashBoard>
          </Holder1>

          
          <Holder2>
            <Search placeholder="Search..." />
            <IconBack>
              <SearchIcon />
            </IconBack>
          </Holder2>

          <Holder3>
            <Im>
              <Wrap>
                <Not></Not>
                  {/* <People>
                    <Team>
                      Vale
                    </Team>
                  </People> */}
              </Wrap>
              {/* <Image src={flow} /> */}
              <Right>
          <Up>
            <Profile>PO</Profile>
              <Name>Valerian Pedro</Name>
              
          </Up>
        </Right>
            </Im>
          </Holder3>
          {/* <DarkMode/> */}
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
  margin-right: 12px;
  border-radius: 50px;
  font-weight: bold;
  color: black;
  border: 1px solid black;
  background-color: blanchedalmond;
`;

const Up = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: aliceblue; */
`;

const Right = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 200px;
  justify-content: center;
  /* background-color: yellow; */
  @media screen and (max-width: 500px) {
    width: 30px;
    display: none;
  }
`;

const Name = styled.div`
  color: black;
  font-size: 14px;
  /* background-color: purple; */
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

`;

const Drop = styled(RiArrowDropDownLine)`
  color: black;
  font-size: 25px;
  cursor: pointer;

  :hover{
    color: #2e2e2e;
  }
`;

const Team = styled.div``;

const People = styled.div`
  position: absolute;
  margin-top: 10px;
  height: 150px;
  width: 170px;
  border-radius: 10px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Wrap = styled.div`
margin-right: 10px;
`;

const Not = styled(MdNotificationsActive)`
  font-size: 20px;
  transition: all 450ms;

  :hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;

const Im = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const Holder3 = styled.div`
  height: 40px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconBack = styled.div`
  background-color:#001328;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 355px;
  width: 30px;
  height: 30px;
  border-radius: 3px;
`;
const Search = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 3px;
  background: #dadada;
  outline: 2px solid silver;
  position: relative;
`;
const SearchIcon = styled(FiSearch)`
  color: white;
  font-size: 20px;
`;

const Holder2 = styled.div`
  height: 40px;
  width: 36%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DashBoard = styled.div`
  color: black;
  font-weight: 700;
  font-size: 20px;
  width: 100%;
`;

const Holder1 = styled.div`
  height: 40px;
  width: 29%;
  color: black;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Profile1 = styled.div`
height: 45px;
width: 45px;
border-radius: 50%;
margin:0 15px;
background-color: black;
cursor: pointer;
`;


const Big = styled.div`
font-size: 18px;
`;

const Small = styled.div`
font-size: 12px;
`;

const Holder = styled.div`
display: flex;
align-items: center;
`;

const SearchHold = styled.div`
align-items: center;
height: 40px;
background-color: transparent;
display: flex;

`;

const User = styled.div`
background-color: brown;

@media screen and (max-width:500px){
  display:none;
}
`

const Main = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
background-color: yellow;
width: 90%;

@media screen and (max-width:500px) {
  display: none;
}
`

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
const Home3 = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  align-items: center;
`
const Leave = styled.div`
  display: flex;
  color: #b4b4b4;
  font-size: 14px;
  margin-top: 20px;
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
  width: 43%;
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
    display: none;
  }
`



const Left = styled.div`
display:none;
  font-size: 25px;
  cursor: pointer;
  align-items: center;
  color: #fff;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 500px) {
    /* margin-left: 30px; */
    display:flex;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  /* background-color: blue; */
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
  width: calc(100% - 220px);
  height: 80px;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: fixed;
  z-index: 3;
  display: flex;
  /* background-color: red; */
  justify-content: center;
  @media screen and (max-width: 500px) {
    justify-content: center;
    display: flex;
    height: 100px;
    background-color: #00244E;
    position: fixed;
  
  }
`