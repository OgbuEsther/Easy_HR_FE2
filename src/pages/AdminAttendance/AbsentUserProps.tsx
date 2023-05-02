import React from 'react'
import styled from 'styled-components'

const AbsentUserProps = () => {
  return (
    <div>
      <Container>
       
             <Title>
            List Of All Staffs
          </Title>
        <CardHold>
          <Img>
          VC
          </Img>
          <WorkName>
            Credit Officer
          </WorkName>
          <Name>
            Valerian Pedro
          </Name>
       </CardHold>
       
      </Container>
    </div>
  )
}

export default AbsentUserProps
const Name  = styled.div``

const WorkName = styled.div``

const Img = styled.div`
 width: 70px;
  height: 70px;
  margin: 3px;
  font-size: 30px;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 50px;
  font-weight: bold;
  color: black;
  background-color: blanchedalmond;
  border: 1px solid black;
` 

const Title = styled.div`
font-size: 30px;
`
const CardHold = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
flex-direction: column;
justify-content: center;
`

const Container = styled.div`
 width: 80vw;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: red;
 margin-top: 7px;
 flex-direction: column;
`