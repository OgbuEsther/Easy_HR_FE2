// import React, { useEffect, useState } from 'react'
// import styled from "styled-components";
// import {AiOutlineReload} from 'react-icons/ai'



// const Otp = () => {

//     const [counter, setCounter] = useState(10)
//     const [getCode, setGetCode] = useState(true)

//     const ShowDisableGetCodeFuntion = () =>{
//         setGetCode(false)
//         if(getCode===true){
//             alert("New OTP code has been sent")
//         }else{
//             return;
//         }
//     }

//     const CountDownFunction = ()=>{
//         let timer = setTimeout(()=>{
//             if(counter<=1){
//                 setCounter(10)
//                 setGetCode(true)
//             }else{
//                 setCounter(counter-1)
//             }
//            },1000)
//            return ()=> clearTimeout(timer)
//     }

//     useEffect(()=>{
//         CountDownFunction()
//       },[counter])

    


//   return (
//     <OtpPageContainer>
//        <OtpForm>
//             <TextArea>
//                 <Title>Enter otp</Title>
//                 <Description>Enter the OTP sent to you for verification</Description>
//             </TextArea>
//             <OtpInputField>
               
//                 <OtpInput placeholder='Enter OTP'/>
//                 <GetOtpAndContinueButton>
//                  <GetOtpHold onClick={ShowDisableGetCodeFuntion}>
//                  {
//                     getCode?  <GetOtp>Get new code</GetOtp>:
//                     <GetOtpDisable>Get new code (in {`${counter}`} seconds)</GetOtpDisable>
//                    }
//                  </GetOtpHold>
//                     <Button>
//                         Continue
//                     </Button>
//                 </GetOtpAndContinueButton>
//             </OtpInputField>
//        </OtpForm>
//     </OtpPageContainer>
//   )
// }

// export default Otp;



// // OTP input field Area

// const GetOtpHold = styled.div`
//     height: auto;
//     width: auto;
//     cursor: pointer;
   
// `

// const GetOtpDisable = styled.div`
//      font-size: 16px;
//     font-weight: 600;
//     color: #80808090;
//     cursor: not-allowed;
// `

// const Button = styled.button`
// height: 40px;
// width: 130px;
// border: none;
// background-color: #0a72e9;
// border-radius: 5px;
// color: white;
// font-size: 16px;
// font-weight: 500;
// `

// const GetOtp = styled.div`
//     font-size: 18px;
//     font-weight: 600;
//     color: #0172f7;
// `

// const Label = styled.label`
 
//   font-weight: 600;
// font-size: 13px;
// margin-bottom: 5px;
// margin-left: 10px;
// color: #0172f7;
// `

// const OtpInput = styled.input`
// height: 50px;
// width: auto;
// height: 50px;
//     width: auto;
//     border-radius: 5px;
//     border: 1px solid #0174f78d;
//     outline: lightblue;
//     padding-left: 10px;
// margin-bottom: 10px;
// text-align: center;
// `
// const GetOtpAndContinueButton = styled.div`
// height: 50px;
// width: auto;
// background-color: white;
// display: flex;
// justify-content: space-between;
// align-items: center;
// padding-left:10px;
// padding-right: 10px;
// `

// const OtpInputField = styled.div`
//     height: 200px;
//     width: 500px;
//     /* background-color: gray; */
//     display: flex;
//     flex-direction: column;

//     @media screen and (max-width: 510px) {
//         width: 300px
//     }
    
// `
// // OTP Text Area
// const TextArea = styled.div`
// height: 150px;
// width: 98%;
// text-align: center;
// /* background-color: blue; */
// `
// const Title = styled.div`
// font-size: 40px;
// font-weight: 700;
// text-transform: uppercase;
// margin-bottom: 10px;
// `
// const Description = styled.div`
// font-size: 18px;
// font-weight: 600;
// `

// // OTP Form Area
// const OtpForm = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// height: auto;
// width: auto;
// `


// // OTP page container Area
// const OtpPageContainer = styled.div`
//     height: 100vh;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     /* background-color: blue; */
// `


import React, {useState} from 'react'
import img from "../../Assets/verify.png"
import OtpInput from "react-otp-input"

const Otp = () => {
    const [otp, setOtp] = useState("")
  return (
      <div className='h-screen w-full bg-gray-100 flex justify-center items-center flex-col'>
          
          <div className='mb-4 font-medium text-xl'>Otp Verification</div>
          <div className='h-80 w-96 bg-gray-300 flex-col flex items-center justify-center' >
              <img src={img} alt="img" className='w-20 mb-4' />
              <div className="">Enter verification code</div>

              <div className='w-full h-b bg-red-600'>
                  <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={4}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props}  className='mr-3 ml-3 p-3'/>}
                  />
              </div>
          </div>
      </div>
  )
}

export default Otp