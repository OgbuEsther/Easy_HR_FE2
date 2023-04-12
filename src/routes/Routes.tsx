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

const Home = lazy(() => import("../pages/landingpage/Home"));
const About = lazy(() => import("../pages/landingpage/Connect"));
const Staffs = lazy(() => import("../pages/Staffs"));
const ParentComp = lazy(() => import("../pages/ParentComp"));
const ContactUs = lazy(() => import("../pages/landingpage/ContactUs"));

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
        path: "/contact",
        element: <ContactUs />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/about",
        element: <About />,
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
    path:"/verification",
    element: <Otp/>
  },
  {
    path:"/sign-up-option",
    element: <SignUpOption/>
  },
  {
    path:"/sign-in-option",
    element: <SignInOption/>
  
  
  {
    path : "*",
    element : <NotFound />
  }
]);
