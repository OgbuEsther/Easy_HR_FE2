import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";
import Inputdate from "../Inputdate/Inputdate";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ApplyForLeave } from "../../components/global/ReduxState";
import Swal from "sweetalert2";
import { UseAppDispach, useAppSelector } from "../../components/global/Store";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { applyForLeave, getOneAdmin } from "../../utils/Api/ApiCall";

const Staffleave = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = React.useState("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, []);

  const dispatch = UseAppDispach();
  const navigate = useNavigate();

  const staff = useAppSelector((state) => state.currentStaff);
  const admin = useAppSelector((state) => state.currentUser);

  const schema = yup
    .object({
      title: yup.string().required(),
      startDate: yup.string().required(),

      numberOfDays: yup.number().required(),
      reason: yup.string().required(),
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
    mutationKey: ["apply4leave"],
    // mutationFn: createAdmin,
    mutationFn: (data: any) => applyForLeave(data, staff?._id , admin?._id),

    onSuccess: (myData) => {
      dispatch(ApplyForLeave(myData.data));
      Swal.fire({
        title: "you just applied for leave",
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
    console.log("apply for leave", data);
    posting.mutate(data);
    // reset();
  });

  const user = useAppSelector((state) => state.currentUser);
  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(user?._id),
  });
  

  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <Pending>
              <h3>Apply for Leave</h3>
              <span>
                {isLoading ? (
                  ""
                ) : (
                  <RotatingLines
                    visible={true}
                    strokeColor="#007bff"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="30"
                  />
                )}
              </span>
            </Pending>

            <Pending>
              <h3>Leave Stats</h3>
              <span>
                {isLoading ? (
                  ""
                ) : (
                  <RotatingLines
                    visible={true}
                    strokeColor="#007bff"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="30"
                  />
                )}
              </span>
            </Pending>
          </Top>

          {isLoading ? (
            <Mid>
              <div
                style={{
                  width: "100%",
                }}
              >
                <Leave onSubmit={Submit}>
                  <h3>Fill the fields below to request Leave.</h3>
                  <Selectholder>
                    <h4>Leave Policy</h4>
                    <Select {...register("title")}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    >
                      {getAdmin?.data?.data?.adminLeave?.map((el: any) => (
                        <option value={el?.title} key={el?._id}>{el?.title}</option>
                      ))}
                    </Select>
                    <span>{errors?.title && errors?.title?.message}</span>
                  </Selectholder>

                  <Selectholder2>
                    <h4>*Start Date</h4>
                    <Inputhold>
                    <Input {...register("startDate")} placeholder='startDate' className='relive-office'/>
                      <Inputdate 
                        selectedDate={selectedDate}
                        onDateChange={handleDateChange}
                      />
                        <span>{errors?.startDate && errors?.startDate?.message}</span>
                    </Inputhold>
                  </Selectholder2>
                 

                  <Selectholder3>
                    <h4>*enter number of days </h4>
                    <Inputhold>
                      <Input
                       {...register("numberOfDays")} placeholder='numberOfDays'
                       type="number"
                      />
                    </Inputhold>
                    <span>{errors?.numberOfDays && errors?.numberOfDays?.message}</span>
                  </Selectholder3>

                  <Selectholder3>
                    <h4>*Reason</h4>
                        <Inputhold2>
                            <Input3 {...register("reason")} placeholder='reasons....'  />           
                        </Inputhold2>
                  </Selectholder3>
                  <span>{errors?.reason && errors?.reason?.message}</span>
                  <Apply type = "submit">Apply</Apply>
                </Leave>
              </div>
            </Mid>
          ) : (
            <RotatingLines
              visible={true}
              strokeColor="#007bff"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
            />
          )}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Staffleave;
const Input3 = styled.input`
    width: 100%;
    height: 100%;
    border: 1px solid #ced4da;
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    padding-left: 10px;
    outline: none;
    display: flex;
    align-items: flex-start;
    /* background-color: red; */
    ::placeholder{
        margin-bottom: 80px;
    }
`

const Input = styled.input`
    padding-left: 10px;
    width: 100%;
    height: 100%;
    outline: none;
`
const Apply = styled.button`
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
`;

const Inputhold2 = styled.div`
  width: 100%;
  height: 100px;
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
`;

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
`;
const Select = styled.select`

  width: 100%;
  height: 40px;
  align-items: center;
  padding-left: 10px;
  display: flex;
  font-size: 0.8rem;
  font-weight: 400;
  margin-right: 15px;
  margin-top: 4px;
  margin-bottom: 15px;
  line-height: 1.5;
  border: none;
  outline-color: #4dccff;
  color: #495057;
  background-color: #fff;
  display: flex;
  border: 1px solid #ced4da;
  border-radius: 5px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  option {
    font-size: 17px;
  }
`;


const Selectholder3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;
const Selectholder2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const Selectholder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;
const Leave = styled.form`
  width: 85%;
  display: flex;
  background: hsla(0, 0%, 76.9%, 0.25);
  color: #4a5568;
  padding: 16px;
  border-radius: 5px;
  margin-top: 15px;
  border: 1px solid #d3d3d3;
  flex-direction: column;
  h3 {
    font-weight: 700;
  }
`;

const Mid = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const Pending = styled.div`
  display: flex;
  margin: 18px;
  cursor: pointer;
  h3 {
    font-weight: 500;
    font-size: 19px;
    color: #6c757d;
  }
  span {
    margin-left: 7px;
    font-weight: 500;
    font-size: 19px;
    color: #6c757d;
  }
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;
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
