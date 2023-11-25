import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllBlog } from './BlogAPI';

const initialState = {
  blogs: null,
  status: 'idle',
};

export const fetchAllBlogAsync = createAsyncThunk(
  'blog/fetchAllBlog',
  async () => {

    const res = await fetchAllBlog();
    return res.data;
    
  }
);

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    increment: (state) => {
      state.loggedinUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBlogAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllBlogAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.blogs = action.payload.data;
      })
  },
});


export const selectAllBlogs = (state) => state.blog.blogs;

export default blogSlice.reducer;
