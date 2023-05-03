import React from 'react'
import styled from "styled-components"

const LeavePage = () => {
  return (
    <LeavePageContainer>
       <MainLeavePage>
            <LeaveForm>
                <TitleandSubtitle>
                    <Title>Leave Form</Title>
                    <SubTitle>Apply for a annual leave</SubTitle>
                </TitleandSubtitle>
                <InputField>
                    <Input placeholder='your name' className='your name'/>
                    <Input placeholder='position' className='position'/>
                    <Input placeholder='relive officer' className='relive-office'/>
                    <Textarea placeholder='reasons...'></Textarea>
                    <SubmitButton>
                        <Button>Submit</Button>
                    </SubmitButton>
                </InputField>
            </LeaveForm>
       </MainLeavePage>
    </LeavePageContainer>
  )
}

export default LeavePage;



// Leave form

const Button = styled.button`
height: 36px;
width: 120px;
background-color: #1F337C;
border-radius: 7px;
margin-top: 10px;
color: white;
font-size: 16px;
font-weight: bold;
border: none;
`

const SubmitButton = styled.div`
height: auto;
width: 100%;
`

const Textarea = styled.textarea`
    height: 88px;
    width: 100%;
    border: 2px solid silver;
    margin-top: 20px;
    resize: none;
    padding-left: 10px;
    outline-color: #1F337C;
`

const Input = styled.input`
    height: 44px;
    width: 100%;
    margin-top: 16px;
    border: 2px solid silver;
    padding-left: 10px;
    outline-color: #1F337C;

`

const InputField = styled.form`
    height: auto;
    width: auto;
    padding: 0px 24px;
   
`

const SubTitle = styled.div`
    height: 22px;
    width: auto;
    font-size: 16px;
    font-weight: 500;

`

const Title = styled.div`
    height: 34px;
    width: auto;
    font-size: 24px;
    font-weight: bold;
    
`

const TitleandSubtitle = styled.div`
    height: 72px;
    width: auto;
    margin-left: 88px;

    @media screen and (max-width: 500px) {
        margin-left: 24px;
    }
`
const LeaveForm = styled.form`
    height: auto;
    width: 400px;
    border: 2px solid silver;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-top: 20px;
    padding-bottom: 50px;

    @media screen and (max-width: 500px) {
        width: 300px;
    }
`

// Leave main page
const MainLeavePage = styled.div`
    height: calc(100vh - 50px);
    width: calc(100vw - 220px);
    display: flex;
    justify-content: center;
    align-items: start;
    

    @media screen and (max-width: 900px) {
        width: 100%;
    }

`
// Leave page
const LeavePageContainer = styled.div`
height:100vh;
width: 100vw;
display: flex;
justify-content: flex-end;
align-items: end;
@media screen and (max-width: 900px) {
        width: 100%;
        justify-content: center;
    }
`
