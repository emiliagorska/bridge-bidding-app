import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ComponentsContainer = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  width: clamp(0px, 100%, 700px);
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: "Poppins";
  font-weight: 600;
  line-height: 31px;
  text-align: center;
  margin-bottom: 0;
  margin-top: 15px;
`;