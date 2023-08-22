import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const StyledHeading = styled(Paper)`
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  font-size: 24px;
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-top: ${(props) => props.marginTop && props.marginTop};
  font-weight: bold;
  background-color: var(--gray);
`;
