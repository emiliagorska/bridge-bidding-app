import styled from "@emotion/styled";

export const StyledSmallOptionButton = styled.button`
  top: 98px;
  left: 20px;
  height: 56px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(43, 48, 49, 0.1);
  border-radius: 8px;
  border: none;
  box-sizing: border-box;
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-top: ${(props) => props.marginTop && props.marginTop};
  font-size: 18px;
  font-family: "Rubik";
  line-height: 26px;
  color: black;
  &:focus {
    color: ${(props) => props.color};
    border: ${(props) => `2px solid ${props.color}`};
  }
  &:focus-visible {
    color: ${(props) => props.color};
    border: ${(props) => `2px solid ${props.color}`};
  }
`;

export const StyledContent = styled.p`
  color: black !important;
  font-size: 18px;
  font-family: "Rubik";
  line-height: 26px;
  margin: auto;
`;
