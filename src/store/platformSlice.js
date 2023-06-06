import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/api/api";

export const getPlatform = createAsyncThunk(
  "games/platform",
  async ({ platform, category, sort }) => {
    const responce = await axios.get(`${BASE_URL}/games`, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
      params: {
        platform: platform,
        category: category,
        "sort-by": sort,
      },
    });
    return responce.data;
  }
);

const initialState = {
  platform: [],
  isLoading: false,
};

const platformSlice = createSlice({
  name: "platform",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPlatform.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getPlatform.fulfilled, (state, action) => {
      state.platform = action.payload;
      state.isLoading = false;
    });
  },
});

export default platformSlice.reducer;
