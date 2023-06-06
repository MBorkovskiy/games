import { Typography } from "@mui/material";
import { ReactNode, FC } from "react";

interface HeadTextProps {
  children: React.ReactNode;
}

export const HeadText: FC<HeadTextProps> = ({ children }) => {
  return (
    <Typography
      variant="h4"
      color="primary"
      fontWeight="bold"
      sx={{ marginBlock: "15px" }}
    >
      {children}
    </Typography>
  );
};
