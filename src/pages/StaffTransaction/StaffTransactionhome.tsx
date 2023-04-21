import React from 'react'
import styled from 'styled-components'

const StaffTransactionhome = () => {
  return (
      <Container>
          <Top><h3>Transaction History</h3></Top>
    </Container>
  )
}

export default StaffTransactionhome

const Top = styled.div`
    h3{

    }
`

const Container = styled.div`
    margin-top: 25px;
    width: 100%;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    flex-direction: column;
`