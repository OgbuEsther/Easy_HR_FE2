import React from 'react'
import styled from 'styled-components'
import { string } from 'yup';

interface IProps{
  icons:any;
  top:string;
  middle:string;
  bottom:string;
  icon:any;
 bcg:string
}

const DashBoardCardProps:React.FC<IProps> = ({icons,top,middle,bottom,icon,bcg}) => {
  return (
    <div>
        <Container bcg={bcg}>
         <Top>
          <Icon>
            {/* <FaJediOrder/> */}
            {icons}
          </Icon>
          {top}
         </Top>
         
         <Middle>
         {middle}
         </Middle>
      
         <Bottom>
         {bottom}
          <Icons>
           {icon}
          </Icons>
         </Bottom>
        </Container>
    </div>
  )
}

export default DashBoardCardProps
const Icons = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 5px;
margin-right: 5px;
margin-left: 5px;
`

const Bottom = styled.div`
display: flex;
align-items: center;
/* background-color: yellowgreen; */
color: white;
height: 40px;
justify-content: flex-end;
`

const Middle = styled.div`
font-size: 40px;
color: white;
/* background-color: brown; */
height: 90px;
padding-left: 7px;
border-bottom: 1px solid white;
display: flex;
align-items: center;
`

const Icon = styled.div`
margin: 5px;
display: flex;
justify-content: center;
align-items: center;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
height: 50px;
color: white;
border-bottom: 1px solid white;
/* background-color: red; */
font-size: 18px;
font-weight: 400;
`

const Container = styled.div<{bcg:string}>`
/* height: 140px; */
width: 250px;
background-color: ${({bcg})=> bcg};
display: flex;
/* align-items: center; */
/* justify-content: center; */
flex-direction: column;
border-radius: 5px;
margin: 5px;

:hover{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  cursor: pointer;
}
`