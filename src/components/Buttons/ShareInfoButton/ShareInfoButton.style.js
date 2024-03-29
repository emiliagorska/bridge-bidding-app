import styled from "@emotion/styled";

export const StyledButton = styled.button`
  top: 98px;
  left: 20px;
  width: 100%;
  height: 140px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #12a582;
  box-sizing: border-box;
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-top: ${(props) => props.marginTop && props.marginTop};
`;

export const StyledContentBox = styled.div`
  color: ${(props) => (props.disabled ? "#A8A8A8" : "#2b3031")};
  font-size: 20px;
  font-family: "Rubik";
  font-weight: 500;
  line-height: 26px;
  display: flex;
  justify-content: center;
`;
