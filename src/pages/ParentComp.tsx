import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FaGoogleWallet } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../components/global/Store";
import { useQuery } from "@tanstack/react-query";
import { getOneAdmin } from "../utils/Api/ApiCall";
// import AdminCard from "./AdminCard";
import { Charts } from "../components/Graph";
import DoughnutAdmin from "./DoughnutAdmin";
import HomeLeave from "./HomeLeave";
import Cards from "../pages/Cards"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ParentComp = () => {



  const percentage = 45;
  const percentage1 = 55;



  const [show, setShow] = React.useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  const Toggle2 = () => {
    setShow(false);
  };

  const admin = useAppSelector((state) => state.currentUser);

  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(admin?._id),
  });

  

  return (
    <div>
      <Container>
        <Wrapper>
          <Top>

            {show ? (
              <Slidein>
                <Wallets>
                  <Icon onClick={Toggle2}>
                    <MdOutlineCancel />
                  </Icon>
                  <Card2>
                    <Circle>
                      <FaGoogleWallet />
                    </Circle>
                    {getAdmin?.data?.data?.wallet?.map((el: any) => (
                      <Wallet>
                        <p>Wallet Balance</p>
                        <h3>NGN:{el?.balance} </h3>
                      </Wallet>
                    ))}
                  </Card2>

                  <Tap>
                    <h3>Admin Details: </h3>
                    <p>
                      Wallet number <strong>{admin?.walletNumber} </strong>
                    </p>
                  </Tap>

                  <Tap2>
                    <p>
                      Company name: <strong>{admin?.companyname}</strong>
                    </p>
                  </Tap2>

                  <Tap2>
                    <p>
                      Company code: <strong>{admin?.companyCode} </strong>
                    </p>
                  </Tap2>

                  <Tap2>
                    <p>
                      Admin name: <strong>{admin?.yourName} </strong>
                    </p>
                  </Tap2>

                  <Holder>
                    <NavLink to="/payment" style={{ textDecoration: "none" }}>
                      <button>Credit wallet</button>
                    </NavLink>

                    <NavLink to="/payout" style={{ textDecoration: "none" }}>
                      <button>Withdraw to bank</button>
                    </NavLink>
                  </Holder>
                </Wallets>
              </Slidein>
            ) : null}
          </Top>
          
          <Cards />
          
          <Hold>
         <Cha>
          <Title>
          <Word>  Monthly Acquisition </Word>
         <IconHold>
         <Icon1>
          <Dot bcc="#FD625E"></Dot>
          Cost
          </Icon1>
         <Icon1>
          <Dot bcc="#28383C"></Dot>
          Item
          </Icon1>
         </IconHold>
          </Title>
              <Charts />
            </Cha>
            {/* <DoughnutAdmin /> */}

            <Progress>
              <Firstprog>
                <h2>Leave Statistic</h2>
                <div style={{width: "130px", height: "130px", marginTop: "27px"}}>
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                    pathColor: "#fd625e",
                    trailColor: '#d6d6d6',
                  })}/>
                </div>
              </Firstprog>

              <Firstprog>
                <h2>Performance Statistic</h2>
                <div style={{width: "130px", height: "130px", marginTop: "27px"}}>
                  <CircularProgressbar value={percentage1} text={`${percentage1}%`} styles={buildStyles({
                    pathColor: "#0168aa",
                    trailColor: '#d6d6d6',
                  })}/>
                </div>
              </Firstprog>
            </Progress>

          </Hold>
         <HomeLeave/>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ParentComp;
const Firstprog = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    font-weight: 600;
    font-size: 19px;
    background-color: red;
  }
`
const Progress = styled.div`
  width: 45%;
  display: flex;
  /* margin-top: 80px; */
  background-color: #fff;
  padding: 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 12px;

  @media screen and (max-width: 500px) {
    width: 100%;
    /* margin-bottom: 20px; */
  }
`

const ChartHold = styled.div`
width: 52%;
background-color: grey;
display: flex;
flex-direction: column;
`

const Dot = styled.div<{bcc:string}>`
width: 10px;
height: 10px;
background-color: ${(props)=>props.bcc};
border-radius: 50px;
margin:3px;
`
  

const Icon1 = styled.div`
margin:5px;
display: flex;
align-items: center;
justify-content: center;
`

const Word = styled.div`
font-weight: 500;

`

const IconHold = styled.div`
display: flex;

`

const Title = styled.div`
display: flex;
justify-content: space-between;
`
  

const Cha = styled.div`
  width: 52%;
  display: flex;
  flex-direction: column;
  padding: 10px;
   background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`
const Hold = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* background-color: red; */
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    margin-top: 15px;
    margin-bottom: 20px;
  }
`


const Holder = styled.div`
  display: flex;
  button {
    width: 160%;
    height: 50px;
    background-color: red;
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 60px;
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px;
  }
`;

const Tap2 = styled.div`
  h3 {
    margin: 0;
    font-size: 19px;
    font-weight: 500;
  }
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    font-size: 13px;
    font-weight: 500;
  }
  strong {
    font-size: 16px;
    margin-left: 15px;
  }
`;

const Tap = styled.div`
  h3 {
    margin: 0;
    font-size: 19px;
    font-weight: 500;
  }
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    font-size: 13px;
    font-weight: 500;
    margin-top: 30px;
  }
  strong {
    font-size: 16px;
    margin-left: 15px;
  }
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
    margin-top: 5px;
    font-size: 23px;
  }
`;

const Circle = styled.div`
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

const Card2 = styled.div`
  width: 300px;
  height: 150px;
  margin-top: 30px;
  background-color: #00244e;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
`;

const Icon = styled.div`
  position: absolute;
  font-size: 25px;
  top: 15px;
  cursor: pointer;
`;

const Wallets = styled.div`
  width: 330px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Slidein = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 12345;
  position: fixed;
  justify-content: flex-end;
  animation: slide-in 0.5s ease-out;

  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  button {
    width: 130px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00244e;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
    color: #fff;
    position: relative;
    border: none;
    outline: none;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Container = styled.div`
  width: calc(100vw - 220px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  overflow: hidden;
  margin-top: 20px;
  background: radial-gradient(
    rgba(103, 68, 2, 0.2) 8%,
    transparent 2%
);
background-position: 0% 0%;
background-size: 3vmin 3vmin;

  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;
