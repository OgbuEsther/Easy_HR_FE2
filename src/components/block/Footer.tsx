import React from 'react'
import styled from 'styled-components'
import images from "../Assets/atlogo.png"
import {BsGlobe, BsTwitter, BsLinkedin} from "react-icons/bs"
import {RiArrowDownSFill} from "react-icons/ri"
import {GrFacebook} from "react-icons/gr"
import {TiSocialYoutubeCircular} from "react-icons/ti"
import { FaLaptopHouse } from 'react-icons/fa'
import {HiArrowUp} from "react-icons/hi"
import { Link } from "react-scroll"

const Footer = () => {

    const [show ,setShow] = React.useState(false)

    const showBackToTop = () =>{
      if (window.scrollY >= 200){
        setShow(true);
      }else{
        setShow(false)
      }
    }
  
    window.addEventListener("scroll",showBackToTop)

  return (
    <Container>
        <Last>
              <Copy>Copyright © 2023 EasyHR</Copy>
              <Insu>Insurance offered through EasyHR Insurance Agency, LLC (CA License #0L29422)</Insu>
              <Tems>Terms and Conditions | Privacy | Sitemap | Company</Tems>
        </Last>

        {
        show ? (
            <Link to='her' offset={-100} duration={1000} smooth={true} >
          <Arr>
          <div>
            <HiArrowUp/>
          </div>
        </Arr>
            </Link>
        ) : null
       }
  

    </Container>
  )
}

export default Footer

const Arr= styled.div`
  padding: 16px 17px;
  color: black;
  border-radius: 4px;
  cursor: pointer;
  background-color: whitesmoke;
  right: 1%;
  box-shadow: #031e3b 0px 5px 15px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
  position: fixed;
  bottom: 2%;

  @media screen and (max-width: 768px) {
    right: 3%;
  }
`

const Tems = styled.div`
    color: #fff;
    display: flex;
    margin-top: 20px;
    margin-left: 50px;
    @media screen and (max-width: 500px) {
        margin-left: 0;
    }
`
const Insu = styled.div`
    color: #fff;
    display: flex;
    margin-top: 20px;
    text-align: center;
    margin-left: 50px;
    @media screen and (max-width: 500px) {
        margin: 0;
        width: 300px;
    }
`
const Four = styled.div`
    color: #016699;
    font-size: 35px;
`
const Three = styled.div`
    color: #016699;
    font-size: 25px;
`
const Two = styled.div`
    color: #60A9DC;
    font-size: 25px;
`
const One = styled.div`
    color: #3C5A99;
    font-size: 25px;
    margin: 15px;
`
const Logo = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    margin-left: 90px;
`
const Copy = styled.div`
    color: #fff;
    display: flex;
    margin-top: 20px;
    margin-left: 50px;
    text-align: center;
    @media screen and (max-width: 500px) {
        margin-left: 0;
        margin-bottom: 15px;
    }
`

const Icons = styled.div`
    margin-top: 3px;
    margin-right: 5px;
`

const Eng = styled.div`
    color: #42526e;
    display: flex;
`

const Beg = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const Wrap = styled.div`
    width: 85%;
    display: flex;
`

const Last = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const Nav3 = styled.div`
   color: #0052cc;
    margin-top: 15px;
    cursor: pointer;
`
const Nav2 = styled.div`
    color: #42526e;
    margin-top: 5px;
    cursor: pointer;
`

const Navs = styled.div`
    color: #42526e;
    margin-top: 15px;
    cursor: pointer;
`

const Top = styled.h5`
    font-size: 14px;
    letter-spacing: 1px;
    margin-bottom: 20px;
    color: #42526e;
    font-weight: 700;
    margin: 0;
    margin-top: 5px;
`

const Second = styled.div`
    width: 190px;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
`
const Second1 = styled.div`
    width: 190px;
    display: flex;
    flex-direction: column;
    margin-left: 120px;
`

const Images = styled.img`
    width: 150px;
`

const First = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
    width: 80%;
    display: flex;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    background-color: #005AD9;
    padding-top: 50px;
    overflow: hidden;
    hr{
        width: 100%;
        margin-top: 35px;
    }
`