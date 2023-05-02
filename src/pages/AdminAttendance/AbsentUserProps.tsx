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

const Img = styled.div`` 

const Title = styled.div`
font-size: 30px;
`
const CardHold = styled.div`
display: flex;
flex-wrap: wrap;
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