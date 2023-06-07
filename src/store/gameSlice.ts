import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/api/api";
import { GameProps, IdProps } from "../types/types";

interface InitialStateProps {
  game: GameProps;
  isLoading: boolean;
}

export const getGame = createAsyncThunk<GameProps, IdProps>(
  "game/id",
  async ({ id }) => {
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
  }
);

const initialState: InitialStateProps = {
  game: {},
  isLoading: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
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
