import React from 'react'
import styled from "styled-components"
import img from "../Assets/airtel.jpg"
import img2 from "../Assets/mtn.jpg"
import img3 from "../Assets/glo.jpg"
import img4 from "../Assets/9mobile.jpg"
import img5 from "../Assets/smile.jpg"
import { AiOutlineClose } from "react-icons/ai"
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BsFillPiggyBankFill, BsTelephoneFill, BsDatabase } from "react-icons/bs";
import Airtels from './Airtels'

const Cards = () => {
      const [showAirtel, setShowAirtel] = React.useState(false);
    const [showPopup, setShowPopup] = React.useState(false);

     const cancelPopup = () => {
    setShowPopup(false);
    };
    
    const Togglepopup = () => {
    setShowPopup(!showPopup);
  }

    const ToggleAirtel = () => {
    setShowAirtel(!showAirtel);
    setShowPopup(false);
  }

  return (
      <Container>
          <Card>
              <CardHold>
                  <IconHold
                      style={{
              backgroundColor: "#2a9d8f",
            }}
            >
                    <MdOutlineAccountBalanceWallet />
                  </IconHold>
                  <CardTitle>wallet Number </CardTitle>
                  <CardInfo>123456 </CardInfo>
              </CardHold>
          </Card>

          <Card>
              <CardHold>
                  <IconHold
                      style={{
              backgroundColor: "#e76f51",
            }}
            >
                    <BsFillPiggyBankFill />
                  </IconHold>
                  <CardTitle>Balance </CardTitle>
                  <CardInfo>NGN 1000 </CardInfo>
              </CardHold>
          </Card>

          <Card >
        <CardHold>
          <IconHold
            style={{
              backgroundColor: "#2a9d8f",
            }}
          >
            <BsTelephoneFill />
          </IconHold>
          
            <CardInfo>Buy Airtime</CardInfo>
        </CardHold>
          </Card>
          
          <Card onClick={Togglepopup}>
        <CardHold>
          <IconHold
            style={{
              backgroundColor: "#e76f51",
            }}
          >
            <BsDatabase />
          </IconHold>
          
            <CardInfo>Buy Data</CardInfo>
        </CardHold>
          </Card>
          
          {showPopup ? (
              <Popups>
                  <Popup_content>
                      <h3>Payments</h3>
                      <p>Select the service you want to make payment for</p>
                      <h4>Data Services</h4>
                      <Box>
                          <Airtel onClick={ToggleAirtel}>
                              <Img src={img} />
                              <AirtelText>
                                  <strong>Airtel Data</strong>
                                  <Text>Airtel Data - Get instant top up</Text>
                              </AirtelText>
                          </Airtel>

                          <Airtel>
                            <Img src={img2} />
                            <AirtelText>
                                <strong>MTN Data</strong>
                                <Text>MTN Data - Get instant Data Top up</Text>
                             </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img3} />
                            <AirtelText>
                                <strong>GLO Data</strong>
                                <Text>GLO Data - Get instant Top up</Text>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img4} />
                            <AirtelText>
                                <strong>9mobile Data</strong>
                                <Text>9mobile Data - Get instant Top up</Text>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img5} />
                            <AirtelText>
                                <strong>Smile Payment</strong>
                                <Text>Pay for Smile Airtime and Internet Data</Text>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img3} />
                            <AirtelText>
                                 <strong>GLO Data</strong>
                                <Text>GLO Data - Get instant Top up</Text>
                            </AirtelText>
                          </Airtel>
                          
                          <Airtel>
                            <Img src={img3} />
                            <AirtelText>
                                <strong>GLO Data</strong>
                                <Text>GLO Data - Get instant Top up</Text>
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
              </Airtelhold>
          ) : null}
    </Container>
  )
}

export default Cards
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

const Text = styled.div`
    font-size: 11px;
    color: #000;
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

const Img = styled.img`
    height: 50px;
`

const Airtel = styled.div`
    width: 250px;
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

const CardInfo = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
`;

const CardTitle = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;

const IconHold = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 15px;
`;

const CardHold = styled.div`
  width: 85%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Card = styled.div`
  height: 180px;
  width: 228px;
  background-color: #fff;
  border-radius: 3px;
  border-bottom: 2px solid #0d71fa;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 320px;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px){
    display: flex;
    justify-content: center;
  }
`;