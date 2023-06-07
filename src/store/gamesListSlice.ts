import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/api/api";
import { GameProps } from "../types/types";

interface InitialStateProps {
  gamesList: GameProps[];
  isLoadingGames: boolean;
}

export const getGamesList = createAsyncThunk<GameProps[]>(
  "games/list",
  async () => {
    const responce = await axios.get(`${BASE_URL}/games`, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    });
    return responce.data;
  }
);

const initialState: InitialStateProps = {
  gamesList: [],
  isLoadingGames: false,
};

const gamesListSlice = createSlice({
  name: "gamesList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGamesList.pending, (state, action) => {
      state.isLoadingGames = true;
    });
    builder.addCase(getGamesList.fulfilled, (state, action) => {
      state.gamesList = action.payload;
      state.isLoadingGames = false;
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
