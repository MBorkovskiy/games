import styles from "./GamePage.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "../../store/gameSlice";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { HeadText } from "../../Components/HeadText/HeadText";
import { DividerInfo } from "../../Components/DividerInfo/DividerInfo";
import { Features } from "../../Components/Features/Features";
import { changeStore } from "../../store/gamesListSlice";
import { Loader } from "../../Components/Loader/Loader";

export const GamePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const game = useSelector((state) => state.game.game);
  const isLoading = useSelector((state) => state.game.isLoading);
  const gamesList = useSelector((state) => state.gamesList.gamesList);
  const [description, setDescription] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const openDescription = () => {
    setDescription(true);
  };

  const closeDescription = () => {
    setDescription(false);
  };

  const addToFavorite = () => {
    dispatch(
      changeStore(
        gamesList.map((el) => {
          if (el.id === game.id) {
            return { ...el, favorite: true };
          } else {
            return el;
          }
        })
      )
    );
  };

  const deleteFromFavorite = () => {
    dispatch(
      changeStore(
        gamesList.map((el) => {
          if (el.id === game.id) {
            return { ...el, favorite: false };
          } else {
            return el;
          }
        })
      )
    );
  };

  useEffect(() => {
    dispatch(getGame(params.id));
  }, []);

  return (
    <Box className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Box className={styles.left_box}>
            <Box className={styles.thumbnail}>
              <img
                className={styles.thumbnail_img}
                src={game.thumbnail}
                alt="thumbnail"
              />
            </Box>
            <Box className={styles.short_description}>
              {game.short_description}
            </Box>
            <Link to={game.game_url} target="blank">
              <Button
                fullWidth
                variant="contained"
                sx={{ marginBlock: "15px" }}
              >
                Play Now
              </Button>
            </Link>
            {gamesList.find(
              (el) => el.id === game.id && el.favorite === true
            ) ? (
              <Button
                onClick={deleteFromFavorite}
                fullWidth
                variant="outlined"
                startIcon={<DeleteIcon sx={{ color: "black" }} />}
              >
                Delete from favorite
              </Button>
            ) : (
              <Button
                onClick={addToFavorite}
                fullWidth
                variant="outlined"
                startIcon={<FavoriteIcon sx={{ color: "red" }} />}
              >
                Add to favorite
              </Button>
            )}
          </Box>
          <Box className={styles.right_box}>
            <HeadText>{`About ${game.title}`}</HeadText>
            <Box className={styles.description}>
              <Typography
                className={
                  description
                    ? styles.description_open
                    : styles.description_close
                }
              >
                {game.description}
              </Typography>
              {description ? (
                <Button
                  sx={{ marginBlock: "10px" }}
                  onClick={closeDescription}
                  startIcon={<RemoveIcon />}
                >
                  Read Less
                </Button>
              ) : (
                <Button
                  sx={{ marginBlock: "10px" }}
                  onClick={openDescription}
                  startIcon={<AddIcon />}
                >
                  Read More
                </Button>
              )}
            </Box>
            <DividerInfo
              title={
                "Disclosure: FreeToGame works closely with publishers and developers to offer a free and rewarding experience. In order to keep everything free to use we may sometimes earn a small commission from some  "
              }
            />
            {game.minimum_system_requirements?.graphics !== null &&
            game.minimum_system_requirements?.graphics ? (
              <>
                <HeadText>Minimum System Requirements</HeadText>
                <Box className={styles.msr}>
                  <Features
                    title={"OS"}
                    obj={game.minimum_system_requirements?.os}
                  />
                  <Features
                    title={"Memory"}
                    obj={game.minimum_system_requirements?.memory}
                  />
                  <Features
                    title={"Storage"}
                    obj={game.minimum_system_requirements?.storage}
                  />
                  <Features
                    title={"Processor"}
                    obj={game.minimum_system_requirements?.processor}
                  />
                  <Features
                    title={"Graphics"}
                    obj={game.minimum_system_requirements?.graphics}
                  />
                </Box>
                <DividerInfo
                  title={
                    "All material on this page is copyrighted by ©THQ Nordic and their respective licensors. All other trademarks are the property of their respective owners."
                  }
                />
              </>
            ) : (
              <></>
            )}
            <HeadText>{`${game.title} screenshots`}</HeadText>
            <Slider {...settings}>
              {game?.screenshots?.map((el) => (
                <Box className={styles.screenshot}>
                  <img
                    src={el.image}
                    alt="screenshot"
                    className={styles.screenshot}
                  />
                </Box>
              ))}
            </Slider>
            <HeadText>Additional Information</HeadText>
            <Box className={styles.additional_information}>
              <Features title={"Title"} obj={game.title} />
              <Features title={"Release Date"} obj={game.release_date} />
              <Features title={"Developer"} obj={game.developer} />
              <Features title={"Genre"} obj={game.genre} />
              <Features title={"Publisher"} obj={game.publisher} />
              <Features title={"Platform"} obj={game.platform} />
            </Box>
            <DividerInfo
              title={
                "Please note this free-to-play game may or may not offer optional in-game purchases."
              }
            />
          </Box>
        </>
      )}
    </Box>
  );
};
