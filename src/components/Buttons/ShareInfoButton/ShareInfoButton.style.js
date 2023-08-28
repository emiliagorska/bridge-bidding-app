import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  border-radius: 25px;
  height: 158px;
  width: 100%;
  color: black !important;
  border: 2px solid rgba(18, 165, 130, 1) !important;
  background-color: white !important;
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-top: ${(props) => props.marginTop && props.marginTop};
`;
