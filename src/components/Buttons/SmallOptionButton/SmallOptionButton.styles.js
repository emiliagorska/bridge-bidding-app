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
  &:focus {
    background-color: ${(props) => props.color};
  }
  font-size: 18px;
  font-family: "Rubik";
  line-height: 26px;
  margin: auto;
`;

// export const StyledOptionButton = styled(Button)`
//   border-radius: 25px;
//   width: 100%;
//   text-transform: none;
//   color: black !important;
//   border: 2px solid rgba(18, 165, 130, 1) !important;
//   background-color: white !important;
//   font-size: 24px;
//   line-height: 32px;
//   text-align: left;
//   padding-top: 16px;
//   padding-bottom: 16px;
//   margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
//   margin-top: ${(props) => props.marginTop && props.marginTop};
// `;
