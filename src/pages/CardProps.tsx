import React from 'react'
import styled from 'styled-components'
import {BsThreeDotsVertical} from "react-icons/bs"
import { deactiavteAStaff } from '../utils/Api/ApiCall';
import { useAppSelector } from '../components/global/Store';
import axios from 'axios';

interface IProps{
    img:string;
    name:string;
    title:string;
}

const CardProps:React.FC<IProps> = ({img,name,title}) => {

   const user = useAppSelector((state) => state.currentUser);
  const staff = useAppSelector((state)=> state.currentStaff)
  return (
    <div>
        <Container>
         <Wrapper>
         <Pic>
            {img}
           </Pic>
           <Name>
            {name}
           </Name>
           <Title>
            {title}
           </Title>
           <Icon>
            <BsThreeDotsVertical 
            onClick={()=>{
                 axios.delete(`https://easyhr.onrender.com/api/staff/deactivateStaff/${staff?._id}/${user?._id}`).then((res)=>{
                  console.log(res.data)
                  // window.location.reload()
                })
               
             }}
            />
           </Icon>
         </Wrapper>
        </Container>
    </div>
  )
}

export default CardProps
const Icon = styled.div`
position: absolute;
top: -20%;
left: 120%;
font-size:25px;
color: grey;
cursor: pointer;
`

const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: grey;

`

const Name = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
`

const Pic = styled.div`
 width: 70px;
  height: 70px;
  margin: 3px;
  font-size: 30px;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 50px;
  font-weight: bold;
  color: black;
  background-color: blanchedalmond;
  border: 1px solid black;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
position: relative;
`

const Container = styled.div`
height: 180px;
width: 250px;
display: flex;
margin: 20px;
/* flex-direction: column; */
align-items: center;
justify-content: center;
background-color: white;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`