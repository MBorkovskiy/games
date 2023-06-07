import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import styles from "./NewsModal.module.css";
import { Link } from "react-router-dom";
import { FC } from "react";
import { NewsProps } from "../../types/types";

interface NewsModalProps {
  el: NewsProps;
  handleClose: () => void;
  open: boolean;
}

export const NewsModal: FC<NewsModalProps> = ({ el, handleClose, open }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={styles.modal_box}>
        <Card className={styles.modal_card}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={el.image}
              alt="News Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {el.title}
              </Typography>
              <Typography gutterBottom variant="body1">
                {el.content}
              </Typography>
              <Typography gutterBottom variant="body1" color="text.secondary">
                {el.description}
              </Typography>
              <Box className={styles.modal_footer}>
                <Box>
                  <Link to={el.url} target="_blank">
                    <Button>Go to original new</Button>
                  </Link>
                </Box>
                <Box>
                  <Typography variant="body1">Date of publication:</Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="text.secondary"
                  >
                    {el.publishedAt}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Modal>
  );
};
