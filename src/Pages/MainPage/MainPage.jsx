import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGamesList } from "../../store/gamesListSlice";
import { Box, Button, Container, List } from "@mui/material";
import { HorizontalCard } from "../../Components/HorizontalCard/HorizontalCard";
import { PlatformCard } from "../../Components/PlatformCard/PlatformCard";
import { platformList } from "../../constants/platformList/platformList";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop/scrollToTop";
import { HeadText } from "../../Components/HeadText/HeadText";
import { NewsCard } from "../../Components/NewsCard/NewsCard";
import { getNews } from "../../store/newsSlice";

import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import Slider from "react-slick";
import { Loader } from "../../Components/Loader/Loader";

export const MainPage = () => {
  const dispatch = useDispatch();
  const gamesList = useSelector((state) => state.gamesList.gamesList);
  const isLoadingGames = useSelector((state) => state.gamesList.isLoading);
  const isLoadingNews = useSelector((state) => state.news.isLoading);
  const news = useSelector((state) => state.news.news);
  const navigate = useNavigate();

  const showMore = () => {
    navigate("/platform/all");
    scrollToTop();
  };

  useEffect(() => {
    if (gamesList.length === 0) {
      dispatch(getGamesList());
    }
  }, []);

  useEffect(() => {
    dispatch(getNews());
  }, []);
  console.log(news);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <EastIcon fontSize="medium" sx={{ fill: "#0072ea" }} />,
    prevArrow: <WestIcon fontSize="medium" sx={{ fill: "#0072ea" }} />,
  };

  return (
    <Container>
      {isLoadingNews ? (
        <Loader />
      ) : (
        <>
          <HeadText>Games news</HeadText>
          <Slider {...settings}>
            {news
              .filter((el) => el.image_url !== null)
              .map((el) => (
                <NewsCard key={el.id} el={el} />
              ))}
          </Slider>
          <HeadText>Games by platform</HeadText>
          <List sx={{ display: "flex", flexWrap: "wrap", gap: "28px" }}>
            {platformList.map((el) => (
              <PlatformCard key={el.id} el={el} />
            ))}
          </List>
        </>
      )}

      {isLoadingGames ? (
        <Loader />
      ) : (
        <>
          <HeadText>All Games</HeadText>
          <Box>
            {gamesList
              .filter((el, index) => index <= 10)
              .map((el) => (
                <HorizontalCard key={el.id} el={el} />
              ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button variant="contained" onClick={showMore}>
              Show More
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};
