import React from 'react'
import styled from 'styled-components'
import LeftSectionImage from "../assets/images/girl_five.jpg"
import { NavLink } from 'react-router-dom'

const SignUpOption = () => {
  return (
    <SignUpOptionPageContainer>
        <LeftSection>
            <Image src={LeftSectionImage}/>
        </LeftSection>
        <RightSection>
            <SignUpOptionField>
                <TitleAndDescriptionContainer>
                    <Title>CHOOSE A SIGN UP OPTION</Title>
                </TitleAndDescriptionContainer>
                <OptionButtonContainer>
                    <NavLink to="/sign-up" style={{width:"100%", textDecoration:"none", color:"white", display:"flex", justifyContent:"center"}}>
                        <AdminSignUpOption>Sign Up As A Company</AdminSignUpOption>

                    </NavLink>

                    <NavLink to="/sign-up"  style={{width:"100%", textDecoration:"none", color:"white", display:"flex", justifyContent:"center"}}>
                    <StaffSignUpOption>Sign Up As A Staff</StaffSignUpOption>
                    </NavLink>
                </OptionButtonContainer>
            </SignUpOptionField>
        </RightSection>
    </SignUpOptionPageContainer>
  )
}
 
export default SignUpOption;



// Rignt Section Codes

const StaffSignUpOption = styled.button`
 height: 70px;
    width: 80%;
    border-radius: 50px;
    color: #07befb;
    font-size: 20px;
    font-weight: 600;
    border: none;
    border: 2px solid #07befb6e;
    margin-top: 80px;
    transition: all 390ms;
    background-color: transparent;


    cursor: pointer;
    :hover{
        transform: scale(1.03);
        background-color: #004cff;
        color: white;

    }

`

const AdminSignUpOption = styled.button`
    height: 70px;
    width: 80%;
    background-color: #07befb6e;
    border-radius: 50px;
    color: #004cff;
    font-size: 20px;
    font-weight: 600;
    border: none;
    transition: all 390ms;
    cursor: pointer;
    :hover{
        transform: scale(1.03);
        background-color: transparent;
        border: 2px solid #004cff;
        color: #004cff;
    }
`

const OptionButtonContainer = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1``

const TitleAndDescriptionContainer = styled.div`
    height: 200px;
    width: 100%;
    text-align: center;
`

const SignUpOptionField = styled.div`
    height: 90%;
    width: 90%;
`

const RightSection = styled.div`
height: 100vh;
/* width: 50%; */
flex: 1;
display: flex;
justify-content: center;
align-items: center;



@media screen and (max-width: 500px) {
    h1{
        font-size: 25px;
    }

    button{
        font-size: 16px;
    }
}
`




// Left Section Codes
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
overflow: hidden;
`

const LeftSection = styled.div`
height: 100vh;
width: 50%;
overflow: hidden;
position: relative;

::before{
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(126, 126, 126, 0.4);
    position: absolute;
}

@media screen and (max-width: 960px) {
    display: none;
}
`






// Sign Up Option Container Codes
const SignUpOptionPageContainer = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

