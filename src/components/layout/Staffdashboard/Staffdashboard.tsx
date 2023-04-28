import React from 'react'
import styled from 'styled-components'
import { Staffdashboardhead, Staffsidebar } from '../../block'
import { Outlet } from 'react-router-dom'

const Staffdashboard = () => {
  return (
      <div>
          <Staffdashboardhead />
          <Staffsidebar />
          <Container>
        <Outlet />
          </Container>
    </div>
  )
}

export default Staffdashboard

const Container = styled.div`
display: flex;
justify-content: flex-end;
`