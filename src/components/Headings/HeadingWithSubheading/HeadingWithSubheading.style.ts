import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-top: ${(props) => props.marginTop && props.marginTop};
`;

export const StyledHeading = styled.h2`
  color: #2b3031;
  font-size: 20px;
  font-family: "Poppins";
  font-weight: 500;
  line-height: 26px;
  text-align: left;
  margin-bottom: 0;
`;

export const StyledSubheading = styled.p`
  color: #2b3031;
  font-size: 20px;
  font-family: "Poppins-Light";
  line-height: 26px;
  text-align: left;
  margin-top: 4px;
  margin-bottom: 0px;
`;
