import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FaGoogleWallet } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Cards from "./Cards";
import Pies from "./Pies";

import {FaJediOrder } from "react-icons/fa"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { GiHypersonicMelon,GiFireDash } from "react-icons/gi"
import { BsArrowRightShort, BsFillHousesFill, BsBusFront } from "react-icons/bs";
import img from "../Assets/saves.svg"
import { useAppSelector } from "../components/global/Store";
import { IoIosSchool } from "react-icons/io"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Rents from "./Rents/Rents";
import Fees from "./Fees/Fees";
import Tour from "./Tour/Tour";
import StaffTransactionhome from "./StaffTransaction/StaffTransactionhome";




const ParentComp = () => {

    const schema = yup
    .object({
      amount: yup.number().required("field must be"),
      subscribe: yup.boolean().required("field must be checked"),
    })
    .required();
  type formData = yup.InferType<typeof schema>;
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

    const [show, setShow] = React.useState(false);
      const [plans, setplans] = React.useState(false);
    const [rents, setRents] = React.useState(false);
    const [fees, setfees] = React.useState(false);
    const [tour, setTour] = React.useState(false);

    const Showtour = () => {
    setTour(!tour);
    setplans(false);
  };

    const Showfees = () => {
    setfees(!fees);
    setplans(false);
  };
    
    const Showrents = () => {
    setRents(!rents);
    setplans(false);
  };

    const Showplans = () => {
    setplans(!plans);
  };

  const Toggle = () => {
    setShow(!show);
  };

  const Toggle2 = () => {
    setShow(false);
    };
    
    const Removerent = () => {
    setRents(false);
    };
    
    const Removefees = () => {
    setfees(false);
    };
    
    const Removetour = () => {
    setTour(false);
  };

    const Remove = () => {
    setplans(false);
  };

  const user = useAppSelector((state) => state.currentStaff);
//   const getStaff = useQuery({
//     queryKey: ["singleStaff"],
//     queryFn: () => getOneStaff(user?._id),
//   });
// console.log("this is getStaff id",user?._id)

  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <Left>
              <Bold>
                <Icn>
                <GiFireDash/>
                </Icn>
                Dashboard</Bold>
              <button onClick={Toggle}>Credit Wallet</button>
            </Left>
            <hr />

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
                    <Wallet>
                      <p>Wallet Balance</p>
                      <h3>NGN:0.00</h3>
                    </Wallet>
                  </Card2>

                  <Tap>
                    <h3>Admin Details: </h3>
                    <p>
                    Wallet number <strong>{user?.walletNumber} </strong>
                    </p>
                  </Tap>

                  <Tap2>
                    <p>
                    Company name: <strong>{user?.companyname}</strong>
                    </p>
                  </Tap2>

                  <Tap2>
                    <p>
                    Company code: <strong>{user?.companyCode} </strong>
                    </p>
                  </Tap2>

                  <Tap2>
                    <p>
                    Staff name: <strong>{user?.yourName} </strong>
                    </p>
                  </Tap2>

                  <Holder>
                    <NavLink to="/payment" style={{ textDecoration: "none" }}>
                    <button>Credit wallet</button>
                    </NavLink>
                    
                    <NavLink to="/payout" style={{textDecoration: "none"}}>
                    <button>Withdraw to bank</button>
                  </NavLink>
                  </Holder>
                </Wallets>
              </Slidein>
            ) : null}
          </Top>

          <Cards />
          <Down>
            <Piehold>
                          <Pee>
                              <Title>Transaction Chart</Title>
                              <Pies />
                          </Pee>
                      </Piehold>
                      <Planhold>
                          <Img src={img} />
                          <Savehold>
                              <Title2>Savings Plan</Title2>
                              <P>
                                  <p>Discover effective strategies for compounding money over time</p>
                                  <C><p>This savings plan can be your financial nest towards achieving any capital project such as building a house or against unforeseen circumstances such as disability.</p></C>
                              </P>
                              <Button onClick={Showplans}>Start Plans</Button>
                          </Savehold>
                      </Planhold>
                  </Down>

            {plans ? (
        <Plans >
          <Holder2>
            <Card6>
              <Circle4>
                <BsFillHousesFill />
              </Circle4>
              <Wallet>
                <h3>Rents</h3>
                <p>Wallet id</p>
                <button onClick={Showrents}>Get Started</button>
              </Wallet>
            </Card6>

            <Card7>
              <Circle2>
                <IoIosSchool />
              </Circle2>
              <Wallet>
                <h3>School fees</h3>
                <p>Wallet id</p>
                <button onClick={Showfees}>Get Started</button>
              </Wallet>
            </Card7>

            <Card8>
              <Circle3>
                <BsBusFront />
              </Circle3>
              <Wallet>
                <h3>Travel & Tour</h3>
                <p>Wallet id</p>
                <button onClick={Showtour}>Get Started</button>
              </Wallet>
            </Card8>
            <Icons onClick={Remove}>
              <MdOutlineCancel />
            </Icons>
          </Holder2>
        </Plans>
      ) : null}

                {rents ? (
                      <Holds>
                          <Rents />
                          <Icron onClick={Removerent}>
              <MdOutlineCancel />
            </Icron>
                </Holds>
                  ) : null}  

                  {fees ? (
                      <Holds>
                          <Fees />
                          <Icron onClick={Removefees}>
              <MdOutlineCancel />
            </Icron>
                      </Holds>
                  ) : null} 

                  {tour ? (
                      <Holds>
                          <Tour />
                          <Icron onClick={Removetour}>
              <MdOutlineCancel />
            </Icron>
                      </Holds>
                  ) : null}            

                  <StaffTransactionhome />
        </Wrapper>
      </Container>
    </div>

  )
}

