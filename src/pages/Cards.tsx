import React from "react";
import styled from "styled-components";
import img from "../Assets/wave_img.svg";
import img2 from "../Assets/wave_img2.svg";
import img3 from "../Assets/wave_img3.svg";
import { useAppSelector } from "../components/global/Store";
import { useQuery } from "@tanstack/react-query";
import { getOneAdmin } from "../utils/Api/ApiCall";

const AdminCard = () => {
  const admin = useAppSelector((state) => state.currentUser);

  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(admin?._id),
  });

  console.log(`trying to get total length of all staff ${getAdmin?.data?.data?.viewUser}`)
  console.log(`trying to get details ${admin?.viewUser}`)

  return (
    <Container>
      <Wrapper>
        <Holder>
          <Card1>
            <Holder1>
              <Total>Total Employees</Total>

              {getAdmin?.data?.data?.viewUser?.map((el: any) => (
                <Num>{el?.length === 0 ? (<p>No Staff Yet</p> ) : (<>{el?.length === 0} </> )} </Num>
                // <p>{el?.yourName} </p>
              ))} 
            </Holder1>
          </Card1>

          <Card2>
            <Holder2>
              <Total>Attendance</Total>
              {/* {getAdmin?.data?.data?.map((el: any) => (
                <Num>
                  {el?.viewUser?.length === 0 ? (
                    <p>No Staff yet</p>
                  ) : (
                    <>{el?.viewUser?.length} </>
                  )}{" "}
                </Num>
              ))} */}
            </Holder2>
          </Card2>

          <Card3>
            <Holder3>
              <Total>Leave Apply</Total>
              <Num>15</Num>
            </Holder3>
          </Card3>
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default AdminCard;

const Holder = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
const Num = styled.div`
  font-size: 42px;
  margin-top: 5px;
  color: white;
`;
const Total = styled.div`
  font-size: 18px;
  color: #fff;
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const Card3 = styled.div`
  height: 120px;
  width: 250px;
  /* background-color:rgb(250, 190,0, 0.9); */
  background-image: url(${img3});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 320px;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 7px;
  }
`;
const Card2 = styled.div`
  height: 120px;
  width: 250px;
  /* background-color:rgb(250, 190,0, 0.9); */
  background-image: url(${img2});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 320px;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 7px;
  }
`;

const Holder3 = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(235, 109, 98, 0.7);
  padding: 15px;
  border-radius: 10px;
`;
const Holder2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(67, 133, 246, 0.4);
  padding: 15px;
  border-radius: 10px;
`;
const Holder1 = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(253, 188, 0, 0.5);
  padding: 15px;
  border-radius: 10px;
`;

const Card1 = styled.div`
  height: 120px;
  width: 250px;
  /* background-color:rgb(250, 190,0, 0.9); */
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 320px;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 7px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
