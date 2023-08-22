import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const StyledTitle = styled(Paper)`
  text-align: center;
  height: 60;
  line-height: 60px;
  font-size: 20px;
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-top: ${(props) => props.marginTop && props.marginTop};
  background-color: var(--darkergray) !important;
`;
