import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Dashboard, HomeLayout } from "../components";
import  ErrorBoundary  from "../utils/hoc/ErrorBoundary";
import NotFound from "../utils/hoc/NotFound";
import HomeScreen from "../pages/landingpage/HomeScreen";
import Payroll from "../pages/Payroll";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import Otp from "../pages/Auth/Otp";
import SignUpOption from "../pages/Auth/SignUpOption";
import SignInOption from "../pages/Auth/SignInOption";
import SignUpAdmin from "../pages/Auth/SignUpAdmin";
import SignInAdmin from "../pages/Auth/SignInAdmin";
import ForgotPasswordEmail from "../pages/Auth/ForgetPasswordEmail";
import ResetPassword from "../pages/Auth/ResetPassword";
import Verification from "../pages/Auth/Verification";
import { Staffdashboard } from "../components/layout/Staffdashboard";
import Staffcomp from "../pages/Staffcomp";
import Leave from "../pages/Leave/Leave";
import LeavePage from "../pages/LeavePage";
import CheckMail from "../pages/Auth/CheckMail";
import Waiting from "../pages/Auth/Waiting";
// import CompanyChoic from "../pages/Yesorno/CompanyChoice";
import Settingspage from "../pages/Settingspage";
import Easier from "../pages/landingpage/Easier/Easier";
import Payment from "../pages/landingpage/Payment";
import Expert from "../pages/landingpage/Expert/Expert";
import StaffPerformance from "../pages/Staffperformance/Staffperformance";
import Staffleave from "../pages/Staffperformance/Staffleave";
// import Transaction from "../pages/Performance/Performance";
// import Transaction from "../pages/Staffperformance/Staffperformance";


const Home = lazy(() => import("../pages/landingpage/Home"));
const About = lazy(() => import("../pages/landingpage/Connect"));
const Staffs = lazy(() => import("../pages/Staffs"));
const Transaction = lazy(()=> import("../pages/Performance/Performance"))
const ParentComp = lazy(() => import("../pages/ParentComp"));
const ContactUs = lazy(() => import("../pages/landingpage/ContactUs"));
const Attendance = lazy(() => import("../pages/AdminAttendance/Adminattendance"))
const StaffAttendance = lazy(() => import("../pages/Attendance"))
const Schoolfees = lazy(() => import("../pages/Schoolfeesfile/Schoolfeesfile"))
const Tour = lazy(() => import("../pages/Tourfile/Tourfile"))
const Rents = lazy(() => import("../pages/Rentsfile/Rentsfile"))

const PayBills = lazy(()=>import("../pages/StaffdasBoard/PayBills/PayBill"));
const CompanyChoice = lazy(()=>import("../pages/Yesorno/CompanyChoice"))
// const StaffAttendance = lazy(() => import("../pages/StaffdasBoard/Attendance/Attendance"))
const StaffTransaction = lazy(()=>import("../pages/StaffTransaction/StaffTransactionSide"))




export const Elements = createBrowserRouter([
  
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen/>,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/solution",
        element: <Payment/>,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/about",
        element: <Easier/>,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/expert",
        element: <Expert/>,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <ParentComp />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/dashboard/staffs",
        element: <Staffs />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/dashboard/payroll",
        element: <Payroll />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/dashboard/admin-attendance",
        element: <Attendance />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/dashboard/performance",
        element: <Transaction/>,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/dashboard/leave",
        element: <Leave/>,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/dashboard/settings",
        element: <Settingspage/>,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
    ],
  },

  {
    path:"/sign-up",
    element: <SignUp/>
  },
  
  
  {
    path:"/sign-in",
    element: <SignIn/>
  },
  
  {
    path:"/:id/verification",
    element: <Otp/>
  },
  {
    path:"/sign-up-option",
    element: <SignUpOption/>
  },
  {

    path:"/sign-in-option",
    element: <SignInOption/>
  },
  {
  path:"/api/staff/:id/verification",
  element: <CompanyChoice />
},

  {
    path:"/sign-up-admin",
    element: <SignUpAdmin/>
  },
  {
    path:"/sign-in-admin",
    element: <SignInAdmin />
  },
  {
    path:"/check-mail",
    element: <CheckMail/>
  },
  {
    path:"/api/admin/:id/verify",
    element: <Verification/>
  },
  {
    path:"/:id/verifystaff",
    element: <Waiting/>
  },
  {
    path:"/reset-password",
    element: <ResetPassword/>,
    children:[
      {
        index: true,
        path:"find-account",
        element: <ForgotPasswordEmail />
      }
    ]
  },

  {
    path : "*",
    element : <NotFound />
  },
  {
    path: "/staffdashboard",
    element: <Staffdashboard />,
    children: [
      {
        index: true,
        element: <Staffcomp />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
       path:"/staffdashboard/paybills",
        element: <PayBills/>,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
       path:"/staffdashboard/stafftransaction",
        element: <StaffTransaction/>,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/staffdashboard/staff-attendance",
        element: <StaffAttendance />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/staffdashboard/schoolfees-plan",
        element: <Schoolfees />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/staffdashboard/travel&tour-plan",
        element: <Tour />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/staffdashboard/rents-plan",
        element: <Rents />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path:"/staffdashboard/leave-form",
        element: <Staffleave />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path:"/staffdashboard/staffperformance",
        element: <StaffPerformance />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      
    ]
  },
]);
