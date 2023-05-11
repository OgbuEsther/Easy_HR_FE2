import React from 'react'
import styled from 'styled-components'

const DoughnutAdmin = () => {
  const [showdefault, setShowdefault] = React.useState([])
  return (
    <Container>
      <Top>Late Clock-in Employees</Top>

      {showdefault.length === 0 && (
        <div>
          <Bold>Set the expected clock-in time to get the live report</Bold>
          <Steps>Here are the steps to set the expected clock-in time:</Steps>
          <ol>
            <Steps><li>Visit Settings = Track Settings page</li></Steps>
            <Steps><li>Set the expected clock-in time</li></Steps>
          </ol>
        </div>
      )}
      {showdefault.map((transaction, index) => (
        <Table>
              <table>
                <tr>
                  <th>Employee Name</th>
                  <th>Employee ID</th>
                  <th>Department</th>
                  <th>Check In</th>
                  <th>Status</th>
                </tr>

                <tr>
                  <td>
                    <Circlehold>
                    <Name>Okwoli Godwin</Name>
                    </Circlehold>
                  </td>
                  <td>1001</td>
                  <td>Development</td>
                  <td>
                    <Chc>10:28</Chc>
                  </td>
                  <td>
                    <Box>Late</Box>
                  </td>
                </tr>
              </table>
            </Table>
      ))}
    </Container>
  )
}

export default DoughnutAdmin
const Steps = styled.div`
  color: #4a5568;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 30px;
`
const Bold = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #4a5568;
  margin-top: 20px;
`
const Chc = styled.div`
  color: green;
  font-weight: bold;
`;

const Box = styled.div`
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1.5;
  width: 90px;
  height: 35px;
  font-weight: 500;
  border-radius: 50px;
  cursor: pointer;
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
const Name = styled.div`
    color: #34495e;
    font-size: .9rem;
    margin-left: 5px;
`
const Circlehold = styled.div`
  display: flex;
  align-items: center;
`
const Table = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  overflow-x: scroll;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  overflow-x: auto;
  margin-top: 50px;

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
const Top = styled.div`
  font-size: 22px;
  font-weight: 500;
`

const Container = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`