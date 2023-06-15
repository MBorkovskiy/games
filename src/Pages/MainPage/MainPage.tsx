import { useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { gamesList, isLoadingGames } = useAppSelector(
    (state) => state.gamesList
  );

  const { news, isLoadingNews } = useAppSelector((state) => state.news);
  const navigate = useNavigate();
  console.log(news);
  const showMore = () => {
    navigate("/platform/all");
    scrollToTop();
  };

  useEffect(() => {
    if (gamesList?.length === 0) {
      dispatch(getGamesList());
    }
  }, []);

  useEffect(() => {
    dispatch(getNews());
  }, []);

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
              ?.filter((el) => el.image_url !== null)
              ?.map((el) => (
                <NewsCard key={el.url} el={el} />
              ))}
          </Slider>
          <HeadText>Games by platform</HeadText>
          <List sx={{ display: "flex", flexWrap: "wrap", gap: "28px" }}>
            {platformList.map((el) => (
              <PlatformCard key={el.name} el={el} />
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
              ?.filter((el, index) => index <= 10)
              ?.map((el) => (
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
