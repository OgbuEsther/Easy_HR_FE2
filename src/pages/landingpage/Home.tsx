import React from 'react'
import img from "../../Assets/tick.svg"


const Superhero = () => {

  
  return (
      <div className='w-full flex justify-center overflow-hidden'>
        <div className='w-11/12 flex flex-wrap mt-20 bg-white pt-20'>
        <div className='w-5/12 flex flex-col'>
          <h1 className='text-herotext text-6xl font-semibold m-0 leading-tight'>
            Business Payments Made Simple.
          </h1>
          <div className='flex flex-col mt-6'>
            <div className='flex items-center mb-2'>
              <img src={img} alt="" />
              <p className='ml-4 text-heroparagraph font-semibold m-0'>EazyHR performance managemant</p>
            </div>

            <div className='flex items-center mb-2'>
              <img src={img} alt="" />
              <p className='ml-4 text-heroparagraph font-semibold m-0'>EazyHR performance managemant</p>
            </div>

            <div className='flex items-center mb-2'>
              <img src={img} alt="" />
              <p className='ml-4 text-heroparagraph font-semibold m-0'>EazyHR performance managemant</p>
            </div>
            <button className='w-36 h-10 flex justify-center items-center'>Get started</button>
            </div>
         </div>
        </div>
      </div>
  )
}

export default Superhero
