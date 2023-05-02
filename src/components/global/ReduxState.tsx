import {createSlice} from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import {AdminData} from "../../types/AllInterfaces";
import { StaffData } from "../../types/AllInterfaces";
import {AttendanceData} from "../../types/AllInterfaces"

const initialState = {
    currentUser:{} as AdminData | null,

    currentStaff: {} as StaffData |null,

    currentAttendance: {} as AttendanceData |null,
};

const ReduxState = createSlice({
    name:"easyHR",
    initialState,
    reducers: {
        Admin: (state, {payload}: PayloadAction<AdminData>)=>{
            state.currentUser = payload;
        },
        Staff: (state, {payload}: PayloadAction<StaffData>)=>{
            state.currentStaff = payload;
        },

        AttendanceFn: (state, {payload}: any)=>{
            state.currentAttendance = payload
        }
    }
})

export const {Admin, Staff, AttendanceFn} = ReduxState.actions;

export default ReduxState.reducer;