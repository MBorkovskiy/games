import { Link, useLocation } from "react-router-dom";
import { genresList } from "../../constants/genresList/genresList";
import { Container, List } from "@mui/material";
import styles from "./Footer.module.css";
import { scrollToTop } from "../../constants/scrollToTop/scrollToTop";
import { useEffect } from "react";

export const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <List className={styles.list}>
          {genresList.map((el) => (
            <Link
              key={el}
              to={`/category/${el}`}
              className={styles.footer_link}
            >
              {el.replace(el[0], el[0].toUpperCase())}
            </Link>
          ))}
        </List>
      </Container>
    </footer>
  );
};
