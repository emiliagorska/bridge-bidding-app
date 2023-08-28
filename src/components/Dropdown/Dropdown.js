import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { StyledInputLabel, StyledSelect } from "./Dropdown.styles";

const Dropdown = ({ children, handleChange, value, ...props }) => {
  const HCPValues = [];
  for (let i = 0; i <= 37; i++) {
    HCPValues.push(i);
  }

  return (
    <>
      <FormControl
        color="primary"
        sx={{
          m: 1,
          minWidth: 200,
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
        <StyledInputLabel id="high-card-points-label">
          High Card Points
        </StyledInputLabel>
        <StyledSelect
          labelId="high-card-points-label"
          id="high-card-points-select"
          value={value}
          label="High Card Points"
          onChange={(e) => handleChange(e)}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            getContentAnchorEl: null,
            PaperProps: { style: { maxHeight: "260px" } },
          }}
          // color="secondary"
          // sx={{
          //   width: 250,
          //   height: 50,
          //   color: "secondary",
          // }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {HCPValues.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
      {/* <StyledDiv class="custom-select" style={{ width: "200px" }}>
        <StyledSelect>
          <StyledOption value="1">Option 1</StyledOption>
          <StyledOption value="2">Option 2</StyledOption>
        </StyledSelect>
      </StyledDiv> */}
    </>
  );
};

export default Dropdown;
