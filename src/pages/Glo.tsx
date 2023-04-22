import React from 'react'
import styled from 'styled-components'
import img from "../Assets/glo.jpg"

const Glo = () => {
    const [category, setCategory] = React.useState("")

  return (
      <Container>
          <Card>
              <Top>
                  <Img src={img} />
                  <Texthold>
                    <h3>Glo Airtime VTU</h3>
                    <p>Glo airtime - Get instant top up</p>
                  </Texthold>
              </Top>

              <Inputhold>
                  <Hold>
                      <Up><label htmlFor="">Type</label></Up>
                      <Select onChange={(e) => {
						setCategory(e.target.value);
                      }}>
                          <option>Please select type</option>
						<option value='Airtel'>Airtel Data - 50 Naira - 40MB - 1Day</option>
						<option value='Airtel'>Airtel Data - 100 Naira - 100MB - 1Day</option>
                        <option value='Airtel'>Airtel Data - 200 Naira - 200MB - 3Days</option>
                        <option value='Airtel'>Airtel Data - 300 Naira - 350MB - 7Days</option>
                        <option value='Airtel'>Airtel Data - 300 Naira - 1GB - 1Day</option>
                        <option value='Airtel'>Airtel Data - 500 Naira - 750MB - 14Days</option>
                        <option value='Airtel'>Airtel Data - 500 Naira - 2GB - 1Day</option>
                        <option value='Airtel'>Airtel Data - 1,000 Naira - 1.5GB - 30Days</option>
                        <option value='Airtel'>Airtel Data - 1,200 Naira - 2GB - 30Days</option>
                        <option value='Airtel'>Airtel Data - 1,500 Naira - 6GB - 7Days</option>
                        <option value='Airtel'>Airtel Data - 1,500 Naira - 3GB - 30Days</option>
                        <option value='Airtel'>Airtel Data - 2,000 Naira - 4.5GB - 30Days</option>
                        <option value='Airtel'>Airtel Data - 2,500 Naira - 6GB - 30Days</option>
                        <option value='Airtel'>Airtel Data - 3,000 Naira - 10GB - 30Days</option>
                        <option value='Airtel'>Airtel Data - 4,000 Naira - 11GB - 30Days</option>
                        <option value='Airtel'>Airtel Data - 5,000 Naira - 20GB - 30Days</option>
                        <option value='Airtel'>Airtel Data - 1,200 Naira - 2GB - 30Days</option>
                        <option value='Airtel'>Airtel Data - 1,200 Naira - 2GB - 30Days</option>
                      </Select>
                  </Hold>

                  <Hold>
                    <Up><label htmlFor="">Phone Number</label></Up>
                    <Input placeholder='Enter Phone Number' type="number"/>
                  </Hold>
                  
                  <Hold>
                    <Up><label htmlFor="">Email address</label></Up>
                    <Input placeholder='Your email' type="email"/>
                  </Hold>
                  
                  <Hold>
                    <Up><label htmlFor="">Amount</label></Up>
                    <Input placeholder='Enter Amount' type="email"/>
                </Hold>
              </Inputhold>

              <Buttonhold>
                  <Continue>Continue</Continue>
              </Buttonhold>
          </Card>
    </Container>
  )
}

export default Glo

const Continue = styled.div`
  cursor: pointer;
  min-width: 50px !important;
    background-color: #28a745;
    border-radius: 5px;
    padding: 8px 20px;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.01em;
    border: 1px solid;
    transition: all .4s ease;
    margin-left: 15px
`

const Cancle = styled.div`
  cursor: pointer;
  min-width: 50px !important;
    border: 1px solid red;
    color: #333;
    border-radius: 0;
    letter-spacing: 0.01em;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 500;
`

const Buttonhold = styled.div`
  display: flex;
  margin-top: 30px;
`

const Input = styled.input`
  background-color: #e0e8f3;
    color: #333;
    border-radius: 0;
    border: 1px solid #d2dde9;
    width: 100%;
    padding: 10px 20px;
    line-height: 20px;
    font-size: .9em;
    transition: all .4s;
    margin-top: 15px;
    outline: none;
    border-radius: 4px;
`

const Select = styled.select`
  background-color: #e0e8f3;
    color: #333;
    border-radius: 0;
    border: 1px solid #d2dde9;
    width: 270px;
    padding: 10px 20px;
    line-height: 20px;
    font-size: .9em;
    transition: all .4s;
    margin-top: 15px;
    outline: none;
    border-radius: 4px;
`

const Up = styled.div`
  font-size: 14px;
    font-weight: 500;
    color: #495463;
    line-height: 1.1;
`

const Hold = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 65px;
  margin-bottom: 30px;
`

const Inputhold = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 85px;
`

const Texthold = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
  justify-content: center;
  h3{
    font-weight: 500;
    color: #174159;
    font-size: 1.52em;
    margin: 0;
    line-height: 1.3;
  }
  p{
    margin-top: 7px;
  }
`

const Img = styled.img`
  height: 80px;
`

const Top = styled.div`
  display: flex;
  align-items: center;
`

const Card = styled.div`
  width: 570px;
  height: 530px;
  background-color: #fff;
  border-radius: 10px;
  padding: 25px;
  flex-direction: column;
  display: flex;
  animation: show 0.5s ease-out forwards;

   @keyframes show {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
  }
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 8;
    position: fixed;
`