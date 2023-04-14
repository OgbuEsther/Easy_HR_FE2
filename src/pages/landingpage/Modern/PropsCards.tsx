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
height: 83%;
object-fit: cover;
`

const Button = styled.button`
width: 120px;
height: 50px;
margin-top: 20px;
`

const Sub = styled.div`
`

const Word = styled.div`
margin-bottom: 30px;
width: 380px;
`

const Text = styled.div`
color: grey;
font-size: 25px;
margin-bottom: 30px;
`

const Second = styled.div`
/* background-color: brown; */
height: 500px;
width: 700px;
display: flex;
align-items: center;
justify-content: center;
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