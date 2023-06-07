import styles from "./CategoryPage.module.css";
import { Container, List, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { getCategory } from "../../store/categorySlice";
import { useLocation, useParams } from "react-router-dom";
import { MainCard } from "../../Components/MainCard/MainCard";
import { HeadText } from "../../Components/HeadText/HeadText";
import { MyBreadcrumbs } from "../../Components/MyBreadcrumbs/MyBreadcrumbs";
import { Loader } from "../../Components/Loader/Loader";
import { IdProps } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export const CategoryPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams<keyof IdProps>() as IdProps;
  const location = useLocation();

  const { category, isLoading } = useAppSelector((state) => state.category);
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(12);
  const [step] = useState(12);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setStart(step * value - 12);
    setEnd(step * value);
  };

  useEffect(() => {
    dispatch(getCategory({ params: params.id }));
  }, [location]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <HeadText>{`Game category is: ${params.id.replace(
            params.id[0],
            params.id[0].toUpperCase()
          )}`}</HeadText>
          <MyBreadcrumbs
            title={"Category"}
            location={location}
            params={params}
          />
          <List className={styles.list}>
            {category?.slice(start, end).map((el) => (
              <MainCard key={el.id} el={el} />
            ))}
          </List>
          <Pagination
            count={Math.ceil(category?.length / 12)}
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
