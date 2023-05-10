import React from 'react'
import styled from 'styled-components'
import img1 from "../../../Assets/val.jpg"

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
                    <Pic />
                    <Icon>

                    </Icon>
                </Image>
            </ImageHold>
          </Wrapper>
        </Container>
    </div>
  )
}

export default Expert


const Pic = styled.img``

const Icon = styled.div``

const Image = styled.div``

const ImageHold = styled.div``

const Word = styled.div`
text-align: center;
font-size: 27px;
color:  #001328;
font-weight: 800;
line-height: 1.2;
font-family: inherit;
margin: 0;
`

const Text = styled.div`
font-size: 14px;
margin: 0px 0px 5px;
color: #0F6FD5;
`

const Wrapper = styled.div`
background-color: purple;
width: 90%;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
`

const Container = styled.div`
background-color: brown;
width:100% ;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
margin: 30px 0px;
`
