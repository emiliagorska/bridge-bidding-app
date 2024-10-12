import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Dropdown = ({
  label,
  values,
  handleChange,
  value,
  ...props
}: any) => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <FormControl
      color="primary"
      fullWidth
      sx={{
        m: 1,
        minWidth: 100,
        "& .MuiOutlinedInput-notchedOutline": {
          borderWidth: "3px",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: "3px",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderWidth: "3px",
        },
      }}
    >
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <InputLabel>{label}</InputLabel>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Select
        sx={{
          backgroundColor: "white",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#12a582",
            borderWidth: "2px",
          },
        }}
        value={value}
        label={label}
        onChange={(e) => handleChange(e)}
        defaultValue={values[0]}
        MenuProps={{
          PaperProps: { style: { maxHeight: "260px" } },
        }}
      >
        {values.map((item: any, index: any) => (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <MenuItem value={item} key={index}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </>;
};

export default Dropdown;
