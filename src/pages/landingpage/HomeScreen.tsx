import React from 'react'
import Home from "./Home"
import Connect from "./Connect"
import Plan from './Plan/Plan'
import Payment from "./Payment"
import Modern from './Modern/Modern'
import Facts from "./Facts/Facts"
import End from "./End/End"

const HomeScreen = () => {
  return (
    <div className='overflow-hidden'>
        <Home/>
        <Plan/>
        <Modern/>
        <Connect/>
        <Payment/>
        <Facts/>
        <End/>
    </div>
  )
}

export default HomeScreen