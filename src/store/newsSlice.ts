import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { NewsProps } from "../types/types";

interface InitialStateProps {
  news: NewsProps[];
  isLoadingNews: boolean;
}

export const getNews = createAsyncThunk<NewsProps[]>(
  "news/getNews",
  async () => {
    const responce = await axios.get(
      `https://gnews.io/api/v4/search?q=gaming&apikey=4e866671d083f724650de4d4ab1f0916`
    );
    return responce.data.articles;
  }
);

const initialState: InitialStateProps = {
  news: [],
  isLoadingNews: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state, action) => {
      state.isLoadingNews = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload;
      state.isLoadingNews = false;
    });
  },
});

export default newsSlice.reducer;
