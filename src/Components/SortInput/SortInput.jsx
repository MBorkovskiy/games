import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const SortInput = ({ title, selectValue, selectFunc, data }) => {
  return (
    <FormControl sx={{ width: "200px", marginRight: "15px" }}>
      <InputLabel>{title}</InputLabel>
      <Select
        value={selectValue}
        label={title}
        onChange={(e) => selectFunc(e.target.value)}
      >
        {title === "Chose Platform"
          ? data.map((el) => (
              <MenuItem key={el.id} value={el.name}>
                {el.name}
              </MenuItem>
            ))
          : data.map((el) => (
              <MenuItem key={el.id} value={el}>
                {el}
              </MenuItem>
            ))}
      </Select>
    </FormControl>
  );
};
