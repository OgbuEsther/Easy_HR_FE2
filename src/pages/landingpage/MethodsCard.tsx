import React from 'react'
import styled from 'styled-components'
import {GiEagleEmblem} from "react-icons/gi"


interface IProps {
  text:string;
  word:string;
  button:string;
  img:string;
  climg:string;
}

const MethodsCard:React.FC<IProps> = ({text,word,button,img,climg}) => {
  return (
    <div>
      <Container>
        <Wrapper>
        <Icons>
        <One src={img}/>
        <Two src={climg}/>
        {/* <Three>
          <GiEagleEmblem/>
        </Three> */}
        </Icons>
          <Text>
            {text}
          </Text>
          <Word>
            {word}
          </Word>
          <Button>
           {button} 
          </Button>
        </Wrapper>
      </Container>
    </div>
  )
}

export default MethodsCard

const Button = styled.div`
margin-top:40px;
`

const Word = styled.div`
text-align:center;
width:90%;
margin-top:20px;
`

const Text = styled.div`
font-weight:900;
font-size:30px;
margin-top:40px;
`

// const Three = styled.div`
// height:80px;
// background-color:red;

// `

const Two = styled.img`
position:relative;
top:6%;
height:70px;
/* margin-left:1px; */
margin-top:-8px;
`

const One = styled.img`
position:absolute;
height:115px;
`

const Icons = styled.div`
display:flex;
justify-content:center;
align-items:center; 
margin-top:80px;

`


const Wrapper = styled.div`
/* background-color:white; */
color:black;
height:490px;
width:340px;
display:flex;
flex-direction:column;
/* justify-content:center; */
align-items:center; 
`

const Container = styled.div`
/* background-color:red; */
height:470px;
width:350px;
display:flex;
justify-content:center;
align-items:center; 
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
cursor:pointer;
border-radius:5px;
transition:all 350ms smooth;

:hover{
  border:2px solid blue;
  transform: scale(0.98);
}

@media screen and (max-width:500px) {
  width: 300px;
  margin: 10px  ;
}
@media screen and (max-width:768px) {
  /* width: 400px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center; */

  grid-template-columns: repeat(3fr ,3);
}
`