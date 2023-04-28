import React, { useEffect, useRef, useState} from 'react'
import img from "../../Assets/verify.png"

interface Props{}

let currentOTPIndex: number = 0;

const Otp: React.FC<Props> = (props): JSX.Element => {
    const [otp, setOtp] = useState<string[]>(new Array(4).fill(""))
    const [activeOTPIndex, setAtiveOTPIndex] = useState<number>(0)

    const inputRef = useRef<HTMLInputElement>(null)

    const handleOnChange = ({target}: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = target;
        const newOtp: string[] = [...otp]
        newOtp[currentOTPIndex] = value.substring(value.length - 1)

        if (!value) setAtiveOTPIndex(currentOTPIndex - 1)
        else setAtiveOTPIndex(currentOTPIndex + 1)

        setOtp(newOtp)
    }

    const handleOnKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        currentOTPIndex = index
        if(key === "Backspace") setAtiveOTPIndex(currentOTPIndex - 1)
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [activeOTPIndex])

  return (
      <div className='h-screen w-full bg-gray-100 flex justify-center items-center flex-col'>
          
          <div className='mb-4 font-medium text-xl'>Otp Verification</div>
          <div className='pb-4 pt-4 w-96 bg-gray-300 flex-col flex items-center justify-center rounded xsm:w-60' >
              <img src={img} alt="img" className='w-20 mb-4' />
              <div className="">Enter verification code</div>

              <div className='mt-2.5 flex justify-center items-center space-x-2'>
                  {otp.map((_, index) => {
                  return (
                      <React.Fragment key={index}>
                          <input
                              ref={index === activeOTPIndex ? inputRef : null}
                              type='number'
                              className='w-12 h-12 border-2 rounded bg-transparent
                              outline-none text-center font-semibold text-xl border-gray-400
                              focus:border-gray-700 focus:text-gray-700 text-gray-400
                              transition spin-button-none'
                              onChange={ handleOnChange}
                              onKeyDown={(e) => handleOnKeyDown(e, index)}
                              value={otp[index]}
                          />
                          {index === otp.length - 1 ? null : (
                              <span className='w-2 py-0.5 bg-gray-400'></span>
                          )}
                      </React.Fragment>
                  )
              })}
              </div>

              <button className='w-4/5 h-12 bg-blue-700 rounded mt-5 text-white cursor-pointer'>Verify</button>
              <div className=' mt-2 cursor-pointer'>Resend OTP</div>
                  
              </div>
          </div>
  )
}

export default Otp

