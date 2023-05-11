import React from 'react'
import styled from 'styled-components'

const Settingspage = () => {
  return (
      <Container>
          <Wrapper>
              <Workcard>
                  <Top><h6>Work Day Settings</h6></Top>
                  <Choose><h6>Choose work days</h6></Choose>
                  <Cardhold>
                <Card>
                    <Input type='checkbox' /> 
                    <Day>Monday</Day>
                      </Card>
                      
                      <Card>
                    <Input type='checkbox' /> 
                    <Day>Tuesday</Day>
                      </Card>
                      
                      <Card>
                    <Input type='checkbox' /> 
                    <Day>Wednesday</Day>
                      </Card>
                      
                      <Card>
                    <Input type='checkbox' /> 
                    <Day>Thursday</Day>
                      </Card>
                      
                      <Card>
                    <Input type='checkbox' /> 
                    <Day>Friday</Day>
                </Card>

                <Card>
                    <Input type='checkbox' /> 
                    <Day>Saturday</Day>
                </Card>

                <Card>
                    <Input type='checkbox' /> 
                    <Day>Sunday</Day>
                </Card>
            </Cardhold>
              </Workcard>
          </Wrapper>
    </Container>
  )
}

export default Settingspage
const Day = styled.div`
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    cursor: pointer;
    margin-left: 12px;
`
const Input = styled.input`
    
`
const Card = styled.div`
    width: 140px;
    height: 40px;
    align-items: center;
    padding-left: 10px;
    display: flex;
    font-size: .8rem;
    font-weight: 400;
    margin-right: 15px;
    margin-bottom: 15px;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    display: flex;
    border: 1px solid #ced4da;
    border-radius: 5px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    cursor: pointer;
`
const Cardhold = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`
const Choose = styled.div`
    h6{
        color: #000;
     font-size: 1rem;
     margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 17px;
    }
`
const Top = styled.div`
    h6{
     color: #000;
     font-size: 19px;
     margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 0;
    }
`
const Workcard = styled.div`
    width: 500px;
    display: flex;
    background: hsla(0,0%,76.9%,.25);
    color: #4a5568;
    padding: 16px;
    border-radius: 5px;
    margin-top: 40px;
    border: 1px solid #d3d3d3;
    flex-direction: column;
    /* flex-wrap: wrap; */
`

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

const Container = styled.div`
  width: calc(100vw - 220px);
  background-color: #f5f7fa;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;