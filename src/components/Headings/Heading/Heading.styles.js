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

// export const StyledHeading = styled(Paper)`
//   padding: 10px;
//   text-align: center;
//   border-radius: 5px;
//   font-size: 24px;
//   margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
//   margin-top: ${(props) => props.marginTop && props.marginTop};
//   background-color: var(--gray);
//   text-align: left;
// `;
