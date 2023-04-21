import React from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import img from ".././Assets/savio.jpg";
import { AiFillPlusCircle, AiOutlineClose } from "react-icons/ai";

interface data {
  earn: string;
  id: number;
}
interface data2 {
  earn: string;
  id: number;
}

const Payroll = () => {
  const [show, setShow] = React.useState(false);
  const [shows, setShows] = React.useState(false);
  const [inputs, setinputs] = React.useState(false);
  const [earnvalue, setEarnvalue] = React.useState("");
  const [data, setData] = React.useState<data[]>([]);

  const [shows2, setShows2] = React.useState(false);
  const [inputs2, setinputs2] = React.useState(false);
  const [earnvalue2, setEarnvalue2] = React.useState("");
  const [data2, setData2] = React.useState<data2[]>([]);

  const Toggles = () => {
    setShows(true);
  };
  const Toggles2 = () => {
    setShows2(true);
  };

  let idData: number = data.length + 1;
  const addNewTask = () => {
    // sorting algoritm
    // const sortinfo = (x: any) => {
    //   return (a: any, b: any) => {
    //     if (a[x] < b[x]) {
    //       return a[x];
    //     } else if (a[x] > b[x]) {
    //       return -1;
    //     }
    //     return 0;
    //   };
    // };

    setData((prev) => [
      ...prev,
      {
        earn: earnvalue,
        id: idData,
      },
    ]);
  };

  let idData2: number = data2.length + 1;
  const addNewTask2 = () => {
    // sorting algoritm
    // const sortinfo = (x: any) => {
    //   return (a: any, b: any) => {
    //     if (a[x] < b[x]) {
    //       return a[x];
    //     } else if (a[x] > b[x]) {
    //       return -1;
    //     }
    //     return 0;
    //   };
    // };

    setData2((prev2) => [
      ...prev2,
      {
        earn: earnvalue2,
        id: idData2,
      },
    ]);
  };

  const Toggle = () => {
    setShow(!show);
  };

  const Closes = () => {
    setShow(false);
  };

  const Editing = () => {
    setinputs(true);
  };

  const Editing2 = () => {
    setinputs2(true);
  };

  const Remove = () => {
    setinputs(false);
  };

  const Remove2 = () => {
    setinputs2(false);
  };

  //api consumption 
  

  return (
    <Container>
      <Wrapper>
        <Head>
          <Inputhold>
            <Search>
              <CiSearch />
            </Search>
            <Input placeholder="Search people" />
          </Inputhold>
        </Head>

        <Table>
          <Lists>
            <Name>Full Name</Name>
            <Gross>Gross pay</Gross>
            <Taxes>Est. Employee Taxes</Taxes>
            <Netpay>Pension</Netpay>
            <Payment>Est. Net pay</Payment>
            <Payment>Housing</Payment>
            <Status></Status>
          </Lists>
        </Table>

        <Table2>
          <Lists>
            <Name2>
              <Circlehold>
                <Circle>
                  <Img src={img} />
                </Circle>
                <Id>Okwoli Godwin</Id>
              </Circlehold>
            </Name2>
            <Gross2>$3,125.00</Gross2>
            <Taxes2>$574.74</Taxes2>
            <Netpay2>$1,949.00</Netpay2>
            <Payment2>$2,649.00</Payment2>
            <Payment2>$2,649.00</Payment2>
            <Status2>
              <Hold onClick={Toggle}>Pay</Hold>
            </Status2>
          </Lists>
        </Table2>
      </Wrapper>
      {show ? (
        <Edit>
          <Box>
            <Header>
              <Imagehold>
                <Img2 src={img} />
              </Imagehold>
              <Nameshold>
                <h4>Okwoli Godwin</h4>
                <p>Full Time Employee</p>
                <p>Codelab ID: 1</p>
              </Nameshold>
              <Net>
                <p>Net Pay</p>
                <h4>$1,949.26</h4>
              </Net>
            </Header>

            <Earnings>
              <Wrap>
                <Up>
                  <Earning>Earnings</Earning>
                  <Amount>
                    <p>Amount</p>
                  </Amount>
                </Up>
                <Earnhold>
                  <Up3>
                    <Earning2>Regular Earnings</Earning2>
                    <Pays placeholder="NGN" />
                  </Up3>

                  {data.map((data) => (
                    <Up3>
                      <Earning2>{data.earn}</Earning2>
                      <Pays placeholder="NGN" />
                    </Up3>
                  ))}

                  {inputs ? (
                    <Up2>
                      <Addinput
                        placeholder="Add earning"
                        onChange={(e) => {
                          setEarnvalue(e.target.value);
                        }}
                      />
                      <Canchold>
                        <Canc onClick={Remove}>Cancel</Canc>
                        <Hi></Hi>
                        {earnvalue !== "" ? (
                          <Ad
                            onClickCapture={addNewTask}
                            bg="white"
                            onClick={Remove}
                          >
                            Add
                          </Ad>
                        ) : (
                          <Ad disabled={true} bg="silver">
                            Add
                          </Ad>
                        )}
                      </Canchold>
                    </Up2>
                  ) : null}
                </Earnhold>
                <Add>
                  <Icon>
                    <AiFillPlusCircle />
                  </Icon>
                  <Adds onClick={Editing}>Add Earnings</Adds>
                </Add>
              </Wrap>

              <Wrap2>
                <Up>
                  <Earning>Deductions</Earning>
                  <Amount>
                    <p>Amount</p>
                  </Amount>
                </Up>
                <Earnhold>
                  <Up3>
                    <Earning2>Regular Earnings</Earning2>
                    <Pays placeholder="NGN" />
                  </Up3>

                  {data2.map((data2) => (
                    <Up3>
                      <Earning2>{data2.earn}</Earning2>
                      <Pays placeholder="NGN" />
                    </Up3>
                  ))}

                  {inputs2 ? (
                    <Up2>
                      <Addinput
                        placeholder="Add earning"
                        onChange={(e) => {
                          setEarnvalue2(e.target.value);
                        }}
                      />
                      <Canchold>
                        <Canc onClick={Remove}>Cancel</Canc>
                        <Hi></Hi>
                        {earnvalue2 !== "" ? (
                          <Ad
                            onClickCapture={addNewTask2}
                            bg="white"
                            onClick={Remove2}
                          >
                            Add
                          </Ad>
                        ) : (
                          <Ad disabled={true} bg="silver">
                            Add
                          </Ad>
                        )}
                      </Canchold>
                    </Up2>
                  ) : null}
                </Earnhold>
                <Add>
                  <Icon>
                    <AiFillPlusCircle />
                  </Icon>
                  <Adds onClick={Editing2}>Add Earnings</Adds>
                </Add>
              </Wrap2>
            </Earnings>
            <Confirmhold>
              <Confirm>Confirm Payment</Confirm>
            </Confirmhold>

            <Close onClick={Closes}>
              <AiOutlineClose />
            </Close>
          </Box>
        </Edit>
      ) : null}
    </Container>
  );
};

