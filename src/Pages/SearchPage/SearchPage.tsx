import {
  Box,
  Container,
  Divider,
  List,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import styles from "./SearchPage.module.css";
import { MainCard } from "../../Components/MainCard/MainCard";
import { useAppSelector } from "../../hooks/hooks";

export const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const gamesList = useAppSelector((state) => state.gamesList.gamesList);

  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "center", marginBlock: "15px" }}>
        <SearchIcon color="primary" />
        <Typography variant="h4" color="primary" fontWeight="bold">
          FindGames
        </Typography>
      </Box>
      <Divider />
      <Box className={styles.search_box}>
        <TextField
          fullWidth
          size="small"
          label="Search for games..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Box>
      <List className={styles.list}>
        {inputValue &&
          gamesList
            .filter((el) =>
              el?.title?.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((el) => <MainCard key={el.id} el={el} />)}
      </List>
    </Container>
  );
};
