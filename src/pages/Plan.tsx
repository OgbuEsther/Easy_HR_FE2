import React, {useState} from 'react'
import styled from 'styled-components'
import { BsArrowRightShort, BsFillHousesFill, BsBusFront } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io"
import { MdOutlineCancel } from "react-icons/md";
import Rents from './Rents/Rents';


const Plan = () => {

      const [plans, setplans] = useState(false);
        const [rents, setRents] = useState(false);
        const [fees, setfees] = useState(false);
    const [tour, setTour] = useState(false);

  const Showrents = () => {
    setRents(!rents);
    setplans(false);
  };

  const Showfees = () => {
    setfees(!fees);
    setplans(false);
  };

  const Showtour = () => {
    setTour(!tour);
    setplans(false);
  };

  const Remove = () => {
    setplans(false);
  };

  return (
      <Container>
          <Holder>
            <Card4>
              <Circle4>
                <BsFillHousesFill />
              </Circle4>
              <Wallet>
                <h3>Rents</h3>
                <p>Wallet id</p>
                <button onClick={Showrents}>Get Started</button>
              </Wallet>
            </Card4>

            <Card2>
              <Circle2>
                <IoIosSchool />
              </Circle2>
              <Wallet>
                <h3>School fees</h3>
                <p>Wallet id</p>
                <button onClick={Showfees}>Get Started</button>
              </Wallet>
            </Card2>

            <Card3>
              <Circle3>
                <BsBusFront />
              </Circle3>
              <Wallet>
                <h3>Travel & Tour</h3>
                <p>Wallet id</p>
                <button onClick={Showtour}>Get Started</button>
              </Wallet>
            </Card3>
            <Icons onClick={Remove}>
              <MdOutlineCancel />
            </Icons>
          </Holder>

          {rents ? (
              <Rents />
          ) : null}
    </Container>
  )
}

export default Plan

const Savehold = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
`;
const Icons = styled.div`
  position: absolute;
  font-size: 25px;
  right: 18%;
  color: #fff;
  cursor: pointer;
  top: 120px;
`;
const Circle3 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #3184f7;
  color: #fff;
  font-size: 30px;
`;
const Card3 = styled.div`
  width: 240px;
  height: 150px;
  background-color: #0d71fa;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
  margin: 10px;
`;
const Circle2 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #f7a156;
  color: #fff;
  font-size: 30px;
`;
const Card2 = styled.div`
  width: 240px;
  height: 150px;
  background-color: #ef7914;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
`;
const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  margin-top: 15px;
  p {
    color: #fff;
    margin: 0;
  }
  h3 {
    color: #fff;
    font-size: 23px;
    margin: 0;
  }
  button {
    cursor: pointer;
    margin-top: 12px;
    outline: none;
    border: none;
    width: 90px;
    background: none;
    height: 35px;
    border-radius: 50px;
    text-decoration: underline;
    color: #fff;
  }
`;
const Circle4 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #82d1b9;
  color: #fff;
  font-size: 30px;
`;
const Card4 = styled.div`
  width: 240px;
  height: 150px;
  background-color: #39a081;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
  margin: 10px;
`;
const Holder = styled.div`
  width: 900px;
  height: 400px;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
    width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 123456;
  position: relative;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
  transition: all 350ms ease-in-out;
`