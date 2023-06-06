import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/api/api";

export const getGame = createAsyncThunk("game/id", async (id) => {
  const responce = await axios.get(`${BASE_URL}/game`, {
    params: {
      id: id,
    },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  });
  return responce.data;
});

const initialState = {
  game: [],
  isLoading: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGame.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getGame.fulfilled, (state, action) => {
      state.game = action.payload;
      state.isLoading = false;
    });
  },
});

export default gameSlice.reducer;
