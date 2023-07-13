import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",

  initialState: {
    posts: [],
  },
  reducers: {
    FETCH_POSTS: (state, { payload }) => {
      state.posts = payload;
    },
  },
});

export const { FETCH_POSTS } = postSlice.actions;

export default postSlice.reducer;
