import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../components/global/Store";
import { CgPerformance } from "react-icons/cg";
import { TbBrandNytimes } from "react-icons/tb";
import { FaAlipay } from "react-icons/fa";

import AbsentUserProps from "./AbsentUserProps";
import axios from "axios";
import { genAttendanceToken, url } from "../../utils/Api/ApiCall";
import { useQuery } from "@tanstack/react-query";
import PresentProps from "./PresentProps";
import AttendanceHistoryProps from "./AttendanceHistoryProps";
const Adminattendance = () => {
  const admin = useAppSelector((state) => state.currentUser);

  const [token, setToken] = React.useState("");

  useQuery({
    queryKey: ["genToken"],
    queryFn: () => genAttendanceToken(admin?._id),
  });
  // console.log("this is admin",admin?._id)
  // console.log("this is admin22",)

  // const theToken = getAdmin?.data?.data?.data?.setToken;

  const [show, setShow] = React.useState<Boolean>(true);
  const [show2, setShow2] = React.useState<Boolean>(false);
  const [show3, setShow3] = React.useState<Boolean>(false);

  const Toogle = () => {
    setShow(true);
    setShow2(false);
    setShow3(false);
  };
  const Toogle2 = () => {
    setShow2(true);
    setShow(false);
    setShow3(false);
  };
  const Toogle3 = () => {
    setShow3(true);
    setShow2(false);
    setShow(false);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <One>
            <Word>
              Attendance <br />
              <span>
                <a href="/dashboard">Dashboard</a>/ Attendance
              </span>
            </Word>

            <Button
              onClick={() => {
                axios
                  .post(`${url}/createattendance/${admin?._id}`)
                  .then((res) => {
                    setToken(res.data.data.setToken);
                  });
              }}
            >
              Generate Token
            </Button>

            <p>{token} </p>
          </One>

          <ButtonsHold>
            <Buttons
              bg={show ? "#00244E" : ""}
              cl={show ? "white" : ""}
              onClick={Toogle}
              bcc=""
            >
              <Icons>
                <CgPerformance />
              </Icons>
              Absent
            </Buttons>
            <Buttons
              bg={show2 ? "#00244E" : ""}
              cl={show2 ? "white" : ""}
              onClick={Toogle2}
              bcc=""
            >
              <Icons>
                <TbBrandNytimes />
              </Icons>
              Present
            </Buttons>
            <Buttons
              bg={show3 ? "#00244E" : ""}
              cl={show3 ? "white" : ""}
              onClick={Toogle3}
              bcc=""
            >
              <Icons>
                <FaAlipay />
              </Icons>
              Attendance History
            </Buttons>
          </ButtonsHold>

          {/* <Box> */}

          {/* </Box>/ */}
        </Wrapper>
        {show ? (
          <div>
            <AbsentUserProps />
          </div>
        ) : null}

        {show2 ? (
          <div>
            <PresentProps />
          </div>
        ) : null}
        {show3 ? (
          <div>
            <AttendanceHistoryProps />
          </div>
        ) : null}
      </Container>
    </div>
  );
};

export default Adminattendance;

const Buttons = styled.button<{ bg: string; cl: string; bcc: string }>`
  height: 50px;
  width: 250px;
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
  align-items: center;
`;

const One = styled.div`
  /* background-color:red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Button = styled.button`
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #1f337c;
  border-radius: 10px;
  cursor: pointer;
  border: none;
`;
const Word = styled.div`
  font-weight: 500;
  font-size: 26px;
  color: rgb(31, 31, 31);
  background-color: rgba(0, 0, 0, 0);
  line-height: 31.2px;
  text-decoration: none solid rgb(31, 31, 31);
  text-align: start;
  margin-left: 10px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;
  margin-top: 30px;
  /* background-color: greenyellow; */
  span {
    color: rgb(51, 51, 51);
    background-color: rgba(0, 0, 0, 0);
    font-size: 16px;
    line-height: 24px;
    letter-spacing: normal;
    font-weight: 500;
    text-decoration: none solid rgb(51, 51, 51);
    text-align: left;
  }

  a {
    text-decoration: none;

    :hover {
      color: black;
    }
  }
`;

const Icons = styled.div`
  font-size: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const Wrapper = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* margin-left: 30px; */
  padding-top: 90px;
  padding-left: 30px;
  padding-right: 30px;
  /* background-color:yellow; */
`;

const Container = styled.div`
  width: calc(100vw - 220px);
  background-color: #f5f7fa;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
