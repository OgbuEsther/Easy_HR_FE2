import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { RotatingLines } from 'react-loader-spinner'
import Inputdate from "../Inputdate/Inputdate";
import Adminrate from "../Adminrate";
import RateDetails from "../RateDetails";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { useDispatch } from "react-redux";
import {useForm} from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { mileStone } from "../../components/global/ReduxState";
import Swal from "sweetalert2";
import { getOneAdmin, setMilestones } from "../../utils/Api/ApiCall";
import { useAppSelector } from "../../components/global/Store";


const Transaction = () => {
  const dispatch = useDispatch()
const admin = useAppSelector((state)=> state.currentUser)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

   const Toggle1 = () => {
     setShow1(true)
     setShow2(false)
     setShow3(false)
  }
  const Toggle2 = () => {
    setShow2(!show2)
    setShow1(false)
    setShow3(false)
  }

  const Toggle3 = () => {
    setShow3(!show3)
    setShow2(false)
    setShow1(false)
  }

  const [text, setText] = useState(localStorage.getItem('myTextArea') || '')
  
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText)
  }

  const handleSaveClick = () => {
    localStorage.setItem('myTextArea', text)
  }

  useEffect(() => {
   setTimeout(() => {
      setIsLoading(true)
    },2000)

    const handleStorageChange = () => {
        setText(localStorage.getItem('myTextArea')  || '')
    }
    
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])



  const schema = yup.object({
    mileStone: yup.string().required(),
  }).required()
  
  type formData = yup.InferType<typeof schema>
  
  const{handleSubmit, formState: {errors}, reset, register} = useForm<formData>({
    resolver: yupResolver(schema),
  })


    const posting = useMutation({
      mutationKey: ["milestone"],
      mutationFn: (data: any) => setMilestones(data,admin?._id ),


      onSuccess: (myData) => {
        dispatch(mileStone(myData.data))
        reset()
  
        Swal.fire({
          title: "admin registered successfully",
          html: "redirecting to login",
          timer: 1000,
          timerProgressBar: true,    
        })
  
  },
  onError: (error: any) => {
    Swal.fire({
      title: `leave creation error`,
      text: `${error?.response?.data?.message}`,
      icon: "error",
    });
  }
});

  const Submit = handleSubmit(async (data: any) => {
    console.log("milestone", data)
    posting.mutate(data);
  });

  

  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(admin?._id),
  });

  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
          <Pending onClick={Toggle1}><h3>Set Goals</h3><span>{isLoading ? (1) : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"/>}</span>
          </Pending>

          <Pending onClick={Toggle2}><h3>Rate Staffs</h3><span>{isLoading ? "" : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}</span>
          </Pending>

            <Pending onClick={Toggle3}><h3>Details</h3><span>{isLoading ? "" : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}</span>
          </Pending>
          </Top>
          
          {isLoading ? (
            <Mid>
              {show1 ? (
            <div style={{
              width: "100%"
            }}>
              <Textplace>
            <Texthold onSubmit={Submit}>
              <Textarea 
                {...register("mileStone")}
               placeholder="Set Goals....." value={text} onChange={handleTextChange}/>
                           <span style={{color: "#D8000C"}}>{errors.mileStone && "please input your milestone"}</span>
              <Button type="submit" onClick={handleSaveClick}>Submit</Button>
            </Texthold>
            <Inputhold>
              <Inputdate selectedDate={selectedDate} onDateChange={handleDateChange} />
            </Inputhold>
          </Textplace>

          {
getAdmin?.data?.data?.PerformanceMilestone?.map((el:any)=>(
  <Goals>
  <ol style={{ listStyleType: 'decimal', marginLeft: '30px'}}>
    <li>{el?.mileStone} </li>
  </ol>
</Goals>
))
          }

          {/* <Goals>
            <ol style={{ listStyleType: 'decimal', marginLeft: '30px'}}>
              <li>{text}</li>
            </ol>
          </Goals> */}
            </div>
          ) : null}
            </Mid>
          ) : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}

          {show2 ? (
            <Adminrate/>
          ) : null}

          {show3 ? (
            <RateDetails />
          ) : null}
        </Wrapper>
      </Container>
    </div>
  );
}

export default Transaction;

const Mid = styled.div`
  width: 100%;
  margin-top: 10px;
`
const Goals = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  border: 1px solid lightgray;
  padding: 12px;
`
const Button = styled.button`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #007bff;
  border: none;
  outline: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 7px;
`
const Texthold = styled.form`
  display: flex;
  flex-direction: column;
`
const Inputhold = styled.div`
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-color: #007bff;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    cursor: default;
    display: flex;
    justify-content: space-between;
    height: 43px;
    transition: all 100ms ease 0s;
    box-sizing: border-box;
    outline: 0px !important;
    width: 300px;
    overflow: hidden;
    margin-left: 20px;
`
const Textarea = styled.textarea`
  width: 700px;
  height: 150px;
  border: 1px solid lightgray;
  resize: none;
  padding: 12px;
  border-radius: 10px;
  outline: #007bff;
`
const Textplace = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  align-items: center;
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
