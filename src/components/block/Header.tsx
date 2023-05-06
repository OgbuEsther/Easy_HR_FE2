import React from 'react'
import img from "../../Assets/new.png"
import {BiMenu} from "react-icons/bi"

const Header = () => {
  return (
    <div className='w-full h-20 z-10 bg-header flex justify-center fixed'>
      <div className='w-11/12 flex items-center justify-between'>
        <img src={img} alt="" className='h-16'/>

        <div className='flex items-center'>
          <div className='text-white text-sm m-6 hover:text-hover'>Home</div>
          <div className='text-white text-sm m-6 hover:text-hover'>Our Solution</div>
          <div className='text-white text-sm m-6 hover:text-hover'>About</div>
          <div className='text-white text-sm m-6 hover:text-hover'>How we work</div>
        </div>

        <div className='flex items-center md:hidden'>
          <button className='w-32 h-10 bg-white text-buttoncol flex justify-center items-center font-semibold rounded-3xl hover:bg-buttonhover hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150 m-3'>
            Sign in
          </button>
          <button className='w-32 h-10 bg-white text-buttoncol flex justify-center items-center font-semibold rounded-3xl hover:bg-buttonhover hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150'>
            Sign up
          </button>
        </div>

        <div className='hidden items-center text-white text-3xl md:flex'>
          <BiMenu />
        </div>
      </div>
    </div>
  )
}

export default Header