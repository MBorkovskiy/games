import styles from "./PlatformPage.module.css";
import { useEffect, useState } from "react";
import { getPlatform } from "../../store/platformSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Box, Container, List, Pagination } from "@mui/material";
import { MainCard } from "../../Components/MainCard/MainCard";
import { platformList } from "../../constants/platformList/platformList";
import { genresList } from "../../constants/genresList/genresList";
import { sortList } from "../../constants/sortList/sortList";
import { HeadText } from "../../Components/HeadText/HeadText";
import { MyBreadcrumbs } from "../../Components/MyBreadcrumbs/MyBreadcrumbs";
import { SortInput } from "../../Components/SortInput/SortInput";
import { Loader } from "../../Components/Loader/Loader";

export const PlatformPage = () => {
  const dispatch = useDispatch();
  const platform = useSelector((state) => state.platform.platform);
  const isLoading = useSelector((state) => state.platform.isLoading);
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [platformInput, setPlatformInput] = useState(params.id);
  const [categoryInput, setCategoryInput] = useState("mmorpg");
  const [sortInput, setSortInput] = useState("popularity");

  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(12);
  const [step] = useState(12);

  const handleChange = (event, value) => {
    setPage(value);
    setStart(step * value - 12);
    setEnd(step * value);
  };

  useEffect(() => {
    setPlatformInput(params.id);
  }, [params]);

  useEffect(() => {
    navigate(`/platform/${platformInput}`);
  }, [platformInput]);

  useEffect(() => {
    dispatch(
      getPlatform({
        platform: platformInput,
        category: categoryInput,
        sort: sortInput,
      })
    );
  }, [platformInput, categoryInput, sortInput]);

  return (
    <Container>
      <HeadText>{`${params.id.replace(
        params.id[0],
        params.id[0].toUpperCase()
      )} games`}</HeadText>
      <MyBreadcrumbs title={"Platform"} location={location} params={params} />
      <Box sx={{ marginBlock: "30px" }}>
        <SortInput
          title={"Chose Platform"}
          selectValue={platformInput}
          selectFunc={setPlatformInput}
          data={platformList}
        />
        <SortInput
          title={"Chose Genre"}
          selectValue={categoryInput}
          selectFunc={setCategoryInput}
          data={genresList}
        />
        <SortInput
          title={"Sort By"}
          selectValue={sortInput}
          selectFunc={setSortInput}
          data={sortList}
        />
      </Box>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <List className={styles.list}>
            {platform.slice(start, end).map((el) => (
              <MainCard key={el.id} el={el} />
            ))}
          </List>
          <Pagination
            count={Math.ceil(platform.length / 12)}
            page={page}
            onChange={handleChange}
            variant="outlined"
            color="primary"
            sx={{ display: "flex", justifyContent: "center", mt: "30px" }}
          />
        </>
      )}
    </Container>
  );
};
