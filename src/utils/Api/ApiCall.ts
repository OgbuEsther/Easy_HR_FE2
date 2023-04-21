import axios from "axios";
import { AdminData } from "../../types/AllInterfaces";
import { StaffData } from "../../types/AllInterfaces";

const url = "https://easyhr.onrender.com/api"

const adminUrl ="admin"

const staffUrl = "staff"

export const createAdmin = async(data:AdminData)=>{
    return await axios.post(`${url}/${adminUrl}/register`,data).then((res)=>{
        return res.data
    })
}

export const LoginAdmin = async(data:any)=>{
    return await axios.post(`${url}/${adminUrl}/login`,data).then((res)=>
    {return res.data})
}


export const createStaff = async(data: StaffData)=>{
    return await axios.post(`${url}/staff/staffregister`,data).then((res)=>{
        return res.data
    })
}

export const getOneAdmin = async(id:any)=>{
    return await axios.get(`${url}/admin/${id}`).then((res)=>{
        return res.data
    })
}
export const getOneStaff = async(id:any)=>{
    return await axios.get(`${url}/staff/staff/${id}`).then((res)=>{
        return res.data
    })
}

//create payroll

export const createStaffPayRoll = async(data:{})=>{
    return await axios.post(`${url}/createpayroll` , data).then((res)=> res.data)
}