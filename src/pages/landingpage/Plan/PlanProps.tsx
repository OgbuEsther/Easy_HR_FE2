
import React from "react";
import styled from "styled-components";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";

interface Itext {
  image?: string;
  title?: string;
  description?: string;
}

const PlanProps: React.FC<Itext> = ({ image, title, description }) => {
  return (
    <Container>
      <One></One>
      <Two>
        <Title></Title>
        <Description></Description>
      </Two>
    </Container>
  );
};

export default PlanProps;

const Read = styled.div``;
const Description = styled.div``;
const Title = styled.div``;
const Two = styled.div`
  width: 600px;
`;
const One = styled.div`
  width: 250px;
`;
const Container = styled.div`
  width: 90%;
  height: 300px;
  border: 1px solid gray;
  margin-bottom: 10px;
  margin-top: 70px;

  p {
    font-size: 45px;
  }
`;