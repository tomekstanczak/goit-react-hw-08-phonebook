import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filtered',
  initialState: filterInitialState,
  reducers: {
    filtering(state, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filtering } = filterSlice.actions;
