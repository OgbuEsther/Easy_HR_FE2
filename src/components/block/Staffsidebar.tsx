import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/easyhr.png"
import { MdDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FiPower } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import img1 from "../../Assets/airtel.jpg"
import img2 from "../../Assets/mtn.jpg"
import img3 from "../../Assets/glo.jpg"
import img4 from "../../Assets/9mobile.jpg"
import img5 from "../../Assets/smile.jpg"
import Airtels from '../../pages/Airtels';
import { FaBattleNet,FaHornbill } from "react-icons/fa"
import {GiStarSattelites,GiTransportationRings} from "react-icons/gi"
import Mtn from '../../pages/Mtn';
import Glo from '../../pages/Glo';

const SideBar = () => {

    const [show, setShow] = React.useState(false)
  const [showAirtel, setShowAirtel] = React.useState(false);
  const [showMtn, setShowMtn] = React.useState(false);
   const [showGlo, setShowGlo] = React.useState(false);
    const [showPopup, setShowPopup] = React.useState(false);

    const Toggle = () => {
        setShow(!show)
    }

    const cancelPopup = () => {
    setShowPopup(false);
    };
    
    const Togglepopup = () => {
    setShowPopup(!showPopup);
  }

  const Remove = () => {
    setShowAirtel(false)
    setShowMtn(false)
    setShowGlo(false)
  }

    const ToggleAirtel = () => {
    setShowAirtel(!showAirtel);
    setShowPopup(false);
  }

  const ToggleMtn = () => {
    setShowMtn(!showMtn);
    setShowPopup(false);
  }

  const ToggleGlo = () => {
    setShowGlo(!showGlo);
    setShowPopup(false);
  }


    

  return (
    <Container>
      <Top>
        <Img2 src={img} />
      </Top>

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
                  <NavLink to="/staffdashboard/staff-attendance">
                      <Text1>Attendance</Text1>
            </NavLink>
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
                  <NavLink to="/staffdashboard/schoolfees-plan" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                      <p>School Fees</p>
                  </NavLink>
                  
                  <NavLink to="/staffdashboard/travel&tour-plan" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                      <p>Travel & Tour</p>
                  </NavLink>
                  <NavLink to="/staffdashboard/rents-plan" style={({isActive}) => {
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
            <Text1 onClick={Togglepopup}>Pay Bills</Text1>
      </Home2>

          {showPopup ? (
              <Popups>
                  <Popup_content>
                      <h3>Payments</h3>
                      <p>Select the service you want to make payment for</p>
                      <h4>Data Services</h4>
                      <Box>
                          <Airtel onClick={ToggleAirtel}>
                              <Img src={img1} />
                              <AirtelText>
                                  <strong>Airtel Data</strong>
                                  <Text4>Airtel Data - Get instant top up</Text4>
                              </AirtelText>
                          </Airtel>

                          <Airtel onClick={ToggleMtn}>
                            <Img src={img2} />
                            <AirtelText>
                                <strong>MTN Data</strong>
                                <Text4>MTN Data - Get instant Data Top up</Text4>
                             </AirtelText>
                          </Airtel>
                          
                          <Airtel onClick={ToggleGlo}>
                            <Img src={img3} />
                            <AirtelText>
                                <strong>GLO Data</strong>
                                <Text4>GLO Data - Get instant Top up</Text4>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img4} />
                            <AirtelText>
                                <strong>9mobile Data</strong>
                                <Text4>9mobile Data - Get instant Top up</Text4>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img5} />
                            <AirtelText>
                                <strong>Smile Payment</strong>
                                <Text4>Pay for Smile Airtime and Internet Data</Text4>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img3} />
                            <AirtelText>
                                 <strong>GLO Data</strong>
                                <Text4>GLO Data - Get instant Top up</Text4>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img3} />
                            <AirtelText>
                                <strong>GLO Data</strong>
                                <Text4>GLO Data - Get instant Top up</Text4>
                         </AirtelText>
                        </Airtel>
                      </Box>
                      <h4>Data Services</h4>
                      <Box>
                          <Airtel onClick={ToggleAirtel}>
                              <Img src={img1} />
                              <AirtelText>
                                  <strong>Airtel Data</strong>
                                  <Text4>Airtel Data - Get instant top up</Text4>
                              </AirtelText>
                          </Airtel>

                          <Airtel>
                            <Img src={img2} />
                            <AirtelText>
                                <strong>MTN Data</strong>
                                <Text4>MTN Data - Get instant Data Top up</Text4>
                             </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img3} />
                            <AirtelText>
                                <strong>GLO Data</strong>
                                <Text4>GLO Data - Get instant Top up</Text4>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img4} />
                            <AirtelText>
                                <strong>9mobile Data</strong>
                                <Text4>9mobile Data - Get instant Top up</Text4>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img5} />
                            <AirtelText>
                                <strong>Smile Payment</strong>
                                <Text4>Pay for Smile Airtime and Internet Data</Text4>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img3} />
                            <AirtelText>
                                 <strong>GLO Data</strong>
                                <Text4>GLO Data - Get instant Top up</Text4>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img3} />
                            <AirtelText>
                                <strong>GLO Data</strong>
                                <Text4>GLO Data - Get instant Top up</Text4>
                         </AirtelText>
                        </Airtel>
                      </Box>
                      <h4>Data Services</h4>
                      <Box>
                          <Airtel onClick={ToggleAirtel}>
                              <Img src={img1} />
                              <AirtelText>
                                  <strong>Airtel Data</strong>
                                  <Text4>Airtel Data - Get instant top up</Text4>
                              </AirtelText>
                          </Airtel>

                          <Airtel>
                            <Img src={img2} />
                            <AirtelText>
                                <strong>MTN Data</strong>
                                <Text4>MTN Data - Get instant Data Top up</Text4>
                             </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img3} />
                            <AirtelText>
                                <strong>GLO Data</strong>
                                <Text4>GLO Data - Get instant Top up</Text4>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img4} />
                            <AirtelText>
                                <strong>9mobile Data</strong>
                                <Text4>9mobile Data - Get instant Top up</Text4>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img5} />
                            <AirtelText>
                                <strong>Smile Payment</strong>
                                <Text4>Pay for Smile Airtime and Internet Data</Text4>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img3} />
                            <AirtelText>
                                 <strong>GLO Data</strong>
                                <Text4>GLO Data - Get instant Top up</Text4>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img3} />
                            <AirtelText>
                                <strong>GLO Data</strong>
                                <Text4>GLO Data - Get instant Top up</Text4>
                         </AirtelText>
                        </Airtel>
                      </Box>
                  </Popup_content>
                  <Icon onClick={cancelPopup}><AiOutlineClose /></Icon>
              </Popups>
          ) : null}

          {showAirtel ? (
              <Airtelhold>
                  <Airtels />
          <Ico onClick={Remove}>
            <AiOutlineClose />
                  </Ico>
              </Airtelhold>
      ) : null}
      
      {showMtn ? (
        <Airtelhold>
          <Mtn />
          <Ico onClick={Remove}>
            <AiOutlineClose />
                  </Ico>
        </Airtelhold>
      ) : null}

      {showGlo ? (
        <Airtelhold>
          <Glo />
          <Ico onClick={Remove}>
            <AiOutlineClose />
                  </Ico>
        </Airtelhold>
      ) : null}

          <Home2>
            <Icon2>
            <GiTransportationRings />
            </Icon2>
            <NavLink
            to="/staffdashboard/stafftransaction"
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
        <Text2>Logout</Text2>
      </Power>
    </Container>
  )
}

