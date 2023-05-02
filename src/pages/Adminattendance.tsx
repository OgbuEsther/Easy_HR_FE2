import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { GrFormClose } from "react-icons/gr";
import styled from "styled-components";
import { useAppSelector } from "../components/global/Store"


import axios from "axios";
import { getOneAdmin, url } from "../utils/Api/ApiCall";
import { useQuery } from "@tanstack/react-query";
const Adminattendance = () => {
  const admin = useAppSelector((state) => state.currentUser);

  const [token , setToken] = React.useState("")

  const user = useAppSelector((state) => state.currentUser);

  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(user?._id),
  });
console.log("this is admin",user?._id)

  return (
    <div>
      <Container>
        <Wrapper>
          <Word>
            <Hold>
              Attendance <br />
              <span>
                <a href="/dashboard">Dashboard</a>/ Attendance
              </span>
            </Hold>
            <Buttonhold>
              <Button
                onClick={() => {
                   axios
                    .post(`${url}/createattendance/${admin?._id}`)
                    .then((res) =>{  setToken(res.data.data.setToken)}
                   
                    )
                    .catch((err) =>{
                      console.log(
                        `an error occcured while generating token ${err}`
                      )}
                    );
                }}
              >
                Generate Token
              </Button>
              <Token>{token} </Token>
            </Buttonhold>
          </Word>
          {/* <Table>
            <table>
              <tr>
                <th>Employee</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
                <th>11</th>
                <th>12</th>
                <th>13</th>
                <th>14</th>
                <th>15</th>
                <th>16</th>
                <th>17</th>
                <th>18</th>
                <th>19</th>
                <th>20</th>
                <th>21</th>
                <th>22</th>
                <th>23</th>
                <th>24</th>
                <th>25</th>
                <th>26</th>
                <th>27</th>
                <th>28</th>
                <th>29</th>
                <th>30</th>
                <th>31</th>
              </tr>
              {getAdmin?.data?.data?.viewUser.map((el: any) => (
              <tr>
                <td>
                  <Circlehold>
                    <Circle>{el?.yourName?.charAt(0)} </Circle>
                    <Name>{el?.yourName}</Name>
                  </Circlehold>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icons>
                    <GrFormClose />
                  </Icons>
                </td>
                <td>
                  <Icons>
                    <GrFormClose />
                  </Icons>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icons>
                    <GrFormClose />
                  </Icons>
                </td>
                <td>
                  <Icons>
                    <GrFormClose />
                  </Icons>
                </td>
                <td>
                  <Icons>
                    <GrFormClose />
                  </Icons>
                </td>
                <td>
                  <Icons>
                    <GrFormClose />
                  </Icons>
                </td>
                <td>
                  <Icons>
                    <GrFormClose />
                  </Icons>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
                <td>
                  <Icon>
                    <FcCheckmark />
                  </Icon>
                </td>
              </tr>
     ))}

            </table>
          </Table> */}

          <ButtonHold>

          </ButtonHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Adminattendance;
const ButtonHold = styled.div`

`
const Token = styled.div`
  /* color: #fff; */
  margin-left: 20px;
  font-size: 18px;
`;
const Buttonhold = styled.div`
  display: flex;
  align-items: center;
  margin-left: 600px;
`;
const Hold = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  width: 130px;
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
  width: 100%;
  color: rgb(31, 31, 31);
  background-color: rgba(0, 0, 0, 0);
  line-height: 31.2px;
  text-decoration: none solid rgb(31, 31, 31);
  text-align: start;
  margin-left: 10px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  /* flex-direction: column; */
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
  color: red;
  font-size: 20px;
`;
const Icon = styled.div`
  font-weight: 70px;
`;
const Name = styled.div`
  display: flex;
  margin-left: 10px;
  display: flex;
  width: 150px;
  font-weight: 400;
  font-size: 18px;
  /* background-color: red; */
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  margin: 3px;
  font-size: 16px;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 50px;
  font-weight: 500;
  color: black;
  background-color: blanchedalmond;
  border: 1px solid black;
`;
const Circlehold = styled.div`
  display: flex;
  border-radius: 50px;
  align-items: center;
`;
const Table = styled.table`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow-x: scroll;
  /* background-color: red; */

  table {
    width: 100%;
    /* background-color: #f2f2f2; */
  }
  table,
  th,
  tr:nth-child(even) {
    background-color: #fff;
  }
  th,
  td {
    padding: 15px 20px;
    text-align: left;
    border-top: 1px solid #e2e5e8;
  }
  th {
    border-top: 1px solid #e2e5e8;
    background-color: #fefefe;
    padding: 1rem 0.75rem;
    /* display: table-cell; */
  }
`;
const Employee = styled.div`
  width: 130px;
  display: flex;
  height: 10px;
  background-color: red;
  margin-left: 15px;
`;
const First = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
`;
const Top = styled.div`
  h3 {
    color: #1f1f1f;
    font-size: 26px;
    font-weight: 500;
  }
`;

const Box = styled.div`
  display: flex;
  border-top: 1px solid #e2e5e8;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
  padding-top: 90px;
  padding-left: 30px;
  padding-right: 30px;
`;

const Container = styled.div`
  width: calc(100vw - 220px);
  background-color: #f5f7fa;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
