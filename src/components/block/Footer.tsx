import React from "react";
import styled from "styled-components";
// import images from "../Assets/logo7.png";
import images from "../../Assets/new.png"
import foot from "../../Assets/footer1.jpg"

import { MdFacebook }  from "react-icons/md"
import { AiFillTwitterCircle }  from "react-icons/ai"
import { GrInstagram }  from "react-icons/gr"
import { HiArrowUp }  from "react-icons/hi"
import {
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsTwitch,
  BsWhatsapp,
  BsInstagram,
  
} from "react-icons/bs";
import {BsFillArrowUpCircleFill} from "react-icons/bs"

import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Fade } from 'react-awesome-reveal'

const Footer = () => {

  const [show ,setShow] = React.useState(false)

  const showBackToTop = () =>{
    if (window.scrollY >= 80){
      setShow(true);
    }else{
      setShow(false)
    }
  }

  window.addEventListener("scroll",showBackToTop)
  return (
    <Container id="footer">
      <Wrapper>
      
       <Left>
          <Images src={images} />
          <Down>© 2023 EasyHR,Inc.</Down>
        </Left>
       
     <Right>
          <Start>
            <Bold>Product</Bold>
            <Navs>Staff Performance</Navs>
            <Navs>Time & Attendance</Navs>
            <Navs>PayRoll</Navs>
            <Navs>Recruitment</Navs>
            <Navs>Local Businesses</Navs>
            <Navs>Enterprise</Navs>
          </Start>
          <Start>
            <Up>
              <Bold>Company</Bold>

        <NavLink to="https://github.com/OgbuEsther"   style={{ textDecoration: "none" }}>
        <Navs>Esther Ogbu</Navs>
        </NavLink>
          
          <NavLink to="https://github.com/Okwoli-Godwin" style={{textDecoration:"none"}}>
          <Navs>Okwoli  Godwin </Navs>
          </NavLink>

             <NavLink to="https://github.com/Phinatech"  style={{ textDecoration: "none" }} >
             <Navs>Valerian Adimike</Navs>
             </NavLink>

             <NavLink to="https://github.com/Ovohkay"  style={{ textDecoration: "none" }} >
             <Navs>Esther Ighoruemuse</Navs>
             </NavLink>

             <NavLink to="https://github.com/Enyinnaya-Joshua"  style={{ textDecoration: "none" }} >
             <Navs>Enyinnaya Joshua </Navs>
             </NavLink>
            </Up>
            <Dow>
              <Bold>Security and terms</Bold>
              <Navs>Trust and Security</Navs>
              <Navs>Privacy policy</Navs>
              <Navs>Terms & Conditions</Navs>
            </Dow>
          </Start>
          <Start>
            <Bold>Social</Bold>
            <NavLink
              to="https://github.com/Dc-Valerian"
              style={{ textDecoration: "none" }}
            >
              <Navs>
                <Icon >
                  <BsWhatsapp/>
                </Icon>
                WhatsApp
              </Navs>
            </NavLink>

          <NavLink 
          to="https://www.linkedin.com/groups/9344063/"
          style={{ textDecoration: "none" }}
          >
          <Navs>
              <Icon>
                <BsLinkedin />
              </Icon>
              LinkedIn
            </Navs>
          </NavLink>

         <NavLink 
         to="https://web.facebook.com/profile.php?id=100091845874776"
         style={{ textDecoration: "none" }}
         >
         <Navs>
              <Icon>
              <MdFacebook/>
              </Icon>
              FaceBook
            </Navs>
         </NavLink>

         <NavLink 
         to="https://www.youtube.com/@EasyHR360"
         style={{ textDecoration: "none" }}
         >
         <Navs>
              <Icon>
                <BsYoutube />
              </Icon>
              YouTube
            </Navs>
         </NavLink>

         <NavLink 
         to="https://www.instagram.com/easyhr_01/"
         style={{ textDecoration: "none" }}
         >
         <Navs>
              <Icon>
                <GrInstagram />
              </Icon>
              Instagram
            </Navs>
         </NavLink>

         <NavLink 
         to="https://twitter.com/EasyHr_payroll"
         style={{ textDecoration: "none" }}
         >
         <Navs>
              <Icon>
                <AiFillTwitterCircle />
              </Icon>
              Twitter
            </Navs>
         </NavLink>

          </Start>
        </Right>
      </Wrapper>
      {show ? (
        <Link offset={-7000} smooth={true} duration={5000} to="her">
          <ScroolToTop>
            <BsFillArrowUpCircleFill />
          </ScroolToTop>
        </Link>
      ) : null}
  
    </Container>
    
  );
};

export default Footer;
const ScroolToTop = styled.div`

border-radius: 20%;
  cursor: pointer;
  width: 80px;
  height: 50px;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  background-color: #001328;
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

const Icon = styled.div`
  color: black;
  margin-right: 7px;
  margin-top: 2px;
  font-size: 20px;

  :hover{
    color: white;
  }
`;

const Dow = styled.div`
  width: 100%;
  height: 35%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
`;
const Up = styled.div`
  width: 100%;
  height: 65%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Navs = styled.div`
  font-size: 15px;
  display: flex;
  line-height: 24px;
  align-items: center;
  font-weight: 400;
  color:white;
  margin-bottom: 7px;
  cursor: pointer;
  :hover {
    color: #DC3545;
  }
`;
const Bold = styled.h2`
  font-size: 18px;
  line-height: 1.28;
  letter-spacing: -0.12px;
  color: white;
  margin: 0;
  font-weight: 600;
  text-align: start;
  padding-bottom: 10px;
`;
const Start = styled.div`
  height: 100%;
  width: 185px;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  /* margin-right: 40px; */
  @media screen and (max-width: 500px) {
    margin-bottom: 15px;
    flex: auto;
  }
`;
const Right = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  /* background-color: green; */
  justify-content: space-between;
  @media screen and (max-width: 774px) {
    width: 100%;
  }
`;
const Down = styled.div`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(166, 166, 166);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  /* margin-top:-1px; */
`;
const Images = styled.img`
  height: 150px;
`;
const Left = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 774px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* margin-top: 3px; */
  padding-top: 40px;
  padding-bottom: 20px;
  /* background-color: #001328; */
  background-image: url(${foot});

  @media screen and (max-width: 320px) {
  margin-top:500px;
    /* background-color: red; */
  }
  @media screen and (max-width: 500px) {
    margin-top: -900px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 5px;
  }

`;


