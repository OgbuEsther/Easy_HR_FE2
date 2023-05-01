import React from "react";

import styled from "styled-components";
import CardProps from "./CardProps";
import { useAppSelector } from "../components/global/Store";
import { getOneAdmin } from "../utils/Api/ApiCall";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Staffs = () => {
  const user = useAppSelector((state) => state.currentUser);

  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(user?._id),
  });
console.log("this is admin",user?._id)

const [search , setSearch ] = React.useState("")

const searchData = async (e: any) => {
  if (e.key === "Enter") {
    await axios
      .get(
        `https://easyhr.onrender.com/api/staff/search?yourName=${search}`
      )
      .then((res) => {
        console.log(res);
        setSearch(res.data.data);
      });
  }
};




  return (
    <div>
      <Container>
        <Wrapper>
          <Text>
            Employee <br />
            <span>
              <a href="/dashboard">Dashboard</a>/ Employee
            </span>
          </Text>

          <CardHold>
            {getAdmin?.data?.data?.viewUser.map((el: any) => (
              <CardProps
                img={`${el?.yourName?.charAt(0)}`}
                name={el?.yourName}
                title={el?.position}
              />
            ))}

            {/* <CardProps img="GO" name="Godwin Okowoli" title="FullStack Engineer"/>
            <CardProps img="EO" name="Esther Ogbu" title="FullStack Engineer"/>
            <CardProps img="EO" name="Esther Ighoruemuse" title="FullStack Engineer"/>
            <CardProps img="J" name="Joshua" title="FullStack Engineer"/>
            <CardProps img="CO" name="CodeLab Academy" title="Coding  Academy"/> */}
          </CardHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Staffs;

const CardHold = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 80px;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 26px;
  color: rgb(31, 31, 31);
  background-color: rgba(0, 0, 0, 0);
  line-height: 31.2px;
  text-decoration: none solid rgb(31, 31, 31);
  text-align: start;
  /* margin-bottom:20px; */
  margin-left: 10px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  /* justify-content: center; */
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

const Wrapper = styled.div`
  width: 95%;
  /* height: 95%; */

  display: flex;
  /* align-items: center; */
  justify-content: center;

  flex-direction: column;
  /* background-color: red; */
  margin-top: 140px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: calc(100vw - 270px);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #ecf2ff92; */
  /* background-color: deeppink; */
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100vw;
    background-color: #f1f4fb92;
  }
`;
