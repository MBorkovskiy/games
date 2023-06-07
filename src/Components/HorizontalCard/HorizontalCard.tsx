import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import styles from "./HorizontalCard.module.css";
import all from "../../assets/all.png";
import windows from "../../assets/windows.png";
import browser from "../../assets/browser.png";
import { Link, useNavigate } from "react-router-dom";
import { FC } from "react";
import { GameProps } from "../../types/types";

interface HorizontalCardProps {
  el: GameProps;
}

export const HorizontalCard: FC<HorizontalCardProps> = ({ el }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/category/${el?.genre?.toLowerCase()}`);
  };
  return (
    <Link to={`/${el.id}`}>
      <Card className={styles.horizontal_card}>
        <Box className={styles.card_image_box}>
          <CardMedia className={styles.card_image} image={el.thumbnail} />
        </Box>
        <Box className={styles.card_info}>
          <Typography variant="h5" fontWeight="bold" color="primary">
            {el.title}
          </Typography>

          <Box className={styles.card_description_box}>
            <Typography className={styles.card_description}>
              {el.short_description}
            </Typography>
            <Box className={styles.card_description_right}>
              <Typography>
                {el?.platform == "PC (Windows)" ? (
                  <img
                    className={styles.card_icon}
                    src={windows}
                    alt="windows"
                  />
                ) : el?.platform == "Web Browser" ? (
                  <img
                    className={styles.card_icon}
                    src={browser}
                    alt="browser"
                  />
                ) : (
                  <img className={styles.card_icon} src={all} alt="all" />
                )}
              </Typography>
              <Button
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  e.preventDefault();
                  handleNavigate();
                }}
                variant="outlined"
                size="small"
              >
                {el.genre}
              </Button>
            </Box>
          </Box>
          <Typography variant="body2" color="#ccc">
            {el.developer}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};
