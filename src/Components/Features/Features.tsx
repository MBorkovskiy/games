import { Box, Typography } from "@mui/material";
import { FC } from "react";

interface FeaturesProps {
  title: string;
  obj: any;
}

export const Features: FC<FeaturesProps> = ({ title, obj }) => {
  return (
    <Box sx={{ height: "85px" }}>
      <Typography color="secondary" sx={{ fontSize: "14px" }}>
        {title}
      </Typography>
      <Typography sx={{ mb: "15px", width: "300px" }}>{obj}</Typography>
    </Box>
  );
};
