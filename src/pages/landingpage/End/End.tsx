import React from 'react'
import styled from 'styled-components'
import bg from "../../../Assets/bgimg.jpg"
import { NavLink } from 'react-router-dom'

const End = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Text>
                  End-to-End Software <br /> to streamline your HR
                </Text>
                <Word>
                  EasyHR makes it easy to take your human capital management to the next level by <br />
                   automating administrative  HR and providing robust <br /> context rich reporting 
                </Word>
              <NavLink to="/sign-in">
              <Button>
                  Contact Us
                </Button>
              </NavLink>
            </Wrapper>
        </Container>
    </div>
  )
}

export default End

const Button = styled.button`
margin: 20px;
font-size: 20px;
background-color: #00244E;
height: 50px;
font-weight: 300;
color: white;
width: 200px;
cursor: pointer;
outline: none;
border: none;
border-radius: 40px;
line-height: 21px;
font-weight: 400;
text-decoration: none solid rgb(1,28,57);
text-align: center;
transition: all 350ms;

:hover{
  color: #00244E;
  border: 1px solid #00244E;
  background-color: whitesmoke;
  transform: scale(0.98);
}
`

const Word = styled.div`
margin: 20px;
color: rgb(0,0,0);
background-color: rgba(0,0,0,0);
font-size: 16px;
line-height: 24px;
vertical-align: baseline;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: normal;
font-style: normal;
font-weight: 500;
text-decoration: none solid rgb(0,0,0);
text-align: center;

@media screen and (max-width:500px) {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
}
`


const Text = styled.div`
margin: 5px;
color: rgb(1,28,57);
font-size: 40px;
line-height: 54px;
vertical-align: baseline;
letter-spacing: normal;
font-weight: 700;
font-style: normal;
text-decoration: none solid rgb(1,28,57);
text-align: center;

@media screen and (max-width:500px) {
  font-size: 26px;
  line-height: 35px;
  font-weight: 900;
}
`

const Wrapper = styled.div`
background-image:url(${bg});
background-repeat: no-repeat;
background-size: 1200px;
background-position: center;
width: 98%;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width:500px) {
  width: 100%;
  background-image: url(${bg});
  /* background-position: center; */
}
`

const Container = styled.div`
/* background-position: center; */
/* margin-top: 20px; */
height: 400px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #F7F7F7;
/* border-radius: 40px; */

@media screen and (max-width:500px) {
  margin-top: 40px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}
`