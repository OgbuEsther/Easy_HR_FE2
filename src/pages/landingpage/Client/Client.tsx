import React from 'react'
import styled from 'styled-components'
import img from "../../../Assets/bgimage.jpg"
import {ImQuotesLeft} from "react-icons/im"


const Client = () => {
  return (
    <div>
        <Container>
            <Wrapper>
             <One>
                 <Icon>
                    <ImQuotesLeft/>
                </Icon>
             </One>
             <Two>

             </Two>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Client
const Icon = styled.div`` 

const Two = styled.div`` 


const One = styled.div`` 

const Wrapper = styled.div`
width: 100%;
height: 100%;
background-color: rgb(51, 66, 83,0.6);
display: flex;
/* align-items: center; */
justify-content: center;
`

const Container = styled.div`
background-image: url(${img});
height: 700px;
width: 100%;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`
