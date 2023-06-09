import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/new.png"
import { NavLink, useNavigate } from 'react-router-dom';
import { FiPower } from "react-icons/fi";
import { FaArtstation } from "react-icons/fa";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs"
import { CgPerformance } from "react-icons/cg"
import { RiMoneyDollarCircleFill } from "react-icons/ri"
import {GiStarSattelites} from "react-icons/gi"
import {DiFirefox} from "react-icons/di"
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { logoutAdmin } from '../global/ReduxState';

const SideBar = () => {
    const [show, setShow] = React.useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()

  const Toggle = () => {
    setShow(!show);
  };

  return (
    <Container>
      <Top>
        <Img src={img} />
      </Top>

      <Home>
        <Icon2>
          <DiFirefox />
        </Icon2>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#fff",
            };
          }}
        >
          <Text1>Dashboard</Text1>
        </NavLink>
      </Home>

      <Home2>
        <Icon2>
          <BsFillPersonFill />
        </Icon2>
        <NavLink
          to="/dashboard/staffs"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#fff",
            };
          }}
        >
          <Text1>Staffs</Text1>
        </NavLink>
      </Home2>

      <Home2>
        <Icon2>
          <RiMoneyDollarCircleFill />
        </Icon2>

        <Text3 onClick={Toggle}>Financials</Text3>
      </Home2>
      {show ? (
        <Staffs>
          <NavLink to="/dashboard/payroll" style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#fff" : "#fff",
            };
          }}>
            <p>PayRoll</p>
          </NavLink>
        </Staffs>
      ) : null}
      
      <Home2>
        <Icon2>
          <GiStarSattelites />
        </Icon2>
        <NavLink
          to="/dashboard/admin-attendance"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text3>Attendance</Text3>
        </NavLink>
      </Home2>

      <Home2>
        <Icon2>
          <CgPerformance />
        </Icon2>
        <NavLink
          to="/dashboard/performance"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text3>Performance</Text3>
        </NavLink>
      </Home2>
      <Home3>
        <Icon2>
          <FaArtstation />
        </Icon2>
        <NavLink
          to="/dashboard/leave"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text3>Manage Leave</Text3>
        </NavLink>
      </Home3>

      <Home3>
        <Icon2>
          <AiFillCodeSandboxCircle />
        </Icon2>
        <NavLink
          to="/dashboard/settings"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text3>Settings</Text3>
        </NavLink>
      </Home3>

      <Power  onClick={() => {
        

        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: false,
        });

        swalWithBootstrapButtons
          .fire({
            title: "Are you sure you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, logout!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              dispatch(logoutAdmin());
              navigate("/");
              swalWithBootstrapButtons.fire(
                "logout successful!",
                "logout successful.",
                "success"
                //   navigate("/optionsignin")
              );
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              navigate("/dashboard");
              swalWithBootstrapButtons.fire(
                "Cancelled",
                "still on dashboard :)",
                "error"
              );
            }
          });
      }}>
        <Icon2>
          <FiPower />
        </Icon2>
        <Text>Logout</Text>
      </Power>
    </Container>
  )
}

export default SideBar
const Home3 = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  align-items: center;
`

const Text = styled.div`
  font-size: 17px;
  cursor: pointer;
  align-items: center;
  color: #fff;
  display: flex;
  margin-left: 17px;
  width: 120px;
  height: 40px
`;

const Power = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
`;

const Staffs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    margin-left: 40px;
  }
`;

const Text3 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  align-items: center;
  color: #fff;
  display: flex;
  margin-left: 15px;
  width: 410px;
  height: 40px;
`;

const Home2 = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  align-items: center;
`;

const Text1 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  align-items: center;
  display: flex;
  margin-left: 15px;
  width: 210px;
  height: 40px;
`

const Icon2 = styled.div`
  color: #fff;
  font-size: 23px;
  cursor: pointer;
`;

const Home = styled.div`
width: 100%;
  display: flex;
  margin-top: 25px;
  align-items: center;
`;

const Img = styled.img`
  height: 100px;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  /* margin-top: 15px; */
`;
const Container = styled.div`
  width: 220px;
  height: 100vh;
  position: fixed;
  background-color: #0168aa;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  overflow: hidden;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  z-index: 4;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`