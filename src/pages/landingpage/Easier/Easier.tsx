import React from 'react'
import styled from 'styled-components'
import img from "../../../Assets/pic2.jpg"
import mock from "../../../Assets/mockup1.png"
import arrow from "../../../Assets/arrow2.png"
import {BsFillPlayFill} from "react-icons/bs"
import {AiFillApple} from "react-icons/ai"
import { Fade } from 'react-awesome-reveal'


const Easier = () => {
  return (
    <div>
       {/* <Fade direction='down'> */}
      <Container>
       <Wrapper>
        {/* <Fade direction='left'> */}
        <One>
            {/* <Nic src={arrow}/> */}
            <Nice>
            </Nice>
            <Text>
              EasyHr WEB-APP
            </Text>
            <Word>
         <h2>
         Making life easier for our all <br /> employees
         </h2>
            </Word>

            <Words>
          <p>
          with the use of technology, software, and services to streamline and automate human resources (HR) processes within an organization. Making it easier for employee engagement, performance management, payroll and benefits administration, and compliance management.
          </p>
          
            </Words>

            {/* <ButtonHold>
              <Button bcc='#0F6FD5'>
                <Icon>
                  <BsFillPlayFill/>
                </Icon>
                Google Play
              </Button>
              <Button bcc="#EE3234">
                <Icon>
                  <AiFillApple/>
                </Icon>
                Play Store
              </Button>
            </ButtonHold> */}
          </One>
        {/* </Fade> */}
        {/* <Fade direction='right'> */}
        <Two>
            <Pic src={mock}/>
          </Two>
        {/* </Fade> */}
        </Wrapper>
      </Container>
       {/* </Fade> */}
    </div>
  )
}

export default Easier
const Icon = styled.div`
margin: 5px;
`

const Button = styled.div<{bcc:string}>`
display: flex;
align-items: center;
justify-content: center;
color: white;
width: 180px;
height: 50px;
background-color: ${(props)=>props.bcc};
outline: none;
border: none;
border-radius: 30px;
font-weight: 600;
cursor: pointer;
transition: all 350ms;
margin: 10px;

:hover{
  background-color: black;
  transform: scale(0.98);
}

@media screen and (max-width:320px) {
  width: 250px;
  height: 60px;
}
@media screen and (max-width:320px) {
  width: 250px;
  height: 60px;
}
`

const ButtonHold = styled.div`
display: flex;
flex-wrap: wrap;
margin-top:30px ;

@media screen and (max-width:320px) {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

@media screen and (max-width:375px) {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
`

const Words = styled.div`
margin-top: 30px;
p{
  color: #798593;
  font-size:18px;

  @media screen and (max-width:320px) {
  font-size: 18px;
  line-height: 35px;
  display: flex;
  align-items: center;
  width: 320px;
  /* background-color: red; */
  margin: 0px 0px 50px;
}

@media screen and (max-width:375px) {
  font-size: 20px;
  width: 350px;
  line-height: 35px;
}

}
`

const Word = styled.div`
margin-top: 5px;
h2{
  color: black;
font-weight: 800;
font-size: 27px;

@media screen and (max-width:320px) {
  font-size: 21px;
}
@media screen and (max-width:375px) {
  font-size: 24px;
}
}


`

const Text = styled.div`
color: #0057B3;
font-weight:500;
font-size: 15px;
margin: 0px 0px 5px;
`

const Nice = styled.div`
background-color: #0057B3;
border-radius: 30px;
border: none;
outline: none;
width: 20px;
height: 20px;
margin-bottom: 18px;

@media screen and (max-width:320px) {
  width: 30px;
  height: 30px;
  /* background-color: red; */
}
`

const Nic = styled.img`
width: 50px;
object-fit: cover;
`
const Pic = styled.img`
height: 700px;
object-fit: cover;

@media screen and (max-width:320px) {
  height: 800px;
}
`

const Two = styled.div`
/* background-color: pink; */
width: 600px;
height: 750px;
margin-top: 60px;

@media screen and (max-width:768px) {
  display: none;
}

`

const One = styled.div`
/* background-color: red; */
width: 600px;
height: 600px;
margin-top: 60px;
display: flex;
/* align-items: center; */
flex-direction: column;
justify-content: center;

@media screen and (max-width:320px) {
  width: 600px;
  display: flex;
}

@media screen and (max-width:768px) {
  margin-right: 800px;
  height: 400px;
  margin-top: 10px;
}
`

const Wrapper = styled.div`
display: flex;
/* align-items: center; */
justify-content: center;
height: 830px;
/* background-color: brown; */
width: 1200px;
flex-wrap: wrap;

@media screen and (max-width:320px) {
  margin-left: 5px;
}
@media screen and (max-width:375px) {
  margin-left: 10px;
}
@media screen and (max-width:375px) {
  margin-left: 10px;
}
@media screen and (max-width:768px) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  /* background-color: red; */
}

`

const Container = styled.div`
height: 800px;
/* width: auto; */
background-image: url(${img});
margin-top: 40px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;


`