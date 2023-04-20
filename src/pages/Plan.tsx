import React, {useState} from 'react'
import styled from 'styled-components'
import { BsArrowRightShort, BsFillHousesFill, BsBusFront } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io"
import { MdOutlineCancel } from "react-icons/md";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Plan = () => {

      const [plans, setplans] = useState(false);
        const [rents, setRents] = useState(false);
        const [fees, setfees] = useState(false);
    const [tour, setTour] = useState(false);

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
    
    const Showplans = () => {
    setplans(!plans);
  };

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

  const Removerent = () => {
    setRents(false);
  };

  const Removefees = () => {
    setfees(false);
  };

  const Removetour = () => {
    setTour(false);
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
        <Savehold>
          <Proceed>
            <Quick>
              <h3>Rents</h3>
            </Quick>
            <p>Enter an amount you want to save</p>

            <Tap>
              <p>Tap here & enter .. (e.g 5000)</p>
              <Input
                type="number"
                {...register("amount")}
                placeholder="Tap here & enter .. (e.g 5000)"
              />
              <p>{errors?.amount && errors?.amount?.message} </p>
              <Subhold>
                <Input2 {...register("subscribe")} type="checkbox" />{" "}
                <label htmlFor="">Subscribe to this plan</label>
                <p>{errors?.subscribe && errors?.subscribe?.message} </p>
              </Subhold>
            </Tap>
            {/* <NavLink to="/Rent" style={{ textDecoration: "none" }}> */}
              <button>
                Proceed
              </button>
            {/* </NavLink> */}
            <Icron onClick={Removerent}>
              <MdOutlineCancel />
            </Icron>
          </Proceed>
        </Savehold>
      ) : null}
    </Container>
  )
}

export default Plan
const Icron = styled.div`
  position: absolute;
  font-size: 25px;
  right: 30%;
  color: #fff;
  cursor: pointer;
  top: 120px;
`;
const Input2 = styled.input``;
const Subhold = styled.div`
  display: flex;
  margin-top: 3px;
  label {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
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
const Tap = styled.div`
  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
  }
  margin-top: 100px;
  display: flex;
  flex-direction: column;
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