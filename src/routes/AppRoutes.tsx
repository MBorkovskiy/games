import { Route, Routes } from "react-router-dom";
import { MainPage } from "../Pages/MainPage/MainPage";
import { PlatformPage } from "../Pages/PlatformPage/PlatformPage";
import { CategoryPage } from "../Pages/CategoryPage/CategoryPage";
import { SearchPage } from "../Pages/SearchPage/SearchPage";
import { GamePage } from "../Pages/GamePage/GamePage";
import { FavoritePage } from "../Pages/Favorite/FavoritePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<GamePage />} />
      <Route path="/platform/:id" element={<PlatformPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
    </Routes>
  );
};
