import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProduct } from './ProductAPI';

const initialState = {
  products: null,
  status: 'idle',
};

export const fetchAllProductAsync = createAsyncThunk(
  'product/fetchAllProduct',
  async () => {

    const res = await fetchAllProduct();
    return res.data;
    
  }
);

export const logoutUser = createAction('auth/logout');

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.loggedinUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.data;
      })
  },
});


export const selectAllProduct = (state) => state.product.products;

export default productSlice.reducer;
