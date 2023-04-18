import React from 'react'
import styled from 'styled-components'

const Staffcomp = () => {
  return (
      <Container>
          
    </Container>
  )
}

export default Staffcomp

const Container = styled.div`
  width: calc(100vw - 220px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5F7FA;
  overflow: hidden;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;