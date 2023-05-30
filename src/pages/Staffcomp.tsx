import styled from "styled-components";
import Charts from "../components/Graph/Charts";
import img from ".././Assets/attends.png"
import img2 from ".././Assets/leave.png"
import img3 from ".././Assets/perform.png"
import img4 from ".././Assets/goal.png"
import img5 from ".././Assets/holiday.png"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {NavLink} from "react-router-dom"



const ParentComp = () => {
  const percentage = 66;

  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <Advert>
              <Right>
                <h2>Hello Godwin!!!!</h2>
                <p>Be reminded that you are to mark your attendance everyday you are at work.</p>
                <NavLink to="/staffdashboard/staff-attendance">
                  <Button>Mark Attendance</Button>
                </NavLink>
              </Right>
              <Left>
                <Img src={img} />
              </Left>
            </Advert>

            <Cards>
              <Hold1>
                <Texthold>
                  <h3>Leave</h3>
                  <p>Apply for a vacation today.</p>
                  <NavLink to="/staffdashboard/leave-form">
                    <button>Apply</button>
                  </NavLink>
                </Texthold>
                <Imagehold>
                  <Img2 src={img2} />
                </Imagehold>
              </Hold1>

              <Hold2>
                <Texthold>
                  <h3>Performance</h3>
                  <p>Rate your performance.</p>
                  <NavLink to="/staffdashboard/staffperformance">
                    <button>Rate</button>
                  </NavLink>
                </Texthold>
                <Imagehold>
                  <Img3 src={img3} />
                </Imagehold>
              </Hold2>

              <Hold3>
                <Texthold>
                  <h3>Goal</h3>
                  <p>View Goals for the month.</p>
                  <NavLink to="/staffdashboard/staffperformance">
                    <button>View</button>
                  </NavLink>
                </Texthold>
                <Imagehold>
                  <Img2 src={img4} />
                </Imagehold>
              </Hold3>

              <Hold1>
                <Texthold>
                  <h3>Holiday</h3>
                  <p>View company's holiday.</p>
                  <button>View</button>
                </Texthold>
                <Imagehold>
                  <Img2 src={img5} />
                </Imagehold>
              </Hold1>
            </Cards>
          </Top>
          {/* <Mobilecard /> */}
          <Down>
            <Piehold>
                <Pee>
                  <Title>Performance Chart</Title>
                      <Charts />
                      </Pee>
            </Piehold>
            <Progress>
              <Firstprog>
                <h2>Leave Statistic</h2>
                <div style={{width: "130px", height: "130px", marginTop: "27px"}}>
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                    pathColor: "#fd625e",
                    trailColor: '#d6d6d6',
                  })}/>;
                </div>
              </Firstprog>

              <Firstprog>
                <h2>Performance Statistic</h2>
                <div style={{width: "130px", height: "130px", marginTop: "27px"}}>
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                    pathColor: "#0168aa",
                    trailColor: '#d6d6d6',
                  })}/>;
                </div>
              </Firstprog>
            </Progress>
          </Down>
        </Wrapper>
      </Container>
    </div>

  )
}

export default ParentComp;
const Firstprog = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    font-weight: 600;
    font-size: 19px;
  }
`
const Progress = styled.div`
  width: 48%;
  display: flex;
  margin-top: 80px;
  background-color: #fff;
  padding: 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 12px;
`
const Img3 = styled.img`
  width: 370px;
`
const Img2 = styled.img`
  width: 320px;
`
const Imagehold = styled.div`
  width: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Texthold = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  h3{
    color: #fff;
    font-weight: 500;
    font-size: 19px;
  }
  p{
    font-size: 12px;
    color: #fff;
  }
  button{
    width: 100px;
    height: 34px;
    background-color: #8ad4eb;
    color: #fff;
    margin-top: 9px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 15px;
  }
`
const Hold3 = styled.div`
  width: 249px;
  height: 130px;
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  background-color: #28383c;
  padding: 12px;
  margin-bottom: 12px;
`
const Hold2 = styled.div`
  width: 249px;
  height: 130px;
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  background-color: #28383c;
  padding: 12px;
  margin-bottom: 12px;
`
const Hold1 = styled.div`
  width: 249px;
  height: 130px;
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fd625e;
  padding: 12px;
  margin-bottom: 12px;
`
const Cards = styled.div`
  width: 47%;
  display: flex;
  height: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Img = styled.img`
  height: 200px;
`
const Left = styled.div`
  width: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Button = styled.button`
  width: 160px;
  height: 38px;
  border-radius: 50px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  background-color: #f2c80f;
  margin-top: 12px;
  transition: all 350ms ease-in-out;
  :hover{
    background-color: #fff;
    color: #f2c80f;
    border: 1px solid #f2c80f;
  }
`
const Right = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  h2{
    font-weight: 500;
    color: #fff;
    font-size: 20px;
  }
  p{
    font-size: 15px;
    margin-top: 12px;
    color: #fff;
  }
`
const Advert = styled.div`
  display: flex;
  padding: 20px;
  height: 200px;
  background-color: #0168aa;
  width: 50%;
  border-radius: 10px;
`
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Pee = styled.div`
    width: 100%;
    margin-top: 15px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      margin-top: 12px;
      margin-bottom: 12px;
    }
`
const Title = styled.div`
    margin-bottom: 10px;
    font-size: 20px;
    text-align: center;
    font-weight: 600;
`
const Piehold = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 12px;

    @media screen and (max-width: 768px) {
      width: 90%;
    }
    @media screen and (max-width: 500px) {
      width: 90%;
      margin-top: 16px;
    }
`
const Down = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    /* background-color: red; */

    @media screen and (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
`

const Wrapper = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  padding-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
@media screen and (max-width: 500px) {
    width: 100%;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    background-color: #e2e2e2;
    margin-top: 100px;
    padding-right: 0px;
    padding-top: 25px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: calc(100vw - 220px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #F5F7FA;
  padding-bottom: 20px;
  @media screen and (max-width: 500px){
    background-color: #00244E;
    display: flex;
    justify-content: center;
    height: 100%;
  }
@media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
@media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;
