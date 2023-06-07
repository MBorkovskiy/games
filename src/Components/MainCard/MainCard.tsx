import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import styles from "./MainCard.module.css";
import all from "../../assets/all.png";
import windows from "../../assets/windows.png";
import browser from "../../assets/browser.png";
import { Link, useNavigate } from "react-router-dom";
import React, { FC } from "react";
import { GameProps } from "../../types/types";

interface MainCardProps {
  el: GameProps;
}

export const MainCard: FC<MainCardProps> = ({ el }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/category/${el?.genre?.toLowerCase()}`);
  };
  return (
    <Link to={`/${el.id}`}>
      <Card className={styles.main}>
        <CardMedia className={styles.main_image} image={el.thumbnail} />
        <Box className={styles.main_info}>
          <Box>
            <Typography variant="h6" fontWeight="bold" color="primary">
              {el.title}
            </Typography>
            <Typography fontSize="14px" className={styles.main_description}>
              {el.short_description}
            </Typography>
            <Typography variant="body2" color="#ccc">
              {el.developer}
            </Typography>
          </Box>

          <Box className={styles.main_foot}>
            <Typography>
              {el?.platform == "PC (Windows)" ? (
                <img className={styles.card_icon} src={windows} alt="windows" />
              ) : el?.platform == "Web Browser" ? (
                <img className={styles.card_icon} src={browser} alt="browser" />
              ) : (
                <img className={styles.card_icon} src={all} alt="all" />
              )}
            </Typography>
            <Button
              //перепроверить
              // React.ReactEventHandler
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault();
                handleNavigate();
              }}
              size="small"
              variant="outlined"
            >
              {el.genre}
            </Button>
          </Box>
        </Box>
      </Card>
    </Link>
  );
};
