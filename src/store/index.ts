import { configureStore } from "@reduxjs/toolkit";
import gamesListSlice from "./gamesListSlice";
import platformSlice from "./platformSlice";
import categorySlice from "./categorySlice";
import gameSlice from "./gameSlice";
import newsSlice from "./newsSlice";

const store = configureStore({
  reducer: {
    gamesList: gamesListSlice,
    platform: platformSlice,
    category: categorySlice,
    game: gameSlice,
    news: newsSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
