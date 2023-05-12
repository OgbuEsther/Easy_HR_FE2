import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { RotatingLines } from 'react-loader-spinner'
import {IoMdArrowDropdown} from "react-icons/io"
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../components/global/Store'
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { useMutation } from "@tanstack/react-query";

import { adminScore } from '../utils/Api/ApiCall' 
import Swal from 'sweetalert2'
import { adminScoreRate } from '../components/global/ReduxState'

const Adminrate = () => {

     const [isLoading, setIsLoading] = useState(false)

     useEffect(() => {
   setTimeout(() => {
      setIsLoading(true)
    },2000)

  }, [])

  const dispatch = useDispatch()
  const admin = useAppSelector((state)=> state.currentUser)
  const rate = useAppSelector((state) => state.ratings)

  const schema = yup.object({
    adminScore: yup.number().required(),
  }).required()
  
  type formData = yup.InferType<typeof schema>
  
  const{handleSubmit, formState: {errors}, reset, register} = useForm<formData>({
    resolver: yupResolver(schema),
  })


    const posting = useMutation({
      mutationKey: ["adminRatings"],
      mutationFn: (data: any) => adminScore(data,rate?._id ),


      onSuccess: (myData) => {
        dispatch(adminScoreRate(myData.data))
        reset()
  
        Swal.fire({
          title: "rated staff successfully",
          html: "redirecting to dashboard",
          timer: 1000,
          timerProgressBar: true,    
        })
  
  },
  onError: (error: any) => {
    Swal.fire({
      title: `rate creation error`,
      text: `${error?.response?.data?.message}`,
      icon: "error",
    });
  }
});

  const Submit = handleSubmit(async (data: any) => {
    console.log("milestone", data)
    posting.mutate(data);
  });



  return (
      <Container>
          <Wrapper>
              <Top>
                  <Pending><h3>Very Poor</h3><Box></Box> = <h3>1 - 25</h3> </Pending>
                <Pending><h3>Poor</h3><Box2></Box2> = <h3>26 - 50</h3> </Pending>
                <Pending><h3>Good</h3><Box3></Box3> = <h3>51 - 75</h3> </Pending>
                <Pending><h3>Very Good</h3><Box4></Box4> = <h3>76 - 100</h3> </Pending>
              </Top>

              <Mid>
            {isLoading ? (
            <Table onSubmit={Submit}>
              <table>
                <tr>
                  <th>Milestone</th>
                  
                  <th>Staff Ratings</th>
                  <th>Admin Ratings</th>
                </tr>

                <tr>
                  <td>
                  <Circlehold>
                    <Circle>O</Circle>
                    <Name>Okwoli Godwin</Name>
                    </Circlehold>
                  </td>
                  
                    <td>
                         <Rate>40</Rate>
                  </td>
                    <td>
                    <Input {...register("adminScore")}
                        type="number"            
                    />
                    <span style={{color: "#D8000C"}}>{errors.adminScore && "please input your ratings"}</span>
                    </td>
                    <td>
                     <Button type="submit">Submit</Button>
                  </td>
                              </tr>
                              {/* <tr>
                  <td>
                  <Circlehold>
                    <Circle>O</Circle>
                    <Name>Okwoli Godwin</Name>
                    </Circlehold>
                  </td>
                  
                    <td>
                          <Rate>40</Rate>
                  </td>
                    <td>
                        <Input
                        type="number"            
                    />
                    </td>
                    <td>
                     <Button>Submit</Button>
                  </td>
                              </tr> */}
                              
                    
                </table>
            </Table>
            ) : <RotatingLines  visible={true}
            strokeColor="#007bff"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"/>}
          </Mid>
          </Wrapper>
    </Container>
  )
}

export default Adminrate
const Rate = styled.div`
    font-size: 17px;
`
const Button = styled.button`
    width: 120px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
`
const Input = styled.input`
    height: 30px;
    padding-left: 10px;
    width: 110px;
    border: 1px solid lightgray;
    outline-color: lightblue;
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
const Table = styled.form`
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
const Mid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  flex-direction: column;
  align-items: center;
`
const Box4 = styled.div`
    width: 25px;
    height: 25px;
    background-color: green;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 3px;
`
const Box3 = styled.div`
    width: 25px;
    height: 25px;
    background-color: blue;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 3px;
`
const Box2 = styled.div`
    width: 25px;
    height: 25px;
    background-color: yellow;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 3px;
`

const Box = styled.div`
    width: 25px;
    height: 25px;
    background-color: red;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 3px;
`

const Pending = styled.div`
  display: flex;
  margin: 18px;
  cursor: pointer;
  h3{
    font-weight: 500;
  font-size: 16px;
  color: #6c757d;
  margin-left: 5px;
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
  /* padding-top: 13px; */
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
    width: 100%;
    display: flex;
`