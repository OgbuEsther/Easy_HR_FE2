import styled from 'styled-components'
import img from "../../Assets/new.png"
import { MdDashboard } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import { FiPower } from "react-icons/fi";
import { FaBattleNet,FaHornbill } from "react-icons/fa"
import {GiStarSattelites,GiTransportationRings} from "react-icons/gi"
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { logoutstaff } from '../global/ReduxState';

const SideBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Container>
      <Top>
        <Img2 src={img} />
      </Top>

          <Home>
            <Icon2>
            <MdDashboard />
            </Icon2>
            <NavLink
            to="/staffdashboard"
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
            <FaBattleNet />
            </Icon2>
            <NavLink
            to="/staffdashboard/staff-attendance"
            style={({ isActive }) => {
                return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "#2AA7FF" : "#fff",
                };
            }}
            >
                      <Text1>Attendance</Text1>

            </NavLink>
      </Home2>

      <Home2>
            <Icon2>
              <GiStarSattelites/>
            </Icon2>
            <NavLink
            to="/staffdashboard/staffperformance"
            style={({ isActive }) => {
                return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "#2AA7FF" : "#fff",
                };
            }}
            >
                      <Text1>Performance</Text1>

            </NavLink>
          </Home2>

          <Home2>
            <Icon2>
            <FaHornbill />
            </Icon2>
            <NavLink
            to="/staffdashboard/leave-form"
            style={({ isActive }) => {
                return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "#2AA7FF" : "#fff",
                };
            }}
            >
                      <Text1>Leave</Text1>

            </NavLink>
      </Home2>
          <Home2>
            <Icon2>
            <GiTransportationRings />
            </Icon2>
            <NavLink
            to="/staffdashboard/stafftransaction"
            style={({ isActive }) => {
                return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "#2AA7FF" : "#fff",
                };
            }}
            >
            <Text1>Settings</Text1>
            </NavLink>
      </Home2>
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
              dispatch(logoutstaff());
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
              navigate("/staffdashboard");
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
        <Text2>Logout</Text2>
      </Power>
    </Container>
  )
}

export default SideBar


const Text2 = styled.div`
    font-size: 17px;
    cursor: pointer;
    align-items: center;
    color: #fff;
    display: flex;
    margin-left: 15px;
    width: 410px;
    height: 40px;
`
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
  color: #fff;
  margin-left: 15px;
  width: 210px;
  height: 40px;
`
const Home = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: center;
`;


const Power = styled.div`
    display: flex;
    align-items: center;
    margin-top: 80px;
`;

const Icon2 = styled.div`
  color: #fff;
  font-size: 23px;
  cursor: pointer;
`;

const Img2 = styled.img`
  height: 70px;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
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
  /* z-index: 2; */
  @media screen and (max-width: 1024px) {
    display: none;
  }
`