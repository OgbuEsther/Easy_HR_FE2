import {createSlice} from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import {AdminData} from "../../types/AllInterfaces";

const initialState = {
    currentUser:{} as AdminData | null
};

const ReduxState = createSlice({
    name:"easyHR",
    initialState,
    reducers: {
        Admin: (state, {payload}: PayloadAction<AdminData>)=>{
            state.currentUser = payload;
        }
    }
})

export const {Admin} = ReduxState.actions;

export default ReduxState.reducer;