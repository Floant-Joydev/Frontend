import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addAddress, checkUser, loginuser, registeruser } from './authAPI';
import { toast } from 'react-toastify';

const initialState = {
  loggedinUser: null,
  status: 'idle',
  error: null,
};

export const loginuserAsync = createAsyncThunk(
  'auth/loginuser',
  async (userData, {rejectWithValue}) => {

    try {
      const response = await loginuser(userData);
      return response.data;

    } catch (error) {
      return rejectWithValue(error.data)
    }

  }
);
export const registerUserAsync = createAsyncThunk(
  'auth/registeruser',
  async (userData, {rejectWithValue}) => {

    try {
      const response = await registeruser(userData);
      return response.data;

    } catch (error) {
      return rejectWithValue(error.data)
    }

  }
);
export const checkUserAsync = createAsyncThunk(
  'auth/checkUser',
  async (token, {rejectWithValue}) => {

    try {
      const response = await checkUser(token);
      return response.data;

    } catch (error) {
      return rejectWithValue(error.data)
    }

  }
);
export const addAddressAsync = createAsyncThunk(
  'auth/addAddress',
  async(addressData, rejectWithValue) => {
    try{
      const response = await addAddress(addressData);
      return response.data;
    } catch( error ){
      return rejectWithValue(error);
    }
  }
)

export const logoutUser = createAction('auth/logout');

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      state.loggedinUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginuserAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginuserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedinUser = action.payload.customer;
        localStorage.setItem('floant-auth-token', action.payload.token)
        state.error = null;
      })
      .addCase(loginuserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload.errors;
      })
      .addCase(registerUserAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedinUser = action.payload;
        localStorage.setItem('floant-auth-token', action.payload.token)
        state.error = null;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload.success;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedinUser = action.payload[0];
        state.error = null;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload.success;
      })
      .addCase(addAddressAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addAddressAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedinUser = action.payload;
        state.error = null;
        toast.success('Address Added successfully');
      })
      .addCase(logoutUser, (state ) => {
        state.loggedinUser = null;
        localStorage.removeItem('floant-auth-token')
        toast.success('logout Successfull');
      })
  },
});

export const { increment } = authSlice.actions;

export const selectUser = (state) => state.auth.loggedinUser;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
