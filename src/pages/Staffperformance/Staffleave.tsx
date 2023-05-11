import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";
import Inputdate from "../Inputdate/Inputdate";

const Staffleave = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = React.useState("")
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
    

  useEffect(() => {
   setTimeout(() => {
      setIsLoading(true)
    },2000)
  }, [])


  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
          <Pending><h3>Apply for Leave</h3><span>{isLoading ? "" : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"/>}</span>
          </Pending>

          <Pending><h3>Leave Stats</h3><span>{isLoading ? "" : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}</span>
          </Pending>
          </Top>
          
          {isLoading ? (
            <Mid>
            <div style={{
              width: "100%"
            }}>
                <Leave>
                <h3>Fill the fields below to request Leave.</h3>
                    <Selectholder>
                        <h4>Leave Policy</h4>
                        <Select onChange={(e) => {
						setCategory(e.target.value);
                          }}>
                            <option value='Leave'>Annual</option> 
                            <option value='Leave'>Sick</option>  
                        </Select>
                        </Selectholder>

                    <Selectholder2>
                        <h4>*Start Date</h4>
                        <Inputhold>
                           <Inputdate selectedDate={selectedDate} onDateChange={handleDateChange} />
                         </Inputhold>
                    </Selectholder2> 

                    <Selectholder3>
                        <h4>*Resumption Date</h4>
                        <Inputhold>
                           <Inputdate selectedDate={selectedDate} onDateChange={handleDateChange} />
                         </Inputhold>
                    </Selectholder3>

                    <Selectholder3>
                        <h4>*Reason</h4>
                        <Textarea />
                    </Selectholder3>
                                  
                    <Apply>Apply</Apply>
                </Leave>             
            </div>
            </Mid>
          ) : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}
        </Wrapper>
      </Container>
    </div>
  );
}

 

export default Staffleave;
const Apply = styled.div`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: blue;
    color: white;
    border: none;
    margin-top: 15px;
    cursor: pointer;
`
const Textarea = styled.textarea`
    width: 100%;
    height: 120px;
    resize: none;
    border: 1px solid #ced4da;
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    padding: 13px;
    outline: none;
`
const Inputhold = styled.div`
    width: 100%;
    height: 40px;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    cursor: default;
    display: flex;
    border: 1px solid #ced4da;
    justify-content: space-between;
    transition: all 100ms ease 0s;
    box-sizing: border-box;
    outline: 0px !important;
    overflow: hidden;
    margin-top: 4px;
`
const Select = styled.select`
    width: 100%;
    height: 40px;
    align-items: center;
    padding-left: 10px;
    display: flex;
    font-size: .8rem;
    font-weight: 400;
    margin-right: 15px;
    margin-top: 4px;
    margin-bottom: 15px;
    line-height: 1.5;
    border: none;
    outline: none;
    /* outline-color: #4dccff; */
    color: #495057;
    background-color: #fff;
    display: flex;
    border: 1px solid #ced4da;
    border-radius: 5px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    cursor: pointer;
    option{
        font-size: 17px;
    }
`
const Selectholder3 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
`
const Selectholder2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`
const Selectholder = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 35px;
`
const Leave = styled.div`
    width: 85%;
    display: flex;
    background: hsla(0,0%,76.9%,.25);
    color: #4a5568;
    padding: 16px;
    border-radius: 5px;
    margin-top: 15px;
    border: 1px solid #d3d3d3;
    flex-direction: column;
    h3{
        font-weight: 700;
    }
`

const Mid = styled.div`
  width: 100%;
  margin-top: 10px;
`
const Pending = styled.div`
  display: flex;
  margin: 18px;
  cursor: pointer;
  h3{
    font-weight: 500;
  font-size: 19px;
  color: #6c757d;
  }
  span{
    margin-left: 7px;
    font-weight: 500;
  font-size: 19px;
  color: #6c757d;
  }
`
const Top = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid lightgray;
`
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15px;
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

const Container = styled.div`
  width: calc(100vw - 220px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  overflow: hidden;
  margin-top: 20px;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`
