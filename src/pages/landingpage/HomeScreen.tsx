import React from 'react'
import Home from "./Home"
import Connect from "./Connect"
import Plan from './Plan'
import Payment from "./Payment"

const HomeScreen = () => {
  return (
    <div>
        <Home/>
        <Connect/>
        <Plan/>
        <Payment/>
    </div>
  )
}

export default HomeScreen