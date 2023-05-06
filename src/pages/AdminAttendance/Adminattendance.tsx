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
           / Attendance 
           </span>
          </Word>

          <Button 
    onClick={()=>{
    axios.post(`${URL}/createattendance/${admin?._id}`).then((res)=>{
      setToken(res.data.data.setToken)
    })
    }}
          >
            Generate 
          </Button>

          <p>{token} </p>
       
        </One>

       
        
        
        </Wrapper>
        
      </Container>  
    </div>
  );
};

export default Adminattendance;

const One = styled.div`
/* background-color:red; */
width:100%;
display:flex;
align-items: center;
justify-content:space-between;
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
  width: 140px;
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
color: rgb(31,31,31);
background-color: rgba(0,0,0,0);
line-height: 31.2px;
text-decoration: none solid rgb(31,31,31);
text-align: start;
margin-left: 10px;
display: flex;
/* align-items: center; */
flex-direction: column;
justify-content: flex-start;
margin-bottom: 30px;
margin-top: 30px;
/* background-color: greenyellow; */
span{
  color: rgb(51,51,51);
  background-color: rgba(0,0,0,0);
  font-size: 16px;
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
`;

const Icons = styled.div`
  font-size: 20px;
  margin:10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height:500px;
  width: 100%;
  margin-top: 30px;
`;
const Wrapper = styled.div`   
  width: 97%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* margin-left: 30px; */
  padding-top: 90px;
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
`;