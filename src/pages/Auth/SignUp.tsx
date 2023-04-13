import React from 'react'
import styled from 'styled-components'
import Admin from "../../Assets/hr_group.jpg"
import SignupForm from '../../components/layout/Form/SignUpForm'
import {BsArrowLeft} from "react-icons/bs"
import { NavLink } from 'react-router-dom';


const SignUp = () => {
  return (
    <div>

<SipupPage>
  <SigupDetailContainer>
<ImageContainer>

       <NavLink to="/" style={{textDecoration:"none", color:"white", 
      
    }}>
        <BacKToDashBoardIconHold>
       <BsArrowLeft />
    </BacKToDashBoardIconHold>
       </NavLink>
  <Image  src={Admin}/>
  {/* <AdsWriteUp className='AdswriteUp'>Increase productivity and sales, paying staffs quickly with low rate at your comfort with <span>
  easy pay</span>.
</AdsWriteUp> */}
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
    top: 20px;
    left: 20px;
    size: 24;
    padding: 10px 0px 0px 10px;
    font-size: 24px;
    color: white;
    padding: 15px;
    border-radius: 50%;
    background-color:rgba(136, 136, 136, 0.2);
    cursor: pointer;
    transition: all 390ms;

    :hover{
      background-color:rgba(141, 141, 141, 0.616);
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