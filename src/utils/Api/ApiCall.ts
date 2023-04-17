import axios from "axios";


const url = "https://easyhr.onrender.com/"

export const createAdmin = async({
    companyname,
   email,
   yourName,
   password,
}: any)=>{
    return await axios.post(`${url}api/admin/register/`,{
        companyname,
   email,
   yourName,
   password,
    }).then((res)=>{
        return res
    })
}