import styled from 'styled-components'
import Admin from "../../Assets/hr_group.jpg"
import SignupForm from '../../components/layout/Form/SignUpForm'
import BackButton from '../../components/Buttons/BackButton'


const SignUp = () => {
  return (
    <div>

<SipupPage>
  <SigupDetailContainer>
<ImageContainer>
     <BackButton path='/sign-up-option'/>
  <Image  src={Admin}/>
</ImageContainer>
<FormContainer>

  <SignupForm />
</FormContainer>
</SigupDetailContainer>

</SipupPage>

    </div>
  )
}

export default SignUp;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`

const FormContainer = styled.div`
  height: auto;
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  padding-top: 50px;
  overflow: hidden;
 

  @media screen and (max-width: 960px){
    justify-content: center;
    width: 100%;
}
`
const ImageContainer = styled.div`
  height: 100%;
  width: 45%;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 960px){ 
    display: none;
  }




  ::before{
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
  }
  
`

const SigupDetailContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
background-color: white;
`

const SipupPage = styled.div`
height: auto;
width:auto;
display: flex;
align-items: center;

`