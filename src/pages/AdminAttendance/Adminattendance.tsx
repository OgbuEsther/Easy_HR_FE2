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
          Valerian
        </Wrapper>
      </Container>  
    </div>
  );
};

export default Adminattendance;
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