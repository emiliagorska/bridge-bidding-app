import styled from "@emotion/styled";

export const StyledHeading = styled.p`
  color: #2b3031;
  font-size: 20px;
  font-family: "Poppins-Light";
  line-height: 26px;
  text-align: left;
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-top: ${(props) => props.marginTop && props.marginTop};
`;
