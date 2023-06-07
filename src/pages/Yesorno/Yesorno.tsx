import React from 'react'
import styled from 'styled-components'


const Yesorno = () => {
  return (
    <div>
   <Container>
      {/* <Wrapper> */}
        <Box1>
        <Write>Please verify if  this is an employee under your company</Write>
            <Name>Name: Esther</Name>
            <Name>Email: estherovuokeraye@gmail.com</Name>
        <But>

        <button className='w-32 h-10 bg-buttonhover text-white flex justify-center items-center font-semibold rounded-3xl hover:bg-buttonhover hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150 m-3'>
          Yes
          </button>
          <button className='w-32 h-10 bg-buttonhover text-white flex justify-center items-center font-semibold rounded-3xl hover:bg-buttonhover hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150 m-3'>
            No
          </button>
        </But>
        </Box1>
      {/* </Wrapper> */}
       
        
     
   </Container>
   </div>
  )
}

export default Yesorno

const Write = styled.div`
color: #05305e;
font-size: 25px;

`
const Name = styled.div``

const But = styled.div`
display: flex;
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* background-color: blue; */
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Box1 = styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
/* width: 7 ; */
height: 400px;
width: 800px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
/* background-color: blue ; */
`
//const Box2 = styled.div``
// const Container = styled.div``