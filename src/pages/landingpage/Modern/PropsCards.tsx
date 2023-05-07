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
  background-color: #00244e;
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
  text-decoration: none solid rgb(1, 28, 57);
  text-align: center;
  transition: all 350ms;
  @media screen and (max-width: 700px) {
    width: 130px;
    font-size: 15px;
    margin: 0px;
    margin-top: 20px;
  }

  :hover {
    color: #00244e;
    border: 1px solid #00244e;
    background-color: whitesmoke;
    transform: scale(0.98);
  }
`;

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
@media screen and (max-width: 700px) {
  width: 400px;
  font-size: 13px;
  flex-wrap: wrap;
  display: flex;
  font-weight: 250px;
  /* text-align: center; */
  }
    @media screen and (max-width: 400px) {
  /* font-size: 17px; */
 width: 300px;
  }
`

const Word = styled.div`
  margin-bottom: 30px;
  width: 250px;
  font-size: 25px;
  color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  line-height: 30px;
  vertical-align: baseline;
  font-weight: 400;
  font-style: normal;
  text-decoration: none solid rgb(0, 0, 0);
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    /* font-size: 16px; */
    /* width: 500px; */
    align-items: start;
  }
`;

const Text = styled.div`
  color: rgb(156, 156, 156);
  background-color: rgba(0, 0, 0, 0);
  font-size: 18px;
  line-height: 19.2px;
  letter-spacing: 2px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none solid rgb(156, 156, 156);
  text-align: start;
  margin-bottom: 30px;
  @media screen and (max-width: 700px) {
    /* font-size: 16px; */
    margin-bottom: 10px;
    width: 500px;
    /* align-items: start; */
  }
`;

const Second = styled.div`
  
  height: 500px;
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  @media screen and (max-width: 700px) {
    height: 250px;
    margin-top: 20px;

  }
`;

const First = styled.div`
  /* background-color: blueviolet; */
  /* height: 500px; */
  width: 400px;
  display: flex;

  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    justify-content: center;
   width: 400px;
  /* padding-left: 30px; */
    /* align-items: center; */
    height: 800px;
  }
  
`;

const Wrapper = styled.div`
  /* background-color: aliceblue; */
  color: black;
  height: 550px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 700px) {
    flex-direction: column;
/* height: 800px; */
    /* justify-content: center; */
    /* align-items: center; */
  }
 
`;

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