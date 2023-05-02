import React from 'react'


const Superhero = () => {

  
  return (
      <div className='w-full flex justify-center overflow-hidden'>
          <div className='w-full h-60 flex flex-wrap mt-20 bg-hero bg-no-repeat bg-cover bg-center bg-fixed'>
        <div className='w-full  flex bg-black bg-opacity-20'>
          <div className='w-2/5  mt-20 ml-20' >
           <header className="mb-16 group">
  <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
    Best Leading HR &  
     <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
        Payroll Software
    </span>
    <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
  </h1>
</header>
          </div>
        </div>
          </div>
      </div>
  )
}

export default Superhero
