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

              {/* <tr>
              <td>
                <CirleHold>
                  <Name>
                    2020-12-14 22:01:01
                  </Name>
                </CirleHold>
              </td>
              <td>
                <Id>
                  #A3161
               </Id>
              </td>
              <td>
                <Dat>
                  $0.00
               </Dat>
              </td>
              <td>
                <Account>
                  Received
               </Account>
              </td>
          </tr>
          
          <tr>
              <td>
                <CirleHold>
                  <Name>
                    2020-12-14 22:01:01
                  </Name>
                </CirleHold>
              </td>
              <td>
                <Id>
                  #A3161
               </Id>
              </td>
              <td>
                <Dat>
                  $0.00
               </Dat>
              </td>
              <td>
                <Account>
                  Received
               </Account>
              </td>
            </tr>

            <tr>
              <td>
                <CirleHold>
                  <Name>
                    2020-12-14 22:01:01
                  </Name>
                </CirleHold>
              </td>
              <td>
                <Id>
                  #A3161
               </Id>
              </td>
              <td>
                <Dat>
                  $0.00
               </Dat>
              </td>
              <td>
                <Account>
                  Received
               </Account>
              </td>
            </tr> */}
            </table>

         
      </Table>
          </Wrapper>
    </Container>
  )
}

export default StaffTransactionSide


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