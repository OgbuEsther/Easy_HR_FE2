import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Fade} from "react-awesome-reveal"
import { NavLink } from 'react-router-dom';

const Superhero = () => {

    const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
        fade: true,
		speed: 800,
		autoplaySpeed: 5000,
		cssEase: "linear",
	};
  
  return (
    <div id="home">
      <Slider {...settings}>
      <div className='w-full  bg-hero flex justify-center overflow-hidden bg-no-repeat bg-center bg-cover'>
          <div className='w-full pb-36 bg-black bg-opacity-50 flex-col items-center flex xmd:justify-center xmd:flex xmd:items-center'>
            <div className='mt-56 w-11/12 text-white xmd:mt-36'>
            <Fade
              duration={2000}
            >
              <div className='w-3/12 xmd:w-full text-6xl lg:w-full font-bold xmd:text-4xl xmd:text-center '>
               Employee Performance Management
              </div>
            </Fade>
            <Fade direction="down">
              <p className='text-white text-2xl mt-3 xmd:text-center sm:text-sm'>to take your business further</p>
            </Fade>

            <div className='xmd:w-full xmd:flex xmd:justify-center xmd:items-center'>
              <Fade direction="up">
                <NavLink to="/sign-up-option">
                  <button className='w-48 h-12 text-white bg-hover flex justify-center items-center font-semibold rounded-3xl hover:bg-white hover:text-hover cursor-pointer transition-all duration-150 ease-in-out delay-150 mt-10'>
              Get started
            </button>
              </NavLink>
            </Fade>
            </div>
            </div>
      </div>
      </div>

      <div className='w-full bg-righthero flex justify-center overflow-hidden bg-no-repeat bg-center bg-cover'>
      <div className='w-full pb-36 bg-black bg-opacity-50 flex-col items-center flex xmd:justify-center xmd:flex xmd:items-center '>
        <div className='mt-56 w-11/12 text-white xmd:mt-36'>
            <Fade
              duration={3000}
            >
              <div className='w-6/12 xmd:w-full text-6xl font-bold xmd:text-4xl xmd:text-center sm:text-3xl'>
                Employee Performance Management
              </div>
            </Fade>
            <Fade direction="down">
              <p className='text-white text-3xl mt-3 xmd:text-center sm:text-sm'>to take your business further</p>
            </Fade>

            <div className='xmd:w-full xmd:flex xmd:justify-center xmd:items-center'>
              <Fade direction="up">
              <NavLink to="/sign-up-option">
                  <button className='w-48 h-12 text-white bg-hover flex justify-center items-center font-semibold rounded-3xl hover:bg-white hover:text-hover cursor-pointer transition-all duration-150 ease-in-out delay-150 mt-10'>
              Get started
            </button>
              </NavLink>
            </Fade>
            </div>
            </div>
      </div>
      </div>

      <div className='w-full bg-lefthero flex justify-center overflow-hidden bg-no-repeat bg-center bg-cover'>
          <div className='w-full pb-36 bg-black bg-opacity-50 flex-col items-center flex xmd:justify-center xmd:flex xmd:items-center '>
            <div className='mt-56 w-11/12 text-white xmd:mt-36'>
            <Fade
              duration={3000}
            >
              <div className='w-6/12 xmd:w-full text-6xl font-bold xmd:text-4xl xmd:text-center sm:text-4xl'>
                Employee Performance Management
              </div>
            </Fade>
            <Fade direction="down">
              <p className='text-white text-3xl mt-3 xmd:text-center sm:text-sm'>to take your business further</p>
            </Fade>

            <div className='xmd:w-full xmd:flex xmd:justify-center xmd:items-center'>
              <Fade direction="up">
              <NavLink to="/sign-up-option">
                  <button className='w-48 h-12 text-white bg-hover flex justify-center items-center font-semibold rounded-3xl hover:bg-white hover:text-hover cursor-pointer transition-all duration-150 ease-in-out delay-150 mt-10'>
              Get started
            </button>
              </NavLink>
            </Fade>
            </div>
            </div>
      </div>
      </div>
    </Slider>
    </div>
  )
}

export default Superhero