export default Payroll;
const Confirm = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #1f337c;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
`;
const Confirmhold = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
`;

const Close = styled.div`
  position: absolute;
  color: #000;
  height: 30px;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;
const Canchold = styled.div`
  display: flex;
  align-items: center;
`;
const Hi = styled.div`
  height: 15px;
  background-color: #8d9ba7;
  width: 1px;
  margin-left: 10px;
`;
const Ad = styled.button<{ bg: string }>`
  width: 60px;
  height: 30px;
  color: #0081aa;
  border: none;
  outline: none;
  font-size: 13px;
  background-color: ${(props) => props.bg};
  margin-left: 10px;
  cursor: pointer;
`;
const Canc = styled.div`
  color: #0081aa;
  font-size: 14px;
  cursor: pointer;
`;
const Addinput2 = styled.input`
  width: 210px;
  height: 20px;
  border: 1px solid #d6dee9;
  outline: none;
  padding-left: 10px;
  border-radius: 3px;
`;

const Addinput = styled.input`
  width: 210px;
  height: 20px;
  border: 1px solid #d6dee9;
  outline: none;
  padding-left: 10px;
  border-radius: 3px;
`;
const Adds = styled.div`
  color: #0081aa;
  margin-left: 10px;
  font-size: 15px;
`;
const Icon = styled.div`
  color: #0081aa;
