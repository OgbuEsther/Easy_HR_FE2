
import styled from "styled-components";
import Charts from "../components/Graph/Charts";
import img from ".././Assets/attends.png"
import img2 from ".././Assets/wave_img.svg"



const ParentComp = () => {

  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <Advert>
              <Right>
                <h2>Hello Godwin!!!!</h2>
                <p>Be reminded that you are to mark your attendance everyday you are at work.</p>
                <Button>Mark Attendance</Button>
              </Right>
              <Left>
                <Img src={img} />
              </Left>
            </Advert>
            <Cards>
              <Hold1>
                <Img2 src={img2} />
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
                  </Down>
        </Wrapper>
      </Container>
    </div>

  )
}

export default ParentComp;
const Img2 = styled.img`
  
`
const Hold1 = styled.div`
  width: 220px;
  height: 110px;
  display: flex;
  background-color: red;
  border-radius: 12px;
`
const Cards = styled.div`
  width: 47%;
  display: flex;
  height: 40px;
  flex-wrap: wrap;
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
  background-color: #7C41F5;
  margin-top: 12px;
`
const Right = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  h2{
    font-weight: 500;
    color: #D69965;
    font-size: 20px;
  }
  p{
    font-size: 15px;
    margin-top: 12px;
    color: #D69965;
  }
`
const Advert = styled.div`
  display: flex;
  padding: 20px;
  height: 200px;
  background-color: #FDEDC9;
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
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

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
