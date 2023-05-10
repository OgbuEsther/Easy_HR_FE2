import React from 'react'
import styled from 'styled-components'
import img1 from "../../../Assets/val.jpg"
import img2 from "../../../Assets/slider1.jpg"
import img3 from "../../../Assets/esther.jpg"
import img4 from "../../../Assets/shazam.jpg"
import img5 from "../../../Assets/spider.jpg"
import {SiApplemusic} from "react-icons/si"

const Expert = () => {
  return (
    <div>
        <Container>
          <Wrapper>
          <Text>PEOPLE BEHIND THE SUCCESS</Text>
            <Word>
             <h2>   Meet Our Expert People <br /> of EasyHR</h2>
            </Word>
            <ImageHold>
                <Image>
                    <Pic src={img2}/>
                    <Icon>
                        <SiApplemusic/>
                    </Icon>
                    <Bio>
                        <h3>Esther Ogbu</h3>
                    </Bio>
                    <Bio1>
                       <p> CEO</p>
                    </Bio1>
                </Image>

                <Image>
                    <Pic src={img4}/>
                    <Icon>
                        <SiApplemusic/>
                    </Icon>
                    <Bio>
                        <h3>Godwin Okowli</h3>
                    </Bio>
                    <Bio1>
                       <p> CTO</p>
                    </Bio1>
                </Image>

                <Image>
                    <Pic src={img5}/>
                    <Icon>
                        <SiApplemusic/>
                    </Icon>
                    <Bio>
                        <h3>Joshua </h3>
                    </Bio>
                    <Bio1>
                       <p>Lead Strategist</p>
                    </Bio1>
                </Image>

                <Image>
                    <Pic src={img3}/>
                    <Icon>
                        <SiApplemusic/>
                    </Icon>
                    <Bio>
                        <h3>Esther Ovoke</h3>
                    </Bio>
                    <Bio1>
                       <p> Lead HR Personnel</p>
                    </Bio1>
                </Image>

                <Image>
                    <Pic src={img1}/>
                    <Icon>
                        <SiApplemusic/>
                    </Icon>
                    <Bio>
                        <h3>Valerian Pedro</h3>
                    </Bio>
                    <Bio1>
                       <p> Lead FrontEnd Engineer</p>
                    </Bio1>
                </Image>
            </ImageHold>
          </Wrapper>
        </Container>
    </div>
  )
}

export default Expert


const Pic = styled.img`
width: 250px;
height: 250px;
border-radius: 100%;
object-fit: cover;
/* background-color: yellowgreen; */
outline: none;
border: none;
cursor: pointer;
/* transition: all 300ms; */
position: relative;

:hover{
    backdrop-filter: blur(0.93);
    /* transform: scale(0.98); */
}
`

const Bio1 = styled.div`
font-size: 16px;
color: #798593;
font-weight: 600;
`

const Bio = styled.div`
font-size: 20px;
color: #001328;
font-weight: 800;
margin-top: 5px;

`


const Icon = styled.div`
position: absolute;
font-size: 25px;
margin-top: 180px;
margin-left: 180px;
height: 60px;
width: 60px;
background-color: white;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

:hover{
    background-color: #1271D5;
}
`

const Image = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: 40px;
`

const ImageHold = styled.div`
width: 100%;
/* background-color: red; */
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
grid-template-columns: 1fr 3fr;


`

const Word = styled.div`
text-align: center;
font-size: 27px;
color:  #001328;
font-weight: 800;
line-height: 1.2;
font-family: inherit;
margin: 0;

@media screen and (max-width:320px) {
    font-size: 25px;
    text-align: center;
}
@media screen and (max-width:768px) {
    font-size: 30px;
    text-align: center;
}
`

const Text = styled.div`
font-size: 15px;
font-weight: 500;
margin: 0px 0px 5px;
color: #0F6FD5;
`

const Wrapper = styled.div`
/* background-color: purple; */
width: 100%;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
`

const Container = styled.div`
/* background-color: brown; */
width:100% ;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
margin: 50px 0px;
`
