import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/api/api";

export const getGamesList = createAsyncThunk("games/list", async () => {
  const responce = await axios.get(`${BASE_URL}/games`, {
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  });
  return responce.data;
});

const initialState = {
  gamesList: [],
  isLoading: false,
};

const gamesListSlice = createSlice({
  name: "gamesList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGamesList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getGamesList.fulfilled, (state, action) => {
      state.gamesList = action.payload;
      state.isLoading = false;
    });
  },
  reducers: {
    changeStore: (state, action) => {
      state.gamesList = [...action.payload];
    },
  },
});

export default gamesListSlice.reducer;
export const { changeStore } = gamesListSlice.actions;
