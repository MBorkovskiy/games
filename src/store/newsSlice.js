import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNews = createAsyncThunk("news/getNews", async () => {
  const responce = await axios.get(
    `https://gnews.io/api/v4/search?q=gaming&apikey=4e866671d083f724650de4d4ab1f0916`
  );
  return responce.data.articles;
});

const initialState = {
  news: [],
  isLoading: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload;
      state.isLoading = false;
    });
  },
});

export default newsSlice.reducer;
