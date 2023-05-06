import React from "react";
import styled from "styled-components";
 import { useAppSelector } from "../../components/global/Store"
import {CgPerformance} from "react-icons/cg"
import {TbBrandNytimes} from "react-icons/tb"
import {FaAlipay} from "react-icons/fa"
import {SiSecurityscorecard} from "react-icons/si"
 import axios from "axios";
 import { genAttendanceToken, getOneAdmin } from "../../utils/Api/ApiCall";
 import { useQuery } from "@tanstack/react-query";



const Adminattendance = () => {

 

  const admin = useAppSelector((state) => state.currentUser);

  const [token , setToken] = React.useState("")

 

  const getAdmin = useQuery({
    queryKey: ["genToken"],
    queryFn: () => genAttendanceToken(admin?._id),
  });
// console.log("this is admin",admin?._id)
// console.log("this is admin22",)

const theToken = getAdmin?.data?.data?.data?.setToken




  return (
    <div>
      <Container>
        <Wrapper>
        <One>
        <Word>
        Attendance <br />
           <span>
          <a href="/dashboard">
          Dashboard
          </a>
           / Attendance History
           </span>
          </Word>

          <Button 
    onClick={()=>{
    axios.post(`${URL}/createattendance/${admin?._id}`).then((res)=>{
      setToken(res.data.data.setToken)
    })
    }}
          >
            Generate Token
          </Button>

          {/* <p>{token}</p> */}
        </One>
        <Two>
         <Title>
         Today's Attendance:
         </Title>


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
          </table>
         </Table>


        </Two>
        </Wrapper>
      </Container>  
    </div>
  );
};

export default Adminattendance;
const Table = styled.div`
display: flex;
height: auto;
width: auto;
justify-content: flex-start;
align-items: center;
margin-bottom: 10px;
overflow-x: auto;
margin-top: 40px;

table{
  min-width: 400px;
  max-width: 1440px;
  width: 100%;
}
`

const Title  = styled.div`
font-weight: 600;
font-size: 19px;
`

const Two = styled.div`
width: 1000px;
background-color:rgb(255, 255, 255);
border-radius: 10px;
`

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
`

const Word = styled.div`
font-weight: 500;
font-size: 26px;
color: rgb(31,31,31);
background-color: rgba(0,0,0,0);
line-height: 31.2px;
text-decoration: none solid rgb(31,31,31);
text-align: start;
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-bottom: 30px;
margin-top: 30px;

span{
  color: rgb(51,51,51);
  background-color: rgba(0,0,0,0);
  font-size: 18px;
  line-height: 24px;
  letter-spacing: normal;
  font-weight: 500;
  text-decoration: none solid rgb(51,51,51);
  text-align: left;
}

a{
  text-decoration: none;

  :hover{
    color: black;
  }
}
`

const One = styled.div`
/* background-color: red; */
display: flex;
justify-content: space-between;
`

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