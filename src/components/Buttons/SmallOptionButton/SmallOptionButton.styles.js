import styled from "@emotion/styled";

export const StyledSmallOptionButton = styled.button`
  top: 98px;
  left: 20px;
  height: 50px;
  width: 80px;
  background-color: #ffffff;
  border-radius: 8px;
  border: none;
  box-sizing: border-box;
  &:focus {
    background-color: #12a582;
  }
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-top: ${(props) => props.marginTop && props.marginTop};
`;

export const StyledHeading = styled.h3`
  color: #2b3031;
  font-size: 20px;
  font-family: "Rubik";
  font-weight: 500;
  line-height: 26px;
  margin-bottom: 0px;
  text-align: left;
`;

export const StyledContent = styled.p`
  color: #2b3031;
  font-size: 18px;
  font-family: "Rubik";
  line-height: 26px;
  margin: auto;
  te
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
