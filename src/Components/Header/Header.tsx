import { AppBar, Badge, Box, IconButton, Typography } from "@mui/material";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppSelector } from "../../hooks/hooks";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const gamesList = useAppSelector((state) => state.gamesList.gamesList);
  const count = gamesList.filter((el) => el.favorite === true);

  const toSearchPage = () => {
    navigate("/search");
  };

  const toFavPage = () => {
    navigate("/favorite");
  };
  return (
    <AppBar position="static" className={styles.header_app_bar}>
      <Box className={styles.header_container}>
        <Box>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </Box>
        <Box className={styles.header_box}>
          <Link
            to="/platform/pc"
            className={
              location.pathname == "/platform/pc"
                ? styles.header_link_active
                : styles.header_link
            }
          >
            <Typography variant="h6">PC</Typography>
          </Link>
          <NavLink
            to="/platform/browser"
            className={
              location.pathname == "/platform/browser"
                ? styles.header_link_active
                : styles.header_link
            }
          >
            <Typography variant="h6">Browser</Typography>
          </NavLink>
          <NavLink
            to="/platform/all"
            className={
              location.pathname == "/platform/all"
                ? styles.header_link_active
                : styles.header_link
            }
          >
            <Typography variant="h6">All</Typography>
          </NavLink>
        </Box>
        <Box>
          <IconButton>
            <SearchIcon className={styles.search_icon} onClick={toSearchPage} />
          </IconButton>
          <IconButton onClick={toFavPage}>
            <Badge badgeContent={count.length} color="success">
              <FavoriteIcon className={styles.fav_icon} />
            </Badge>
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};
