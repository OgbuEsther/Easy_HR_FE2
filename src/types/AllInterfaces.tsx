// export interface OutlineButtonData {
//     color?: string;
//     border?: string;
//     borderRadius?: string;
//     top?:string;
//     left?:string;
//     fontSize?: string;
//     positioning?:string;
// }


export interface AdminData {
    companyname: string;
   email: string;
   yourName?: string;
   password: string;
   companyCode?: string;
   walletNumber?: number;
   _id? : any
}


export interface StaffData {
    companyname: string;
    email: string;
    yourName?: string;
    password: string;
    companyCode?: string;
    walletNumber?: number;
    _id?: any

}
export interface AttendanceData {
   
    staffId : any,
    token: string,


}

