import React from 'react'
import styled from 'styled-components'
import { FiMenu, FiSearch } from "react-icons/fi";
import img from "../../Assets/new.png"
import { MdNotificationsActive } from "react-icons/md";
import moment from "moment"

const DashboardHead = () => {
 

  const [show, setShow] = React.useState(false);

 
  const Toggle = () => {
    setShow(!show);
  };

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
            <Profile>VP</Profile>
              <Name>
              {moment(Date.now()).format('dddd')}, {moment(Date.now()).format("MMM Do YYYY")}
              </Name>
              
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
  margin-left: 7px;
  /* background-color: aliceblue; */
`;

const Right = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 300px;
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
  font-weight: 700;

`;


const Wrap = styled.div`
margin-right: 10px;
`;

const Not = styled(MdNotificationsActive)`
  font-size: 20px;
  font-weight: 700;
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
  background-color: blue;
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

   @media screen and (max-width:500px) {
    display: none;
   }
`;
const DashBoard = styled.div`
  color: black;
  font-weight: 700;
  font-size: 20px;
  width: 100%;
  background-color: red;
`;

const Holder1 = styled.div`
  height: 40px;
  width: 29%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (max-width:500px){
    background-color: yellow;
    
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
  background-color: brown;
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
    width: 100%;
  
  }
`