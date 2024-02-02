import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
`;

export const ComponentsContainer = styled.div`
  /* width: 100%; */
  width: clamp(0px, 100%, 700px);
`;
