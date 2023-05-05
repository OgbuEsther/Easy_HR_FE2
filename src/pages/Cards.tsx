import React from 'react'
import styled from "styled-components"
import img from "../Assets/airtel.jpg"
import img2 from "../Assets/mtn.jpg"
import img3 from "../Assets/glo.jpg"
import img4 from "../Assets/9mobile.jpg"
import img5 from "../Assets/smile.jpg"
import { AiOutlineClose } from "react-icons/ai"
import Airtels from './Airtels'
import { FaGoogleWallet } from "react-icons/fa"
import {RiNumbersFill} from "react-icons/ri"
import { useAppSelector } from '../components/global/Store'
import { useQuery } from '@tanstack/react-query'
import { getOneStaff } from '../utils/Api/ApiCall'

const Cards = () => {
  const [showAirtel, setShowAirtel] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);

  const cancelPopup = () => {
    setShowPopup(false);
  };

  const ToggleAirtel = () => {
    setShowAirtel(!showAirtel);
    setShowPopup(false);
  };

  const user = useAppSelector((state) => state.currentStaff);
  const getStaff = useQuery({
    queryKey: ["singleStaff"],
    queryFn: () => getOneStaff(user?._id),
  });
  // console.log("this is getStaff id", user?._id);

  return (
    <Container>
      <Card>
        <Left>
          <Icos>
            <FaGoogleWallet />
          </Icos>
          <Wallet>Wallet Balance</Wallet>
        </Left>

        {getStaff?.data?.data?.wallet?.map((el: any) => (
          <Right>
            <Bal>NGN {el?.balance}</Bal>
          </Right>
        ))}
      </Card>

      <Card>
        <Left2>
          <Icos>
            <RiNumbersFill />
          </Icos>
          <Wallet>Wallet Number</Wallet>
        </Left2>
        <Right>
          <Bal>{user?.walletNumber}</Bal>
        </Right>
      </Card>

      <Card>
        <Left3>
          <Icos>
            <RiNumbersFill />
          </Icos>
          <Wallet>company Code</Wallet>
        </Left3>
        <Right>
          <Bal>{user?.companyCode}</Bal>
        </Right>
      </Card>
      
          {showPopup ? (
              <Popups>
                  <Popupcontent>
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
          </Popupcontent>
          <Icon onClick={cancelPopup}>
            <AiOutlineClose />
          </Icon>
        </Popups>
      ) : null}

      {showAirtel ? (
        <Airtelhold>
          <Airtels />
        </Airtelhold>
      ) : null}
    </Container>
  );
};

export default Cards;
const Left3 = styled.div`
  background-color: #ed413e;
  width: 120px;
  height: 100%;
  border-right: 3px solid #f0f0f0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Left2 = styled.div`
  width: 120px;
  height: 100%;
  background-color: #f9d949;
  border-right: 3px solid #f0f0f0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Bal = styled.div`
  /* color: #3f3f3f; */
  color: black;
  margin-left: 30px;
  font-size: 26px;
  font-weight: 600;
`;
const Right = styled.div`
  flex: 1;
  height: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
`;
const Wallet = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 13px;
`;
const Icos = styled.div`
  color: #fff;
  font-size: 30px;
`;
const Left = styled.div`
  width: 120px;
  height: 100%;
  background-color: #ff8400;
  border-right: 3px solid #ffd93d;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;



const Airtelhold = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  z-index: 3;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  display: flex;
  position: absolute;
  color: #fff;
  right: 180px;
  font-size: 25px;
  top: 80px;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 11px;
  color: #000;
`;

const AirtelText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  strong {
    margin: 0;
    font-weight: 500;
    font-size: 15px;
    color: #495463;
  }
`;

const Img = styled.img`
  height: 50px;
`;

const Airtel = styled.div`
  width: 250px;
  height: 50px;
  border: 1px solid #cec2c2;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Popupcontent = styled.div`
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
  h3 {
    margin: 0px;
    color: #173d52 !important;
    font-size: 1.3em;
    font-weight: 500;
  }
  p {
    font-size: 15px;
    margin-top: 7px;
    color: #000;
  }
  h4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    color: #495463;
  }
`;

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
`;



const Card = styled.div`
  height: 120px;
  width: 329px;
  background-color: #fff;
  border-radius: 3px;
  /* border-bottom: 2px solid #0d71fa; */
  display: flex;
  border: 1px solid #d5dbe1;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 800px;
    /* height: 200px; */
  }

  @media screen and (max-width: 1024px) {
    width: 430px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
