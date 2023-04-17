import axios from "axios";
import { AdminData } from "../../types/AllInterfaces";
import { error } from "console";


const url = "https://easyhr.onrender.com/api"

const adminUrl ="admin"

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