export default ParentComp;
const Holds = styled.div`
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
`
const Icron = styled.div`
  position: absolute;
  font-size: 25px;
  right: 33%;
  color: #fff;
  cursor: pointer;
  top: 100px;
  cursor: pointer;
  z-index: 9;
`;
const Input2 = styled.input``;
const Subhold = styled.div`
  display: flex;
  margin-top: 3px;
  label {
    margin: 0;
  }
`;
const Input = styled.input`
  height: 40px;
  padding-left: 15px;
  border-radius: 7px;
  outline-color: #39a081;
  outline-width: 3px;
  margin-top: 3px;
  border: 1px solid gray;
`;
const Quick = styled.div`
  h3 {
    font-size: 25px;
    margin: 0;
    color: #39a081;
  }
`;
const Proceed = styled.div`
  width: 350px;
  height: 390px;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: column;
  padding: 20px;
  p {
    margin: 0;
    font-size: 14px;
    margin-top: 3px;
  }
  button {
    width: 100%;
    height: 50px;
    background-color: #39a081;
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 100px;
    cursor: pointer;
  }
`;
const Card8 = styled.div`
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
const Card7 = styled.div`
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
const Card6 = styled.div`
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
const Holder2 = styled.div`
  width: 900px;
  height: 400px;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const Icons = styled.div`
  position: absolute;
  font-size: 25px;
  right: 15%;
  color: #fff;
  cursor: pointer;
  top: 120px;
`;
const Open = styled.div`
    width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 123456;
  position: relative;
  justify-content: center;
  position: absolute;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 4;
  transition: all 350ms ease-in-out;
`
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
`
const Card3 = styled.div`
    width: 240px;
    height: 150px;
    background-color: #0D71FA;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 15px;
`
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
`
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
`
const Card4 = styled.div`
    width: 240px;
    height: 150px;
    background-color: #39A081;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 15px;
`
const Plans = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    left: 0;
    /* background-color: red; */
    right: 0;
    top: 0;
    z-index: 5;
`
const Button = styled.button`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: #1F337C;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
    transition: all 350ms ease-in-out;
    :hover{
        background-color: #fff;
        color: #1F337C;
        border: 1px solid #1F337C;
    }
`
const C = styled.div`
    p{
        text-align: center;
    }
`
const P = styled.div`
    p{
        text-align: center;
    }
`
const Title2 = styled.div`
    font-size: 23px;
`
const Savehold = styled.div`
    height: 100%;
    flex: 1;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Img = styled.img`
    height: 140px;
    /* margin-top: 15px; */
    margin-left: 15px;
    animation: bounce 1s infinite;

    @keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}
`
const Planhold = styled.div`
    width: 48%;
    background-color: #fff;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding-right: 10px;
`

const Pee = styled.div`
    width: 100%;
    margin-top: 15px;
`
const Title = styled.div`
    margin-bottom: 10px;
    font-size: 20px;
    text-align: center;
`
const Piehold = styled.div`
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const Down = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* margin-top: 20px; */
    /* height: 300px; */
    /* background-color: red; */
`
const Holder = styled.div`
  display: flex;
  button {
    width: 160%;
    height: 50px;
    background-color: #3184f7;
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 60px;
    cursor: pointer;
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
  background-color: #00244E;
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
`
const Icn  = styled.div`
color:black;
font-size: 30px;
margin:10px;
`

const Bold = styled.div`
  font-size: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #252525;
`;
const Left = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction:column ;
  button {
    width: 130px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#00244E;
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
  width: 94%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  padding-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: calc(100vw - 220px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #F5F7FA;
  overflow: hidden;
  margin-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;
