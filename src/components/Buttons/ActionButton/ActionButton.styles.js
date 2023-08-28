import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  border-radius: 10px;
  width: 100%;
  height: 64px;
  font-weight: 24px;
  // text-transform: none;
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-top: ${(props) => props.marginTop && props.marginTop};
`;
