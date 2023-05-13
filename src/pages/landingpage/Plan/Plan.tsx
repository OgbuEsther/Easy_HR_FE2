
import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";
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
            style={{ backgroundColor: payroll ? "red" : "" }}
          >
            <Icon className="cha" />
          </Cricle>
          <p>Payroll</p>
        </Hold>
        <Hold>
          <Cricle onClick={Time} style={{ backgroundColor: time ? "red" : "" }}>
            <BiTime size={80} className="cha" />
          </Cricle>
          <p>Time & Attendance</p>
        </Hold>
        <Hold>
          <Cricle
            onClick={Benefits}
            style={{ backgroundColor: benefits ? "red" : "" }}
          >
            <GrStatusGood size={80} className="cha" />
          </Cricle>
          <p>Benefits</p>
        </Hold>
        <Hold>
          <Cricle onClick={Hr} style={{ backgroundColor: hr ? "red" : "" }}>
            <Icon className="cha" />
          </Cricle>
          <p>Hr Management</p>
        </Hold>
        <Hold>
          <Cricle onClick={Hire} style={{ backgroundColor: hire ? "red" : "" }}>
            <Icon className="cha" />
          </Cricle>
          <p>Hiring</p>
        </Hold>
      </Main>
      {payroll ? (
        <Second>
          <AiOutlineDollarCircle
            size={100}
            style={{ color: "red", marginLeft: "70px", marginTop: "50px" }}
          />
          <Holder>
            <h3>Payroll</h3>
            <p>
              Save time and improve payroll accuracy with the latest in time and
              attendance software. However you prefer to track employee time, we
              have flexible options to fit your business.
            </p>
            <Read>Read More</Read>
          </Holder>
        </Second>
      ) : null}
      {time ? (
        <Second>
          <BiTime
            size={100}
            style={{ color: "red", marginLeft: "70px", marginTop: "50px" }}
          />
          <Holder>
            <h3>Time</h3>
            <p>
              Save time and improve payroll accuracy with the latest in time and
              attendance software. However you prefer to track employee time, we
              have flexible options to fit your business.
            </p>
            <Read>Read More</Read>
          </Holder>
        </Second>
      ) : null}

      {benefits ? (
        <Second>
          <GrStatusGood
            size={100}
            style={{ color: "red", marginLeft: "70px", marginTop: "50px" }}
          />
          <Holder>
            <h3>Benefits</h3>
            <p>
              Save time and improve payroll accuracy with the latest in time and
              attendance software. However you prefer to track employee time, we
              have flexible options to fit your business.
            </p>
            <Read>Read More</Read>
          </Holder>
        </Second>
      ) : null}
      {hr ? (
        <Second>
          <AiOutlineDollarCircle
            size={100}
            style={{ color: "red", marginLeft: "70px", marginTop: "50px" }}
          />
          <Holder>
            <h3>Hr Management</h3>
            <p>
              Save time and improve payroll accuracy with the latest in time and
              attendance software. However you prefer to track employee time, we
              have flexible options to fit your business.
            </p>
            <Read>Read More</Read>
          </Holder>
        </Second>
      ) : null}

      {hire ? (
        <Second>
          <AiOutlineDollarCircle
            size={100}
            style={{ color: "red", marginLeft: "70px", marginTop: "50px" }}
          />
          <Holder>
            <h3>Hiring</h3>
            <p>
              Save time and improve payroll accuracy with the latest in time and
              attendance software. However you prefer to track employee time, we
              have flexible options to fit your business.
            </p>
            <Read>Read More</Read>
          </Holder>
        </Second>
      ) : null}
    </Container>
  );
};

export default App;

const Read = styled.div`
  color: #0e6fd5;
  text-decoration: underline;
  margin-top: 40px;
`;

const Icons = styled.div``;
const Holder = styled.div`
  margin-left: 35px;
  margin-top: 50px;

  h3 {
    font-size: 30px;
    margin: 0;
  }

  p {
    color: gray;
    font-size: 20px;
  }
`;

const Second = styled.div`
  width: 90%;
  height: 300px;
  border: 1px solid gray;
  margin-bottom: 10px;
  margin-top: 70px;
  display: flex;
  /* align-items: center; */
`;

const Hold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-weight: 700;
    font-size: 22px;
    margin: 0;
    margin-top: 35px;
  }
`;

const Icon = styled(AiOutlineDollarCircle)`
  font-size: 80px;
  color: #0e6fd5;
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

  :hover {
    background-color: red;
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
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;