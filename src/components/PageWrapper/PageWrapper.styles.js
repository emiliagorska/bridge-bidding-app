import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  // padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ComponentsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: clamp(0px, 100%, 700px);
`;
