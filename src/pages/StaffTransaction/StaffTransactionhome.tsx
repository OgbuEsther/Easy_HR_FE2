import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../components/global/Store';
import { useQuery } from '@tanstack/react-query';
import { getOneStaff } from '../../utils/Api/ApiCall';
import { NavLink } from 'react-router-dom';

const StaffTransactionhome = () => {
  const user = useAppSelector((state) => state.currentStaff);
  const getStaff = useQuery({
    queryKey: ["singleStaff"],
    queryFn: () => getOneStaff(user?._id),
  });
  console.log("this is getStaff transactionHistory ",getStaff?.data?.data?.transactionHistory)

  return (
      <Container>
      <Top><h3>Transaction History</h3></Top>
      
      <Table>
            <table>
              <tr>
                <th>Transaction Time</th>
                <th>ID</th>
                <th>Net pay</th>
                <th>Status</th>
              </tr>
  {getStaff?.data?.data?.transactionHistory.map((el: any) => (
              <tr key={el?._id}>
                <td>
                <CirleHold>
                  <Name>
                   {el?.date}
                  </Name>
                </CirleHold>
                 </td>
                <td> <Id>
                 {el?.transactionReference}
               </Id></td>
                <td>{el?.amount} </td>
                <td>
                <Account>
                  Received
               </Account>
              </td>
              </tr>
            ))}

              
            </table>

         
      </Table>
      <Buttonhold>
        <NavLink to="/staffdashboard/stafftransaction" style={{
          textDecoration: "none"
        }}>
          <Button>View more</Button>
        </NavLink>
      </Buttonhold>
    </Container>
  )
}

export default StaffTransactionhome

const Button = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #1F337C;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  margin-right: 12px;
`
const Buttonhold = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
padding-top: 13px;

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

const Container = styled.div`
    margin-top: 25px;
    width: 100%;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 12px;
    padding-bottom: 12px;
    
    @media screen and (max-width: 768px){
      width: 93%;
    }
    @media screen and (max-width: 500px){
      display: flex;
    }
`