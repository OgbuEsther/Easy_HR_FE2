
import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiFocus2Line } from "react-icons/ri";
import { GrStatusGood } from "react-icons/gr";
import { SiOpenai, SiSemanticuireact,SiWhitesource } from "react-icons/si";
import { IoTimer } from "react-icons/io5";
import { ImIcoMoon } from "react-icons/im";
import PlanProps from "./PlanProps";

const App = () => {
  const [payroll, setPayroll] = useState(true);
  const [time, setTime] = useState(false);
  const [benefits, setBenefits] = useState(false);
  const [hr, sethr] = useState(false);
  const [hire, sethire] = useState(false);

  const Payroll = () => {
    setPayroll(true);
    setTime(false);
    setBenefits(false);
    sethr(false);
    sethire(false);
  };
  const Time = () => {
    setPayroll(false);
    setTime(true);
    setBenefits(false);
    sethr(false);
    sethire(false);
  };

  const Benefits = () => {
    setPayroll(false);
    setTime(false);
    setBenefits(true);
    sethr(false);
    sethire(false);
  };

  const Hr = () => {
    setPayroll(false);
    setTime(false);
    setBenefits(false);
    sethr(true);
    sethire(false);
  };

  const Hire = () => {
    setPayroll(false);
    setTime(false);
    setBenefits(false);
    sethr(false);
    sethire(true);
  };
  return (
    <Container>
      <Main>
        <Hold>
          <Cricle
            onClick={Payroll}
            style={{ backgroundColor: payroll ? "#DC3545" : "" }}
          >
            <Icon className="cha" />
          </Cricle>
          <p>Payroll</p>
        </Hold>
        <Hold>
          <Cricle onClick={Time} style={{ backgroundColor: time ? "#DC3545" : "" }}>
            <Icons1 className="cha" />
          </Cricle>
          <p>Time & Attendance</p>
        </Hold>
        <Hold>
          <Cricle
            onClick={Benefits}
            style={{ backgroundColor: benefits ? "#DC3545" : "" }}
          >
            <Icons2 className="cha" />
          </Cricle>
          <p>Benefits</p>
        </Hold>
        <Hold>
          <Cricle onClick={Hr} style={{ backgroundColor: hr ? "#DC3545" : "" }}>
            <Icon5 className="cha" />
          </Cricle>
          <p>Hr Management</p>
        </Hold>
        <Hold>
          <Cricle onClick={Hire} style={{ backgroundColor: hire ? "#DC3545" : "" }}>
            <Icon6 className="cha" />
          </Cricle>
          <p>Hiring</p>
        </Hold>
      </Main>
      {payroll ? (
        <Second>
          <Iconm>
            <SiOpenai />
          </Iconm>
          <Holder>
            <h3>Payroll</h3>
            <p>
              Save time and improve payroll accuracy with the latest in time and
              attendance software. However you prefer to track employee time, we
              have flexible options to fit your business.
            </p>
          
          </Holder>
        </Second>
      ) : null}
      {time ? (
        <Second>
          <Iconm>
            <IoTimer />
          </Iconm>
          <Holder>
            <h3>Time & Attendance</h3>
            <p>
            Tracking time and attendance is critical for all organizations, no matter its size or the methods used to determine employee pay.
            Having an automated time and attendance tracking system in place can help organizations across all industries save money and improve operations.
            </p>
           
          </Holder>
        </Second>
      ) : null}

      {benefits ? (
        <Second>
          <Iconm>
            <ImIcoMoon />
          </Iconm>
          <Holder>
            <h3>Benefits</h3>
            <p>
            HR systems help reduce administrative time, broaden headhunting options, assist with onboarding, speed up information dissemination among team members, improve security and simplify payroll processing, among other things
            </p>
         
          </Holder>
        </Second>
      ) : null}
      {hr ? (
        <Second>
          <Iconm>
            <RiFocus2Line />
          </Iconm>
          <Holder>
            <h3>Hr Management</h3>
            <p>
            The purpose of HR management software is to combine different human resource and administration processes in a centralized location, from where the manager can also assign tasks, monitor, and evaluate progress, and reward the best performers in the team.
            </p>
           
          </Holder>
        </Second>
      ) : null}

      {hire ? (
        <Second>
          <Iconm>
            <SiWhitesource />
          </Iconm>
          <Holder>
            <h3>Hiring</h3>
            <p>
            Human resource managers go through a series of steps to identify and acquire the best candidates to fill a posted job requirement.
            </p>
         
          </Holder>
        </Second>
      ) : null}
    </Container>
  );
};

export default App;

const Iconm = styled.div`
  color: #DC3545;
  margin-left: 70px;
  margin-top: 50px;
  font-size: 60px;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

const Icons1 = styled(IoTimer)`
  font-size: 50px;
  color: #0e6fd5  ;

  @media screen and (max-width: 900px) {
    font-size: 47px;
  }
`;
const Icons2 = styled(ImIcoMoon)`
  font-size: 50px;
  color: #0e6fd5;

  @media screen and (max-width: 900px) {
    font-size: 47px;
  }
`;

const Read = styled.div`
  color: #0e6fd5;
  text-decoration: underline;
  margin-top: 40px;
`;

const Icons = styled.div``;
const Holder = styled.div`
  margin-left: 35px;
  margin-top: 50px;

  @media screen and (max-width: 500px) {
    margin: 0;
  }

  h3 {
    font-size: 30px;
    margin: 0;
  }

  p {
    color: gray;
    font-size: 20px;

    @media screen and (max-width: 500px) {
      width: 80%;
    }
  }
`;

const Second = styled.div`
  width: 90%;
  height: 200px;
  border: 1px solid gray;
  margin-bottom: 40px;
  margin-top: 40px;
  display: flex;
  border-radius: 5px;
  /* align-items: center; */

  @media screen and (max-width: 500px) {
    display: block;
    margin: 0;
    height: 440px;
    padding-left: 40px;
    width: 75%;
    margin-top: 34px;
    /* background-color: brown; */
  }
`;

const Hold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    margin-bottom: 20px;
  }
  p {
    font-weight: 700;
    font-size: 22px;
    margin: 0;
    margin-top: 35px;

    @media screen and (max-width: 500px) {
      margin-top: 14px;
    }
  }
`;

const Icon = styled(SiSemanticuireact)`
  font-size: 50px;
  color: #0e6fd5;

  @media screen and (max-width: 900px) {
    font-size: 47px;
  }
`;

const Icon5 = styled(RiFocus2Line)`
  font-size: 50px;
  color: #0e6fd5;

  @media screen and (max-width: 900px) {
    font-size: 47px;
  }
`;

const Icon6 = styled(SiWhitesource)`
  font-size: 50px;
  color: #0e6fd5;

  @media screen and (max-width: 900px) {
    font-size: 47px;
  }
`;

const Cricle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  color: #0e6fd5;
  cursor: pointer;
  background-color: white;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    #9cc7ff 0px 50px 100px -20px, #9cc7ff 0px 30px 60px -30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    color: #0e6fd5;
    cursor: pointer;
    background-color: white;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      #9cc7ff 0px 50px 100px -20px, #9cc7ff 0px 30px 60px -30px;
  }

  :hover {
    background-color: #DC3545;
    transition: all 350ms ease-in-out;
  }

  :hover .cha {
    color: white;
  }
`;
const Main = styled.div`
  width: 80%;
  /* background-color: gray; */
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;