import React from 'react'
import styled from 'styled-components'

const AbsentUserProps = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>
            List Of All Staffs
          </Title>
          {/* <Img>
          VC
          </Img>
          <WorkName>
            Credit Officer
          </WorkName>
          <Name>
            Valerian Pedro
          </Name> */}
        </Wrapper>
      </Container>
    </div>
  )
}

export default AbsentUserProps
const Name  = styled.div``

const WorkName = styled.div``

const Img = styled.div`` 

const Title = styled.div`` 

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* height:390px; */
width:90%;
`

const Container = styled.div`
/* height: 400px; */
width: 100%;
background-color:blanchedalmond;
`