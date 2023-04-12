import React from 'react'
import { Footer, Header } from '../../block'
import {Outlet} from "react-router-dom"
const HomeLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default HomeLayout