export default SideBar
const Ico = styled.div`
  position: absolute;
  top: 29px;
  right: 26%;
  color: #fff;
  font-size: 20px;
  display: flex;
  z-index: 22;
  cursor: pointer;
`
const Text4 = styled.div`
    font-size: 11px;
    color: #000;
`
const Img = styled.img`
    height: 50px;
`
const Airtelhold = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: fixed;
    z-index: 3;
    justify-content: center;
    align-items: center;
`
const Icon = styled.div`
  display: flex;
  position: absolute;
  color: #fff; 
  right: 180px;
  font-size: 25px;
  top: 80px;
  cursor: pointer;
`
const AirtelText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    strong{
        margin: 0;
        font-weight: 500;
        font-size: 15px;
        color: #495463;
    }
`
const Airtel = styled.div`
    width: 230px;
    height: 50px;
    border: 1px solid #CEC2C2;
    padding: 10px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`
const Box = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
const Popup_content = styled.div`
    width: 850px;
    height: 450px;
    background-color: white;
    display: flex;
    flex-direction: column;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
   animation: popup-open 0.5s ease-out forwards;
   overflow-y: scroll;

   @keyframes popup-open {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
  }
  h3{
    margin: 0px;
    color: #173D52 !important;
    font-size: 1.3em;
    font-weight: 500;
  }
  p{
    font-size: 15px;
    margin-top: 7px;
    color: #000;
  }
  h4{
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    color: #495463
  }
`
const Popups = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 7;
`
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
  color: #fff;
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
    margin-top: 80px;
`;

const Icon2 = styled.div`
  color: #fff;
  font-size: 23px;
  cursor: pointer;
`;

const Img2 = styled.img`
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