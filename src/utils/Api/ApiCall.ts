import axios from "axios";
import { AdminData, AttendanceData } from "../../types/AllInterfaces";
import { StaffData } from "../../types/AllInterfaces";

export const url = "https://easyhr.onrender.com/api"

const staffUrl ="staff"



export const createAdmin = async(data:any)=>{
    return await axios.post(`https://easyhr.onrender.com/api/admin/register`,data).then((res)=> res.data)
}

export const adminVerification = async (id: string) => {
    try {
      return await axios.get(`${url}/admin/${id}/verify`);
    } catch (error) {
      console.log(error);
    }
  };

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

export const staffVerification = async (id: string) => {
    try {
      return await axios.get(`${url}/${id}/verifystaff`);
    } catch (error) {
      console.log(error);
    }
  };

export const getOneAdmin = async(id:any)=>{
    return await axios.get(`${url}/admin/${id}`).then((res)=>{
        return res.data
        // console.log(res.data)
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
    return await axios.post(`${url}/createattendance/${adminId}`).then((res)=> res.data)
}


// Staff ClockIn
export const staffClockIn = async(data: any , staffId : any , adminId:any) =>{
    return await axios.post(`${url}/clockin/${staffId}/${adminId}` , data).then((res)=> res.data)

}

//staff clock out
export const staffClockOut = async(data: any , staffId : any , adminId:any) =>{
    return await axios.post(`${url}/clockout/${staffId}/${adminId}` , data).then((res)=> res.data)

}

/**export const deactiavteAStaff = async()=>{
  return await axios.delete(`https://easyhr.onrender.com/api/staff/deactivateStaff/${staff?._id}/${user?._id}`).then((res)=>{
    console.log(res.data)
    window.location.reload()
  })
} */

//create leave on admin side

export const createLeave = async(data : any , adminId:any)=>{
    return await axios.post(`${url}/createleave/${adminId}` , data).then((res)=> res.data)
}

//setMilestones

export const setMilestones  = async(data : any , adminId:any)=>{
    return await axios.post(`${url}/createperformancemilestone/${adminId}` , data).then((res)=> res.data)
}

//staff to apply for leave
export const applyForLeave = async(data : any , staffId:any ,adminId:any)=>{
    return await axios.post(`${url}/applyforleave/${staffId}/${adminId}` , data).then((res)=> res.data)
}


//admin to rate staff

export const adminScore = async(data:any , rateId:any) =>{
    return await axios.patch(`${url}/createadminscore/${rateId}` ,data).then((res)=> res.data)
}
export const staffScore = async(data:any , MileStoneId:any) =>{
    return await axios.post(`${url}/createstaffscore/${MileStoneId}` ,data).then((res)=> res.data)
}