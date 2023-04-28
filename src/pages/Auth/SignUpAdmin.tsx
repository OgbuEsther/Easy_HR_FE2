import React from 'react'
import styled from 'styled-components'
import Admin from "../../Assets/hr_group.jpg"
import SignupAdminForm from '../../components/layout/Form/SignUpAdminForm'
import {BsArrowLeft} from "react-icons/bs"
import { NavLink } from 'react-router-dom';
import OutlineButton from '../../components/Buttons/OutlineButton'


const SignUpAdmin = () => {
  return (
    <div>

<SipupPage>
  <SigupDetailContainer>
<ImageContainer>
      <NavLink to='/sign-up-option'>
      <OutlineButton positioning='absolute' border='2px solid white' color='white' top='20px' left='20px'/>
  <Image  src={Admin}/>
      </NavLink>
  {/* <AdsWriteUp className='AdswriteUp'>Increase productivity and sales, paying staffs quickly with low rate at your comfort with <span>
  easy pay</span>.
</AdsWriteUp> */}
</ImageContainer>
<FormContainer>
  <SignupAdminForm />
</FormContainer>
</SigupDetailContainer>

</SipupPage>

    </div>
  )
}

export default SignUpAdmin;

const BacKToDashBoardIconHold = styled.div`


    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid white;

    position: absolute;
    top: 20px;
    left: 20px;
    height: 18px;
    width: 18px;
    font-size: 24px;
    color: white;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 390ms;
    
    :hover{
      background-color: #f5f5dc56;
    }

    
` 



const AdsWriteUp = styled.p`
  height: 150px;
  width: auto;
  padding-left: 50px;
  padding-right: 50px;
  position: absolute;
  bottom: 0;
  left: 0;

span{
}


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
  /* width: 50%; */
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;

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