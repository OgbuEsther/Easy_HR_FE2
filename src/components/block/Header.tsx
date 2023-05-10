import React, {useState} from 'react'
import img from "../../Assets/new.png"
import {BiMenu} from "react-icons/bi"

const Header = () => {

  const [show, setShow] = useState(false)

  const Toggle = () => {
      setShow(!show)
    }

  return (
    <div className='w-full h-20 z-10 bg-header flex justify-center fixed'>
      <div className='w-11/12 flex items-center justify-between'>
        <img src={img} alt="" className='h-16'/>

        <div className='flex items-center xmd:hidden'>
          <div className='text-white text-sm m-6 hover:text-hover cursor-pointer'>Home</div>
          <div className='text-white text-sm m-6 hover:text-hover cursor-pointer'>Our Solution</div>
          <div className='text-white text-sm m-6 hover:text-hover cursor-pointer'>About</div>
          <div className='text-white text-sm m-6 hover:text-hover cursor-pointer'>How we work</div>
        </div>

        <div className='flex items-center md:hidden'>
          <button className='w-32 h-10 bg-white text-buttoncol flex justify-center items-center font-semibold rounded-3xl hover:bg-buttonhover hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150 m-3'>
            Sign in
          </button>
          <button className='w-32 h-10 bg-white text-buttoncol flex justify-center items-center font-semibold rounded-3xl hover:bg-buttonhover hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150'>
            Sign up
          </button>
        </div>

        <div className='hidden items-center text-white text-3xl md:flex cursor-pointer' onClick={Toggle}>
          <BiMenu />
        </div>
      </div>
      
      {show ? (
        <div className='hidden md:flex absolute h-screen w-44 bg-white top-20 right-0 fixed flex-col items-center'>
          <div className='text-hover text-sm m-4 hover:text-hover'>Home</div>
          <div className='text-hover text-sm m-4 hover:text-hover'>Our Solution</div>
          <div className='text-hover text-sm m-4 hover:text-hover'>About</div>
          <div className='text-hover text-sm m-4 hover:text-hover'>How we work</div>
          <button className='w-32 h-10 bg-buttonhover text-white flex justify-center items-center font-semibold rounded-3xl hover:bg-buttonhover hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150 m-3'>
            Sign in
          </button>
          <button className='w-32 h-10 bg-buttonhover text-white flex justify-center items-center font-semibold rounded-3xl hover:bg-buttonhover hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150'>
            Sign up
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Header