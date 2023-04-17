import React from 'react'
import styled from 'styled-components'

interface IProps{
  text:string;
  word:string;
  sub:string;
  image:string;
}

const Card:React.FC<IProps> = ({text,word,sub,image}) => {
  return (
    <div>
        <Container>
            <Wrapper>
              <First>
                <Text>
                {text}
                </Text>

                <Word>
                {word}
                </Word>
                <Sub>
                  {sub}
                </Sub>

                <Button>
                  Read More ...
                </Button>
              </First>
              <Second>
                <Image src={image}/>
              </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Card
const Image = styled.img`
width:100%;
height: 100%;
object-fit: contain;
`

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

const Sub = styled.div`
color: rgb(0,0,0);
font-style: normal;
background-color: rgba(0,0,0,0);
font-size: 18px;
line-height: 24px;
word-spacing: 0px;
font-weight: 400;
text-decoration: none solid rgba(0,0,0);
text-align: start;
`

const Word = styled.div`
margin-bottom: 30px;
width: 250px;
font-size: 25px;
color: rgb(0,0,0);
background-color: rgba(0,0,0,0);
line-height: 30px;
vertical-align: baseline;
font-weight: 400;
font-style: normal;
text-decoration: none solid rgb(0,0,0);
text-align: start;
display: flex;
align-items: center;
justify-content: center;
`

const Text = styled.div`
color: rgb(156,156,156);
background-color: rgba(0,0,0,0);
font-size: 18px;
line-height: 19.2px;
letter-spacing: 2px;
font-weight: 500;
text-transform: uppercase;
text-decoration: none solid rgb(156,156,156);
text-align: start;
margin-bottom: 30px;

`

const Second = styled.div`
/* background-color: brown; */
height: 400px;
width: 700px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 40px;
`

const First = styled.div`
/* background-color: blueviolet; */
height: 500px;
width: 600px;
display: flex;
/* align-items: center; */
justify-content: center;
flex-direction: column;

`

const Wrapper = styled.div`
/* background-color: aliceblue; */
color: black;
height: 550px;
width: 95%;
display: flex;
align-items: center;
justify-content: space-around;
`

const Container = styled.div`
/* background-color: blue; */
color: black;
height: 600px;
width: 100%;
margin: 10px;
display: flex;
align-items: center;
justify-content: center;
`