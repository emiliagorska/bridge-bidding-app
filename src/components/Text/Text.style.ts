import styled from "@emotion/styled";

export const StyledText = styled.p `
  color: #2b3031;
  font-size: 16px;
  font-family: "Poppins-Light";
  line-height: 26px;
  text-align: left;
  margin-bottom: ${(props) => (props as any).marginBottom && (props as any).marginBottom};
  margin-top: ${(props) => (props as any).marginTop && (props as any).marginTop};
`;
