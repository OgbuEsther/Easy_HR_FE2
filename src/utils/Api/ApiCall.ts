import axios from "axios";
import { AdminData } from "../../types/AllInterfaces";
import { StaffData } from "../../types/AllInterfaces";

const url = "https://easyhr.onrender.com/api"

const adminUrl ="admin"

const staffUrl = "staff"

export const createAdmin = async({
    companyname,
   email,
   yourName,
   password,
}:AdminData)=>{
    return await axios.post(`${url}/${adminUrl}/register/`,{
   companyname,
   email,
   yourName,
   password,
    }).then((res)=>{
        return res
    })
}

export const LoginAdmin = async({
    companyname,
    email,
    password
}:AdminData)=>{
    return await axios.post(`${url}/${adminUrl}/login`,{
        companyname,
        email,
        password
    }).then((res)=>
    {return res})
}


export const createStaff = async({
    companyname,
   email,
   yourName,
   password,
}: StaffData)=>{
    return await axios.post(`${url}/staff/staffregister`,{
        companyname, email, password, yourName
    }).then((res)=>{
        return res
    })
}