import {createSlice} from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import {AdminData} from "../../types/AllInterfaces";
import { StaffData } from "../../types/AllInterfaces";

const initialState = {
    currentUser:{} as AdminData | null,

    currentStaff: {} as StaffData |null
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
        logoutAdmin: (state)=> {
            state.currentUser = null
        },
        logoutstaff: (state)=> {
            state.currentStaff = null
        }
    }
})

export const {Admin, Staff, logoutstaff,logoutAdmin } = ReduxState.actions;

export default ReduxState.reducer;