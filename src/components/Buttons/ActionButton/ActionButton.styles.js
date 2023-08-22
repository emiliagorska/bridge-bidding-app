import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  border-radius: 25px;
  width: 100%;
  height: 64px;
  text-transform: none;
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
`;
