import { createSlice } from '@reduxjs/toolkit';
import { logIn, logout, refreshUser, register } from './operations';

const initialState = {
  loading: false,
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.pending, state => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      console.log({ action });
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    });
    builder.addCase(logout.fulfilled, () => initialState);
    builder.addCase(logIn.fulfilled, (state, action) => {
      console.log({ action });
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    });
    builder.addCase(refreshUser.pending, state => {
      state.isRefresing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.isRefresing = false;
      state.user = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(refreshUser.rejected, () => initialState);
  },
});

export const authReducer = authSlice.reducer;
