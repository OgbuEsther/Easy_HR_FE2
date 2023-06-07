import React from 'react'
import styled from 'styled-components'
import img from "../../../Assets/pic2.jpg"
import mock from "../../../Assets/mockup1.png"


const Easier = () => {
  return (
    <div id="services">
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
          With the use of technology, software, and services to streamline and automate human resources (HR) processes within an organization. Making it easier for employee engagement, performance management, payroll and benefits administration, and compliance management.
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



const Words = styled.div`
margin-top: 30px;
p{
  color: #798593;
  font-size:18px;

  @media screen and (max-width:320px) {
  font-size: 16px;
  line-height: 35px;
  display: flex;
  /* align-items: center; */
  width: 100%;
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
  font-size: 22px;
  /* text-align: center; */
  color: red;
  margin-right: 180px;
}
@media screen and (max-width:375px) {
  font-size: 22px;
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
align-items: center;
justify-content: center;
height: 100%;
/* background-color: brown; */
width: 95%;
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
@media screen and (max-width:500px) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: red;
}

`

const Container = styled.div`
height: 100%;
/* width: auto; */
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
/* margin-top: 40px; */
display: flex;
align-items: center;
justify-content: center;


@media screen and (max-width:500px) {
  display: none;
}


`