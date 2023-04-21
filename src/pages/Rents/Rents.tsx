import React from 'react'
import styled from 'styled-components'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MdOutlineCancel } from "react-icons/md";

const Rents = () => {

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

  return (
      <Container>
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
          </Proceed>
    </Container>
  )
}

export default Rents

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

const Container = styled.div`
    width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.7); */
  position: absolute;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
`