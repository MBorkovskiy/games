import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";
import { PlatformListProps } from "../../constants/platformList/platformList";

interface SortInputProps {
  title: string;
  selectValue: string;
  selectFunc: (p: string) => void;
  platform?: PlatformListProps[];
  list?: string[];
}

export const SortInput: FC<SortInputProps> = ({
  title,
  selectValue,
  selectFunc,
  platform,
  list,
}) => {
  return (
    <FormControl sx={{ width: "200px", marginRight: "15px" }}>
      <InputLabel>{title}</InputLabel>
      <Select
        value={selectValue}
        label={title}
        onChange={(e) => selectFunc(e.target.value)}
      >
        {title === "Chose Platform"
          ? platform?.map((el) => (
              <MenuItem key={el.name} value={el.name}>
                {el.name}
              </MenuItem>
            ))
          : list?.map((el) => (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            ))}
      </Select>
    </FormControl>
  );
};
