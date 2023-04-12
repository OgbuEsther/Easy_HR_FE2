import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { SideBar } from '../../block'
import DashboardHead from '../../block/DashboardHead'

const Dashboard = () => {
  return (
    <div>
      <DashboardHead />
        <SideBar />
     <Container>
   
        <Outlet />
     </Container>
    </div>
  )
}

export default Dashboard

const Container = styled.div`
display: flex;
justify-content: flex-end;
`