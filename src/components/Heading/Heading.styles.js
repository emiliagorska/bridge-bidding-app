import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const StyledHeading = styled(Paper)`
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  font-size: 24px;
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-top: ${(props) => props.marginTop && props.marginTop};
  background-color: var(--gray);
  text-align: left;
`;
