import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { StyledSelect } from "./Dropdown.styles";

const Dropdown = ({ label, values, handleChange, value, ...props }) => {
  return (
    <>
      <FormControl
        color="primary"
        fullWidth
        sx={{
          m: 1,
          minWidth: 100,
          //the followig code doesn't really work, need to find another way to style the border of the dropdown
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
        <InputLabel id="high-card-points-label">{label}</InputLabel>
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
            // anchorOrigin: {
            //   vertical: "bottom",
            //   horizontal: "left",
            // },
            // transformOrigin: {
            //   vertical: "top",
            //   horizontal: "left",
            // },
            // getContentAnchorEl: null,
            PaperProps: { style: { maxHeight: "260px" } },
          }}
        >
          {values.map((item, index) => (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Dropdown;
