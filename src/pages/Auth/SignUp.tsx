import React from 'react'
import styled from 'styled-components'
import Admin from "../assets/images/girl_five.jpg"


import SignupForm from '../../components/layout/Form/SignUpForm'
import {BsArrowLeft} from "react-icons/bs"
import { NavLink } from 'react-router-dom';


const SignUp = () => {
  return (
    <div>

<SipupPage>

  <SigupDetailContainer>
<ImageContainer>
<BacKToDashBoardIconHold>
       <NavLink to="/" style={{textDecoration:"none", color:"white"}}>
       <BsArrowLeft />
       </NavLink>
    </BacKToDashBoardIconHold>


  <Image  src={Admin}/>
  <AdsWriteUp className='AdswriteUp'>Increase productivity and sales, paying staffs quickly with low rate at your comfort with <span>
  easy pay</span>.
</AdsWriteUp>
</ImageContainer>
<FormContainer>
<SignupForm />
</FormContainer>
  </SigupDetailContainer>

</SipupPage>

    </div>
  )
}

export default SignUp;

const BacKToDashBoardIconHold = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    size: 24;
    padding: 10px 0px 0px 10px;
    font-size: 24px;
    color: white;
` 



const AdsWriteUp = styled.div`
  height: 150px;
  width: auto;
  padding-left: 50px;
  padding-right: 50px;
  position: absolute;
  bottom: 0;
  left: 0;

span{
background: rgb(0,136,255);
background-image: linear-gradient(90deg, rgba(0,136,255,1) 6%, rgba(0,183,255,1) 55%, rgba(0,183,255,1) 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    font-weight: bolder;
    text-shadow: 2px 9px 34px rgba(13,186,230,0.6);}

font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;
  line-height: 45px;
  text-align: justify;

  background-color: rgba(100, 100, 100, 0);
  color: white;


  






`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`

const FormContainer = styled.div`
  height: 100vh;
  width: 600px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px){
    justify-content: center;
    width: 100%;
}
`
const ImageContainer = styled.div`
  height: 100%;
  width: 700px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 960px){ 
    display: none;
  }




  ::before{
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
  }
  
`

const SigupDetailContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
background-color: white;
`

const SipupPage = styled.div`
height: auto;
width:auto;
display: flex;
align-items: center;
`