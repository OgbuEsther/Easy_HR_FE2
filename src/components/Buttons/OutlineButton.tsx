import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { OutlineButtonData } from '../../types/AllInterfaces'

const OutlineButton: React.FC<OutlineButtonData> = ({color, border, top, left, fontSize, positioning}) => {
  return (
    <div>
       <NavLink to="/" style={{textDecoration:"none", color:"white", 
      
    }}>
        <BacKToDashBoardIconHold color={color} border={border}
        left={left}
        top={top}
        fontSize={fontSize}
        positioning={positioning}
        >
       <BsArrowLeft />
    </BacKToDashBoardIconHold>
       </NavLink>
    </div>
  )
}

export default OutlineButton

const BacKToDashBoardIconHold = styled.div<OutlineButtonData>`


    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: ${({border})=>border};

    position: ${({positioning})=>positioning};
    top:${({top})=>top};
    left: ${({left})=>left};
    height: 18px;
    width: 18px;
    font-size: ${({fontSize})=>fontSize};
    color: ${({color})=>color};
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 390ms;
    
    :hover{
      background-color: #f5f5dc56;
    }

    
`
