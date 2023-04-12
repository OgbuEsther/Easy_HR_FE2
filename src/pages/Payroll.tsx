import React from 'react'
import styled from 'styled-components'
import { CiSearch } from "react-icons/ci"
import img from ".././Assets/savio.jpg"

const Payroll = () => {
  return (
      <Container>
          <Wrapper>
              <Head>
                  <Inputhold>
                      <Search>
                          <CiSearch />
                      </Search>
                      <Input placeholder='Search people'/>
                  </Inputhold>
              </Head>

              <Table>
                  <Lists>
                      <Name>Full Name</Name>
                      <Gross>Gross pay</Gross>
                      <Taxes>Est. Employee Taxes</Taxes>
                      <Netpay>Pension</Netpay>
                      <Payment>Est. Net pay</Payment>
                      <Payment>Housing</Payment>
                      <Status></Status>
                  </Lists>
              </Table>

              <Table2>
                  <Lists>
                      <Name2>
                          <Circlehold>
                              <Circle>
                                  <Img src={img} />
                              </Circle>
                              <Id>Okwoli Godwin</Id>
                          </Circlehold>
                      </Name2>
                      <Gross2>$3,125.00</Gross2>
                      <Taxes2>$574.74</Taxes2>
                      <Netpay2>$1,949.00</Netpay2>
                      <Payment2>$2,649.00</Payment2>
                      <Payment2>$2,649.00</Payment2>
                      <Status2>
                          <Hold>Pay</Hold>
                      </Status2>
                  </Lists>
              </Table2>
          </Wrapper>
      </Container>
  )
}

export default Payroll
const Hold = styled.div`
    width: 90px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #A7F3D0;
    color: #064E3B;
    border-radius: 50px;
    cursor: pointer;
`
const Id = styled.div`
    display: flex;
    margin-left: 10px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Circle = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Circlehold = styled.div`
    display: flex;
    align-items: center;
`

const Status = styled.div`
    width: 120px;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
    font-weight: 500;
    justify-content: center;
`
const Status2 = styled.div`
    width: 120px;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
    justify-content: center;
`
const Payment2 = styled.div`
    width: 180px;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
    justify-content: center;
`
const Payment = styled.div`
    width: 180px;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
    font-weight: 500;
    justify-content: center;
`
const Netpay2 = styled.div`
    width: 120px;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
    justify-content: center;
`

const Netpay = styled.div`
    width: 120px;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
    font-weight: 500;
    justify-content: center;
`
const Taxes2 = styled.div`
    width: 180px;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 13px;
`

const Taxes = styled.div`
    width: 180px;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 13px;
    font-weight: 500;
`
const Gross2 = styled.div`
    width: 120px;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
`

const Gross = styled.div`
    width: 120px;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
    font-weight: 500;
`
const Name2 = styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 13px;
`

const Name = styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
`

const Lists = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
`
const Table2 = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #c5c5c5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Table = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #c5c5c5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #F1F7F9;
`

const Input = styled.input`
    height: 100%;
    flex: 1;
    border: none;
    outline: none;
`

const Search = styled.div`
    height: 100%;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
`

const Inputhold = styled.div`
    width: 250px;
    height: 35px;
    border-bottom: 4px;
    border: 1px solid #dbdbdb;
    margin-left: 20px;
    display: flex;
    align-items: center;
    overflow: hidden;
`

const Head = styled.div`
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #d3d3d3;
    display: flex;
    align-items: center;
`

const Wrapper = styled.div`
    width: 93%;
    display: flex;
    border: 1px solid #d6dee9;
    margin-top: 110px;
    flex-direction: column;
`

const Container = styled.div`
    width: calc(100vw - 270px);
    display: flex;
    justify-content: center;
`