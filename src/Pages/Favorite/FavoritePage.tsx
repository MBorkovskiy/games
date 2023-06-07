import styles from "./FavoritePage.module.css";
import { Container, List } from "@mui/material";
import { HeadText } from "../../Components/HeadText/HeadText";
import { MainCard } from "../../Components/MainCard/MainCard";
import { MyBreadcrumbs } from "../../Components/MyBreadcrumbs/MyBreadcrumbs";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

export const FavoritePage = () => {
  const location = useLocation();
  const gamesList = useAppSelector((state) => state.gamesList.gamesList);
  const count = gamesList.filter((el) => el.favorite === true);

  return (
    <Container>
      {count.length ? (
        <HeadText>Favorite games</HeadText>
      ) : (
        <HeadText>There is no favorite games</HeadText>
      )}
      <MyBreadcrumbs
        title={"Games"}
        location={location}
        locParams={location.pathname.slice(1)}
      />
      <List className={styles.list}>
        {gamesList
          .filter((el) => el.favorite === true)
          .map((el) => (
            <MainCard key={el.id} el={el} />
          ))}
      </List>
    </Container>
  );
};
