import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./NewsCard.module.css";
import { useState } from "react";
import { NewsModal } from "../NewsModal/NewsModal";
import { FC } from "react";
import { NewsProps } from "../../types/types";

interface NewsCardProps {
  el: NewsProps;
}

export const NewsCard: FC<NewsCardProps> = ({ el }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <NewsModal el={el} handleClose={handleClose} open={open} />

      <Card className={styles.news_card} onClick={handleOpen}>
        <CardActionArea className={styles.news_card_action}>
          <CardMedia
            component="img"
            height="150"
            image={el.image}
            alt="News Image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className={styles.news_card_title}
            >
              {el.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={styles.news_card_content}
            >
              {el.content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
