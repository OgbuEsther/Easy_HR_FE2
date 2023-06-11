
import styled from "styled-components";
import img from "./assets/wave (2).svg";


const App = () => {
  return (
    <div>
      <Container>
        <Main>
          <Image>
            <p>Today Earning</p>
            <h1>$15200</h1>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1140 320">
              <path
                fill="rgba(225,225,225,0.3)"
                fill-opacity="1"
                d="M0,320L34.3,314.7C68.6,309,137,299,206,272C274.3,245,343,203,411,181.3C480,160,549,160,617,181.3C685.7,203,754,245,823,245.3C891.4,245,960,203,1029,165.3C1097.1,128,1166,96,1234,85.3C1302.9,75,1371,85,1406,90.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
              ></path>
            </Svg>
          </Image>
          <Down>+12,6%</Down>
        </Main>
        <Main>
          <Image>
            <p>Today Earning</p>
            <h1>$15200</h1>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1140 320">
              <path
                fill="rgba(225,225,225,0.3)"
                fill-opacity="1"
                d="M0,320L34.3,314.7C68.6,309,137,299,206,272C274.3,245,343,203,411,181.3C480,160,549,160,617,181.3C685.7,203,754,245,823,245.3C891.4,245,960,203,1029,165.3C1097.1,128,1166,96,1234,85.3C1302.9,75,1371,85,1406,90.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
              ></path>
            </Svg>
          </Image>
          <Down>+12,6%</Down>
        </Main>
        <Main>
          <Image>
            <p>Today Earning</p>
            <h1>$15200</h1>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1140 320">
              <path
                fill="rgba(225,225,225,0.3)"
                fill-opacity="1"
                d="M0,320L34.3,314.7C68.6,309,137,299,206,272C274.3,245,343,203,411,181.3C480,160,549,160,617,181.3C685.7,203,754,245,823,245.3C891.4,245,960,203,1029,165.3C1097.1,128,1166,96,1234,85.3C1302.9,75,1371,85,1406,90.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
              ></path>
            </Svg>
          </Image>
          <Down>+12,6%</Down>
        </Main>
      </Container>
    </div>
  );
};

export default App;

const Svg = styled.svg`
  transform: scaleY(-1);
  position: absolute;
`;

const Down = styled.div`
  /* padding: 10px 15px; */
  background-color: white;
  border-radius: 19px;
  width: 80px;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  top: 20px;
  /* right: 200px; */
  /* font-size: 15px; */
  /* font-weight: 600; */
`;
const Image = styled.div`
  p {
    color: white;
    margin: 0;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 22px;
    font-weight: 600;
  }
  h1 {
    margin: 0;
    margin-left: 20px;
    /* margin-bottom: 40px; */
    color: white;
    font-weight: 600;
    font-size: 50px;
  }
  transform: scaleY(1);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Main = styled.div`
  width: 350px;
  height: 200px;
  background-color: #5686d5;
  border-radius: 20px;
  /* position: relative; */
  overflow: hidden;
  margin: 5px;
`;

const Container = styled.div`
  /* height: 100vh; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
  