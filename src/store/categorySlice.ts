import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/api/api";
import { GameProps } from "../types/types";

interface InitialStateProps {
  category: GameProps[];
  isLoading: boolean;
}

interface ParamsProps {
  params: string;
}

export const getCategory = createAsyncThunk<GameProps[], ParamsProps>(
  "games/category",
  async ({ params }) => {
    const responce = await axios.get(`${BASE_URL}/games`, {
      params: {
        category: `${params}`,
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
  category: [],
  isLoading: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.category = action.payload;
      state.isLoading = false;
    });
  },
});

export default categorySlice.reducer;
