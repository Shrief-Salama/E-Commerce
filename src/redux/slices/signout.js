import { createSlice } from "@reduxjs/toolkit";

const signoutSlice = createSlice({
  name: "signout",
  initialState: {
    signoutStart: false,
    signoutSuccess: false,
    signoutFailed: false,
  },
  reducers: {
    signoutStart: (state) => {
      state.signoutStart = true;
    },
    signoutSuccess: (state) => {
      state.signoutStart = false;
      state.signoutSuccess = true;
    },
    signoutFailed: (state) => {
      state.signoutStart = false;
      state.signoutSuccess = false;
      state.signoutFailed = true;
    },
  },
});

export const { signoutStart, signoutSuccess, signoutFailed } =
  signoutSlice.actions;
export default signoutSlice.reducer;
