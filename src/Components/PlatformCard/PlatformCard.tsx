import { Box, Card, CardMedia, Typography } from "@mui/material";
import styles from "./PlatformCard.module.css";
import { Link } from "react-router-dom";
import { PlatformListProps } from "../../constants/platformList/platformList";
import { FC } from "react";

interface PlatformCardProps {
  el: PlatformListProps;
}

export const PlatformCard: FC<PlatformCardProps> = ({ el }) => {
  return (
    <Link to={`/platform/${el.name}`}>
      <Card className={styles.platform_card}>
        <CardMedia image={el.image} className={styles.platform_card_image} />
        <Box className={styles.platform_card_box}>
          <Typography
            variant="h3"
            color="white"
            className={styles.platform_card_name}
          >
            {el.name.replace(el.name[0], el.name[0].toUpperCase())}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};
