import React from 'react'
import styled from 'styled-components'
import {MdOutlineManageHistory} from "react-icons/md"

interface Iprops{
    image:string;
    text:string;
    writeup:string;
}

const PlanProps:React.FC<Iprops> = ({text,image,writeup}) => {
  return (
    <div>
        <Container>
          <One>
            {image}
            </One>
            <Two>
                <Text>
                {text}
                </Text>
                <Writeup>
                    {writeup}
                </Writeup>
            </Two>
        </Container>
    </div>
  )
  }

export default PlanProps
const Button = styled.div`

`

const Writeup = styled.div`
width: 700px;
line-height: 30px;
letter-spacing: 2px;
margin-top: 20px;
font-weight: bold;
color: grey;
`

const Text = styled.div`
font-weight: bold;
font-size: 20px;
`

const Two = styled.div`
/* margin-left: 90px; */
width: 800px;
/* background-color: brown; */
margin-bottom: 30px;
`

const Img = styled.div`
`

const One = styled.div`
font-size: 80px;
width:200px;
/* background-color: palegreen; */
display: flex;
justify-content: center;
margin-bottom: 120px;
color:#dc3545;
`

const Container = styled.div`
height: 250px;
width: 1000px;
/* background-color: red; */
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
`