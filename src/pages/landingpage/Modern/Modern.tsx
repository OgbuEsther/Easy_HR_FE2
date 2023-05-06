import React from "react";
import styled from "styled-components";
import PropsCards from "./PropsCards";
import img from "../../../Assets/card9.png";
import img1 from "../../../Assets/ds6.webp";
import img2 from "../../../Assets/ds4.webp";
import img3 from "../../../Assets/ds5.webp";
import bg from "../../../Assets/bgimg2.png";
import im from "../../../Assets/ft.png";
import { CgPerformance } from "react-icons/cg";
import { TbBrandNytimes } from "react-icons/tb";
import { FaAlipay } from "react-icons/fa";
import { SiSecurityscorecard } from "react-icons/si";

const Modern = () => {
  const [show, setShow] = React.useState<Boolean>(true);
  const [show2, setShow2] = React.useState<Boolean>(false);
  const [show3, setShow3] = React.useState<Boolean>(false);
  const [show4, setShow4] = React.useState<Boolean>(false);

  const Toogle = () => {
    setShow(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
  };
  const Toogle2 = () => {
    setShow2(true);
    setShow(false);
    setShow3(false);
    setShow4(false);
  };
  const Toogle3 = () => {
    setShow3(true);
    setShow2(false);
    setShow(false);
    setShow4(false);
  };
  const Toogle4 = () => {
    setShow4(true);
    setShow3(false);
    setShow2(false);
    setShow(false);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Text>
            <Wrd>EVERYTHING PAYROLL HR . ONE PLAFORM . EASYHR</Wrd>
            <Sub>
              Designed For <br /> Modern Workplaces.
            </Sub>
          </Text>

          <ButtonsHold>
            <Button
              bg={show ? "#00244E" : ""}
              cl={show ? "white" : ""}
              onClick={Toogle}
              bcc=""
            >
              <Icon>
                <CgPerformance />
              </Icon>
              Performance
            </Button>
            <Button
              bg={show2 ? "#00244E" : ""}
              cl={show2 ? "white" : ""}
              onClick={Toogle2}
              bcc=""
            >
              <Icon>
                <TbBrandNytimes />
              </Icon>
              Time & Attendance
            </Button>
            <Button
              bg={show3 ? "#00244E" : ""}
              cl={show3 ? "white" : ""}
              onClick={Toogle3}
              bcc=""
            >
              <Icon>
                <FaAlipay />
              </Icon>
              Payroll
            </Button>
            <Button
              bg={show4 ? "#00244E" : ""}
              cl={show4 ? "white" : ""}
              onClick={Toogle4}
              bcc=""
            >
              <Icon>
                <SiSecurityscorecard />
              </Icon>
              Recruitment
            </Button>
          </ButtonsHold>

          <Box>
            {show ? (
              <PropsCards
                text="Performance"
                word="A Performance-driven Culture.Enabled"
                sub="Identify and improve the critical skills needed to egt your business to the next level. Empower line managers and direct reports with the tools they need to drive a high-performance culture and achieve company goals"
                image={img}
              />
            ) : null}
            {show2 ? (
              <PropsCards
                text="Time Management"
                word="Time is Money. Track Both"
                sub="Keep your workforce accountable with a system that helps employees make the most of their work hours and get fairly paid.Design and implement your time and attendance policies for on-site and remote employees"
                image={img1}
              />
            ) : null}
            {show3 ? (
              <PropsCards
                text="PayRoll"
                word="Compliant PayRoll.Error-free"
                sub="Our pre-progrmaaed formulas deliver fast and accurate calculations,while integrating with HRIS so you can easily fetch payroll updates.With built-in up-to-date compliance,you really can run payroll in minutes."
                image={img2}
              />
            ) : null}
            {show4 ? (
              <PropsCards
                text="Recruitment"
                word="Hire Right. Drive Business Growth"
                sub="Everyone wants the best people on their teams.Reduce time to fill critical positions and retain the best talents you need to succeed"
                image={img3}
              />
            ) : null}
          </Box>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Modern;
const Icon = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button<{ bg: string; cl: string; bcc: string }>`
  height: 50px;
  width: 250px;
  
  @media screen and (max-width: 500px) {
    /* display: none; */
    font-size: 7px;
    height: 30px;
    width: 80px;
     margin-left: 0px;
  }
  border-radius: 50px;
  position: relative;
  border: 0;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.cl};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 350ms;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${(props) => props.bcc};
  }
`;

const ButtonsHold = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
  }
`;

const Sub = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: rgb(1, 28, 57);
  background-color: rgba(0, 0, 0, 0);
  font-family: Sora;
  font-size: 40px;
  line-height: 48px;
  vertical-align: baseline;
  font-weight: 700;
  letter-spacing: normal;
  margin: 30px;
`;

const Wrd = styled.div`
  color: rgb(158, 156, 156);
  background-color: rgba(0, 0, 0, 0);
  font-size: 16px;
  font-family: Sora;
  line-height: 24px;
  vertical-align: baseline;
  letter-spacing: 2px;
  font-weight: 500;
  text-align: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
const Box = styled.div`
  margin-top: 20px;
  border-radius: 50px;
  background-color: #f3f5e9;
  height: 500px;
  width: 93%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  /* background-position: center; */
  background-size: contain;
  @media screen and (max-width: 500px) {
   height: 800px;
  }
`;

const Wrapper = styled.div`
  /* background-color: #F0F7E8; */
  height: 850px;
  width: 98%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`;

const Container = styled.div`
  /* background-color: red; */
  height: 1000px;
  width: 100%;
  display: flex;
  /* background-color: #F8F8F8; */
  /* background-image: url(${im}); */
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    /* display: none; */
  }
  @media screen and (max-width: 68px7) {
  }
`;
