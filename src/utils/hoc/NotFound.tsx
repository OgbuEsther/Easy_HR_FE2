import React from 'react'
import styled from 'styled-components'
import pic from "../../Assets/404.jpeg"

const NotFound = () => {
  return (
 <Container>
  <One>
    <img src={pic} alt="" />
  </One>
  <Two>
   <Big>
    Oops!,
    <br/>
    <Not>nothing <span>here...</span ></Not>
   
   </Big>
   <Tiny>oh, we can't seem to find the page you're looking for.
    <br/>Try going back to previous page .
   </Tiny>
   <Button>Go Back</Button>
  </Two>
  
 </Container>
  )
}

export default NotFound

const Container = styled.div`
width: 100%;
height: 100vh;
/* background-color: red; */
display: flex;
`
const One = styled.div`
width: 50%;
/* height: 100%; */
img{
  width: 100%;
  height: 100%
}
`
const Two = styled.div`
width: 50%;
/* background-color: blue; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Big = styled.div`
font-size: 60px;

font-weight: bold;
`
const Not = styled.div`
color: blue;
span{
  color: black;
}
`
const Tiny = styled.div`
font-weight: bold;
color: lightgrey;
margin-top: 20px;
`
const Button = styled.button`
width: 100px;
height: 40px;
background-color: blue;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
border-radius: 30px;
color: white;
margin-top: 20px;
margin-right: 300px;
border: none;
outline: none;
cursor: pointer;
`