import { Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./MyBreadcrumbs.module.css";
import { FC } from "react";
import { LocationPathnameProps, ParamsIdProps } from "../../types/types";

interface MyBreadcrumbsProps {
  title: string;
  location: LocationPathnameProps;
  params?: ParamsIdProps;
  locParams?: string;
}

export const MyBreadcrumbs: FC<MyBreadcrumbsProps> = ({
  title,
  location,
  params,
  locParams,
}) => {
  return (
    <Box className={styles.breadcrumb_container}>
      <Breadcrumbs>
        <Link className={styles.non_active} to="/">
          Home
        </Link>
        <Link className={styles.disabled} to="#">
          {title}
        </Link>
        {locParams === "favorite" ? (
          <Link className={styles.active} to={`${location.pathname}`}>
            {locParams.replace(locParams[0], locParams[0].toUpperCase())}
          </Link>
        ) : (
          <Link className={styles.active} to={`${location.pathname}`}>
            {params?.id.replace(params.id[0], params.id[0].toUpperCase())}
          </Link>
        )}
      </Breadcrumbs>
    </Box>
  );
};
