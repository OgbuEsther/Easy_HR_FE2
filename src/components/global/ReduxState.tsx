import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { AdminData } from "../../types/AllInterfaces";
import { StaffData } from "../../types/AllInterfaces";


const initialState = {
  currentUser: {} as any | null,

  currentStaff: {} as any | null,

  leave: {} as any | null,
  applyLeave: {} as any | null,
  clockIn: {} as any | null,
  clockOut: {} as any | null,
  late : {} as any | null,
  mileStone: {} as any | null,
  ratings : {} as any | null
};

const ReduxState = createSlice({
  name: "myEazyHr",
  initialState,
  reducers: {
    Admin: (state, { payload }: PayloadAction<AdminData>) => {
      state.currentUser = payload;
    },
    Staff: (state, { payload }: PayloadAction<StaffData>) => {
      state.currentStaff = payload;
    },
    CreateLeave: (state, { payload }: PayloadAction<any>) => {
      state.leave = payload;
    },
      mileStone: (state, {payload} : PayloadAction<any>) => {
        state.mileStone = payload
      },
    ApplyForLeave: (state, { payload }: PayloadAction<any>) => {
      state.applyLeave = payload;
    },
    StaffClockIn: (state, { payload }: PayloadAction<any>) => {
      state.clockIn = payload;
    },
    StaffClockInLate: (state, { payload }: PayloadAction<any>) => {
      state.late = payload;
    },
    StaffClockOut: (state, { payload }: PayloadAction<any>) => {
      state.clockOut = payload;
    },
    staffScoreRate: (state, { payload }: PayloadAction<any>) => {
      state.ratings = payload;
    },
    adminScoreRate: (state, { payload }: PayloadAction<any>) => {
      state.ratings = payload;
    },

    logoutAdmin: (state) => {
      state.currentUser = null;
    },
    logoutstaff: (state) => {
      state.currentStaff = null;
    },
  },
});

export const {
  Admin,
  Staff,
  logoutstaff,
  logoutAdmin,
  CreateLeave,
  StaffClockIn,
  StaffClockOut,
  ApplyForLeave,
  mileStone,
  StaffClockInLate,
  staffScoreRate,
  adminScoreRate
} = ReduxState.actions;

export default ReduxState.reducer;
