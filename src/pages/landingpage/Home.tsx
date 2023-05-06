import React from 'react'
import img from "../../Assets/tick.svg"
import img2 from "../../Assets/her.png"
import { Header } from '../../components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



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
    <div>
      <Slider {...settings}>
      <div className='w-full h-screen bg-hero flex justify-center overflow-hidden bg-no-repeat bg-center bg-cover'>
      <div className='w-full h-screen bg-black bg-opacity-50 '>
      </div>
      </div>

      <div className='w-full h-screen bg-righthero flex justify-center overflow-hidden bg-no-repeat bg-center bg-cover'>
      <div className='w-full h-screen bg-black bg-opacity-50 '>
      </div>
      </div>

      <div className='w-full h-screen bg-lefthero flex justify-center overflow-hidden bg-no-repeat bg-center bg-cover'>
      <div className='w-full h-screen bg-black bg-opacity-50 '>
      </div>
      </div>
    </Slider>
    </div>
  )
}

export default Superhero
