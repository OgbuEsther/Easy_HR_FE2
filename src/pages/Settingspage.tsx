import React from 'react'
import styled from 'styled-components'

const Settingspage = () => {
  return (
      <Container>
          <Wrapper>
              
          </Wrapper>
    </Container>
  )
}

export default Settingspage

const Wrapper = styled.div`
  width: 95%;
  height: 40px;
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