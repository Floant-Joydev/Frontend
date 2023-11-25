import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createCart, deleteAllItem, deleteCart, fetchAllCart } from './CartAPI';
import { toast } from 'react-toastify';

const initialState = {
  carts: [],
  status: 'idle',
};

export const fetchAllCartAsync = createAsyncThunk(
  'cart/fetchAllCart',
  async (token) => {

    const res = await fetchAllCart(token);
    return res.data;
    
  }
);
export const createCartAsync = createAsyncThunk(
  'cart/createCart',
  async (productData ) => {

    const res = await createCart(productData);
    return res.data;
    
  }
);
export const deleteCartAsync = createAsyncThunk(
  'cart/deleteCart',
  async ( productData ) => {

    const res = await deleteCart(productData);
    return res.data;
    
  }
);
export const deleteAllItemAsync = createAsyncThunk(
  'order/createOrder',
  async( ) => {
    const res = await deleteAllItem();

    return res.data;
  }
)

export const logoutUser = createAction('auth/logout');

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.loggedinUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase( logoutUser,(state) => {
        state.carts = []
      })
      .addCase(fetchAllCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.carts = action.payload.products;
      })
      .addCase(createCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.carts = action.payload.products;
        toast.success('Item Added Successfully !');
      })
      .addCase(deleteCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.carts = action.payload.data.products;
        toast.success('Item Deleted Successfully !');
      })
      .addCase(deleteAllItemAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteAllItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.carts = [];
      })
  },
});


export const selectCart = (state) => state.cart.carts;

export default cartSlice.reducer;
