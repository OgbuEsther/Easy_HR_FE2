import styled from 'styled-components'
import Admin from "../../Assets/hr_group.jpg"
import SigninForm from '../../components/layout/Form/SignInForm';
import BackButton from '../../components/Buttons/BackButton';


const SignIn = () => {
  return (
    <div>

<SipInPage>
<SigInDetailContainer>
<ImageContainer>

<BackButton path='/sign-in-option'/>

  <Image  src={Admin}/>

</ImageContainer>
<FormContainer>
<SigninForm />
    </FormContainer>
</SigInDetailContainer>

</SipInPage>

    </div>
  )
}

export default SignIn;






const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`


const FormContainer = styled.div`
  height: 100vh;
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;



  
`
const ImageContainer = styled.div`
  height: 100%;
  width: 50%;
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

const SigInDetailContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
background-color: white;
position: relative;


@media screen  and (max-width: 960px) {
    justify-content: center;
}
`

const SipInPage = styled.div`
height: auto;
width: auto;
display: flex;
align-items: center;
`