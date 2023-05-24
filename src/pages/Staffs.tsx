import React from "react";

import styled from "styled-components";
import CardProps from "./CardProps";
import { useAppSelector } from "../components/global/Store";
import { getOneAdmin } from "../utils/Api/ApiCall";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BsPencilFill } from "react-icons/bs";

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

          {/* <CardHold>
            {getAdmin?.data?.data?.viewUser.map((el: any) => (
              <CardProps
                img={`${el?.yourName?.charAt(0)}`}
                name={el?.yourName}
                title={el?.position}
              />
            ))}

         
          </CardHold> */}

          <Table>
                  <table>
                    <tr>
                      <th>Employee Name</th>
                      <th>Employee ID</th>
                      <th>Position</th>
                    
                     
                      <th>Action</th>
                    </tr>
                    {getAdmin?.data?.data?.viewUser.map((el: any) => (
                    <tr>
                      <td>
                        <Circlehold>
                        <Circle>{el?.yourName?.charAt(0)}</Circle>
                        <Name>{el?.yourName}</Name>
                        </Circlehold>
                      </td>
                      <td>1001</td>
                      <td>Teacher</td>
                    
                      <td>
                        <Action>
                          <Cir>
                            <BsPencilFill />
                          </Cir>
                          <Cir1>
                            <RiDeleteBin2Line />
                          </Cir1>
                        </Action>
                      </td>
                    </tr>
                    ))}
                  </table>
                </Table>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Staffs;

const Name = styled.div`
    color: #34495e;
    font-size: .9rem;
    margin-left: 5px;
`
const Circlehold = styled.div`
  display: flex;
  align-items: center;
`

const Cir = styled.div`
  margin: 5px;
  border-radius: 50px;
  background-color: green;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Cir1 = styled.div`
  margin: 5px;
  border-radius: 50px;
  background-color: red;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Action = styled.div`
  display: flex;
`;

const Chc = styled.div`
  color: green;
  font-weight: bold;
`;

const Box = styled.div`
  color: #28a745;
  border-color: #28a745;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .875rem;
  line-height: 1.5;
  width: 90px;
  height: 35px;
  font-weight: 400;
  border-radius: 50px;
  border: 1px solid #28a745;
  outline-color: 2px solid #619c6f;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  margin: 3px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-weight: 500;
  color: black;
  background-color: blanchedalmond;
  border: 1px solid black;
  border-radius: 50px;

  @media screen and (max-width: 900px) {
    height: 30px;
    width: 30px;
    font-size: 12px;
  }
`;

const Table = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  overflow-x: auto;
  margin-top: 50px;

  table {
    min-width: 400px;
    max-width: 1440px;
    width: 100%;
  }

  table,
  th,
  tr:nth-child(even) {
    background-color: #fff;
  }

  td,
  th {
    padding: 14px 2px;
    text-align: left;
    border-top: 1px solid #e2e5e8;
    padding-left: 18px;
    padding-right: 18px;
  }

  td {
    @media screen and (max-width: 900px) {
      font-size: 12px;
    }
  }

  th {
    border-top: 1px solid #e2e5e8;
    background-color: #fefefe;
    padding: 1rem 0.75rem;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

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
  /* justify-content: center; */

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
  /* justify-content: center;
  align-items: center; */
  /* background-color: #ecf2ff92; */
  /* background-color: deeppink; */
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100vw;
    background-color: #f1f4fb92;
  }
`;
