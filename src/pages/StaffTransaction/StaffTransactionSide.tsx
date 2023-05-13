import React from 'react'
import styled from "styled-components"
import { useAppSelector } from '../../components/global/Store';
import { useQuery } from '@tanstack/react-query';
import { getOneStaff } from '../../utils/Api/ApiCall';

const StaffTransactionSide = () => {

  const user = useAppSelector((state) => state.currentStaff);
  const getStaff = useQuery({
    queryKey: ["singleStaff"],
    queryFn: () => getOneStaff(user?._id),
  });
  console.log("this is getStaff transactionHistory ",getStaff?.data?.data?.transactionHistory)


  return (
      <Container>
          <Wrapper>
          <Word>
        {/* <SiMattermost/> */}
        Settings  <br />
           <span>
          <a href="/dashboard">
          Dashboard
          </a>
           / Employee's Settings
           </span>
          </Word>
          </Wrapper>
    </Container>
  )
}

export default StaffTransactionSide

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
  font-size: 15px;
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

const Account = styled.div`
font-weight: 500;
color: green;
`


const Id = styled.div`
font-weight: 70px;
`

const Name = styled.div`
display: flex;
margin-left: 10px;
/* width: 150px; */
font-weight: 500;
font-size: 16px;
color: #ff2222;
`



const CirleHold = styled.div`
display: flex;
align-items: center;
border-radius: 50px;
`

const Table = styled.div`
display: flex;
width: 100%;
flex-direction: column;
overflow-x: hidden;
/* overflow-x: scroll; */
margin-bottom: 10px;
background-color: #fff;

table{
  width: 100%;
  background-color: red;
}

table,
th,
tr:nth-child(even){
  background-color: #fff;
}

th,td{
  padding: 15px 2px;
  text-align: left;
  border-top: 1px solid #e2e5e8;
}
th{
  border-top: 1px solid #e2e5e8;
  background-color: #fefefe;
  padding: 1rem 0.75rem;

}


`

const Top = styled.div`
    h3{

    }
`

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
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`