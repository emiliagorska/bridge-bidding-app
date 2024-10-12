import styled from "@emotion/styled";

export const StyledButton = styled.button `
  top: 98px;
  left: 20px;
  width: 100%;
  height: 140px;
  background-color: #ffffff;
  border-radius: 8px;
  border: ${(props) => (props as any).borderStyle ? (props as any).borderStyle : `1px solid #12a582`};
  color: ${(props) => ((props as any).textColor ? (props as any).textColor : `red`)};
  box-sizing: border-box;
  margin-bottom: ${(props) => (props as any).marginBottom && (props as any).marginBottom};
  margin-top: ${(props) => (props as any).marginTop && (props as any).marginTop};
`;

export const StyledContentBox = styled.div `
  color: ${(props) => (props as any).disabled ? "#A8A8A8" : (props as any).textColor ? (props as any).textColor : "#2b3031"};
  font-size: 30px;
  font-family: "Rubik";
  font-weight: 500;
  line-height: 26px;
  display: flex;
  justify-content: center;
`;
