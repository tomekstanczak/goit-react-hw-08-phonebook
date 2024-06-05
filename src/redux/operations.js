import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getContactsFromApi = createAsyncThunk(
  'contacts/getContactsFromApi',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
const addContactInApi = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const response = await axios.post('/contacts', newContact);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const deleteContactInApi = createAsyncThunk(
  'contacts/deleteContact',
  async (deletedContact, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${deletedContact}
    }`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// const editConcactInApi = createAsyncThunk(
//   'contacts/editContact',
//   async (deletedContact, thunkApi) => {
//     try {
//       const response = await axios.
//     }
//   }
// )

export { getContactsFromApi, addContactInApi, deleteContactInApi };
