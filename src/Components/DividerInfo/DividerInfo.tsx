import { Divider, Typography } from "@mui/material";
import { FC } from "react";

interface DividerInfoProps {
  title: string;
}

export const DividerInfo: FC<DividerInfoProps> = ({ title }) => {
  return (
    <>
      <Divider />
      <Typography sx={{ fontSize: "12px", mt: "15px", fontStyle: "italic" }}>
        {title}
      </Typography>
    </>
  );
};
