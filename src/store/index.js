import { configureStore } from "@reduxjs/toolkit";
import gamesListSlice from "./gamesListSlice";
import platformSlice from "./platformSlice";
import categorySlice from "./categorySlice";
import gameSlice from "./gameSlice";
import newsSlice from "./newsSlice";

export default configureStore({
  reducer: {
    gamesList: gamesListSlice,
    platform: platformSlice,
    category: categorySlice,
    game: gameSlice,
    news: newsSlice,
  },
});
