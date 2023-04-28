import React from 'react'
import styled from 'styled-components'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Fees = () => {

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
          <Proceed2>
            <Quick2>
              <h3>School fees</h3>
            </Quick2>
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
            {/* <NavLink to="/schoolfees" style={{ textDecoration: "none" }}> */}
              <button >Proceed</button>
          </Proceed2>
    </Container>
  )
}

export default Fees

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
  outline-color: #ef7914;
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

const Quick2 = styled.div`
  h3 {
    font-size: 25px;
    margin: 0;
    color: #ef7914;
  }
`;

const Proceed2 = styled.div`
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
    background-color: #ef7914;
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
  position: absolute;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;

  animation: play 0.5s ease-out forwards;

   @keyframes play {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
  }
`