`;
const Add = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  cursor: pointer;
`;
const Pays = styled.input`
  width: 70px;
  height: 20px;
  border: 1px solid #d6dee9;
  outline: none;
  padding-left: 10px;
`;
const Earnhold = styled.div`
  width: 100%;
  flex-direction: column;
  border-top: 2px solid #d6dee9;
  align-items: center;
  border-bottom: 2px solid #d6dee9;
  margin-top: 25px;
  display: flex;
  color: #1c2534;
`;
const Amount = styled.div`
  p {
    font-size: 12px;
    font-weight: 500;
    color: #8d9ba7;
  }
`;
const Earning2 = styled.div`
  font-size: 13px;
`;
const Earning = styled.div`
  font-size: 17px;
`;
const Up2 = styled.div`
  width: 100%;
  display: flex;
  height: 35px;
  border-bottom: 1px solid #d6dee9;
  margin-bottom: 5px;
  justify-content: space-between;
  align-items: center;
`;
const Up3 = styled.div`
  width: 100%;
  display: flex;
  height: 35px;
  border-bottom: 1px solid #d6dee9;
  justify-content: space-between;
  align-items: center;
`;
const Up = styled.div`
  width: 100%;
  display: flex;
  height: 35px;
  justify-content: space-between;
  align-items: center;
`;
const Wrap2 = styled.div`
  width: 95%;
  height: 80%;
  /* background-color: red; */
  overflow-y: scroll;
  flex-direction: column;
  /* justify-content: center; */
  display: flex;
  margin-top: 10px;
`;
const Wrap = styled.div`
  width: 95%;
  height: 80%;
  /* background-color: red; */
  overflow-y: scroll;
  flex-direction: column;
  /* justify-content: center; */
  display: flex;
  margin-top: 30px;
`;
const Earnings = styled.div`
  height: 60vh;
  /* background-color: red; */
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 10px; */
  /* background-color: red; */
`;
const Net = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  p {
    font-size: 12px;
    font-weight: 600;
    color: #9e9e9e;
    margin: 0;
  }
  h4 {
    margin: 0;
  }
`;
const Nameshold = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  h4 {
    margin: 0;
  }
  p {
    font-size: 12px;
    font-weight: 600;
    color: #9e9e9e;
    margin: 0;
  }
`;
const Img2 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Imagehold = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-left: 25px;
  overflow: hidden;
`;
const Header = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #c5c5c5;
  display: flex;
  align-items: center;
`;
const Box = styled.div`
  width: 700px;
  height: 570px;
  background-color: white;
  border-radius: 5px;
  position: relative;
`;
const Edit = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
const Hold = styled.div`
  width: 90px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a7f3d0;
  color: #064e3b;
  border-radius: 50px;
  cursor: pointer;
`;
const Id = styled.div`
  display: flex;
  margin-left: 10px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Circle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circlehold = styled.div`
  display: flex;
  align-items: center;
`;

const Status = styled.div`
  width: 120px;
  height: 100%;
  align-items: center;
  display: flex;
  font-size: 13px;
  font-weight: 500;
  justify-content: center;
`;
const Status2 = styled.div`
  width: 120px;
  height: 100%;
  align-items: center;
  display: flex;
  font-size: 13px;
  justify-content: center;
`;
const Payment2 = styled.div`
  width: 180px;
  height: 100%;
  align-items: center;
  display: flex;
  font-size: 13px;
  justify-content: center;
`;
const Payment = styled.div`
  width: 180px;
  height: 100%;
  align-items: center;
  display: flex;
  font-size: 13px;
  font-weight: 500;
  justify-content: center;
`;
const Netpay2 = styled.div`
  width: 120px;
  height: 100%;
  align-items: center;
  display: flex;
  font-size: 13px;
  justify-content: center;
`;

const Netpay = styled.div`
  width: 120px;
  height: 100%;
  align-items: center;
  display: flex;
  font-size: 13px;
  font-weight: 500;
  justify-content: center;
`;
const Taxes2 = styled.div`
  width: 180px;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 13px;
`;

const Taxes = styled.div`
  width: 180px;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 13px;
  font-weight: 500;
`;
const Gross2 = styled.div`
  width: 120px;
  height: 100%;
  align-items: center;
  display: flex;
  font-size: 13px;
`;

const Gross = styled.div`
  width: 120px;
  height: 100%;
  align-items: center;
  display: flex;
  font-size: 13px;
  font-weight: 500;
`;
const Name2 = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 13px;
`;

const Name = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
`;

const Lists = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
`;
const Table2 = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #c5c5c5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Table = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #c5c5c5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f1f7f9;
`;

const Input = styled.input`
  height: 100%;
  flex: 1;
  border: none;
  outline: none;
`;

const Search = styled.div`
  height: 100%;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
`;

const Inputhold = styled.div`
  width: 250px;
  height: 35px;
  border-bottom: 4px;
  border: 1px solid #dbdbdb;
  margin-left: 20px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Head = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #d3d3d3;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 93%;
  display: flex;
  border: 1px solid #d6dee9;
  margin-top: 110px;
  flex-direction: column;
`;

const Container = styled.div`
  width: calc(100vw - 220px);
  display: flex;
  justify-content: center;
`;
