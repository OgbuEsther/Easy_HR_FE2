import React from 'react'
import styled from 'styled-components'
import LeftSectionImage from "../../Assets/hr_group.jpg"
import { NavLink } from 'react-router-dom'

const SignInOption = () => {
  return (
    <SignUpOptionPageContainer>
        <LeftSection>
            <Image src={LeftSectionImage}/>
        </LeftSection>
        <RightSection>
            <SignUpOptionField>
                <TitleAndDescriptionContainer>
                    <Title>CHOOSE A SIGN IN OPTION</Title>
                </TitleAndDescriptionContainer>
                <OptionButtonContainer>
                    <NavLink to="/sign-up" style={{width:"100%", textDecoration:"none", color:"white", display:"flex", justifyContent:"center"}}>
                        <AdminSignUpOption>Sign In As A Company</AdminSignUpOption>

                    </NavLink>

                    <NavLink to="/sign-up"  style={{width:"100%", textDecoration:"none", color:"white", display:"flex", justifyContent:"center"}}>
                    <StaffSignUpOption>Sign In As A Staff</StaffSignUpOption>
                    </NavLink>
                </OptionButtonContainer>
            </SignUpOptionField>
        </RightSection>
    </SignUpOptionPageContainer>
  )
}
 
export default SignInOption;



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
    margin-top: 50px;
    transition: all 390ms;
    background-color: transparent;


    cursor: pointer;
    :hover{
        transform: scale(1.03);
        background-color: #0077ffd7;
        color: white;

    }

`

const AdminSignUpOption = styled.button`
    height: 70px;
    width: 80%;
    background-color: #0791fb6a;
    border-radius: 50px;
    color: #078dfb;
    font-size: 20px;
    font-weight: 600;
    border: none;
    transition: all 390ms;
    cursor: pointer;
    :hover{
        transform: scale(1.03);
        background-color: transparent;
        border: 2px solid  #007bffce;
        color:  #078dfb;
    }
`

const OptionButtonContainer = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

const Title = styled.h1``

const TitleAndDescriptionContainer = styled.div`
    height: 100px;
    width: 100%;
    text-align: center;
margin-bottom: 40px;
`

const SignUpOptionField = styled.div`
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

