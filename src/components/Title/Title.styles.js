import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledTitle = styled.h1`
  color: #2b3031;
  font-size: 24px;
  font-family: "Poppins";
  font-weight: 600;
  line-height: 31px;
  text-align: center;
  margin-bottom: 0;
  // margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-top: 15px;
`;

// export const StyledTitle = styled(Typography)`
//   text-align: center;
//   font-family: Inter;
//   font-size: 32px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
//   margin-top: ${(props) => props.marginTop && props.marginTop};
// `;
