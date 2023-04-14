import React from 'react'
import styled from 'styled-components'
import Admin from "../../Assets/hr_group.jpg"
import {BsArrowLeft} from "react-icons/bs"
import { NavLink } from 'react-router-dom';
import SigninAdminForm from '../../components/layout/Form/SignInAdminForm';


const SignInAdmin = () => {
  return (
    <div>

<SipInPage>

  <SigInDetailContainer>
  {/* <BacKToDashBoardIconHold>
       <NavLink to="/" style={{textDecoration:"none", color:"white"}}>
       <BsArrowLeft />
       </NavLink>
    </BacKToDashBoardIconHold> */}

<ImageContainer>
  <Image  src={Admin}/>
  {/* <AdsWriteUp className='AdswriteUp'>Increase productivity and sales, paying staffs quickly with low rate at your comfort with <span>
  easy pay</span>.
</AdsWriteUp> */}
</ImageContainer>
<FormContainer>
<SigninAdminForm />
</FormContainer>
  </SigInDetailContainer>

</SipInPage>

    </div>
  )
}

export default SignInAdmin;

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


  @media screen and (max-width: 1040px){
    font-size: 25px;
    line-height: 35px;

}

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
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;



  
`
const ImageContainer = styled.div`
  height: 100%;
  width: 50%;
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

const SigInDetailContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
background-color: white;
position: relative;


@media screen  and (max-width: 960px) {
    justify-content: center;
}
`

const SipInPage = styled.div`
height: auto;
width: auto;
display: flex;
align-items: center;
`