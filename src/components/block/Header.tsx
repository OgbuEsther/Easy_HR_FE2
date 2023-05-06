import React from 'react'
import img from "../../Assets/new.png"

const Header = () => {
  return (
    <div className='w-full h-20 bg-header flex justify-center'>
      <div className='w-11/12 flex items-center justify-between'>
        <img src={img} alt="" className='h-16'/>

        <div className='flex items-center'>
          <div className='text-white text-sm m-6 hover:text-hover'>Home</div>
          <div className='text-white text-sm m-6 hover:text-hover'>Our Solution</div>
          <div className='text-white text-sm m-6 hover:text-hover'>About</div>
          <div className='text-white text-sm m-6 hover:text-hover'>How we work</div>
        </div>
      </div>
    </div>
  )
}

export default Header