import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { SideBar } from '../../block'
import DashboardHead from '../../block/DashboardHead'

const Dashboard = () => {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "flex-end"}}><DashboardHead /></div>
        <div><SideBar /></div>
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