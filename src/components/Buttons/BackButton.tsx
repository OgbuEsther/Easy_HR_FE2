import styled from "styled-components"
import {BsArrowLeftCircle} from "react-icons/bs"
import { NavLink } from "react-router-dom";

interface Ibutton {
  path: string
}

const BackButton:React.FC<Ibutton>  = ({path}) => {
  return (
    <MainButton to={path}>
      <BsArrowLeftCircle/>
    </MainButton>
  )
}

export default BackButton;




const MainButton = styled(NavLink)`
height: auto;
width: auto;
position: absolute;
left: 20px;
top: 20px;
font-size: xx-large;
color: white;
border: none;

@media screen and (max-width: 960px) {
  color: #00b7fb;
}
`;
