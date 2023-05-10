import React from 'react'
import styled from 'styled-components'
import img from "../../../Assets/pic2.jpg"
import mock from "../../../Assets/mockup1.png"
import arrow from "../../../Assets/arrow2.png"


const Easier = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <One>
            {/* <Nic src={arrow}/> */}
            <Nice>
            </Nice>
            <Text>
              EasyHr WEB-APP
            </Text>
          </One>
          <Two>
            <Pic src={mock}/>
          </Two>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Easier
const Text = styled.div`
color: #0057B3;
`

const Nice = styled.div`
background-color: #0057B3;
border-radius: 30px;
border: none;
outline: none;
width: 20px;
height: 20px;
margin-bottom: 18px;
`

const Nic = styled.img`
width: 50px;
object-fit: cover;
`
const Pic = styled.img`
height: 800px;
object-fit: cover;
`

const Two = styled.div`
background-color: pink;
width: 600px;
height: 750px;
margin-top: 60px;
`

const One = styled.div`
background-color: red;
width: 600px;
height: 750px;
margin-top: 60px;
display: flex;
/* align-items: center; */
flex-direction: column;
/* justify-content: center; */
`

const Wrapper = styled.div`
display: flex;
/* align-items: center; */
justify-content: center;
height: 830px;
background-color: brown;
width: 1200px;
`

const Container = styled.div`
height: 900px;
/* width: auto; */
background-image: url(${img});
margin-top: 40px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`