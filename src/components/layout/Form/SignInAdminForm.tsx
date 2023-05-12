import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { LoginAdmin } from "../../../utils/Api/ApiCall";
import { Admin } from "../../global/ReduxState";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import BackButton from '../../Buttons/BackButton';
import {AiOutlineEyeInvisible} from "react-icons/ai"
import {AiOutlineEye} from "react-icons/ai"

const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ViewPassword, SetViewPassword] = useState(false);


  const ViewPasswordFunction = () => {
    SetViewPassword(!ViewPassword);
  };

  const schema = yup
    .object({
      companyname: yup.string().required("please enter a valid company's name"),
      email: yup.string().email().required("please enter a valid email"),
      password: yup.string(),
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

  const LoginAdminFunction = useMutation({
    mutationKey: ["login_admin"],
    mutationFn: (data: any) => LoginAdmin(data),
    
    

    onSuccess(myData) {
      dispatch(Admin(myData.data));
      reset();

      Swal.fire({
        title: "Login succesful",
        html: "Taking you to your dashboard",
        timer: 1000,
        timerProgressBar: true,

        didOpen: () => {
          Swal.showLoading();
        },

        willClose: () => {
          navigate("/dashboard");
        },
      });
      
    },
    onError: (error: any) => {
      Swal.fire({
        title: "registration failed",
        text: "email or password incorrect",
        icon: "error",
      });
    },
  });
 

  const Submit = handleSubmit(async(data: any) => {
    LoginAdminFunction.mutate(data);    
    // console.log("sign in admin", data)
  });

  return (
    <FormHold>
      
      <BackButton path="/sign-in-option"/>
     
      <BackButtonHold>
    <BackButton path="/sign-in-option"/>
  </BackButtonHold>
      <SignUpTitle>Sign In</SignUpTitle>
     
      <SignUpDescription>You will be signed in as an Admin</SignUpDescription>

      <InputField onSubmit={Submit}>
        <CompanyNameInputHold>
          <CompanyNameInput
            {...register("companyname")}
            placeholder="Company Name"
          />
          <span>{errors?.companyname && errors?.companyname?.message}</span>
        </CompanyNameInputHold>

        <EmailInputColumn>
          <EmailInput {...register("email")} placeholder="Email Address" />
          <span>{errors?.email && errors?.email?.message}</span>
        </EmailInputColumn>
        <CompanyPasswordColumn>
           <PasswordInputHold>
      <InputmainHold>
        <MainPassword {...register("password")} type={ViewPassword? "text":"password"} placeholder='password'/> <ShowPassword  onClick={ViewPasswordFunction}>
        {
          ViewPassword?<AiOutlineEye/>:<AiOutlineEyeInvisible/>
        }
        </ShowPassword>
      </InputmainHold>
    </PasswordInputHold>
    
    <ShowPasswordAndForgetPassword>
<ForgetPassword >
  Forget Password
</ForgetPassword>
    </ShowPasswordAndForgetPassword>
        </CompanyPasswordColumn>
        <FourtInputColumn>
          <SignUpButton>
            <Button type="submit">Sign In</Button>
          </SignUpButton>
        </FourtInputColumn>
        <FifthInputColumn>
          <p>
            Don't have account?{" "}
            <NavLink to="/sign-up-admin" style={{ textDecoration: "none" }}>
              <span>Sign Up</span>
            </NavLink>
          </p>
        </FifthInputColumn>
      </InputField>
    </FormHold>
  );
};

export default SigninForm;

const MainPassword = styled.input`
  height: 45px;
  flex: 1;
  padding-left: 10px;
  outline: none;
  background-color: transparent;

`
const InputmainHold = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid  #0174f78d;
  border-radius: 5px;
`

const PasswordInputHold = styled.div`
  height: auto;
  width: 100%;

`

const ForgetPassword = styled.div`
  height: auto;
  width: auto;
  font-size: 13px;
  color: #0174f7c8;
`;


const ShowPassword = styled.div`
  height: 40px;
  width: 50px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: gray;
  border: none;
  cursor: pointer;
`;

const ShowPasswordAndForgetPassword = styled.div`
  height: auto;
  width: auto;
  margin-top: 5px;
  padding-right: 40px;
  padding: 0px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompanyNameInput = styled.input`
  height: 50px;
  width: auto;
  border-radius: 5px;
  border: 1px solid #0174f78d;
  outline: none;
  padding-left: 10px;
`;

const CompanyNameInputHold = styled.div`
  height: 70px;
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;



const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 10px;
  background: rgb(1, 107, 247);
  background: linear-gradient(
    90deg,
    #2e7ade 0%,
    rgba(1, 184, 240, 1) 69%,
    rgba(0, 183, 255, 1) 100%
  );
  background-color: #0a72e9;
  border: none;
  font-weight: bold;
  color: white;
`;

const SignUpButton = styled.div`
  height: auto;
  width: auto;
`;

const InputField = styled.form`
  height: auto;
  width: 90%;
  padding: 10px 0px;
  margin-top: 30px;

  button {
    cursor: pointer;
  }

  label {
    color: #0172f7;
  }
`;

const EmailInput = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #0174f78d;
  outline: none;
  padding-left: 10px;
`;


const FifthInputColumn = styled.div`
  height: 50px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  p {
    font-size: 13px;
    span {
      margin-left: 5px;
      font-weight: bolder;
      color: #0170f6;
    }
  }
`;
const FourtInputColumn = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 50px;

  @media screen and (max-width: 510px) {
    text-align: center;
  }
`;
const CompanyPasswordColumn = styled.div`
  height: 70px;
  width: 100%;
  margin-bottom: 60px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;


const EmailInputColumn = styled.div`
  height: 70px;
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const SignUpDescription = styled.p`
  font-weight: 600;
  padding-top: 0px;
`;
const SignUpTitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 0px;
  color: #0174f7b5;
`;

const BackButtonHold = styled.div`
  height: auto;
  height: auto;
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
  }
`

const FormHold = styled.div`
  height: auto;
  width: 500px;
  padding-top: 40px;
  padding-left: 5px;

  @media screen and (max-width: 960px) {
    width: 500px;
    padding: 10px 20px;
    padding-top: 40px;
  }
  @media screen and (max-width: 510px) {
    width: 100%;
    padding: 10px 20px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
