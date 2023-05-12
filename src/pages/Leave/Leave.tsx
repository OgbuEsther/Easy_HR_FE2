import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { RotatingLines } from 'react-loader-spinner'
import { IoMdArrowDropdown } from "react-icons/io"
import {AiOutlineClose} from "react-icons/ai"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UseAppDispach, useAppSelector } from '../../components/global/Store'
import { useMutation, useQuery } from '@tanstack/react-query'
import { createLeave, getOneAdmin, getOneStaff } from '../../utils/Api/ApiCall'
import { CreateLeave } from "../../components/global/ReduxState";
import Approved from '../Approved'
import Rejected from '../Rejected'
import AllLeave from '../AllLeave'

const Leave = () => {

  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const Toggle1 = () => {
    setShow1(true)
    setShow2(false)
    setShow3(false)
    setShow4(false)
    setShow5(false)
  }

  const Toggle2 = () => {
    setShow2(!show2)
  }

  const Toggle3 = () => {
    setShow3(!show3)
    setShow1(false)
    setShow4(false)
    setShow5(false)
  }
  const Toggle4 = () => {
    setShow4(!show4)
    setShow3(false)
    setShow1(false)
    setShow5(false)
  }
  const Toggle5 = () => {
    setShow5(!show5)
    setShow4(false)
    setShow3(false)
    setShow1(false)
  }

  const Cancle = () => {
    setShow2(false)
  }
  
  useEffect(() => {
   setTimeout(() => {
      setIsLoading(true)
    },2000)

  }, [])

  const admin = useAppSelector((state) => state.currentUser);
  const navigate = useNavigate()
  const dispatch = UseAppDispach()

  const schema = yup
    .object({
      title: yup.string().required(),
      days: yup.number().required(),
    })
    .required();

  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const posting = useMutation({
    mutationKey: ["create_Leave"],
    // mutationFn: createAdmin,
    mutationFn: (data: any) => createLeave(data, admin?._id),

    onSuccess: (myData) => {
      dispatch(CreateLeave(myData.data));
      Swal.fire({
        title: "leave created  successfully",
        html: "redirecting to dashbaord",
        timer: 1000,
        timerProgressBar: true,

        willClose: () => {
          // navigate("/sign-in-admin");
        },
      });
    },
  });

  const Submit = handleSubmit(async (data: any) => {
    console.log("user", data);
    posting.mutate(data);
    // reset();
  });

  const user = useAppSelector((state) => state.currentUser);
  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(user?._id),
  });
  console.log("this is getAdmin id", user);

  const staff = useAppSelector((state) => state.currentStaff);
  const getStaff = useQuery({
    queryKey: ["singleStaff"],
    queryFn: () => getOneStaff(staff?._id),
  });
  


  return (
    <Container>
      <Wrapper>
        <Top>
          <Pending onClick={Toggle1}><h3>Pending Leave</h3><span>{isLoading ? (1) : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"/>}</span>
          </Pending>

          <Pending onClick={Toggle3}><h3>Approved Leave</h3><span>{isLoading ? "" : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}</span>
          </Pending>

          <Pending onClick={Toggle4}><h3>Rejected Leave</h3><span>{isLoading ? "" : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30" />}</span>
          </Pending>

          <Pending onClick={Toggle5}><h3>All Leave</h3><span>{isLoading ? (1) : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"/>}</span></Pending>
        </Top>
        {show1 ? (
          <Down>
          <Inputhold>
            <Input placeholder='All Employees' />
            <Icon><IoMdArrowDropdown /></Icon>
            </Inputhold>
            
          <Create>
              <Up>
                <First><h6>Leave Type Settings</h6></First>
                <Add onClick={Toggle2}>Add New Leave Type</Add>
              </Up>
              <Secomd><p>Define Custom Leave Types Suitable For Your Organization.</p></Secomd>
              {show2 ? (
                <Leavetype>
                  <Card onSubmit={Submit}>
                    <Lve>
                      <Type><h4>Add Leave Type</h4></Type>
                      <Ico onClick={Cancle}><AiOutlineClose /></Ico>
                    </Lve>
                    <Of><p>Name of the Leave Type</p></Of>
                    <Inputs
                      {...register("title")}
                      type="text"
                      placeholder="e.g maternity leave"
                    />
                    <span>{errors?.title && errors?.title?.message}</span>
                    <br />
                    <Of><p>Number Of Days</p></Of>
                    <Inputs {...register("days")} type="number" placeholder="number of days " />
                    <span>{errors?.days && errors?.days?.message}</span>
                    <Buthold>
                      <Buton type ="submit">Create Leave Type</Buton>
                    </Buthold>
                  </Card>
                </Leavetype>
              ) : null}
        </Create>

          <Mid>
            {isLoading ? (
            <Table>
              <table>
                <tr>
                  <th>Employee Name</th>
                  <th>Leave Period</th>
                  <th>Days</th>
                  <th>Type</th>
                  <th>Applied On</th>
                  <th>Reason</th>
                </tr>
{getAdmin?.data?.data?.staffLeave?.map((el:any)=>(
  <tr>
                  <td>
                  <Circlehold>
                    <Circle>{getStaff?.data?.data?.yourName}</Circle>
                    <Name>{getStaff?.data?.data?.yourName}</Name>
                    </Circlehold>
                  </td>
                  <td>{el?.startDate}</td>
                  <td>{el?.numberOfDays} Day(s)</td>
                  <td>{el?.title}</td>
                  <td>
                    07 May, 2023
                  </td>
                  <td>{el?.reason}</td>
                  <td>
                  <Hold>
                    <Box>Approve</Box>
                  <Box2>Reject</Box2>
                  </Hold>
                </td>
                </tr>
))}
                
                </table>
                <Plan>On the free plan, you can access the last 14 days of data only. Upgrade to the Pro plan to get the historical data.</Plan>
            </Table>
            ) : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"/>}
          </Mid>
          
        </Down>
        ) : null}

        {show3 ? (
          <Approved />
        ) : null}

        {show4 ? (
          <Rejected />
        ) : null}

        {show5 ? (
          <AllLeave />
        ) : null}
      </Wrapper>
    </Container>
  )
}

export default Leave
const Ico = styled.div`
  margin-right: 10px;
  font-size: 17px;
  cursor: pointer;
`
const Buton = styled.button`
  width: 160px;
  height: 40px;
  background-color: blue;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`
const Buthold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 22px;
    margin-bottom: 15px;
`
const Inputs = styled.input`
  width: 87%;
  height: 40px;
  border-radius: 5px;
  outline: none;
  padding-left: 12px;
  margin-top: 7px;
  border: 1px solid lightgray;
  margin-left: 10px;
`
const Of = styled.div`
  p{
    font-size: .95rem;
    font-weight: 500;
    color: rgba(0,0,0,.6705882352941176);
    margin-top: 20px;
    margin-left: 10px;
  }
`
const Type = styled.div`
  h4{
    font-size: 17px;
    font-weight: 500;
    color: #212529;
    margin-left: 10px;
  }
`
const Lve = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  border-bottom: 1px solid lightgray;
  align-items: center;
  justify-content: space-between;
`
const Card = styled.form`
  width: 500px;
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  flex-direction: column;
`
const Leavetype = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 11;
` 
const Secomd = styled.div`
  p{
    font-size: 12px;
    color: grey;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 10px;
  }
`
const Add = styled.div`
  text-decoration: underline;
    cursor: pointer;
    font-size: 14px;
    color: #007bff;
    font-weight: 500;
    text-decoration-color: #007bff;
`
const First = styled.div`
  h6{
    color: #000;
  font-size: 1rem;
  font-weight: 500;
    line-height: 1.2;
  }
`
const Up = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Create = styled.div`
  width: 460px;
  background: #EEEEEE;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 14px;
  border: 1px solid #d3d3d3;
  margin-top: 15px;
`
const Plan = styled.div`
  margin-top: 19px;
  color: grey;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 50px;
`
const Mid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  flex-direction: column;
  align-items: center;
`
const Hold = styled.div`
  display: flex;
`
const Name = styled.div`
    color: #34495e;
    font-size: .9rem;
    margin-left: 5px;
`
const Circlehold = styled.div`
  display: flex;
  align-items: center;
`
const Action = styled.div`
  display: flex;
`;

const Chc = styled.div`
  color: green;
  font-weight: bold;
`;

const Box2 = styled.div`
  color: #dc3545;
  border-color: #dc3545;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .875rem;
  line-height: 1.5;
  width: 90px;
  height: 35px;
  font-weight: 400;
  border-radius: 50px;
  border: 1px solid #dc3545;
  outline-color: 2px solid #dc3545;
  cursor: pointer;
  margin-left: 10px;
`

const Box = styled.div`
  color: #28a745;
  border-color: #28a745;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .875rem;
  line-height: 1.5;
  width: 90px;
  height: 35px;
  font-weight: 400;
  border-radius: 50px;
  border: 1px solid #28a745;
  outline-color: 2px solid #619c6f;
  cursor: pointer;
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  margin: 3px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-weight: 500;
  color: #fff;
  border-radius: 50px;
  background-color: #40baab;

  @media screen and (max-width: 900px) {
    height: 30px;
    width: 30px;
    font-size: 12px;
  }
`;
const Table = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  overflow-x: auto;
  margin-top: 40px;
  flex-direction: column;

  table {
    min-width: 400px;
    max-width: 1440px;
    width: 100%;
  }

  table,
  th,
  tr:nth-child(even) {
    background-color: #fff;
  }

  td,
  th {
    padding: 14px 2px;
    text-align: left;
    border-top: 1px solid #e2e5e8;
    padding-left: 18px;
    padding-right: 18px;
  }

  td {
      color: #34495e;
    font-size: .9rem;
    font-weight: 500;
    }
  

  th {
    border-top: 1px solid #e2e5e8;
    background-color: #fefefe;
    padding: 1rem 0.75rem;
    padding-left: 20px;
    padding-right: 20px;
    color: #383838;
    font-size: 16px;
    font-weight: bold;
  }
`;
const Icon = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
`
const Input = styled.input`
  height: 100%;
  border: none;
  outline: none;
  width: 250px;
  border-right: 1px solid rgb(204, 204, 204);
  color: rgb(26, 26, 26);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
  padding-left: 10px;
`
const Inputhold = styled.div`
  -webkit-box-align: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-color: #007bff;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    cursor: default;
    display: flex;
    justify-content: space-between;
    min-height: 43px;
    position: relative;
    transition: all 100ms ease 0s;
    box-sizing: border-box;
    outline: 0px !important;
    width: 300px;
    overflow: hidden;
`
const Down = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 33px;
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
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

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
`;
