import React, {useState} from 'react'
import img from "../../Assets/new.png"
import {BiMenu} from "react-icons/bi"
import { NavLink } from 'react-router-dom'
import {  BsFillArrowUpCircleFill, BsFillDiscFill} from "react-icons/bs"
import { Link } from "react-scroll";
import styled from 'styled-components'


const Header = () => {

  const [show, setShow] = useState(false)

  const [Arrow,setArrow] = React.useState(false)

  

  const Toggle = () => {
      setShow(!show)
    }


  return (
    <div className='w-full h-20 z-10 bg-header flex justify-center fixed' id='her'>
      <div className='w-11/12 flex items-center justify-between'>
        <img src={img} alt="" className='h-16'/>

        <div className='flex items-center xmd:hidden'>
          <Link to="home" smooth={true} duration="600">
          <div className='text-white text-sm m-6 hover:text-hover cursor-pointer'>Home</div>
          </Link>

         <Link to="services" smooth={true} duration="600">
          <div className='text-white text-sm m-6 hover:text-hover cursor-pointer'>Services</div>
         </Link>

         <Link to="partners" smooth={true} duration="600">
          <div className='text-white text-sm m-6 hover:text-hover cursor-pointer'>Partners</div>
         </Link>

         <Link to="oursolutions" smooth={true} duration="600">
          <div className='text-white text-sm m-6 hover:text-hover cursor-pointer'>Our Solutions</div>
         </Link>

         <Link to="streamline" smooth={true} duration="600">
         <div className='text-white text-sm m-6 hover:text-hover cursor-pointer'>StreamLine</div>
         </Link>

        </div>

        <div className='flex items-center md:hidden'>
          <NavLink to= "/sign-in-option">
          <button  className='w-32 h-10 bg-white text-buttoncol flex justify-center items-center font-semibold rounded-3xl hover:bg-buttonhover hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150 m-3'>
            Sign In
          </button>
          </NavLink>
          <NavLink to= "/sign-up-option">
          <button className='w-32 h-10 bg-white text-buttoncol flex justify-center items-center font-semibold rounded-3xl hover:bg-buttonhover hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150'>
            Sign Up
          </button>
          </NavLink>
        </div>

     {
      show ? (
        <div className='hidden  items-center text-white text-4xl md:flex cursor-pointer' onClick={Toggle}>
        <BsFillDiscFill/>
      </div>
      ) : (
        <div className='hidden items-center text-white text-4xl md:flex cursor-pointer' onClick={Toggle}>
          <BiMenu />
      </div>
      )
     }
      </div>
      
      {show ? (
         <div className='hidden md:flex h-screen w-44 bg-white top-20 right-0 fixed flex-col items-center'>
          <div className='text-hover text-sm m-4 hover:text-hover'>Home</div>
          <div className='text-hover text-sm m-4 hover:text-hover'>Our Solution</div>
          <div className='text-hover text-sm m-4 hover:text-hover'>About</div>
          <div className='text-hover text-sm m-4 hover:text-hover'>How we work</div>
          <NavLink to="/sign-in-option">
            <button className='w-32 h-10 bg-buttonhover text-white flex justify-center items-center font-semibold rounded-3xl hover:bg-buttonhover hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150 m-3'>
            Sign in
          </button>
          </NavLink>
          <NavLink to="/sign-up-option">
            <button className='w-32 h-10 bg-buttonhover text-white flex justify-center items-center font-semibold rounded-3xl hover:bg-buttonhover hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150'>
            Sign up
          </button>
          </NavLink>
        </div>
      ) : null}

{Arrow ? (
        <Link offset={-7000} smooth={true} duration={5000} to="her">
          <ScroolToTop>
            <BsFillArrowUpCircleFill />
          </ScroolToTop>
        </Link>
      ) : null}
    </div>
  )
}

export default Header

const ScroolToTop = styled.div`

border-radius: 50%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  background-color: #00244E;
  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  right: 1%;
  font-size: 30px;
  box-shadow: #8a2be2 0px 8px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: fixed;
  bottom: 2%;
  @media screen and (max-width: 768px) {
    right: 3%;
  }
`