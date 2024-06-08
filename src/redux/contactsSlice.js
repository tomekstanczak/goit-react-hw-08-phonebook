import { createSlice } from '@reduxjs/toolkit';
import {
  addContactInApi,
  deleteContactInApi,
  getContactsFromApi,
} from './operations';
import { logout } from './auth/operations';

const contactInitialState = {
  isLoading: false,
  error: null,
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,

  extraReducers: builder => {
    builder
      .addCase(getContactsFromApi.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getContactsFromApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getContactsFromApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, state => {
        state.items = [];
      })
      .addCase(addContactInApi.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactInApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContactInApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactInApi.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactInApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContactInApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
