import React from 'react'
import styled from 'styled-components'
import Admin from "../../Assets/hr_group.jpg"
import SignupForm from '../../components/layout/Form/SignUpForm'
import {BsArrowLeft} from "react-icons/bs"
import { NavLink } from 'react-router-dom';
import OutlineButton from '../../components/Buttons/OutlineButton'


const SignUp = () => {
  return (
    <div>

<SipupPage>
  <SigupDetailContainer>
<ImageContainer>

      <OutlineButton positioning='fixed' border='2px solid white' fontSize='24px' top='20px' left='20px'/>
       <NavLink to="/" style={{textDecoration:"none", color:"white", 
      
    }}>
       
       </NavLink>
  <Image  src={Admin}/>
  {/* <AdsWriteUp className='AdswriteUp'>Increase productivity and sales, paying staffs quickly with low rate at your comfort with <span>
  easy pay</span>.
</AdsWriteUp> */}
</ImageContainer>
<FormContainer>
{/* <MobileViewBackButton>
  <OutlineButton positioning='fixed' color='black' border='2px solid black'/>
</MobileViewBackButton> */}
  <SignupForm />
</FormContainer>
</SigupDetailContainer>

</SipupPage>

    </div>
  )
}

export default SignUp;


const MobileViewBackButton = styled.div`
  height: 50px;
  width: 50px;
  
`

const AdsWriteUp = styled.p`
  height: 150px;
  width: auto;
  padding-left: 50px;
  padding-right: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
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
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  padding-top: 50px;
 

  @media screen and (max-width: 960px){
    justify-content: center;
    width: 100%;
}
`
const ImageContainer = styled.div`
  height: 100%;
  width: 45%;
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