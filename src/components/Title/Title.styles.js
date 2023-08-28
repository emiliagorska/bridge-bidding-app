import styled from "@emotion/styled";
import { Typography } from "@mui/material";

//CODE FOR TITLE BEING IN A BOX
// export const StyledTitle = styled(Paper)`
//   text-align: center;
//   height: 60;
//   line-height: 60px;
//   font-size: 20px;
//   margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
//   margin-top: ${(props) => props.marginTop && props.marginTop};
//   background-color: var(--darkergray) !important;
// `;

export const StyledTitle = styled(Typography)`
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-top: ${(props) => props.marginTop && props.marginTop};
`;
