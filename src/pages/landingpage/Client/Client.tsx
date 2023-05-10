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
                <p>
                Payroll has to be done right. If the client has problems with payroll and the provider, it comes right back to us. We know that when they go to Payonline, they're going to be taken care of and everything's done.
                </p>

                <Word>
                <h3>  ~ Mr Peter Oti, Managing Partner</h3>

                  <ul>
                    <li>CodeLab SkillHub</li>
                    <li>31,Haruna Estate,Oregie ,Lagos</li>
                    <li>Solutions</li>
                  </ul>
                </Word>
             </One>
             <Two>
             </Two>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Client

const Word = styled.div`
h3{
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin: 0;
  margin-bottom: 40px;
}

ul li{
  color: #DBE9FA;
  font-size: 18px;
  line-height: 34px;
  font-weight: 700;
  padding-left: 0;
  display: list-item;
  text-align:-webkit-match-parent;
}
`

const Icon = styled.div`
font-size: 56px;
color: rgba(255, 255, 255, 0.1)
` 

const Two = styled.div`
/* background-color:brown; */
height: 300px;
width: 400px;
` 


const One = styled.div`
/* background-color: red; */
height: 600px;
width: 800px;

p{
  font-size: 30px;
  margin:10px 0px 70px;
  line-height: 46px;
  font-weight: 700;
  color: #fff;

}
`


const Wrapper = styled.div`
width: 100%;
height: 100%;
background-color: rgb(51, 66, 83,0.7);
display: flex;
align-items: center;  
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
