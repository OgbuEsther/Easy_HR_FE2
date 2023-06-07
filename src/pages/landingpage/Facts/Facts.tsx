import React from 'react'
import styled from 'styled-components'
import img from "../Assets/videoplay.png"
import dot from "../Assets/dots.svg"
import image from "../../../Assets/image.png"

const Last = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <One>
                  <Vid src={image}/>
                  {/* <Pic src={dot}/> */}
                </One>
                <Two>
                  <Wrd>
                   <span> Cool Facts</span> about this app
                  </Wrd>
                  <Text>
                  Although its inception was not long ago, EastHR has grown to <br /> become a major player in our mobile transfer service market with <br /> the main aim of making work easy and streamline for all.
                  </Text>
              <ButtonHold>
              <Button>
                  
                  </Button>
                  {/* <Button>
  
                  </Button> */}
                 
              </ButtonHold>
                </Two>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Last
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

:hover{
  color: #00244E;
  border: 1px solid #00244E;
  background-color: whitesmoke;
}
`
const ButtonHold = styled.div`
display: flex;
`

const Pic = styled.img``

const Vid = styled.img`
width: 130%;
height: 130%;
object-fit: cover;
`

const Text = styled.div`
color: rgb(106.105,114);
background-color: rgba(0,0,0,0);
font-size: 16px;
line-height: 26px;
letter-spacing: normal;
font-weight: 400;
font-style: normal;
text-decoration: none solid rgb(106,105,114);
text-align: left;
`

const Wrd = styled.div`
  color: rgb(46,46,46);
  background-color: rgba(0,0,0,0);
  font-size: 25px;
  line-height: 42px;
  font-weight: 500;
  text-align: left;
  text-decoration: none solid rgb(46,46,46);
  margin-bottom: 30px;

  span{
  color: rgb(46,46,46);
  background-color: rgba(0,0,0,0);
  font-size: 32px;
  line-height: 42px;
  vertical-align: baseline;
  letter-spacing: normal;
  font-weight: 700;
  text-decoration: none solid rgb(46,46,46);
  text-align: left;
}
`

const Two = styled.div`
/* background-color: white; */
height: 400px;
width: 43%;
display: flex;
align-items: flex-start;
/* justify-content: center; */
flex-direction: column;

`


const One = styled.div`
/* background-color: brown; */
height: 400px;
width: 52%;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
background-color: white;
width: 98%;
height: 520px;
display: flex;
align-items: center;
justify-content: space-evenly;
`

const Container = styled.div`
/* background-color: grey; */
height: 600px;
width: 100%;
display: flex;
justify-content: center;
margin-top: 30px;
align-items: center;
background-color: #F7F7F7;

@media screen and (max-width:500px) {
  display: none;
}
`
