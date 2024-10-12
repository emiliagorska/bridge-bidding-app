import styled from "@emotion/styled";

export const StyledOptionButton = styled.button `
  top: 98px;
  left: 20px;
  width: 100%;
  height: 123px;
  //change color to rgb
  background-color: #ffffff;
  border-radius: 8px;
  border: none;
  box-sizing: border-box;
  margin-bottom: ${(props) => (props as any).marginBottom && (props as any).marginBottom};
  margin-top: ${(props) => (props as any).marginTop && (props as any).marginTop};
  //CURRENTLY NOT WORKING, NEED TO FIND A WAY TO REMOVE THE OUTLINE
  // &:focus {
  //   border: none !important;
  // }
  // &:selection {
  //   border: none !important;
  // }
`;

export const StyledDiv = styled.div`
  margin-left: 6px;
`;

export const StyledHeading = styled.h3`
//change color to rgb
  color: #2b3031;
  font-size: 20px;
  font-family: "Rubik";
  font-weight: 500;
  line-height: 26px;
  margin-bottom: 0px;
  text-align: left;
`;

export const StyledContent = styled.p`
//change color to rgb
  color: #2b3031;
  font-size: 18px;
  font-family: "Rubik";
  line-height: 26px;
  margin-top: 0px;
  text-align: left;
`;
