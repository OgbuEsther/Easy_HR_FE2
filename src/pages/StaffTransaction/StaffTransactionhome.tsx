import React from 'react'
import styled from 'styled-components'

const StaffTransactionhome = () => {
  return (
      <Container>
      <Top><h3>Transaction History</h3></Top>
      
      <Table>
            <table>
              <tr>
                <th>Transaction Time</th>
                <th>ID</th>
                <th>Gross pay</th>
                <th>Net pay</th>
                <th>Status</th>
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
                <Amount>
                  $0.00
               </Amount>
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
                  <Circ>
                    ST
                  </Circ>
                  <Name>
                 Stripe
                  </Name>
                </CirleHold>
              </td>
              <td>
                <Id>
                  #A3161
               </Id>
              </td>
              <td>
                <Amount>
                  $37383
               </Amount>
              </td>
              <td>
                <Dat>
                  Tues 1:00pm
               </Dat>
              </td>
              <td>
                <Account>
                  Visa Card
               </Account>
              </td>
            </tr>

            <tr>
          <td>
          <CirleHold>
                  <Circ>
                    SP
                  </Circ>
                  <Name>
                   Spotify
                  </Name>
                </CirleHold>
          </td>
          <td>
            <Id>
              8742824
            </Id>
          </td>
          <td>
            <Amount>
              8742824
            </Amount>
          </td>
          <td>
            <Dat>
              8742824
            </Dat>
          </td>
          <td>
                <Account>
                  $37383
               </Account>
              </td>
            </tr>

            <tr>
          <td>
          <CirleHold>
                  <Circ>
                    FG
                  </Circ>
                  <Name>
                    Figma
                  </Name>
                </CirleHold>
          </td>
          <td>
            <Id>
              8742824
            </Id>
          </td>
          <td>
            <Amount>
              $3:00
            </Amount>
          </td>
          <td>
            <Dat>
            Wed 12:00pm
            </Dat>
          </td>
          <td>
                <Account>
                  MasterCard
               </Account>
              </td>
            </tr>

            <tr>
          <td>
          <CirleHold>
                  <Circ>
                    SP
                  </Circ>
                  <Name>
                   Spotify
                  </Name>
                </CirleHold>
          </td>
          <td>
            <Id>
              8742824
            </Id>
          </td>
          <td>
            <Amount>
              8742824
            </Amount>
          </td>
          <td>
            <Dat>
              8742824
            </Dat>
          </td>
          <td>
                <Account>
                  $37383
               </Account>
              </td>
            </tr>

            </table>

         
          </Table>
    </Container>
  )
}

export default StaffTransactionhome

const Account = styled.div`
font-weight: 500;
color: green;
`
const Dat = styled.div`
font-weight: 70px;
`
const Amount = styled.div`
font-weight: 70px;
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

const Circ = styled.div`
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
`