import axios from "axios";
import { AdminData, AttendanceData } from "../../types/AllInterfaces";
import { StaffData } from "../../types/AllInterfaces";

export const url = "https://easyhr.onrender.com/api"

const staffUrl ="staff"


export const createAdmin = async(data:any)=>{
    return await axios.post(`https://easyhr.onrender.com/api/admin/login`,data).then((res)=> res.data)
}

export const LoginAdmin = async(data:AdminData)=>{
    return await axios.post(`${url}/admin/login`,data).then((res)=>
    {return res.data})
}

export const LoginStaff = async(data:StaffData)=>{
    return await axios.post(`https://easyhr.onrender.com/api/staff/stafflogin`,data).then((res)=>
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

export const createStaffPayRoll = async(data:{} , id:string)=>{
    return await axios.post(`${url}/createpayroll/${id}` , data).then((res)=> res.data)
}

//staff deactivation

export const deactiavteAStaff = async(staffId:any , adminId:any)=>{
    return await axios.delete(`${url}/staff/deactivateStaff/${staffId}/${adminId}`).then((res)=>{
       return res.data
       
      })
}

//generate attendance token

export const genAttendanceToken = async(adminId:string)=>{
    return await axios.post(`${url}/createattendance/${adminId}`)
}


// Staff ClockIn
export const staffClockIn = async(data: AttendanceData , staffId : any) =>{


}

/**export const deactiavteAStaff = async()=>{
  return await axios.delete(`https://easyhr.onrender.com/api/staff/deactivateStaff/${staff?._id}/${user?._id}`).then((res)=>{
    console.log(res.data)
    window.location.reload()
  })
} */