import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../components/global/Store";
import { CgPerformance } from "react-icons/cg";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BsPencilFill } from "react-icons/bs";
import { SiSecurityscorecard } from "react-icons/si";
import axios from "axios";
import { genAttendanceToken, getOneAdmin, url } from "../../utils/Api/ApiCall";
import { useQuery } from "@tanstack/react-query";

const Adminattendance = () => {
  const admin = useAppSelector((state) => state.currentUser);

  const [token, setToken] = React.useState("");

  const getAdmin = useQuery({
    queryKey: ["genToken"],
    queryFn: () => genAttendanceToken(admin?._id),
  });
  // console.log("this is admin",admin?._id)
  // console.log("this is admin22",)

  return (
    <div>
      <Container>
        <Wrapper>
          

            {/* <Button
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

            <p>{token}</p> */}
          
          <Two>
            <Title>Today's Attendance:</Title>

            <Table>
              <table>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Employee ID</th>
                  <th>Department</th>
                  <th>Check In</th>
                  <th>Shift</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

                <tr>
                  <td>
                    <Circle>DC</Circle>
                  </td>
                  <td>David Brown</td>
                  <td>1001</td>
                  <td>Development</td>
                  <td>
                    <Chc>10:28</Chc>
                  </td>
                  <td>Shift 1</td>
                  <td>
                    <Box>Present</Box>
                  </td>
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
              </table>
            </Table>
          </Two>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Adminattendance;

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
  border: 1px solid green;
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: auto;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  overflow-x: auto;
  margin-top: 20px;

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

const Title = styled.div`
  font-weight: 600;
  font-size: 19px;
  margin-top: 30px;
  margin-left: 20px;
`;

const Two = styled.div`
  width: 1050px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 145px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 33px;
  background-color: #1f337c;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  color: #fff;
`;

const Word = styled.div`
  font-weight: 500;
  font-size: 26px;
  color: rgb(31, 31, 31);
  background-color: rgba(0, 0, 0, 0);
  line-height: 31.2px;
  text-decoration: none solid rgb(31, 31, 31);
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;
  margin-top: 30px;

  span {
    color: rgb(51, 51, 51);
    background-color: rgba(0, 0, 0, 0);
    font-size: 18px;
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

const One = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  /* margin-left: 30px; */
  margin-top: 100px;
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
  margin-bottom: 30px;
`;
