import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled.button `
  width: 100%;
  height: 64px;
  padding: 0px 8px;
  border: 0;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(43, 48, 49, 0.1);
  background-color: #12a582;
  color: #ffffff;
  font-size: 16px;
  font-family: "Rubik";
  line-height: 21px;
  outline: none;
  &:disabled {
    background-color: rgba(18, 165, 130, 0.59);
    color: #f8f8f8;
  }
  margin-bottom: ${(props) => (props as any).marginBottom && (props as any).marginBottom};
  margin-top: ${(props) => (props as any).marginTop && (props as any).marginTop};
`;
