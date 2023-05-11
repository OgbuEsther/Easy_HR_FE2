import React from 'react'
import Home from "./Home"
import Plan from './Plan/Plan'
import Payment from "./Payment"
import End from "./End/End"
import Easier from './Easier/Easier'
import Expert from './Expert/Expert'
import Client from './Client/Client'

const HomeScreen = () => {
  return (
    <div className='overflow-hidden'>
        <Home/>
        {/* <Plan/> */}
        <Easier/>
        <Client/>
        <Payment/>
        <Expert/>
        <End/>
    </div>
  )
}

export default HomeScreen