import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../apiCalls";

export const loginUser = createAsyncThunk("auth/login", async (user) => {
  const response = await api.login(user);
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    currentUser: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
    reset: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Reset error state on page refresh
      .addMatcher(
        (action) => action.type === "persist/REHYDRATE" && action.error,
        (state) => {
          state.error = null;
        }
      );
  },
});

export const { logout, reset } = userSlice.actions;
export default userSlice.reducer;
