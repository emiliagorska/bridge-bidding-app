import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledOptionButton = styled(Button)`
  border-radius: 25px;
  width: 100%;
  text-transform: none;
  color: black !important;
  border: 2px solid rgba(18, 165, 130, 1) !important;
  background-color: white !important;
  font-size: 24px;
  line-height: 32px;
  text-align: left;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-top: ${(props) => props.marginTop && props.marginTop};
`;
