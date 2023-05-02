import React from "react";
import { FcCheckmark } from "react-icons/fc"
import {GrFormClose} from "react-icons/gr"
import styled from "styled-components";



const Transaction = () => {
 
  return (
    <div>
      <Container>
        <Wrapper>
        <Word>
        Transaction <br />
           <span>
          <a href="/dashboard">
          Dashboard
          </a>
           / Transaction History
           </span>
          </Word>

          <Table>
            <table>
              <tr>
                <th>Transaction</th>
                <th>ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Account</th>
              </tr>


              <tr>
              <td>
                <CirleHold>
                  <Circ>
                    DC
                  </Circ>
                  <Name>
                    Divine Chigozie
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

        </Wrapper>
      </Container>
    </div>
  );
};

export default Transaction;



const Account = styled.div`
font-weight: 70px;
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
width: 150px;
font-weight: 500;
font-size: 18px;
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
  background-color: #F5F7FA;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
