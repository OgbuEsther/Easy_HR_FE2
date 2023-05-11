import {useState} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createAdmin } from "../../../utils/Api/ApiCall";
import { UseAppDispach } from "../../global/Store";
import { Admin } from "../../global/ReduxState";
import Swal from "sweetalert2";
import {AiOutlineEyeInvisible} from "react-icons/ai"
import {AiOutlineEye} from "react-icons/ai"
import BackButton from "../../Buttons/BackButton";

const SignupAdminForm = () => {
  const dispatch = UseAppDispach();
  const navigate = useNavigate();

  const [ViewPassword, SetViewPassword] = useState(false);


  const ViewPasswordFunction = () => {
    SetViewPassword(!ViewPassword);
  };

  const schema = yup
    .object({
      yourName: yup.string().required(),
      companyname: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
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
    mutationKey: ["create_Admin"],
    // mutationFn: createAdmin,
    mutationFn: (data: any) => createAdmin(data),

    onSuccess: (myData) => {
      dispatch(Admin(myData.data))
      reset()

      Swal.fire({
        title: "admin registered successfully",
        html: "redirecting to login",
        timer: 1000,
        timerProgressBar: true,

         
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: ()=>{
          navigate("/check-mail")
         }
      })
     
    },

    onError: (error: any) => {
      Swal.fire({
        title: "registration failed",
        text: `${error?.response?.data?.message}`,
        icon: "error",
      });
    }
  });

  const Submit = handleSubmit(async (data: any) => {
    posting.mutate(data);
    
  });

  return (
    <Form onSubmit={Submit}>
      <BackButton path="/sign-up-option"/>

      <SignUpTitle>Sign Up</SignUpTitle>
      <SignUpDescription>You will be signup as an Admin</SignUpDescription>
  

      <InputField>
        <NameInputColumn>
          <FirstNameInputContainer>
            <FirstNameInput {...register("yourName")} placeholder="Your Name" />
            <span style={{color: "#D8000C"}}>{errors.yourName && "your name is required"}</span>
          </FirstNameInputContainer>
        </NameInputColumn>

        {/* Admin Email Area */}
        <AdminEmailColumn>
          <AdminEmailContainer>
            <AdminEmailInput
              {...register("email")}
              placeholder="Email Address"
            />
            <span style={{color: "#D8000C"}}>{errors.email && "your email is required"}</span>
          </AdminEmailContainer>
        </AdminEmailColumn>

        {/* Admin Company and Password Area */}
        <CompanyNameAndPasswordInputColumn>
          <CompanyNameInputContainer>
            <CompanyNameInput
              {...register("companyname")}
              placeholder="Company Name"
            />
            <span style={{color: "#D8000C"}}>{errors.companyname && "your company name is required"}</span>
          </CompanyNameInputContainer>
          <PasswordInputHold>
      <InputmainHold>
        <MainPassword className="password" {...register("password")} type={ViewPassword? "text":"password"} placeholder='password'/> <ShowPassword  onClick={ViewPasswordFunction}>
        {
          ViewPassword?<AiOutlineEye/>:<AiOutlineEyeInvisible/>
        }
        </ShowPassword>
      </InputmainHold>
      <span style={{color: "#D8000C"}}>{errors.password && "your password is required"}</span>
    </PasswordInputHold>
    
    <ShowPasswordAndForgetPassword>
<ForgetPassword >
  Forget Password
</ForgetPassword>
    </ShowPasswordAndForgetPassword>
        </CompanyNameAndPasswordInputColumn>

        {/* Admin Sign up Button Area */}
        <SignUpButtonColumn>
          <SignUpButton>
            <Button type="submit">Sign Up</Button>
          </SignUpButton>
        </SignUpButtonColumn>

        {/* Admin Sign in Button Area */}
        <AdminSignOptionColumn>
          <p>
            Already have account?{" "}
            <NavLink to="/sign-in-admin" style={{ textDecoration: "none" }}>
              <span>Sign In</span>
            </NavLink>
          </p>
        </AdminSignOptionColumn>
      </InputField>
    </Form>
  );
};

export default SignupAdminForm;


const ShowPasswordAndForgetPassword = styled.div`
  height: auto;
  width: auto;
  margin-top: 5px;
  padding-right: 40px;
  padding: 0px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

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
  border: 1px solid #007bff8c;
  border-radius: 5px;

  .password {
    outline: none;
    border: none;
  }
`

const PasswordInputHold = styled.div`
  height: auto;
  width: 100%;

`

const ForgetPassword = styled.div`
  height: auto;
  width: auto;
  font-size: 16px;
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



const CompanyNameInput = styled.input`
  height: 50px;
  width: auto;
`;



const CompanyNameInputContainer = styled.div`
  height: auto;
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width:960px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const CompanyNameAndPasswordInputColumn = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

const AdminEmailInput = styled.input`
  height: 50px;
  width: auto;
`;

const AdminEmailColumn = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 960px) {
    align-items: center;
  }
`;

const AdminEmailContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const FirstNameInput = styled.input`
  height: 50px;
  width: auto;
  border: 1px solid silver;
`;

const FirstNameInputContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const NameInputColumn = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 960px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 10px;
  background: rgb(1, 107, 247);
  background: linear-gradient(
    90deg,
    rgba(1, 107, 247, 1) 0%,
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

const InputField = styled.div`
  height: auto;
  width: 100%;
  padding: 10px 0px;
  margin-top: 30px;

  input {
    border-radius: 5px;
    border: 1px solid black;
    padding-left: 10px;
    border: 1px solid #007bff8c;
  }

  button {
    cursor: pointer;
  }

  label {
    color: #0172f7;
  }
`;

const AdminSignOptionColumn = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  p {
    font-size: 13px;
    span {
      margin-left: 5px;
      font-weight: bold;
      color: #0174f7d1;
    }
  }
`;
const SignUpButtonColumn = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  color: #0174f7bf;
`;

const Form = styled.form`
  height: auto;
  width: 620px;
  padding-top: 40px;

  @media screen and (max-width: 960px) {
    width: 620px;
    /* box-shadow: 1px 2px 10px 1px rgba(177, 177, 177, 0.5); */
    padding: 10px;
    padding-left: 15px;
    border-radius: 10px;
    padding-top: 40px;
    width: 620px;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 170px;
    width: auto;
  }
`;
