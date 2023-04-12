import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import logos from "../../Assets/easyhr.jpeg"
import {Link} from "react-scroll"  

const Header = () => {
  const [scroll, setScroll] = useState<Boolean>(false);

  const[show,setshow] = React.useState(false)

  const click =()=>{
    setshow(!show)
  }

  const removeshow =()=>{
    setshow(false)
  }

  const changeHeaderColor = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeHeaderColor);
  

  return (
    <>
      {scroll ? (
        <Container bd="rgba(99, 99, 99, 0.5) 0px 2px 10px 0px" bg="#fff">
          <Wrapper>

            <LogoHold>
              <img src={logos} alt="Product Image" />
            </LogoHold>
           
            <NavWrapper>
              <Nav 
              smooth={true} duration={300}
               to="her">
                Home
              </Nav>
              <Nav 
              smooth={true} duration={300}
               to="team">
                Connect
              </Nav>
              <Nav
               smooth={true} duration={300}
               to="accep">
                Plan
              </Nav>
              <Nav 
              smooth={true} duration={300}
               to="source">
                PayMents
              </Nav>
            </NavWrapper>
            <SignDiv>

              <NavLink to="/optionsignin">
              <Button1>
                  Log In
                </Button1>
              </NavLink>
              <NavLink to="/optionsignup">
                <Button1>
                  Sign Up
                </Button1>
              </NavLink>
            </SignDiv>
          </Wrapper>
        </Container>
      ) : (
        <Container bd="" bg="#fff">
          <Wrapper>

            <LogoHold>
              <img src={logos} alt="" />
            </LogoHold>
            <NavWrapper>
              <Nav 
              smooth={true} duration={300}
               to="her">
                Home
              </Nav>
              <Nav 
              smooth={true} duration={300}
               to="team">
                Connect
              </Nav>
              <Nav
               smooth={true} duration={300}
               to="accep">
                Plan
              </Nav>
              <Nav 
              smooth={true} duration={300}
               to="source">
                PayMents
              </Nav>
            </NavWrapper>

            <SignDiv>
              <NavLink to="/optionsignin">
              <Button1>
                Log In
                </Button1>
              </NavLink>
              <NavLink to="/optionsignup">
              <Button1>
                  Sign Up
                </Button1>
              </NavLink>
            </SignDiv>
          </Wrapper>


          <Menu onClick={click}>
            {
              show ? (
                <span>
                  X
                </span>
              ) : (
                <Icons>
                  <BiMenuAltRight/>
                </Icons>
              )
            }
          </Menu>

          {
            show ? (
              <HambeggerMenu>
                <Buggers>
                  <Nav  onClick={removeshow} to="her"> 
                    Home
                   </Nav>
                  <Nav  onClick={removeshow} to="team">
                    Connect 
                  </Nav>
                  <Nav  onClick={removeshow} to="accep">
                    Plan
                  </Nav>
                  <Nav onClick={removeshow}  to="">
                    PayMent
                  </Nav>

                  <MediaButtonWrapper>
                    <NavLink to="" style={{textDecoration:"none"}}>
                      <Button>
                        Log In
                      </Button>
                    </NavLink>
                    <NavLink to="" style={{textDecoration:"none"}}>
                      <Button>
                        Sign Up
                      </Button>
                    </NavLink>
                  </MediaButtonWrapper>
                </Buggers>
              </HambeggerMenu>
            ):null
          }
        </Container>
      )}
    </>
  );
};

export default Header;
const Button1 = styled.button`
  width: 130px;
  height: 40px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  color: #031e3b;
  margin-right: 20px;
  background-color: #fff;
  border: 1px solid #031e3b;

  :hover {
    scale: 0.97;
    cursor: pointer;
    transition: all 350ms;
    background-color: #063971;
    border: 1px solid white;
    color: #fff;
  }
  @media screen and (max-width: 500px) {
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 10px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    align-self: flex-start;
    margin-left: 20px;
  }
`

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 150px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MediaButtonWrapper = styled.div`
flex-wrap: wrap;
width: 100%;
display: flex;

@media screen and (max-width:500px) {
  margin-top: 80px;
}
`

const Button = styled.button`
width: 130px;
height: 40px;
border: none;
border-radius: 30px;
font-size: 16px;
font-weight: bold;
color: #fff;
margin-right: 20px;
background-color:#377dff;

:hover{
  scale: 0.97;
  cursor: pointer;
  transform: all 350ms;
  background-color: #377dff;
  border: 1px solid #377dff;
  color: #fff;
}


@media screen and (max-width:500px) {
  align-self: flex-start;
  margin-left: 20px;
  margin-top: 10px;
  margin: 10px;
}

@media screen and (max-width:500px) {
  margin-top: 10px;
  align-self: flex-start;
  margin-left: 20px;
}
`

const Nav = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  color: black;
  cursor: pointer;
  background-image: linear-gradient(
    transparent 0%,
    transparent 10%,
    black 90%,
    black 100%
  );
  transition: all 360ms;
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 0 100%;
  width: 70%;



  :hover {
    border-bottom: 1px solid black;
    background-size: 100% 10%;
  }
    @media screen and (max-width: 500px) {
    margin-left: 20px;
    margin-top: 20px;
    color: rgb(0, 0, 0, 0.6);

    text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  color: #031e3b;
  cursor: pointer;
  background-image: linear-gradient(
    transparent 0%,
    transparent 10%,
    #031e3b 90%,
    #031e3b 100%
  );
  transition: all 360ms;
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 0 100%;
  width: 70%;
  }

  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-top: 20px;
    color: rgb(0, 0, 0, 0.6);
  }
  
`;

const Buggers = styled.div`
background-color: white;
width: 50%;
height: 100vh;
`

const HambeggerMenu = styled.div`
display: none;

@media screen and (max-width: 500px) {
 display: flex;
 position: absolute;
 /* bottom:-70%; */
 margin-top: -26px;
 width: 90%;
 backdrop-filter: blur(5px);
 left: 0;
 height: 100%;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
 flex-direction: column;
}
@media screen and (max-width: 768px) {
 display: flex;
 position: absolute;
 backdrop-filter: blur(5px);
 top: 91px;
 width: 100%;
 left: 0;
 height: 100vh;
 flex-direction: column;
}
`

const Icons = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: black;
font-size: 40px;
margin-top:5px;
`

const Menu = styled.div`
display: none;
border-radius: 60%;
border: 1px solid black;


span{
  font-weight: bold;
  font-size: 27px;
  color: black;
}

:hover{
  outline: 1px solid #377dff;
}

@media screen and (max-width:500px) {
  display: block;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5px;
  margin-left: -50px;
  cursor: pointer;
}

@media screen and (max-width:768px) {
 display:block;
 width: 50px;
 height: 50px;
 display: flex;
 justify-content: center;
 cursor: pointer;
}
`

const Container = styled.div<{ bd: string; bg: string }>`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  z-index: 1234;
  position: fixed;
  background-color: ${(props) => props.bg};
  box-shadow: ${(props) => props.bd};
  align-items: center;
  /* font-family: Montserrat; */
  transition: all 350ms ease-in-out; ;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
`;
const Wrapper = styled.div`
  width: 92%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoHold = styled.div`
  font-weight: 900;
  font-size: 18px;
  width: 150px;
  height: 100px;
  margin-top: 15px;

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

const SignDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 150px;

  @media screen and (max-width: 500px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


