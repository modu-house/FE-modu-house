import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../api/core/axios';


const initialState = {
  posts: [],
  isLoading: false,
  error: null
};

export const getPosts = createAsyncThunk('GET/posts', async (_, thunkAPI) => {
  try {
    const response = await instance.get("/api/boards");
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;